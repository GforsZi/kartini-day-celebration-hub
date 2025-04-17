
import { Button } from "@/components/ui/button";
import { Download, Book, FileText, Video } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      id: 1,
      title: "Letters of Kartini",
      description: "A compilation of Kartini's letters translated to English, showcasing her thoughts on women's emancipation and education.",
      type: "Document",
      icon: FileText,
      link: "#"
    },
    {
      id: 2,
      title: "Kartini: The Biography",
      description: "A comprehensive biography exploring Kartini's life, her struggles, and her lasting impact on Indonesian society.",
      type: "Book",
      icon: Book,
      link: "#"
    },
    {
      id: 3,
      title: "Women's Education in Indonesia",
      description: "A research paper examining the evolution of women's education in Indonesia since Kartini's time.",
      type: "Document",
      icon: FileText,
      link: "#"
    },
    {
      id: 4,
      title: "Kartini Day Celebration Guide",
      description: "A guide for schools and communities on meaningful ways to celebrate Kartini Day and honor her legacy.",
      type: "Document",
      icon: FileText,
      link: "#"
    },
    {
      id: 5,
      title: "Kartini: Pioneer of Women's Rights",
      description: "A documentary film exploring Kartini's life and her revolutionary ideas in early 20th century Indonesia.",
      type: "Video",
      icon: Video,
      link: "#"
    },
    {
      id: 6,
      title: "Traditional Indonesian Dress Guide",
      description: "Learn about traditional Indonesian clothing worn during Kartini Day celebrations and their cultural significance.",
      type: "Document",
      icon: FileText,
      link: "#"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-gray-50">
      <div className="kartini-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Educational Resources</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8">
            Explore these resources to learn more about Kartini's life, her writings, and her enduring legacy in Indonesia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-kartini-purple hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Icon className="h-6 w-6 text-kartini-purple" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-purple-100 text-kartini-purple px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <Button variant="ghost" size="sm" className="text-kartini-purple hover:bg-purple-100">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mt-12 text-center">
          <h3 className="font-playfair text-2xl font-semibold mb-4 text-kartini-purple">Looking for more resources?</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Our resource collection is constantly growing. Subscribe to our newsletter to receive updates
            when new materials about Kartini and women's empowerment in Indonesia become available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-kartini-purple hover:bg-purple-700 text-white">
              Join Our Community
            </Button>
            <Button variant="outline" className="border-kartini-gold text-kartini-brown hover:bg-kartini-gold hover:text-white">
              Suggest a Resource
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
