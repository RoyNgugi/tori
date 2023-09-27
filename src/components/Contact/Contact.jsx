const Contact = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(/public/background.jpg)', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-black bg-opacity-75"></div>
                <div className="hero-content text-center container mx-auto px-5">
                    <div className="max-w-2xl py-32">
                        <h1 className="mb-8 text-5xl font-bold"><span className="text-white">Contact at <br /></span> <span className="text-amber-600">All Instrument Academy</span></h1>


                        <div className="flex justify-center container mx-auto px-5 my-14">
                            <div>
                                <div className="mt-5">
                                    <input type="text" placeholder="Name" className="input input-bordered border-amber-600  w-full mb-5" />
                                    <input type="email" placeholder="Email Address" className="input input-bordered border-amber-600  w-full mb-5" />
                                    <input type="number" placeholder="Phone Number" className="input input-bordered border-amber-600  w-full mb-5" />
                                    <textarea placeholder="Comment" className="textarea textarea-bordered textarea-lg w-full p-0 pl-3 border-amber-600" ></textarea>

                                    <div className="flex justify-center mt-10">
                                        <button className="btn bg-amber-600 border-amber-600 text-white rounded-md text-xl w-full">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contact;