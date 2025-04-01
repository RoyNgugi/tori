import { Link } from "react-router-dom";

const Accordion = () => {
    return (
        <div className="p-5 max-w-3xl mx-auto">
            {/* Cover Image */}
            <img 
                src="https://i.ibb.co/album-cover.jpg" 
                alt="Accordion Class Cover" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Title */}
            <h1 className="text-3xl font-bold text-red-600 mt-5">Accordion Classes</h1>

            {/* Introduction */}
            <p className="mt-2 text-lg text-gray-700">
                Learn to play the accordion with expert instruction, from basic techniques to advanced musical expression. 
                Develop coordination, rhythm, and mastery of this unique and versatile instrument.
            </p>

            {/* Section: About the Accordion */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎼 About the Accordion</h2>
                <p className="mt-2 text-gray-700">
                    The accordion is a fascinating instrument used in folk, classical, and modern music. 
                    It enhances hand coordination, musical ear, and timing.
                </p>
            </div>

            {/* Section: Course Benefits */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">🎵 Why Learn the Accordion?</h2>
                <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                    <li>Improves finger dexterity and coordination.</li>
                    <li>Develops musical timing and ear training.</li>
                    <li>Enhances multi-tasking by managing buttons and bellows.</li>
                    <li>Expands opportunities for solo and ensemble performances.</li>
                </ul>
            </div>

            {/* Video Lessons */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-800">📹 Video Lessons</h2>

                {/* Video 1 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">1. Beginner Accordion Lesson</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-ARC2YxsbE0?si=gIZ72OeKqGzUnUyK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 2 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">2. How to Play Chords on Accordion</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CgCMBFcifVE?si=0tb1Rsn6bNPg0hSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                {/* Video 3 */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">3. Playing Your First Song on Accordion</h3>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_6aUYKii_Zk?si=D3HxvIjPR_HoGt_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            {/* Back Button */}
            <Link to="/" className="text-red-500 mt-6 inline-block">← Back to Home</Link>
        </div>
    );
};

export default Accordion;
