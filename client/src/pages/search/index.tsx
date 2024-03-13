import "./style.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Explore from "../../components/sidebar/explore";
import { IoMdClose } from "react-icons/io";
import HomePage from "../home";

export default function SearchPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const termValue = urlParams.get('term');
        const categoryValue = urlParams.get('category');

        if (termValue === "" || categoryValue === "") navigate("/");
        else {
            const searchValue = termValue ?? categoryValue ?? '';
            setSearchTerm(searchValue);
        }
    }, [location, navigate]);

    const handleClearSearchTerm = () => {
        navigate("/search");
    }

    return (
        <div id='search'>
            <Explore term={searchTerm} />

            {searchTerm ? (
                <>
                    <div className='search-term'>
                        <h1>
                            Showing results for <span>{searchTerm}</span>
                        </h1>
                        <button className='clear-term'>
                            <IoMdClose
                                size={20}
                                onClick={handleClearSearchTerm}
                            />
                        </button>
                    </div>
                </>
            ) : (
                <HomePage />
            )}
        </div>
    );
}