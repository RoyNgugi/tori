import { Link } from "react-router-dom";

const Flute = () => {
    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold text-amber-600">Piano Classes</h1>
            <p className="mt-2">Learn to play the piano with expert guidance and comprehensive lessons.</p>
            <Link to="/" className="text-blue-500 mt-4 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Flute;
