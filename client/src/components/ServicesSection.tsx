export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-nature-light to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-black text-forest mb-8 tracking-tight">WHAT WE DO</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky to-forest mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify font-medium">
            At Myristika Sustainable Solutions, we fuse advanced digital innovation with proven environmental stewardship to address today's most urgent natural resource and climate challenges. Drawing upon our deep roots in the pioneering Forest-PLUS programs and other natural resource management programs, we are committed to catalyzing a transformation in how forest and other landscapes, ecosystems are managed, restored, and governed—ensuring resilience for both ecosystems and the communities that depend on them.
          </p>
        </div>
        
        {/* Building on a Proven Legacy */}
        <div className="mb-24 scroll-reveal">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-100">
            <h3 className="text-4xl font-black text-forest mb-8 text-center tracking-tight">Building on a Proven Legacy</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-justify">
              <p className="text-xl">
                The foundation of Myristika is built upon the wide-ranging expertise of our leadership and technical teams. With decades of experience shaping sustainable forestry, climate-resilient agriculture, and community-based resource management, our experts have a proven legacy of delivering transformative, science-based results. We drive landmark programs by integrating advanced technology to translate complex challenges into tangible solutions. Our work is centered on enhancing livelihoods and creating equitable opportunities, with a dedicated focus on empowering women and marginalized communities. Our work delivers transformative, science-based results that empower communities and restore ecosystems across India and beyond.
              </p>
              
              <p>
                Myristika team has proven experience of implementing the very successful Forest-PLUS 2.0 and 3.0 programs where it developed platforms like the Van system for forest inventory data collection and analysis, TIGRAM (timber traceability solution), DSS (Decision Support) for eco-restoration and agroforestry, and NTFP-IMS for forest-based livelihood. The program brought about a digital transformation in forest management covering more than 150 forest divisions across 14 states spanning over 2.8 million hectares.
              </p>
              <div className="grid md:grid-cols-1 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/attached_assets/Infographic 1_1754583143261.png" 
                      alt="Strategic Policy & Advocacy Infographic" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span><strong>Data-Driven Solutions & Technological Innovation:</strong> We specialize in designing and scaling digital platforms, decision-support systems, and data analytics tools for landscape monitoring, resource assessment, and timber traceability.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span><strong>Community-Centric Engagement & Livelihood Enhancement:</strong> Our approach is rooted in strengthening community-based organizations, fostering grassroots participation, and building equitable, nature-based enterprises that enhance local livelihoods.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span><strong>Biodiversity Conservation & Ecosystem Restoration:</strong> We possess deep expertise in wildlife management, ecosystem restoration, and implementing nature-based solutions to conserve biodiversity and enhance vital ecosystem services.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span><strong>Climate Resilience & Natural Resource Management:</strong> Our team has a proven track record in designing and implementing projects focused on climate change mitigation and adaptation, scientific water conservation, and holistic watershed management across diverse agro-climatic zones.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span><strong>Strategic Communications & Stakeholder Engagement:</strong> We excel at bridging the gap between complex science and public understanding, engaging diverse stakeholders, and communicating impact to drive policy and action.</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg mt-8 text-justify">
                Myristika team has proven experience of implementing the very successful Forest-PLUS 2.0 and 3.0 programs where it developed platforms like the Van system for forest inventory data collection and analysis, TIGRAM (timber traceability solution), DSS (Decision Support) for eco-restoration and agroforestry, and NTFP-IMS for forest-based livelihood. The program brought about a digital transformation in forest management covering more than 150 forest divisions across 14 states spanning an area of around 9 million hectares, trained over 6,500 forestry professionalism and influenced policies. The team learnt that tech works best when co-created with communities and government, when it has a buy-in from stakeholders, when it produces tangible and measurable results, and when it reduces cost and time—Myristika now amplifies & scales this vision.
              </p>
            </div>
          </div>
        </div>
        
        {/* Innovative Technology Suite */}
        <div className="mb-24">
          <div className="text-center mb-16 scroll-reveal">
            <h3 className="text-4xl font-black text-forest mb-6 tracking-tight">Innovative Technology Suite for Natural Resource Management</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-sky to-forest mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify font-medium">
              Our core strength is the development and scaling of user-centric, policy-aligned digital platforms that operationalize participatory, science-based, and climate-smart ecosystem management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Van System */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-forest to-sky rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-tree text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">Van System</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                A comprehensive field-to-desk platform for real-time forest data collection and analytics—supporting inventory, census, ecological monitoring, and geospatial mapping with mobile and web interfaces.
              </p>
            </div>
            
            {/* DSS-Ecorestoration */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-sky to-platinum rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-seedling text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">DSS-Ecorestoration</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                An open-source Web-GIS platform for complex restoration and ecosystem management—supporting site planning, species selection, fire management, and nursery tracking with spatial analytics.
              </p>
            </div>
            
            {/* DSS-Agroforestry */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-platinum to-forest rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-leaf text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">DSS-Agroforestry</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                A decision support system that empowers stakeholders through multi-layered geospatial intelligence for climate-resilient species selection and supply chain optimization.
              </p>
            </div>
            
            {/* NTFP-IMS */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-sky to-forest rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-link text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">NTFP-IMS</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                A next-generation blockchain-based system ensuring trust, traceability, and transparency across non-timber forest produce and agricultural value chains with marketplace integration.
              </p>
            </div>
            
            {/* TIGRAM */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-forest to-platinum rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-qrcode text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">TIGRAM</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                A geo-enabled digital chain-of-custody solution for timber, streamlining e-permitting, provenance verification, QR-based traceability and full timber lifecycle management.
              </p>
            </div>
            
            {/* Future Tech */}
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-platinum to-sky rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg">
                <i className="fas fa-brain text-white text-3xl"></i>
              </div>
              <h4 className="text-2xl font-black text-forest mb-6 text-center tracking-tight">AI & ML Solutions</h4>
              <p className="text-gray-600 text-center leading-relaxed text-justify">
                Developing AI, machine learning, and big data-enabled solutions for ecological monitoring, analysis, and decision support with cutting-edge remote sensing capabilities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Shaping the Future */}
        <div className="scroll-reveal">
          <div className="bg-gradient-to-br from-forest to-nature-dark rounded-3xl shadow-2xl p-12 md:p-16 text-white border border-forest/20">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-center tracking-tight">Shaping the Future: Our Vision for Impact</h3>
            <div className="prose prose-lg max-w-none text-white/90 leading-relaxed mb-8">
              <p className="text-center text-xl mb-8 text-justify">
                Building on the technical excellence and partnerships formed under the Forest-PLUS legacy and other NRM based programs, Myristika is dedicated to driving broad-based, climate-positive impact through innovation and collaboration.
              </p>
            </div>
            
            {/* Ecosystem Services Chain Infographic */}
            <div className="flex justify-center mb-16">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <img 
                  src="/attached_assets/Infographic 2_1754583143260.png" 
                  alt="Ecosystem Services Chain - Connected approach to environmental stewardship" 
                  className="max-w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
            
            {/* 8 Primary Objectives Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-leaf text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Ecosystem Services</h4>
                <p className="text-white/80 text-sm text-justify">Promoting ecosystem services-based approaches to landscape management and restoration.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-globe text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Climate Goals</h4>
                <p className="text-white/80 text-sm text-justify">Accelerating national and global climate, biodiversity, and sustainability goals.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">AI & Data Solutions</h4>
                <p className="text-white/80 text-sm text-justify">Developing AI, machine learning, and big data-enabled solutions for ecological monitoring, analysis, and decision support.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-satellite text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">GIS & Remote Sensing</h4>
                <p className="text-white/80 text-sm text-justify">Designing and deploying cutting-edge GIS and remote sensing systems for real-time landscape intelligence.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Community Governance</h4>
                <p className="text-white/80 text-sm text-justify">Facilitating tech-enabled, community-driven governance architectures that champion gender equity, Indigenous rights, and inclusive participation.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Capacity Building</h4>
                <p className="text-white/80 text-sm text-justify">Supporting robust capacity-building and the development of innovative communication tools.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Partnerships</h4>
                <p className="text-white/80 text-sm text-justify">Strengthening transparency, good governance, and cross-sectoral partnerships for natural resource management.</p>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Community Empowerment</h4>
                <p className="text-white/80 text-sm text-justify">Mainstreaming technology-driven solutions to empower vulnerable communities with sustainable, livelihood-enhancing opportunities.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-white/90 leading-relaxed text-justify">
                Myristika offers a compelling opportunity for governments, donors, NGOs, academia, foundations, and private partners to invest in validated, scalable solutions that address pressing environmental and development challenges. By combining field-tested innovation, institutional experience, and an unwavering focus on inclusivity and resilience, we are charting new pathways towards an environmentally secure and equitable future.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
