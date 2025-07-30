export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Environmental Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Specializing in ecosystem monitoring and AI-driven conservation strategies.",
      hoverInfo: "Environmental Science PhD with 10+ years in conservation technology"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Expert in drone systems, IoT networks, and remote sensing technologies.",
      hoverInfo: "Former SpaceX engineer bringing aerospace tech to conservation"
    },
    {
      name: "Dr. Aisha Patel",
      role: "Wildlife Conservation Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Leading wildlife protection initiatives using camera traps and AI tracking.",
      hoverInfo: "Wildlife biologist with expertise in anti-poaching technology"
    },
    {
      name: "James Thompson",
      role: "Data Science Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Developing predictive models for forest health and species behavior.",
      hoverInfo: "Machine learning expert with focus on environmental data analysis"
    },
    {
      name: "Elena Kowalski",
      role: "Field Operations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Ensuring seamless deployment and maintenance of monitoring systems.",
      hoverInfo: "Coordinates field deployments and equipment maintenance globally"
    },
    {
      name: "David Kim",
      role: "Sustainability Strategist",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "Developing long-term conservation strategies and policy frameworks.",
      hoverInfo: "Environmental policy expert and sustainability advocate"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-forest mb-6 tracking-tight">OUR TEAM</h2>
          <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate experts behind Myristika Solution - a diverse team of technologists, 
            conservationists, and innovators working together for a sustainable future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 scroll-reveal">
              <div className="relative group">
                <img 
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-sm">{member.hoverInfo}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-forest mb-2">{member.name}</h3>
                <p className="text-sky font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
