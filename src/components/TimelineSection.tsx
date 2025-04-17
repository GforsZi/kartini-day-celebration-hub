
const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "1879",
      title: "Birth of Kartini",
      description: "Raden Adjeng Kartini was born on April 21, 1879, in Jepara, Central Java, to a noble Javanese family."
    },
    {
      id: 2,
      year: "1892",
      title: "End of Formal Education",
      description: "At age 12, following Javanese tradition, Kartini was secluded at home (pingit) and her formal education ended."
    },
    {
      id: 3,
      year: "1899",
      title: "Correspondence Begins",
      description: "Kartini began writing letters to Dutch feminist Rosa Abendanon and others, sharing her ideas on women's rights."
    },
    {
      id: 4,
      year: "1902",
      title: "Scholarship Opportunity",
      description: "Kartini received a scholarship to study in Holland but couldn't accept due to her upcoming arranged marriage."
    },
    {
      id: 5,
      year: "1903",
      title: "Marriage and School",
      description: "Kartini married Jepara's regent and with his support, opened a school for noble Javanese girls."
    },
    {
      id: 6,
      year: "1904",
      title: "Death of Kartini",
      description: "Kartini died on September 17, 1904, at age 25, shortly after giving birth to her son."
    },
    {
      id: 7,
      year: "1911",
      title: "Door of Darkness to Light",
      description: "Kartini's letters were published as \"Door of Darkness to Light\" (Door Duisternis tot Licht) in the Netherlands."
    },
    {
      id: 8,
      year: "1964",
      title: "National Holiday",
      description: "President Sukarno declared April 21 as Kartini Day, a national holiday in Indonesia."
    }
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-white">
      <div className="kartini-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Kartini's Timeline</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8">
            The life and legacy of Raden Adjeng Kartini through significant moments in her journey.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-kartini-purple transform md:-translate-x-1/2"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Year marker */}
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-4 md:pb-0">
                  <div className={`bg-kartini-purple text-white font-bold py-1 px-4 rounded ${index % 2 === 0 ? 'md:ml-12' : ''}`}>
                    {event.year}
                  </div>
                </div>
                
                {/* Event content */}
                <div className="md:w-1/2 md:pl-12 relative">
                  {/* Dot marker */}
                  <div className="absolute left-0 md:-left-[9px] top-0 w-4 h-4 rounded-full bg-kartini-gold border-4 border-kartini-purple transform md:translate-x-0"></div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 ml-6 md:ml-0 border-l-4 border-kartini-purple">
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-kartini-purple">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
