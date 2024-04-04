import PropTypes from 'prop-types';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa6';


const InstrumentCard = ({ instrument }) => {
    const { image, instrumentName, description, durationMonths, price } = instrument;
    return (
        <div className='shadow-xl rounded-xl'>
            <img className='w-full h-48 rounded-t-xl' src={image} alt="" />
            <div className='p-5'>
                <h2 className='text-xl font-bold text-amber-600 mb-2'>{instrumentName} <span className='text-cyan-800'>Classes</span></h2>

                <p className='mb-6 text-sm h-16'>{description}</p>

                <div className='flex justify-between'>
                    <div>
                        <div className='flex gap-2 mb-1 text-sm'>
                            <div className='flex items-center text-amber-600'><FaCalendarAlt></FaCalendarAlt></div>
                            <p>{durationMonths} Months</p>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <div className='flex items-center text-amber-600'><FaMoneyCheck></FaMoneyCheck></div>
                            <p>Price: Ksh{price}</p>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <button className='btn bg-amber-600 border-none text-white hover:bg-cyan-800 hover:shadow-xl'>More Info</button>
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