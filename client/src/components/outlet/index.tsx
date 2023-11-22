import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div className="flex flex-col items-center justify-center p-3 gap-3">
            <p id="zero-state">
                This is a demo for React Router.
                <br />
                Check out{" "}
                <a href="https://reactrouter.com">
                    the docs at reactrouter.com
                </a>
                .
            </p>
            <Link
                to={"/products"}
                className="ring ring-neutral-500 rounded hover:bg-indigo-300"
            >
                Go shop{" "}
            </Link>
        </div>
    );
}
