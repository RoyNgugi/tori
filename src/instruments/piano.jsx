import { Link } from "react-router-dom";

const Piano = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/dLxHYZZ/piano-class-cover.jpg" 
                alt="Piano Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-600 mt-5">Piano Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the piano with expert guidance, from beginner fundamentals to advanced techniques. 
                Develop your musicality, rhythm, and confidence in playing beautiful melodies.
            </p>

            {/* Section: About the Piano */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎹 About the Piano</h2>
                <p className="mt-2 text-gray-700">
                    The piano is one of the most versatile instruments, used in classical, jazz, pop, and many other genres. 
                    It enhances coordination, musical expression, and cognitive skills.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Piano?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Improves finger coordination and dexterity.</li>
                    <li>Strengthens memory and cognitive skills.</li>
                    <li>Helps in reading musical notation and theory.</li>
                    <li>Creates opportunities for solo and group performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Piano Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pOT1T2qSd2M?si=TB-tjlYuqbGTiGF9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Play Chords on Piano</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pOT1T2qSd2M?si=TB-tjlYuqbGTiGF9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Song on Piano</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lB4PRX737-0?si=uQP57M4amMwVQxBJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-blue-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Piano;