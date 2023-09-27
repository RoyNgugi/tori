import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="my-16">
                <h2 className="text-xl text-amber-600 font-bold text-center mb-2">Our Classes</h2>
                <h1 className="text-4xl text-cyan-900 font-bold text-center mb-4">Most Popular Classes</h1>
                <div className="flex justify-center">
                    <p className="w-2/3 text-cyan-900 text-center mb-10">Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. <br /> In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
                </div>
            </div>


            <div>

            </div>
        </div>
    );
};

export default Home;