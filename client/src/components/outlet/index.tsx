import { Link } from "react-router-dom";
import Leaves from "../background/leaves/Leaves";

export default function Index() {
    return (
        <>
            <Leaves leavesCount={15} />
            <div className="h-full w-full flex flex-col items-center justify-center p-3 gap-3">
                <p
                    id="zero-state"
                    className=""
                >
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
        </>
    );
}
