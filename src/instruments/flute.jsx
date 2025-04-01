import { Link } from "react-router-dom";

const Flute = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Flute Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-blue-600 mt-5">Flute Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Master the art of playing the flute with expert guidance. Learn breath control, finger positioning, 
                and musical techniques to produce beautiful melodies with precision and expression.
            </p>

            {/* Section: About the Flute */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎶 About the Flute</h2>
                <p className="mt-2 text-gray-700">
                    The flute is a graceful and expressive instrument used in classical, jazz, and folk music. 
                    Playing the flute improves breath control, lung capacity, and musical interpretation.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Flute?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Enhances breath control and lung strength.</li>
                    <li>Improves finger dexterity and coordination.</li>
                    <li>Develops tone production and musical phrasing.</li>
                    <li>Versatile for solo and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Flute Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vgZWZa68CRg?si=v4bV1myhJVYj3hRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. Proper Flute Holding & Breathing Techniques</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/e9cefe-xD04?si=1GcgklUIbR2ZSJCR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Flute Melody</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zs1g0IoDHTU?si=J6MD3hrvxqi2q4Vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-blue-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Flute;
