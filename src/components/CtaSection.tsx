
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-furi-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-white blur-3xl"></div>
          <div className="absolute right-1/3 bottom-1/3 w-1/3 h-1/3 rounded-full bg-white blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your Digital Marketing Career?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming a digital marketing professional. Enroll in our courses today and transform your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-furi-600 hover:bg-gray-100">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
