import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { career } from "../data/career";

const CareerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % career.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + career.length) % career.length);
  };

  return (
    <div className="w-full bg-gray-200 py-16">
      <h3 className="text-3xl font-bold text-[#002F6C] text-center mb-12">
        Bidang Yang Ditawarkan
      </h3>

      <div className="relative w-full px-6 md:px-12">
        <div className="overflow-hidden rounded-xl bg-white py-10 px-4 shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {career.map((field) => (
              <div key={field.id} className="w-full flex-shrink-0 px-2 md:px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col items-center mb-6">
                    <img
                      src={field.image}
                      alt={field.title}
                      className="w-32 h-32 rounded-full mb-4 object-cover shadow-md"
                    />
                    <h4 className="text-2xl md:text-3xl font-bold text-[#002F6C] mb-2 text-center">
                      {field.title}
                    </h4>
                    <p className="text-gray-700 text-center md:text-justify max-w-3xl text-base md:text-lg leading-relaxed">
                      {field.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 mt-8">
                    <div>
                      <h5 className="font-semibold text-[#002F6C] mb-3">
                        Skills yang Dipelajari:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {field.skills.map((skill, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-[#00966C] rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#002F6C] mb-3">
                        Fokus Pekerjaan:
                      </h5>
                      <ul className="space-y-2 text-gray-700">
                        {field.focus.map((focus, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-[#00966C] rounded-full mr-2"></span>
                            {focus}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-[#002F6C]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-[#002F6C]" />
          </button>
        </div>

        {/* Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {career.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-[#00966C]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCarousel;
