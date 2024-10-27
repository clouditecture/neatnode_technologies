import HeroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
          <div className="relative flex h-fit content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full bg-[#fff] bg-cover bg-center border-b" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 my-16">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                  <Content />
                  <Image />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}

const Content = () => (
  <div className="text-center lg:text-left">
    <h1 className="text-4xl font-bold leading-loose text-gray-900 sm:text-4xl lg:text-5xl font-pj">
      AI SaaS tools to boost productivity, efficiency, and innovation...
    </h1>
    <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter leading-loose">
      At NeatNode Technologies, we harness the power of artificial intelligence
      to streamline operations and drive automation. Our innovative tools are
      designed to simplify complex processes, enabling businesses to focus on
      what truly matters.
    </p>
    <ButtonGroup />
  </div>
);

const Image = () => (
  <img className="w-full rounded-xl" src={HeroImage} alt="Hero Image" />
);


const ButtonGroup = () => {
  const buttons = [
    { text: "Our Products", onClick: () => console.log("Products clicked") },
    { text: "Get in Touch", onClick: () => console.log("Contact clicked") },
  ];

  return (
    <div className="relative inline-flex items-center justify-center my-10">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="flex items-center justify-center px-8 py-4 border-0 rounded-full transition-all duration-200 mx-5
            font-bold cursor-pointer text-gray-800 shadow-md z-0 bg-[#bacecd] hover:bg-blue-200 hover:text-indigo-900 active:scale-95"
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};


export default Hero