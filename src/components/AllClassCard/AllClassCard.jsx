import PropTypes from 'prop-types';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa6';


const AllClassCard = ({ instrument }) => {
    const { image, instrumentName, description, durationMonths, price } = instrument;
    return (
        <div className='border-2 rounded-xl'>
            <img className='w-full h-48 rounded-t-xl' src={image} alt="" />
            <div className='p-5 text-start'>
                <h2 className='text-xl font-bold text-amber-600 mb-2'>{instrumentName} <span className='text-white'>Classes</span></h2>

                <p className='mb-4 h-16 text-sm text-white'>{description}</p>

                <div className='flex justify-between'>
                    <div>
                        <div className='flex gap-2 mb-1 text-sm'>
                            <div className='flex items-center text-amber-600'><FaCalendarAlt></FaCalendarAlt></div>
                            <p className='text-white'>{durationMonths} Months</p>
                        </div>
                        <div className='flex gap-2 text-sm'>
                            <div className='flex items-center text-amber-600'><FaMoneyCheck></FaMoneyCheck></div>
                            <p className='text-white'>Price: Ksh{price}</p>
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

AllClassCard.propTypes = {
    instrument: PropTypes.object,
};

export default AllClassCard;