import { Link } from "react-router-dom";

const Trumpet = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Trumpet Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-yellow-500 mt-5">Trumpet Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Master the art of trumpet playing with expert instruction. Learn proper embouchure, breath control, 
                and articulation techniques to develop a strong, resonant tone and fluid technique.
            </p>

            {/* Section: About the Trumpet */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎺 About the Trumpet</h2>
                <p className="mt-2 text-gray-700">
                    The trumpet is a powerful brass instrument used in classical, jazz, and marching band music. 
                    Playing the trumpet enhances lung capacity, embouchure strength, and overall musicianship.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Trumpet?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Improves breath control and endurance.</li>
                    <li>Develops embouchure strength and flexibility.</li>
                    <li>Enhances musical phrasing and articulation skills.</li>
                    <li>Perfect for solo, ensemble, and band performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Trumpet Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ylrQDnw4VSw?si=bttCEAKf7SRQWgW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. Proper Embouchure & Breath Control</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uIzgayrp7gE?si=YC5oCLP6mQmuY7BK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Trumpet Piece</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/snxUHRaGTuA?si=K4Aufs4zoZvTFslF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-yellow-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Trumpet;
