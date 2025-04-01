import { Link } from "react-router-dom";

const Saxophone = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Saxophone Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-yellow-600 mt-5">Saxophone Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the saxophone with expert instruction. Master breath control, finger placement, 
                and musical techniques to produce rich and soulful melodies with confidence.
            </p>

            {/* Section: About the Saxophone */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎷 About the Saxophone</h2>
                <p className="mt-2 text-gray-700">
                    The saxophone is a versatile and expressive instrument used in jazz, classical, and popular music. 
                    Playing the saxophone improves lung capacity, rhythm, and musical creativity.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Saxophone?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Enhances breath control and lung strength.</li>
                    <li>Improves finger coordination and dexterity.</li>
                    <li>Develops tone control and musical phrasing.</li>
                    <li>Perfect for solo performances and ensemble playing.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Saxophone Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/G0UdzjWMMTY?si=nOJS82ng9MUYHt4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. Proper Saxophone Holding & Breathing Techniques</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hC8CH0Z3L54?si=c5S7e04xa6eU2vy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Saxophone Tune</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/89_KXT5ztTU?si=cQ_g4tbDGLia6Ewa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-yellow-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Saxophone;
