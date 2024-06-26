import { Link, useLoaderData } from "react-router-dom";
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
                    <p className="w-2/3 text-cyan-900 text-center">Our most popular classes offer a dynamic blend of creativity and skill-building, providing students with a rewarding musical experience. <br /> With a focus on personalized instruction and a supportive learning environment, we ensure that each student reaches their full potential.</p>
                </div>
            </div>


            <div className="container mx-auto px-5 mt-10 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        instruments.slice(0, 4).map(instrument => (<InstrumentCard key={instrument.id} instrument={instrument}></InstrumentCard>))
                    }
                </div>
                <div>
                    <div className="flex justify-center mt-10">
                        <Link to={`/allClasses/:id`}>
                            <button className="btn bg-cyan-800 text-white">Show All Classes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;