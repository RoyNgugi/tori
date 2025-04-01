import { Link } from "react-router-dom";

const Violin = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/JvG5GSV/IMG-20230927-WA0014.jpg" 
                alt="Violin Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-amber-600 mt-5">Violin Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Embark on a melodious journey with the violin, guided by experienced instructors. 
                Our course covers everything from beginner techniques to advanced playing styles, 
                helping you develop precision, rhythm, and musical expression.
            </p>

            {/* Section: About the Violin */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎻 About the Violin</h2>
                <p className="mt-2 text-gray-700">
                    The violin is one of the most expressive and versatile musical instruments. It has been a core part of 
                    classical music, folk, jazz, and even rock genres for centuries. Playing the violin helps develop hand coordination, 
                    patience, and a deep appreciation for music.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 Why Learn the Violin?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Improves hand-eye coordination and memory skills.</li>
                    <li>Enhances musical ear and rhythmic abilities.</li>
                    <li>Offers relaxation and stress relief through music.</li>
                    <li>Opens opportunities for solo and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Violin Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kSE15tLBdso?si=-rTyM0SDSjuC73MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Hold the Violin & Bow</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KjJ_zKUt0KE?si=xW8WTn_PnWz5A_hZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Violin Song</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/T7k2pmKUXxI?si=RJqhVAKpmUIbGcIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-blue-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Violin;
