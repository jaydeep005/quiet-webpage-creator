
import { Zap, Shield, Globe, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform built for speed."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption and advanced protection."
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Global Scale",
      description: "Deploy worldwide with our global infrastructure and edge network capabilities."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "AI Powered",
      description: "Leverage artificial intelligence to automate workflows and enhance productivity."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our platform the perfect choice for your next project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
