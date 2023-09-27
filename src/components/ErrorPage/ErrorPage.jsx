import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto px-5 h-[80vh] flex justify-center items-center">
            <div>
                <h1 className="text-6xl font-bold text-center mb-4 text-amber-600">Oops!</h1>
                <p className="text-2xl font-bold text-center mb-5 text-cyan-800">Sorry, an unexpected error has occurred.</p>

                <Link to='/' className="flex justify-center">
                    <button className="btn bg-amber-600 border-none text-white font-bold">GO HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;