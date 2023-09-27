import PropTypes from 'prop-types';

const InstrumentCard = ({ instrument }) => {
    const { image, instrumentName, description, durationMonths, price } = instrument;
    return (
        <div className='shadow-xl rounded-xl'>
            <img className='w-full h-60 rounded-t-xl' src={image} alt="" />
            <div className='p-5'>
                <h2 className='text-2xl font-bold text-amber-600 mb-2'>{instrumentName} <span className='text-cyan-800'>Classes</span></h2>

                <p className='mb-4 h-20'>{description}</p>

                <div className='flex justify-between'>
                    <div>
                        <div>
                            <p>{durationMonths} Months</p>
                        </div>
                        <div>
                            <p>Price: ${price}</p>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <button className='btn bg-amber-600 border-none text-white'>More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

InstrumentCard.propTypes = {
    instrument: PropTypes.object,
};

export default InstrumentCard;