import PropTypes from "prop-types";

const CareerCard = ({ title, description }) => {
  return (
    <article className="mx-auto w-full max-w-[300px] bg-white rounded-lg p-4 text-gray-800 border border-slate-200 shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <section className="bg-[#fef4e2] rounded-t-lg p-4 text-sm">
        <p className="mt-2 mb-4 text-xl font-semibold">{title}</p>
        {description && <p className="text-base">{description}</p>}
      </section>
      <div className="flex flex-col p-3 space-y-2 font-bold text-sm md:flex-row md:items-center md:justify-between md:space-y-0 md:gap-4">
        <button className="w-full md:w-auto font-normal border-none block cursor-pointer text-center py-2 px-[1rem] rounded-lg bg-gray-800 text-white text-base transition-colors duration-300 hover:bg-gray-700">
          Apply
        </button>
      </div>
    </article>
  );
};

CareerCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default CareerCard;