import {useState} from 'react'
import { Pagination } from '../widgets/Pagination';
import PageTitle from '../widgets/PageTitle';
import { careersData } from '@/data/career-data';
import CareerCard from '../cards/CareerCard';
import PropTypes from 'prop-types';

const Careers = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const nextPage = () => {
        if (currentIndex + itemsPerPage < careersData.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const previousPage = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const displayedCareers = careersData.slice(
        currentIndex,
        currentIndex + itemsPerPage
    );

    return (
        <>
            <PageTitle section="Careers" heading="Want to work with us?" />
            <div className="p-6 mx-10 flex flex-col justify-center items-center">
                <Header onPrevious={previousPage} onNext={nextPage} />
                <CareerList careers={displayedCareers} />
            </div>
        </>
    )
}

const Header = ({ onPrevious, onNext }) => (
    <div className="w-full flex items-center justify-center mb-4">
        <Pagination onPrevious={onPrevious} onNext={onNext} />
    </div>
);


const CareerList = ({ careers }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {careers.length > 0 ? (
            careers.map((career, index) => (
                <CareerCard
                    key={index}
                    title={career.title}
                    description={career.description}
                />
            ))
        ) : (
            <p className="text-lg text-gray-600">No current openings available.</p>
        )}
    </div>
);

Header.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

CareerList.propTypes = {
    careers: PropTypes.array.isRequired
}

export default Careers