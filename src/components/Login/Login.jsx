import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "./firebase"; // Import Firebase auth

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error before a new attempt

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home"); // Redirect to home on successful login
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="p-5 max-w-md mx-auto">
            <h2 className="text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mt-2"
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
                    Login
                </button>
            </form>
            <button
                onClick={() => navigate("/signup")}
                className="w-full bg-gray-500 text-white p-2 rounded mt-2"
            >
                Sign Up
            </button>
        </div>
    );
};

export default Login;
