import PropTypes from "prop-types";

export const Pagination = ({ onPrevious, onNext }) => (
  <div className="flex justify-center pt-10">
    <ul className="flex list-none h-[120px] w-full">
      <li
        onClick={onPrevious}
        className="relative mx-2 flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:bg-gray-800 hover:text-white"
      >
        <ChevronLeft />
      </li>
      <li
        onClick={onNext}
        className="relative mx-2 flex items-center justify-center w-[50px] h-[50px] bg-white rounded-full shadow-md cursor-pointer transition-transform duration-200 ease-in-out hover:bg-gray-800 hover:text-white"
      >
        <ChevronRight />
      </li>
    </ul>
  </div>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16">
    <path d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    <path d="M12.354 1.646a.5.5 0 0 1 .708.708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708z" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16">
    <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .001.708l-6 6a.5.5 0 1 1-.708-.708L8.293 8 3.646 3.354a.5.5 0 0 1 0-.708z" />
    <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .001.708l-6 6a.5.5 0 1 1-.708-.708L12.293 8l-4.647-4.646a.5.5 0 0 1-.001-.708z" />
  </svg>
);

Pagination.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
}