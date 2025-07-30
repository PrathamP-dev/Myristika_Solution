export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-nature-light to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-forest mb-6 tracking-tight">WHAT WE DO</h2>
          <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Myristika Sustainable Solutions, we fuse advanced digital innovation with proven environmental stewardship to address today's most urgent natural resource and climate challenges.
          </p>
        </div>
        
        {/* Building on a Proven Legacy */}
        <div className="mb-20 scroll-reveal">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-forest mb-6 text-center">Building on a Proven Legacy</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Before evolving into Myristika, our leadership and technical teams drove the landmark USAID-supported Forest-PLUS initiatives, shaping the landscape of sustainable, data-driven forest management across India and beyond. Through Forest-PLUS 2.0 and 3.0, we:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span>Expanded sustainable forestry from a handful of divisions to over <strong>185 forest divisions</strong> across <strong>14 Indian states</strong>—impacting over <strong>9 million hectares</strong> of vital landscapes.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span>Trained more than <strong>7,500 individuals</strong>—including government foresters, community members, and other frontline personnel—in modern digital forestry and agroforestry practices.</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span>Developed, piloted, and institutionalized technological and methodological innovations in State Forest Departments and key training institutions.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-sky text-xl mt-1"></i>
                    <span>Implemented ecosystem-based management plans that enhanced biodiversity and ecosystem services while strengthening community livelihoods.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Innovative Technology Suite */}
        <div className="mb-20">
          <div className="text-center mb-12 scroll-reveal">
            <h3 className="text-3xl font-bold text-forest mb-4">Innovative Technology Suite for Natural Resource Management</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core strength is the development and scaling of user-centric, policy-aligned digital platforms that operationalize participatory, science-based, and climate-smart ecosystem management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Van System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-forest to-sky rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-tree text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">Van System</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                A comprehensive field-to-desk platform for real-time forest data collection and analytics—supporting inventory, census, ecological monitoring, and geospatial mapping with mobile and web interfaces.
              </p>
            </div>
            
            {/* DSS-Ecorestoration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-sky to-platinum rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">DSS-Ecorestoration</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                An open-source Web-GIS platform for complex restoration and ecosystem management—supporting site planning, species selection, fire management, and nursery tracking with spatial analytics.
              </p>
            </div>
            
            {/* DSS-Agroforestry */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-platinum to-forest rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">DSS-Agroforestry</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                A decision support system that empowers stakeholders through multi-layered geospatial intelligence for climate-resilient species selection and supply chain optimization.
              </p>
            </div>
            
            {/* NTFP-IMS */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-sky to-forest rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-link text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">NTFP-IMS</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                A next-generation blockchain-based system ensuring trust, traceability, and transparency across non-timber forest produce and agricultural value chains with marketplace integration.
              </p>
            </div>
            
            {/* TIGRAM */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-forest to-platinum rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-qrcode text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">TIGRAM</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                A geo-enabled digital chain-of-custody solution for timber, streamlining e-permitting, provenance verification, QR-based traceability and full timber lifecycle management.
              </p>
            </div>
            
            {/* Future Tech */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-platinum to-sky rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-forest mb-4 text-center">AI & ML Solutions</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Developing AI, machine learning, and big data-enabled solutions for ecological monitoring, analysis, and decision support with cutting-edge remote sensing capabilities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Shaping the Future */}
        <div className="scroll-reveal">
          <div className="bg-gradient-to-br from-forest to-nature-dark rounded-3xl shadow-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Shaping the Future: Our Vision for Impact</h3>
            <div className="prose prose-lg max-w-none text-white/90 leading-relaxed mb-8">
              <p className="text-center text-xl mb-8">
                Building on the technical excellence and partnerships formed under the Forest-PLUS legacy, Myristika is dedicated to driving broad-based, climate-positive impact through innovation and collaboration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-globe text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Ecosystem Services</h4>
                <p className="text-white/80 text-sm">Promoting ecosystem services-based approaches to landscape management and restoration</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-chart-line text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Climate Goals</h4>
                <p className="text-white/80 text-sm">Accelerating national and global climate, biodiversity, and sustainability goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Community Governance</h4>
                <p className="text-white/80 text-sm">Facilitating tech-enabled, community-driven governance architectures that champion equity and inclusion</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-handshake text-white text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Partnerships</h4>
                <p className="text-white/80 text-sm">Strengthening transparency, good governance, and cross-sectoral partnerships for natural resource management</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-white/90 leading-relaxed">
                Myristika offers a compelling opportunity for governments, donors, NGOs, academia, foundations, and private partners to invest in validated, scalable solutions that address pressing environmental and development challenges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
