
import { Card, CardContent } from "@/components/ui/card";
import { Book, Heart, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="kartini-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">About Raden Adjeng Kartini</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8">
            Born on April 21, 1879, in Jepara, Central Java, Raden Adjeng Kartini was a pioneering advocate for women's rights and education in Indonesia during the Dutch colonial period.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-700 mb-6">
              Despite the constraints of Javanese aristocratic traditions, Kartini pursued her education and became a symbol of emancipation. Her letters, later published as "Out of Darkness to Light," reflect her progressive thinking and vision for women's equality.
            </p>
            <p className="text-gray-700 mb-6">
              Kartini established a school for Javanese girls, focusing on education and skills development. Although her life was cut short at the age of 25, her legacy continues to inspire generations of Indonesians.
            </p>
            <p className="text-gray-700">
              Today, Kartini Day is celebrated annually on April 21st throughout Indonesia, commemorating her birth and honoring her contributions to women's empowerment and education.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-lg border-8 border-white">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg/640px-COLLECTIE_TROPENMUSEUM_Portret_van_Raden_Ajeng_Kartini_TMnr_10018776.jpg"
                alt="Portrait of Raden Adjeng Kartini" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-kartini-gold rounded-tr-3xl"></div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-kartini-purple rounded-tl-3xl"></div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <h3 className="section-subtitle text-center mb-12">Kartini's Legacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-kartini-purple shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <Book className="h-6 w-6 text-kartini-purple" />
                  </div>
                  <h4 className="font-playfair text-xl font-semibold mb-2">Education Pioneer</h4>
                  <p className="text-gray-600">
                    Kartini championed education for all Indonesian women, establishing schools and fighting against discriminatory practices.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-kartini-gold shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Heart className="h-6 w-6 text-kartini-gold" />
                  </div>
                  <h4 className="font-playfair text-xl font-semibold mb-2">Women's Rights Advocate</h4>
                  <p className="text-gray-600">
                    She spoke against polygamy and advocated for women's autonomy and political participation in a deeply patriarchal society.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-kartini-brown shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-kartini-brown" />
                  </div>
                  <h4 className="font-playfair text-xl font-semibold mb-2">Cultural Bridge</h4>
                  <p className="text-gray-600">
                    Kartini sought to preserve Indonesian cultural heritage while embracing progressive ideas from around the world.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
