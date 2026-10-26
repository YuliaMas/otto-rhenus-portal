import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div
            className="
                flex
                min-h-[70vh]
                flex-col
                items-center
                justify-center
                text-center
            "
        >
            <h1
                className="
                    text-7xl
                    font-bold
                    text-[#002b87]
                "
            >
                404
            </h1>

            <p className="mt-4 text-xl">
                Page Not Found
            </p>

            <Link
                to="/"
                className="
                    mt-6
                    rounded-xl
                    bg-[#002b87]
                    px-6
                    py-3
                    text-white
                "
            >
                Return to Home
            </Link>
        </div>
    );
}
