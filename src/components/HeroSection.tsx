
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-furi-100 rounded-full blur-3xl opacity-60 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-furi-100 rounded-full blur-3xl opacity-60 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-furi-600 font-medium mb-3 animate-fadeIn">DIGITAL MARKETING EDUCATION</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl animate-fadeIn animation-delay-200">
            Master Digital Marketing With <span className="text-furi-600">Furi Media School</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fadeIn animation-delay-400">
            Gain the skills, knowledge, and confidence to excel in today's digital marketing landscape with our industry-recognized courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp">
            <Button size="lg" className="bg-furi-600 hover:bg-furi-700 text-white px-8">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="border-furi-600 text-furi-600 hover:bg-furi-50 px-8">
              Free Consultation
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-furi-600">15+</span>
              <span className="text-sm text-gray-600 mt-2">Expert Instructors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-furi-600">25+</span>
              <span className="text-sm text-gray-600 mt-2">Courses Available</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-furi-600">5000+</span>
              <span className="text-sm text-gray-600 mt-2">Students Enrolled</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-furi-600">98%</span>
              <span className="text-sm text-gray-600 mt-2">Job Placement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
