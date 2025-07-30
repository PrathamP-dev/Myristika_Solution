export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-black text-forest mb-6 tracking-tight">WHO WE ARE</h2>
          <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Myristika Sustainable Solutions, we believe the future of our forests rests at the intersection of technology and nature.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Fuelled by the urgent need to safeguard the planet's lungs, we bring together advanced digital innovation with proven principles of sustainable and participatory resource management to reimagine the monitoring, restoration, and governance of forest landscapes.
              </p>
              
              <p>
                Forests sustain life—regulating our climate, protecting biodiversity, purifying air and water, and anchoring the livelihoods of millions. Yet, they are increasingly threatened by deforestation, habitat loss, and climate change. Myristika exists to meet these challenges head-on, empowering a new era of natural resource management that is not only smarter, but also more inclusive and resilient.
              </p>
              
              <p>
                <strong>Our mission is clear:</strong> transform how forests and natural resources are managed—by embedding real-time insights, predictive analytics, and participatory tools into every stage of planning, oversight, and restoration. We strive for a future where technology and community-led stewardship work hand-in-hand, ensuring both ecological security and social equity.
              </p>
              
              <p>
                What truly sets Myristika apart is our diverse, interdisciplinary team—blending the expertise of environmental and social scientists, software developers, GIS analysts, policy strategists, and community facilitators. Every solution we create is field-tested and co-developed alongside end users, rooted in ground realities and refined for impact.
              </p>
              
              <p>
                Our platforms and tools are not only aligned with national and global best practices, but also designed to advance inclusive, gender-equitable, and rights-based resource governance.
              </p>
              
              <p>
                Our journey began with the pioneering USAID-supported Forest-PLUS programs, where our leadership expanded sustainable, technology-driven forestry across India—training thousands, institutionalizing digital innovations, and strengthening community livelihoods from village level to national policy.
              </p>
              
              <p>
                Today, Myristika builds upon this legacy, scaling proven innovations and introducing next-generation tools for forest monitoring, eco-restoration, agroforestry, value-chain traceability, and more.
              </p>
              
              <p className="text-forest font-semibold text-xl">
                We are Myristika: dedicated to a world where forests and communities don't just survive—but thrive, together.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-gradient-to-br from-forest to-sky rounded-xl flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-forest mb-2">Interdisciplinary Team</h3>
            <p className="text-gray-600">Environmental scientists, developers, GIS analysts, and community facilitators</p>
          </div>
          
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-gradient-to-br from-sky to-platinum rounded-xl flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-forest mb-2">Community-Centered</h3>
            <p className="text-gray-600">Field-tested solutions co-developed with end users and local communities</p>
          </div>
          
          <div className="text-center scroll-reveal">
            <div className="w-16 h-16 bg-gradient-to-br from-platinum to-forest rounded-xl flex items-center justify-center mb-4 mx-auto">
              <i className="fas fa-leaf text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-forest mb-2">Proven Legacy</h3>
            <p className="text-gray-600">Built on the success of USAID-supported Forest-PLUS programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
