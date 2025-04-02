
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-furi-600 font-medium mb-3">ABOUT FURI MEDIA SCHOOL</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Furi Media For Your Digital Marketing Education?
            </h2>
            <p className="text-gray-600 mb-6">
              Furi Media School was founded with a single mission: to provide accessible, cutting-edge digital marketing education that empowers students to thrive in today's competitive landscape.
            </p>
            <p className="text-gray-600 mb-8">
              Our curriculum is constantly updated to reflect the latest trends, tools, and strategies in digital marketing. We combine theoretical knowledge with practical experience to ensure our graduates are job-ready from day one.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Industry-active instructors</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Hands-on practical projects</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Small class sizes</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Career support services</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Flexible learning options</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-furi-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>Industry-recognized certification</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-furi-500 to-furi-700 opacity-90 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-white text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
                  <p className="text-white text-sm mb-4">Join our next info session to learn more about our programs</p>
                  <div className="inline-block rounded-full bg-white text-furi-600 font-semibold px-6 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                    Register Now
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
