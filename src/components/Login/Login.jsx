import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from './firebase'; // Ensure correct Firebase imports
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Logged in successfully!");
        } catch (error) {
            const errorCode = error.code;
            let errorMessage = "An error occurred. Please try again.";

            if (errorCode === 'auth/invalid-email') {
                errorMessage = "Invalid email format.";
            } else if (errorCode === 'auth/wrong-password') {
                errorMessage = "Incorrect password.";
            } else if (errorCode === 'auth/user-not-found') {
                errorMessage = "No user found with this email.";
            }

            setError(errorMessage);
            console.error("Login failed", error.message);
        }
    };

    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/bB93Y20/background.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-black bg-opacity-75"></div>
                <div className="hero-content text-center container mx-auto">
                    <div className="py-32">
                        <div>
                            <h1 className="mb-8 text-3xl md:text-4xl font-bold">
                                <span className="text-white">Login in</span> 
                                <span className="text-amber-600">Tori Music School</span>
                            </h1>
                        </div>
                        <div className="flex justify-center my-20">
                            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 bg-clip-border text-white shadow-lg shadow-amber-500/40">
                                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                        Sign In
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-4 p-6">
                                    {/* Email Input */}
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all">
                                            Email
                                        </label>
                                    </div>

                                    {/* Password Input */}
                                    <div className="relative h-11 w-full min-w-[200px]">
                                        <input
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-amber-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all">
                                            Password
                                        </label>
                                    </div>

                                    {/* Error Message */}
                                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                                </div>
                                <div className="p-6 pt-0">
                                    <button
                                        className="block w-full select-none rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={handleLogin}
                                    >
                                        Sign In
                                    </button>
                                    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                                        Don't have an account?
                                        <Link to="/signup" className="ml-1 block font-sans text-sm font-bold leading-normal text-amber-500 antialiased">
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
