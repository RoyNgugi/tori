import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import InstrumentCard from "../InstrumentCard/InstrumentCard";


const Home = () => {
    const instruments = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <div className="mt-16">
                <h2 className="text-xl text-amber-600 font-bold text-center mb-2">Our Classes</h2>
                <h1 className="text-4xl text-cyan-900 font-bold text-center mb-4">Most Popular Classes</h1>
                <div className="flex justify-center">
                    <p className="w-2/3 text-cyan-900 text-center">Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. <br /> In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
                </div>
            </div>


            <div className="container mx-auto px-5 mt-10 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        instruments.slice(0, 8).map(instrument => (<InstrumentCard key={instrument.id} instrument={instrument}></InstrumentCard>))
                    }
                </div>
                <div>
                    <div className="flex justify-center mt-10">
                        <button className="btn bg-cyan-800 text-white">Show All Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;