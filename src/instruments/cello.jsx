import { Link } from "react-router-dom";

const Cello = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Cello Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-600 mt-5">Cello Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the cello with expert lessons covering fundamental techniques to advanced performance skills. 
                Develop tone, posture, and bowing techniques for a rich musical experience.
            </p>

            {/* Section: About the Cello */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎻 About the Cello</h2>
                <p className="mt-2 text-gray-700">
                    The cello is a deeply expressive string instrument, widely used in classical, contemporary, and cinematic music. 
                    Mastering the cello enhances coordination, musicality, and expression.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎵 Why Learn the Cello?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Develops precision and control over bowing techniques.</li>
                    <li>Enhances musical ear and interpretation.</li>
                    <li>Builds finger strength and dexterity.</li>
                    <li>Opens opportunities for orchestral and solo performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Cello Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qpbX7SbXOtU?si=Tmkiteij1OlS52Ah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Hold the Cello & Bow</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ptk_1Dc2iPY?si=WchF8nMjqoiq-13S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Cello Song</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/uT3SBzmDxGk?si=EkXlWJHHEnqJuJMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-blue-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Cello;
