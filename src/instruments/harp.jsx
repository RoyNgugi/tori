import { Link } from "react-router-dom";

const Harp = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Harp Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-purple-600 mt-5">Harp Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Discover the enchanting world of the harp with expert guidance. Learn proper hand positioning, 
                string techniques, and musical expression to create beautiful melodies with this elegant instrument.
            </p>

            {/* Section: About the Harp */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎶 About the Harp</h2>
                <p className="mt-2 text-gray-700">
                    The harp is one of the oldest and most ethereal musical instruments, known for its angelic tones. 
                    Playing the harp improves hand coordination, finger strength, and musical creativity.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Harp?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Develops fine motor skills and hand coordination.</li>
                    <li>Enhances musical creativity and emotional expression.</li>
                    <li>Offers a calming and therapeutic playing experience.</li>
                    <li>Versatile for solo and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Harp Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Y4_F929waMg?si=XIi5XHJDFqU_oDlB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. Proper Hand Position & String Techniques</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/G3UGewCinYw?si=fH3WCZC7ko_j1ZGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Harp Melody</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TnYCW8eWqQo?si=WcjIuAiS-cJgMYkf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-purple-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Harp;
