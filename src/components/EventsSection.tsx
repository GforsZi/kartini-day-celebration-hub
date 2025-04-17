
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Kartini Day National Ceremony",
      description: "Official national ceremony commemorating Kartini's birth and contributions to Indonesian society.",
      date: "April 21, 2025",
      time: "9:00 AM - 11:00 AM",
      location: "National Monument, Jakarta",
      image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 2,
      title: "Traditional Costume Parade",
      description: "Women and girls dressed in traditional Indonesian costumes parade through the streets to celebrate Kartini's legacy.",
      date: "April 21, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Malioboro Street, Yogyakarta",
      image: "https://images.unsplash.com/photo-1594054488889-7cc60a2a621a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: 3,
      title: "Women in Leadership Conference",
      description: "A forum for discussion on women's empowerment, education, and leadership in contemporary Indonesian society.",
      date: "April 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Convention Center, Surabaya",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50">
      <div className="kartini-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Kartini Day Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8">
            Join us in celebrating Kartini Day with these special events honoring her legacy and promoting women's empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3 text-kartini-purple">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <Button variant="outline" className="w-full border-kartini-purple text-kartini-purple hover:bg-kartini-purple hover:text-white">
                  Register
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-kartini-purple hover:bg-purple-700 text-white">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
