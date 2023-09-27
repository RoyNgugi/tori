const About = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(/public/background.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-black bg-opacity-75"></div>
                <div className="hero-content text-center container mx-auto">
                    <div className="max-w-2xl py-44">
                        <h1 className="mb-8 text-5xl font-bold"><span className="text-white">About <br /></span> <span className="text-amber-600">All Instrument Academy</span></h1>
                        <p className="mb-5 text-white">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.</p>
                    </div>
                </div>
            </div>


            <div className="py-14 flex flex-col-reverse md:flex-col-reverse lg:flex-row container mx-auto px-5 gap-10">
                <div>
                    <h2 className="text-4xl text-amber-600 font-bold mb-2">About <span className="text-cyan-800">Us</span></h2>
                    <div>
                        <p className="mb-3">Welcome to All Instrument Academy, where the symphony of learning meets the melody of mastery. Our academy is a harmonious haven for music enthusiasts of all ages and skill levels, dedicated to nurturing a love for music and fostering talent across a wide spectrum of musical instruments.</p>

                        <p className="mb-3">At All Instrument Academy, we believe that music is a universal language that transcends boundaries and enriches lives. Our mission is to provide a comprehensive and engaging platform where aspiring musicians can explore, learn, and perfect their craft on a diverse range of instruments.</p>

                        <p>Our commitment to quality education and a supportive learning environment sets us apart. Discover the art of music, one instrument at a time, and let All Instrument Academy be your guide to a world of musical possibilities.</p>
                    </div>
                </div>
                <div>
                    <img className="rounded-xl" src="https://neurosciencenews.com/files/2023/06/ai-music-hits-neurosciencenews.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;