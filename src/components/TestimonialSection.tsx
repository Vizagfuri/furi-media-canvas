
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Social Media Manager at TechCorp",
    image: "",
    text: "The Social Media Marketing course completely transformed my career. Within two months of graduating, I landed my dream job at a tech company.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Freelance Digital Marketer",
    image: "",
    text: "As someone who wanted to start their own business, Furi Media School gave me all the tools I needed to confidently offer digital marketing services to clients.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Marketing Director",
    image: "",
    text: "The instructors at Furi Media School are true experts. They don't just teach theory but share real-world experiences that you can't find in textbooks.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-furi-600">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates about how Furi Media School helped them achieve their career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-furi-100 flex items-center justify-center text-furi-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
