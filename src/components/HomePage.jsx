import {
  Instagram,
  Linkedin,
  MessageSquare,
  BookOpen,
  Code,
  Users,
} from "lucide-react";
import CareerCarousel from "./CareerCarousel";
import FaqSection from "./FaqSection";

const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center h-20 px-4">
          <div className="flex items-center space-x-2">
            <img
              src="/src/assets/logo.webp"
              alt="Logo"
              style={{ width: "200px", height: "200px" }}
              className="object-contain"
            />
          </div>
          <button
            onClick={() => onNavigate("login")}
            className="bg-[#00966C] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#007A59] transition-colors"
          >
            Login
          </button>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#002F6C] mb-6">
            Temukan Passion Anda di Dunia Data
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Platform pembelajaran data science terlengkap dengan mentoring
            personal, practice sessions, dan bootcamp intensif untuk
            mengembangkan karir Anda di bidang data.
          </p>
          <button
            onClick={() => onNavigate("login")}
            className="bg-[#00966C] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#007A59] transition-colors shadow-lg"
          >
            Mulai Belajar Sekarang
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
            <BookOpen className="w-12 h-12 text-[#00966C] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#002F6C] mb-2">Mentoring</h3>
            <p className="text-gray-700">
              Belajar langsung dari expert dengan sesi 1-on-1
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
            <Code className="w-12 h-12 text-[#00966C] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#002F6C] mb-2">Practice</h3>
            <p className="text-gray-700">
              Latihan hands-on dengan project real-world
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
            <Users className="w-12 h-12 text-[#00966C] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#002F6C] mb-2">Bootcamp</h3>
            <p className="text-gray-700">
              Program intensif untuk transformasi karir
            </p>
          </div>
        </div>

        {/* Career Carousel */}
        <CareerCarousel />

        <div className="h-16" />

        {/* FAQ Section */}
        <FaqSection />

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#002F6C] mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/temudataku/"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Instagram className="w-6 h-6 text-[#002F6C]" />
            </a>
            <a
              href="https://www.linkedin.com/company/temudataku/?originalSubdomain=id"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#002F6C]" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6285156750480&text&type=phone_number&app_absent=0"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-[#002F6C]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
