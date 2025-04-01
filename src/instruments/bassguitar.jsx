import { Link } from "react-router-dom";

const BassGuitar = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Bass Guitar Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-green-600 mt-5">Bass Guitar Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Master the bass guitar with expert lessons, from foundational grooves to advanced techniques. 
                Develop rhythm, timing, and groove to become a solid bass player.
            </p>

            {/* Section: About the Bass Guitar */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎸 About the Bass Guitar</h2>
                <p className="mt-2 text-gray-700">
                    The bass guitar is the backbone of any band, providing rhythm and harmony. 
                    It enhances musical timing, finger strength, and groove.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎵 Why Learn the Bass Guitar?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Strengthens rhythm and timing skills.</li>
                    <li>Improves finger dexterity and coordination.</li>
                    <li>Enhances ear training and musical expression.</li>
                    <li>Essential instrument for bands and ensembles.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Bass Guitar Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W6JVdi5FGV0?si=UFPYXUz-qgPfWtlL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Play Bass Guitar Grooves</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5o72qntL9KI?si=rV97x8LozOL3Rb-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Bassline</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/i-tzPu7e2pg?si=zvqLOjVJGq99Wy1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-green-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default BassGuitar;
