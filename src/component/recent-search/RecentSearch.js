import { Link } from "react-router-dom"

export default function RecentSearch({ searchItem }) {
    return (
        <div className="recent-search" >
            <span className="lbl">Searches:</span>
            <div className="button-grp">
                {
                    [...searchItem].slice(0, 5).map((item) => (
                        <Link key={item} to={`/${item}`} className="btn recent-link" > {item} </Link>
                    ))
                }
            </div>
        </div>
    )
}