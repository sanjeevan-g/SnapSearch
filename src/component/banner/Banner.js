import {  useState } from "react";
import "./banner.scss"

const Banner = ({ handelsubmit }) => {

    const [query, setQuery] = useState("");
    const [errorQuery, setErrorQuery] = useState(false)

    function updateQuery(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        let regx = /^[a-zA-Z ]+$/;
        e.preventDefault();
        if (query.length > 0) {
            if (regx.test(query)) {
                setErrorQuery(false)
                handelsubmit(query.toLowerCase());
                setQuery("");
            }
            else {
                setErrorQuery(true);
            }
        }
    }
    return (
        <div className="banner">
            <h1 className="title">
                SnapSearch
            </h1>

            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="search-field"
                    placeholder="Search images"
                    value={query}
                    onChange={updateQuery}
                />
                <button className="btn search-btn" disabled={query.length > 0 ? false : true}>
                    <svg height="32" width="32">
                        <path
                            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                            fill="#ffffff"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
                {errorQuery &&
                    <span className="form-error">
                        input has to be in range [A-Za-z ]
                    </span>
                }
            </form>
        </div>
    )

}

export default Banner;