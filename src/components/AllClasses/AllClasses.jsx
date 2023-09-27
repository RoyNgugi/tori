import { useLoaderData } from "react-router-dom";
import AllClassCard from "../AllClassCard/AllClassCard";

const AllClasses = () => {

    const instruments = useLoaderData();

    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/bB93Y20/background.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-black bg-opacity-75"></div>
                <div className="container mx-auto  px-5 text-center">
                    <div className="py-10">
                        <h1 className="mb-8 text-3xl md:text-4xl font-bold"><span className="text-amber-600">Our All Classes</span></h1>

                        <hr />


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                            {
                                instruments.map(instrument => (<AllClassCard key={instrument.id} instrument={instrument}></AllClassCard>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;