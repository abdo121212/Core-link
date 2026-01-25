
const WhatWe = () => {
  return (
    <section className="bg-white dark:bg-[#0f0f0f] py-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* العناوين الجانبية */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-bold tracking-widest uppercase text-sm mb-3">
              What We Offer
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300">
              Innovative Technology <br />
              <span className="text-gray-400 dark:text-gray-500">
                For a Connected Future
              </span>
            </h3>
          </div>

          {/* الخط الجانبي المتكيف */}
          <div className="h-[2px] flex-1 bg-gray-200 dark:bg-white/10 mb-4 hidden md:block ml-10 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWe;
