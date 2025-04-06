import { useState } from "react";
import { useNavigate } from "react-router";
// Make sure this import path is correct and exports auth and the function
import { auth, signInWithEmailAndPassword } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error before a new attempt

        // Basic validation (optional but good practice)
        if (!email || !password) {
          setError("Please enter both email and password.");
          return;
        }

        try {
            // Attempt to sign in using the imported function and auth instance
            await signInWithEmailAndPassword(auth, email, password);

            // SUCCESS: onAuthStateChanged in AuthProvider will update the context.
            // Navigate to the main application route (use absolute path).
            console.log("Login successful, navigating..."); // Debug log
            navigate("/home"); // <-- Use absolute path (e.g., "/home", "/")

        } catch (err) {
            // FAILURE: Set an error message.
            // Log the actual Firebase error code during development for debugging
            console.error("Login failed:", err.code, err.message);
            setError("Invalid email or password. Please try again.");
            // You could check err.code here for more specific messages if desired
            // if (err.code === 'auth/user-not-found') { ... }
            // else if (err.code === 'auth/wrong-password') { ... }
        }
    };

    return (
        <div className="p-5 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2" // Added mb-2
                    required // Added basic HTML validation
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mt-2 mb-2" // Added mb-2
                    required // Added basic HTML validation
                />
                {error && <p className="text-red-500 mt-2 mb-2">{error}</p>} {/* Added mb-2 */}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-4">
                    Login
                </button>
            </form>
            <button
                onClick={() => navigate("/signup")} // Assuming you have a /signup route
                className="w-full bg-gray-500 hover:bg-gray-600 text-white p-2 rounded mt-2"
            >
                Don't have an account? Sign Up
            </button>
        </div>
    );
};

export default Login;