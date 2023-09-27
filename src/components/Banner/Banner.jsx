const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(/public/background.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center container mx-auto px-5">
                    <div className="max-w-2xl py-44">
                        <h1 className="mb-8 text-5xl font-bold"><span className="text-cyan-800">Unleash Your Musical Talent at <br /></span> <span className="text-amber-600">All Instrument Academy</span></h1>
                        <p className="mb-5">Discover the joy of music with our expert-led courses covering a wide array of instruments. Whether you are a beginner or a seasoned musician, our comprehensive lessons will guide you on a melodic journey. Join us to learn, play, and harmonize with the music of your dreams.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;