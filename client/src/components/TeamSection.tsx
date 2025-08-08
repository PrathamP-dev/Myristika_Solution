export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ashish Raj",
      role: "Development Professional",
      image: "/images/ashish-raj.png",
      description: "26+ years experience specializing in forestry, climate change, and community-based natural resource management. MBA in Forestry from Indian Institute of Forest Management with demonstrated leadership in national and international organizations contributing to advancing sustainable and inclusive forest landscape management and development across India and beyond. Expertise includes designing and implementing innovative nature-based solutions, integrating data-driven forest analytics, and establishing participatory frameworks that enhance ecosystem services while supporting effective climate mitigation.",
      hoverInfo: "Expert in aligning advanced technology with policy advocacy and grassroots engagement for climate action and sustainable natural resource management initiatives"
    },
    {
      name: "Dr. Manoj Pattanaik",
      role: "Community Development Specialist",
      image: "/images/manoj-pattanaik.png",
      description: "35+ years working with civil society organizations, public and private sector agencies and local communities in community forestry, community-based natural resource management, traditional ecological farming, climate change mitigation and adaptation, community-managed enterprises in agriculture and forestry sectors. PhD in Social Work with experience in large scale forestry sector development projects supported by Japan International Cooperation Agency (JICA) for both project formulation and implementation.",
      hoverInfo: "Expert in institutional strengthening of community-based organizations and building linkages between communities, government agencies, and private sector for sustainable livelihood enhancement"
    },
    {
      name: "Sandeep Khanwalkar",
      role: "Natural Resource Management Expert",
      image: "/images/sandeep.png",
      description: "30+ years experience in natural resource management, watershed-based landscape planning, climate change, and nature-based solutions. Specializes in scientific water conservation, sustainable agriculture, and ecological restoration, with strong focus on capacity building, evaluation, and communication. Recently implementing innovative Nature-based Solutions (NbS) for treating grey and black water, promoting natural farming systems, and leading efforts in reviving traditional water bodies.",
      hoverInfo: "Worked with state governments, UN agencies, ICRISAT, and INGOs across India and internationally on watershed management and climate resilience projects"
    },
    {
      name: "Kiran KP",
      role: "Technology & Community Integration Lead",
      image: "/images/kiran-kp.png",
      description: "Nearly 13 years bridging advanced technology and grassroots action in the environmental sector. Engineering and forestry management degrees with expertise in fostering collaboration among diverse stakeholders to deliver effective, science-based solutions.",
      hoverInfo: "Led major community-driven projects including watershed project reports for 96,000 hectares across 220 villages in Gujarat with extensive expertise spanning livelihood planning and technology solutions"
    },
    {
      name: "Dr. Gaini Sailu",
      role: "Biodiversity Conservation Expert",
      image: "/images/sailu.png",
      description: "18+ years in forestry, wildlife management, ecosystem restoration, and biodiversity conservation. PhD in Environmental Sciences with extensive training in forestry and biotechnology. Led national and state-level projects with organizations like USAID, UNDP, UNEP-GEF, World Bank, and MoEFCC, contributing to policy development, biodiversity governance, and Access and Benefit Sharing (ABS) mechanisms. Pioneered decision support systems for forest resource assessment and eco-restoration across India. Received awards including the UNDP India Biodiversity Award.",
      hoverInfo: "Award-winning expert committed to integrating science, policy, and community-based conservation with pioneering work in decision support systems"
    },
    {
      name: "Sourav Pahari",
      role: "Digital Platform Specialist",
      image: "/images/sourav.png",
      description: "17+ years in natural resource management and biodiversity across India. Led initiatives on agroforestry, traceability systems, and eco-restoration with agencies like GIZ, USAID, MoRD, MoEFCC, and NABARD. Designer and scaler of digital platforms such as TIGRAM and NTMS for timber traceability and landscape monitoring. Expertise spans climate resilience, land restoration, and community-based forestry across diverse agro-climatic zones. Authored key policy notes and engaged with multi-stakeholder platforms at state and national levels.",
      hoverInfo: "Expert in multi-stakeholder engagement with proven experience in authoring policy notes and scaling technology solutions across diverse agro-climatic zones"
    },
    {
      name: "Manish Pant",
      role: "Communications & Outreach Specialist",
      image: "/images/manish-pant.png",
      description: "15+ years spanning journalism, public relations, stakeholder engagement, and nonprofit advocacy. Most recently served as Communications and Outreach Specialist for Tetra Tech's Forest-PLUS 3.0 program, leading regional communication strategies for sustainable forest management and climate initiatives. Johns Hopkins-trained leader with advanced degrees in mass communications, business management, and digital marketing. Contributed to high-impact national reports and conferences on tobacco control and public health in India.",
      hoverInfo: "Johns Hopkins-trained expert in bridging ecological research and public awareness with contributions to high-impact national reports and health conferences"
    },
    {
      name: "Prashant Gamaliel",
      role: "Finance & Operations Specialist",
      image: "/images/prashant-gamaliel.png",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
            Meet the passionate experts behind Myristika Solution - a diverse team of technologists, 
            conservationists, and innovators working together for a sustainable future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-reveal">
              <div className="relative group">
                <img 
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-48 object-contain bg-gray-50 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white">
                    <p className="text-xs leading-tight">{member.hoverInfo}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest mb-1 truncate">{member.name}</h3>
                <p className="text-sky font-semibold text-sm mb-2 truncate">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
