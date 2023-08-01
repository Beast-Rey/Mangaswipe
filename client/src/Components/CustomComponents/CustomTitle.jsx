import { Link } from "react-router-dom"

export default function CustomTitle({ title }) {
    return (
        <div className="flex justify-between">
            <h1 className="mangaHead">
                {title} <span>&#187;</span>
            </h1>
            <Link to="/recent">
                <span className="underline decoration-manga-yellow decoration-2 underline-offset-8 cursor-pointer">
                    View All
                </span>
            </Link>
        </div>
    )
}

