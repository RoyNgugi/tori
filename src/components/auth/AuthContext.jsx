import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Login/firebase"; // Ensure this path is correct
import { signOut } from "firebase/auth"; // <--- *** IMPORT signOut ***

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // <--- *** ADD loading state, initialize to true ***

    useEffect(() => {
        // This listener fires whenever the user logs in or out.
        // It also fires once initially when the app loads.
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            console.log("Auth state changed:", currentUser); // Good for debugging
            setUser(currentUser);
            setLoading(false); // <--- *** SET loading to false once the initial check is done ***
        });

        // Cleanup function: Unsubscribe from the listener when the component unmounts
        return () => unsubscribe();

    }, []); // Empty dependency array ensures this effect runs only once on mount

    const logout = async (callback) => {
        // Optional: you could set loading back to true here if needed
        // setLoading(true);
        try {
            await signOut(auth); // <--- Use the imported signOut function
            // setUser(null); // Not strictly necessary, onAuthStateChanged will trigger and set user to null
            console.log("User logged out successfully");
            if (callback) callback(); // Call the navigation or other callback function
        } catch (error) {
            console.error("Logout error:", error.message);
            // Optionally set loading false here in case of error if you set it true above
            // setLoading(false);
        }
        // Note: setLoading(false) might be automatically handled by onAuthStateChanged firing again
    };

    // The value provided to consuming components
    // Consider if consumers really need `setUser`. Often just `user` and actions like `logout` are enough.
    // Added `loading` to the context value so consumers can check if auth state is ready.
    const value = { user, logout, loading }; // <-- Removed setUser, added loading

    return (
        <AuthContext.Provider value={value}>
            {/* Only render children when the initial auth check is complete */}
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom hook to use AuthContext remains the same
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};