
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "10M+ Users Worldwide",
    "99.9% Uptime Guarantee",
    "24/7 Expert Support",
    "ISO 27001 Certified"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over a decade, we've been at the forefront of digital innovation, 
              helping businesses transform their operations and achieve unprecedented growth. 
              Our platform combines cutting-edge technology with intuitive design to deliver 
              exceptional results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Innovation at Scale</h3>
                <p className="text-white/90 leading-relaxed">
                  "This platform has revolutionized how we approach digital transformation. 
                  The results speak for themselves - increased efficiency, reduced costs, 
                  and happier customers."
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-white/80">CTO, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
