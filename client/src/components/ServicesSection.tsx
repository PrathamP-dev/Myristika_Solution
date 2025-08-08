export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-nature-light to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-forest mb-6 tracking-tight">WHAT WE DO</h2>
          <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
            At Myristika Sustainable Solutions, we fuse advanced digital innovation with proven environmental stewardship to address today's most urgent natural resource and climate challenges. Drawing upon our deep roots in the pioneering Forest-PLUS programs and other natural resource management programs, we are committed to catalyzing a transformation in how forest and other landscapes, ecosystems are managed, restored, and governed—ensuring resilience for both ecosystems and the communities that depend on them.
          </p>
        </div>
        
        {/* Building on a Proven Legacy */}
        <div className="mb-20 scroll-reveal">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-forest mb-6 text-center">Building on a Proven Legacy</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 text-justify">
              <p className="text-base">
                The foundation of Myristika is built upon the wide-ranging expertise of our leadership and technical teams. With decades of experience shaping sustainable forestry, climate-resilient agriculture, and community-based resource management, our experts have a proven legacy of delivering transformative, science-based results. We drive landmark programs by integrating advanced technology to translate complex challenges into tangible solutions. Our work is centered on enhancing livelihoods and creating equitable opportunities, with a dedicated focus on empowering women and marginalized communities. Our work delivers transformative, science-based results that empower communities and restore ecosystems across India and beyond.
              </p>
              <div className="grid md:grid-cols-1 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/images/infographic-1.png" 
                      alt="Strategic Policy & Advocacy Infographic" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Forest-PLUS Highlight Box */}
              <div className="bg-gradient-to-r from-forest/10 to-sky/10 border border-forest/20 rounded-xl p-6 mt-8 shadow-md">
                <h4 className="font-bold text-forest mb-3 text-sm">Forest-PLUS Success Story</h4>
                <p className="text-gray-700 text-justify leading-relaxed text-sm">
                  Myristika team has proven experience of implementing the very successful Forest-PLUS 2.0 and 3.0 programs where it developed platforms like the <em>Van</em> system for forest inventory data collection and analysis, TIGRAM (timber traceability solution), DSS (Decision Support) for eco-restoration and agroforestry, and NTFP-IMS for forest-based livelihood. The program brought about a digital transformation in forest management covering more than 150 forest divisions across 14 states spanning an area of around 9 million hectares, trained over 6,500 forestry professionalism and influenced policies. The team learnt that tech works best when co-created with communities and government, when it has a buy-in from stakeholders, when it produces tangible and measurable results, and when it reduces cost and time—Myristika now amplifies & scales this vision.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shaping the Future */}
        <div className="scroll-reveal">
          <div className="bg-gradient-to-br from-forest to-nature-dark rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Shaping the Future: Our Vision for Impact</h3>
            <div className="prose prose-lg max-w-none text-white/90 leading-relaxed mb-8">
              <p className="text-center text-base mb-8">
                Building on the technical excellence and partnerships formed under the Forest-PLUS legacy and other NRM based programs, Myristika is dedicated to driving broad-based, climate-positive impact through innovation and collaboration.
              </p>
            </div>
            
            {/* Ecosystem Services Chain Infographic */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img 
                  src="/images/infographic-2.png" 
                  alt="Ecosystem Services Chain - Connected approach to environmental stewardship" 
                  className="max-w-full h-auto rounded-lg"
                />
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
