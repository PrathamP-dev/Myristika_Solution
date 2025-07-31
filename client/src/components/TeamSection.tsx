export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ashish Raj",
      role: "Development Professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "26+ years experience in forestry, climate change, and community-based natural resource management. MBA in Forestry from Indian Institute of Forest Management.",
      hoverInfo: "Expert in nature-based solutions and participatory frameworks for ecosystem services"
    },
    {
      name: "Dr. Manoj Pattanaik",
      role: "Community Development Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "35+ years working with civil society organizations in community forestry, natural resource management, and climate change adaptation. PhD in Social Work.",
      hoverInfo: "JICA project specialist in forestry sector development and community enterprises"
    },
    {
      name: "Sandeep Khanwalkar",
      role: "Natural Resource Management Expert",
      image: "/attached_assets/Sandeep_1753968120412.png",
      description: "25+ years expertise in watershed planning, climate change, and nature-based solutions. Specializes in water conservation and ecological restoration.",
      hoverInfo: "Leading innovative NbS for water treatment and traditional farming systems"
    },
    {
      name: "Kiran KP",
      role: "Technology & Community Integration Lead",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "13 years bridging advanced technology and grassroots action. Engineering and forestry management background with major community-driven projects.",
      hoverInfo: "Led watershed reports for 96,000 hectares across 220 villages in Gujarat"
    },
    {
      name: "Dr. Gaini Sailu",
      role: "Biodiversity Conservation Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "18+ years in forestry, wildlife management, and biodiversity conservation. PhD in Environmental Sciences. UNDP India Biodiversity Award recipient.",
      hoverInfo: "Leading decision support systems for forest assessment with USAID, UNDP, World Bank"
    },
    {
      name: "Sourav Pahari",
      role: "Digital Platform Specialist",
      image: "/attached_assets/Sourav_1753968120410.png",
      description: "17+ years in natural resource management and biodiversity. Designer of digital platforms like TIGRAM and NTMS for timber traceability.",
      hoverInfo: "Expert in agroforestry, climate resilience, and landscape monitoring systems"
    },
    {
      name: "Manish Pant",
      role: "Communications & Outreach Specialist",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "15+ years spanning journalism, public relations, and nonprofit advocacy. Led regional communication strategies for Forest-PLUS 3.0 program.",
      hoverInfo: "Johns Hopkins-trained leader with expertise in mass communications and digital marketing"
    },
    {
      name: "Prashant Gamaliel",
      role: "Finance & Operations Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      description: "20+ years across corporate and international development sectors with organizations like Tetra Tech ARD, FHI360, and World Vision. MBA in Operations Management.",
      hoverInfo: "Expert in financial systems design, regulatory compliance, and multi-country project oversight"
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
