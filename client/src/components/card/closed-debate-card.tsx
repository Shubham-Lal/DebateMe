import './closed-debate-card.css'
import { useNavigate } from 'react-router-dom'
import { useNavStore } from '../../store/useNavStore'
import DebateBar from './debate-bar'
import { MdModeComment } from 'react-icons/md'
import useFormatNumber from '../../hooks/useFormatNumber'
import LoadingSkeleton from '../loading/skeleton'

const ClosedDebateCard = () => {
    const navigate = useNavigate()
    const { sidebar } = useNavStore()

    const handleProfileClick = (username: string) => {
        navigate(`/${username}`)
    }

    return (
        <div id='closed-card' className={sidebar ? 'card-break' : ''}>
            <div className={`left ${sidebar ? 'flex-unset' : ''}`}>
                <h2 title='Sony is the best camera of all time. ↗' onClick={() => navigate('/')}>
                    Sony is the best camera of all time.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore necessitatibus reiciendis rem ad perferendis, id officia omnis voluptas eius veritatis explicabo harum! Vero porro labore quo ab aut. Nesciunt!
                    Fugiat repellat architecto pariatur fugit perspiciatis voluptas quidem autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore necessitatibus reiciendis rem ad perferendis, id officia omnis voluptas eius veritatis explicabo harum! Vero porro labore quo ab aut. Nesciunt!
                    Fugiat repellat architecto pariatur fugit perspiciatis voluptas quidem autem.
                </p>
            </div>
            <div className={`right ${sidebar ? 'flex-unset' : ''}`}>
                <div className='user-info'>
                    <div className='debate-from'>
                        <img src='/user1.webp' alt='' loading='lazy' onClick={() => handleProfileClick('aniketdas')} />
                        <p onClick={() => handleProfileClick('aniketdas')}>Aniket Das</p>
                        <p onClick={() => handleProfileClick('aniketdas')}>aniketdas</p>
                    </div>
                    <div className='debate-by'>
                        <img src='/user2.jpeg' alt='' loading='lazy' onClick={() => handleProfileClick('pratikprasad')} />
                        <p onClick={() => handleProfileClick('pratikprasad')}>Pratik Prasad</p>
                        <p onClick={() => handleProfileClick('pratikprasad')}>pratikprasad</p>
                    </div>
                </div>
                <div className='debate-bar__container'>
                    <DebateBar debateFrom={4230} debateBy={5160} />
                </div>
                <div className='debate-info'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', fontWeight: '600' }}>
                        <MdModeComment size={15} />
                        <p>{useFormatNumber(1300)}</p>
                    </div>
                    <p className='created-at'>5 days ago</p>
                </div>
            </div>
            <div className='divider' />
        </div>
    )
}

const ClosedDebateLoadingCard = () => {
    const { sidebar } = useNavStore()

    return (
        <div id='closed-card-loading' className={sidebar ? 'card-break' : ''}>
            <div className={`left ${sidebar ? 'flex-unset' : ''}`}>
                <div className='topic'>
                    <LoadingSkeleton />
                </div>
                <div className='description'>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </div>
            </div>
            <div className={`right ${sidebar ? 'flex-unset' : ''}`}>
                <div className='user-info'>
                    <div className='debater'>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </div>
                    <div className='debater'>
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                        <LoadingSkeleton />
                    </div>
                </div>
                <div className='debate-bar'>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </div>
                <div className='debate-info'>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </div>
            </div>
            <div className='divider' />
        </div>
    )
}

export { ClosedDebateCard, ClosedDebateLoadingCard }