import { Link } from "react-router-dom";

const Drums = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Drums Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-red-600 mt-5">Drums Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the drums with expert lessons covering rhythm, technique, and coordination. 
                Master fundamental beats and advanced drumming styles to enhance your musical performance.
            </p>

            {/* Section: About the Drums */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🥁 About the Drums</h2>
                <p className="mt-2 text-gray-700">
                    The drums are the backbone of any band, providing rhythm and energy to music. 
                    Learning the drums improves coordination, timing, and musical expression.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎵 Why Learn the Drums?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Enhances hand-foot coordination and timing.</li>
                    <li>Boosts creativity and musical versatility.</li>
                    <li>Improves endurance and precision.</li>
                    <li>Essential for band and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Drumming Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CWki-Jac8H0?si=YKrJs2gZuE1wxFcf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. Basic Drum Beats & Sticking Patterns</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tqU3tsZ-Grk?si=BrZFXrLvfy9MmxBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Drum Groove</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y15_F0ftT3Q?si=Bp_1Nv1F30y8UnGn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-red-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Drums;
