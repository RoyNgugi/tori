import { Link } from "react-router-dom";

const Clarinet = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Clarinet Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-purple-600 mt-5">Clarinet Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the clarinet with expert instruction, covering everything from proper embouchure to advanced articulation techniques. 
                Develop breath control, tone quality, and musicality for an enriching musical journey.
            </p>

            {/* Section: About the Clarinet */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎶 About the Clarinet</h2>
                <p className="mt-2 text-gray-700">
                    The clarinet is a versatile woodwind instrument used in classical, jazz, and contemporary music. 
                    Mastering the clarinet improves lung capacity, coordination, and musical expression.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Clarinet?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Enhances breath control and endurance.</li>
                    <li>Improves finger dexterity and coordination.</li>
                    <li>Develops tone production and articulation.</li>
                    <li>Versatile instrument for solo and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Clarinet Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/L7W-OoQVEE0?si=VBjbMRVRRg9Rvgcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Hold the Clarinet & Produce Sound</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xTNbclgU3h4?si=Ojkt4i5XrCLE-7xp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Clarinet Song</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ya4y4xJ6OxA?si=TYSBfkzUb8PQzCSO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-purple-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Clarinet;
