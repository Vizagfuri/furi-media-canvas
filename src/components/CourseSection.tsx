
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Social Media Marketing Mastery",
    description: "Learn how to create engaging content and grow your audience across all major social platforms.",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    popular: true,
  },
  {
    id: 2,
    title: "SEO & Content Strategy",
    description: "Master the art of search engine optimization and content creation to drive organic traffic.",
    duration: "10 weeks",
    level: "Intermediate",
    popular: false,
  },
  {
    id: 3,
    title: "Paid Advertising Specialist",
    description: "Become proficient in Google Ads, Facebook Ads, and other paid marketing channels.",
    duration: "6 weeks",
    level: "All Levels",
    popular: true,
  },
  {
    id: 4,
    title: "Email Marketing & Automation",
    description: "Create effective email campaigns and set up automation sequences that convert.",
    duration: "4 weeks",
    level: "Beginner",
    popular: false,
  },
];

const CourseSection = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-furi-600">Featured Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed by industry experts to help you master the latest digital marketing skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
              {course.popular && (
                <div className="absolute top-4 right-4 bg-furi-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold group-hover:text-furi-600 transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2 text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">Level:</span>
                    <span className="ml-2 text-gray-600">{course.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-white border-furi-600 text-furi-600 hover:bg-furi-600 hover:text-white transition-colors"
                  variant="outline"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-furi-600 hover:bg-furi-700">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
