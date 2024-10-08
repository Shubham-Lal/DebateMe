import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { AuthStatus, AuthTab, useAuthStore, useTempStore } from '../../store/auth'

export default function AuthPage() {
    const location = useLocation()
    const navigate = useNavigate()

    const { isAuthenticated, setAuthTab } = useAuthStore()
    const { setTempUser } = useTempStore()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const type = params.get('type')

        if (isAuthenticated === AuthStatus.Authenticating) {
            setAuthTab(type === 'login' ? AuthTab.Login : type === 'signup' ? AuthTab.Signup : AuthTab.Login)
        }
        else if (isAuthenticated === AuthStatus.Authenticated) {
            navigate(localStorage.getItem('route') === '/auth'
                || localStorage.getItem('route') === '/login'
                || localStorage.getItem('route') === '/signup' ? '/' : localStorage.getItem('route') || '/',
                { replace: true }
            )
        }
        else if (isAuthenticated === AuthStatus.Failed) {
            setAuthTab(
                type === 'login' ? AuthTab.Login
                    : type === 'signup' ? AuthTab.Signup
                        : type === 'forgot' ? AuthTab.Forgot
                            : type === 'reset' && new URLSearchParams(location.search).get('token') ? AuthTab.Reset
                                : AuthTab.Login)
        }

        const userData = params.get('user')
        const token = params.get('token')
        const user = userData ? JSON.parse(decodeURIComponent(userData)) : null
        const error = params.get('error')

        if (type === 'login') {
            if (token) localStorage.setItem('token', token)
            else if (error) {
                navigate('/auth?type=login', { replace: true })
                toast.error(error)
            }
        }
        else if (type === 'signup' && user) {
            setTempUser({
                username: '',
                email: user.email || '',
                first_name: user.given_name || '',
                last_name: user.family_name || '',
                avatar: user.picture || ''
            })
            setAuthTab(AuthTab.Signup)
            navigate('/auth?type=signup', { replace: true })
        }
    }, [isAuthenticated, location.search, navigate, setAuthTab, setTempUser])

    return <></>
}