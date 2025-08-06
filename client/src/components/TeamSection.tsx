export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ashish Raj",
      role: "Development Professional",
      image: "/Ashish Raj_1753968367793.png",
      description: "26+ years experience specializing in forestry, climate change, and community-based natural resource management. MBA in Forestry from Indian Institute of Forest Management with demonstrated leadership in national and international organizations.",
      hoverInfo: "Expert in advancing sustainable and inclusive forest landscape management and development across India and beyond"
    },
    {
      name: "Dr. Manoj Pattanaik",
      role: "Community Development Specialist",
      image: "/Manoj Pattanaik_1753968367790.png",
      description: "35+ years working with civil society organizations, public and private sector agencies in community forestry, community-based natural resource management, traditional ecological farming, and climate change mitigation and adaptation.",
      hoverInfo: "Expert in institutional strengthening of community-based organizations and building linkages between communities and markets"
    },
    {
      name: "Sandeep Khanwalkar",
      role: "Natural Resource Management Expert",
      image: "/Sandeep_1753968120412.png",
      description: "30+ years experience in natural resource management, watershed-based landscape planning, climate change, and nature-based solutions. Specializes in scientific water conservation, sustainable agriculture, and ecological restoration.",
      hoverInfo: "Expert in capacity building, evaluation, and communication with state governments, UN agencies, ICRISAT, and INGOs"
    },
    {
      name: "Kiran KP",
      role: "Technology & Community Integration Lead",
      image: "/Kiran KP_1753968367792.png",
      description: "Nearly 13 years bridging advanced technology and grassroots action in the environmental sector. Engineering and forestry management degrees with expertise in fostering collaboration among diverse stakeholders.",
      hoverInfo: "Led watershed project reports for 96,000 hectares across 220 villages in Gujarat with expertise in livelihood planning and technology solutions"
    },
    {
      name: "Dr. Gaini Sailu",
      role: "Biodiversity Conservation Expert",
      image: "/Sailu_1753968367789.png",
      description: "18+ years in forestry, wildlife management, ecosystem restoration, and biodiversity conservation. PhD in Environmental Sciences with extensive training in GIS and remote sensing.",
      hoverInfo: "Led national and state-level projects with USAID, UNDP, UNEP-GEF, World Bank, and MoEFCC, contributing to policy development and biodiversity governance"
    },
    {
      name: "Sourav Pahari",
      role: "Digital Platform Specialist",
      image: "/Sourav_1753968120410.png",
      description: "17+ years in natural resource management and biodiversity across India. Led initiatives on agroforestry, traceability systems, and eco-restoration with agencies like GIZ, USAID, MoRD, MoEFCC, and NABARD.",
      hoverInfo: "Designer and scaler of digital platforms such as TIGRAM and NTMS for timber traceability and landscape monitoring with expertise in climate resilience"
    },
    {
      name: "Manish Pant",
      role: "Communications & Outreach Specialist",
      image: "/Manish Pant_1753968367791.png",
      description: "15+ years spanning journalism, public relations, stakeholder engagement, and nonprofit advocacy. Led regional communication strategies for Tetra Tech's Forest-PLUS 3.0 program for sustainable forest management and climate initiatives.",
      hoverInfo: "Expert in bridging ecological research and public awareness through compelling media releases, infographics, and policy briefs"
    },
    {
      name: "Prashant Gamaliel",
      role: "Finance & Operations Specialist",
      image: "/Prashant Gamaliel_1753968367791.png",
      description: "20+ years across corporate and international development sectors. Led key functions for organizations such as Tetra Tech ARD, FHI360, and World Vision, specializing in financial systems design, regulatory compliance, and internal controls.",
      hoverInfo: "Expert in multi-country, multi-donor project oversight, developed operational manuals, and built capacity for financial management systems"
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
