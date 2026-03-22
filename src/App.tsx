/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Megaphone, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Heart,
  Menu,
  X,
  Check,
  Linkedin
} from "lucide-react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

const LazyImage = ({ src, alt, className, loading = "lazy", ...props }: { src: string; alt: string; className?: string; loading?: "lazy" | "eager"; [key: string]: any }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-charcoal/5 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        className={`w-full h-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} ${props.style?.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-saffron/20 border-t-saffron rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-cream/95 backdrop-blur-md py-3 shadow-lg border-b border-saffron/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-condensed font-extrabold tracking-widest uppercase text-saffron">
          Amit<span className="text-charcoal">Jani</span>.in
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["परिचय", "विज़न", "मीडिया", "गैलरी", "समाचार", "कार्यक्रम"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-xs font-condensed font-semibold uppercase tracking-widest text-charcoal/70 hover:text-saffron transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-saffron text-dark px-6 py-2 text-xs font-condensed font-bold uppercase tracking-widest clip-path-btn hover:bg-saffron-light transition-colors"
          >
            जुड़ें
          </a>
        </div>

        <button className="md:hidden text-cream" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-saffron/20 px-6 py-8 flex flex-col gap-6"
        >
          {["परिचय", "विज़न", "मीडिया", "गैलरी", "समाचार", "कार्यक्रम"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-condensed font-semibold uppercase tracking-widest text-charcoal/70 hover:text-saffron"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-saffron text-dark px-6 py-3 text-center font-condensed font-bold uppercase tracking-widest clip-path-btn"
          >
            जुड़ें
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,107,0,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_10%_80%,rgba(10,61,43,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,107,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/30 px-4 py-1.5 rounded-sm mb-8 w-fit">
            <span className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
            <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.2em] text-saffron">राष्ट्रीय अध्यक्ष · उत्तर प्रदेश</span>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl font-black leading-[0.9] mb-4">
            Amit<br /><span className="text-saffron">Jani</span>
          </h1>
          
          <p className="font-hindi text-xl md:text-2xl text-gold mb-8 opacity-90">
            राष्ट्रीय अध्यक्ष — उत्तर प्रदेश नवनिर्माण सेना
          </p>
          
          <div className="border-l-4 border-saffron pl-6 mb-10">
            <p className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-charcoal/80">
              नई सोच।<br />नया उत्तर प्रदेश।<br />नवनिर्माण।
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#support" className="bg-saffron text-dark px-10 py-4 font-condensed font-bold uppercase tracking-widest clip-path-btn hover:bg-saffron-light transition-all transform hover:-translate-y-1">
              साथ दीजिए
            </a>
            <a href="#about" className="border border-charcoal/30 text-charcoal px-10 py-4 font-condensed font-bold uppercase tracking-widest hover:border-saffron hover:text-saffron transition-all">
              परिचय जानें
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex items-end justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-[3/4]">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron/15 to-deep-green/20 clip-path-portrait-bg translate-y-4" />
            <div className="absolute inset-0 bg-white border-t-2 border-saffron/30 clip-path-portrait flex items-center justify-center overflow-hidden">
              <LazyImage 
                src="Public/Amit1.jpg" 
                alt="Amit Jani Official Portrait"
                loading="eager"
                className="w-full h-full"
              />
            </div>
          </div>
          
          <div className="absolute -right-4 top-1/4 bottom-10 w-px bg-gradient-to-b from-transparent via-saffron/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => (
  <div className="bg-saffron py-3 overflow-hidden whitespace-nowrap border-y border-charcoal/10">
    <div className="inline-block animate-marquee">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="font-condensed font-bold text-sm uppercase tracking-[0.2em] text-dark px-8">उत्तर प्रदेश नवनिर्माण सेना</span>
          <span className="text-dark/30">✦</span>
          <span className="font-condensed font-bold text-sm uppercase tracking-[0.2em] text-dark px-8">Amit Jani – National President</span>
          <span className="text-dark/30">✦</span>
          <span className="font-condensed font-bold text-sm uppercase tracking-[0.2em] text-dark px-8">युवा नेतृत्व · सशक्त उत्तर प्रदेश</span>
          <span className="text-dark/30">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <section id="परिचय" className="bg-white py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex items-center gap-4 text-saffron mb-4">
          <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">परिचय</span>
          <div className="h-px w-12 bg-saffron/40" />
        </div>
        <h2 className="font-display text-5xl font-bold leading-tight mb-8 text-charcoal">
          एक नेता जो<br /><span className="text-saffron">जनता से जुड़ा है</span>
        </h2>
        
        <div className="relative bg-gradient-to-br from-saffron/10 to-deep-green/15 border border-saffron/20 p-10">
          <span className="absolute top-4 left-6 font-display text-8xl text-saffron/10 leading-none">"</span>
          <p className="font-hindi text-xl italic leading-relaxed text-charcoal/90 mb-6 relative z-10">
            उत्तर प्रदेश के युवाओं, किसानों और आम नागरिकों के लिए एक ऐसा मंच जो उनकी आवाज़ को सत्ता के गलियारों तक पहुँचाए।
          </p>
          <p className="font-condensed text-sm font-bold uppercase tracking-widest text-saffron">— अमित जानी, राष्ट्रीय अध्यक्ष</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-10">
          {["युवा नेतृत्व", "किसान अधिकार", "सामाजिक न्याय", "रोज़गार", "महिला सशक्तिकरण"].map(tag => (
            <span key={tag} className="border border-saffron/30 text-saffron px-4 py-1 text-[10px] font-condensed font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="border-l-4 border-saffron pl-6 text-xl font-medium text-charcoal leading-relaxed">
          अमित जानी उत्तर प्रदेश नवनिर्माण सेना के राष्ट्रीय अध्यक्ष हैं — एक जन-आंदोलन जो प्रदेश की राजनीति में पारदर्शिता, युवा-नेतृत्व और समावेशी विकास की माँग करता है।
        </p>
        <p className="text-charcoal/70 leading-loose">
          वे UP की राजनीति में एक ताज़ा और जुझारू आवाज़ के रूप में उभरे हैं जो सोशल मीडिया और जमीनी संगठन दोनों के ज़रिये जनता से संवाद करते हैं। उनकी पहुँच Facebook और Instagram पर लाखों अनुयायियों तक है।
        </p>
        <p className="text-charcoal/70 leading-loose">
          उनके नेतृत्व में, उत्तर प्रदेश नवनिर्माण सेना ने प्रदेश के 75+ ज़िलों में अपनी उपस्थिति दर्ज की है — किसानों के मुद्दे, बेरोज़गारी, और शासन-व्यवस्था में सुधार के लिए आवाज़ उठाते हुए।
        </p>
        
        <div className="flex gap-4 pt-6">
          <a href="#" className="flex items-center gap-2 border border-charcoal/20 px-6 py-3 text-xs font-condensed font-bold uppercase tracking-widest hover:border-saffron hover:text-saffron transition-all text-charcoal">
            <Facebook size={16} /> Facebook
          </a>
          <a href="#" className="flex items-center gap-2 border border-charcoal/20 px-6 py-3 text-xs font-condensed font-bold uppercase tracking-widest hover:border-saffron hover:text-saffron transition-all text-charcoal">
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Vision = () => (
  <section id="विज़न" className="bg-cream py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 text-saffron mb-4">
          <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">राजनीतिक विज़न</span>
          <div className="h-px w-12 bg-saffron/40" />
        </div>
        <h2 className="font-display text-5xl font-bold leading-tight mb-6 text-charcoal">
          नवनिर्माण का<br /><span className="text-saffron">एजेंडा</span>
        </h2>
        <p className="max-w-2xl text-charcoal/60 text-lg leading-relaxed">
          उत्तर प्रदेश नवनिर्माण सेना की नींव इस विश्वास पर है कि UP की असली ताक़त उसके युवाओं, किसानों और मेहनतकश नागरिकों में है।
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-px bg-saffron/10 border border-saffron/10">
        {[
          { icon: "🌾", title: "किसान सम्मान", hindi: "Farmer Rights", desc: "उचित MSP, कर्ज़माफ़ी, और सिंचाई सुविधाओं पर सशक्त नीतिगत दबाव। किसान ही UP की रीढ़ है।" },
          { icon: "💼", title: "युवा रोज़गार", hindi: "Youth Employment", desc: "सरकारी भर्तियों में पारदर्शिता, कौशल विकास, और स्टार्टअप इकोसिस्टम को बढ़ावा।" },
          { icon: "⚖️", title: "सामाजिक न्याय", hindi: "Social Justice", desc: "दलित, पिछड़े और अल्पसंख्यक समुदायों के अधिकारों की रक्षा — समान अवसर, समान सम्मान।" },
          { icon: "👩", title: "महिला सशक्तिकरण", hindi: "Women Empowerment", desc: "महिला सुरक्षा, शिक्षा और राजनीतिक भागीदारी में बढ़ोतरी के लिए ठोस कदम।" },
          { icon: "🏗️", title: "बुनियादी ढाँचा", hindi: "Infrastructure", desc: "सड़क, बिजली, पानी और स्वास्थ्य — हर गाँव तक। विकास सिर्फ़ शहरों तक सीमित नहीं।" },
          { icon: "🔍", title: "पारदर्शी शासन", hindi: "Clean Governance", desc: "भ्रष्टाचार-मुक्त प्रशासन, RTI सशक्तिकरण, और जवाबदेह जन-प्रतिनिधि।" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 relative group overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-saffron transition-all duration-500 group-hover:w-full" />
            <span className="absolute top-6 right-8 font-condensed text-6xl font-black text-saffron/5 leading-none">0{i+1}</span>
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="font-condensed text-xl font-bold uppercase tracking-wider text-charcoal mb-1">
              {item.title}
              <small className="block font-hindi text-sm text-saffron font-normal normal-case mt-1">{item.hindi}</small>
            </h3>
            <p className="text-charcoal/50 text-sm leading-relaxed mt-4">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const images = [
    { src: "Public/Amit1.jpg", title: "जनसभा संबोधन", loc: "लखनऊ", category: "जनसभा" },
    { src: "Public/Amit2.jpg", title: "किसान संवाद", loc: "मेरठ", category: "संवाद" },
    { src: "Public/Amit3.jpg", title: "युवा सम्मेलन", loc: "आगरा", category: "सम्मेलन" },
    { src: "Public/Amit4.jpg", title: "पदयात्रा", loc: "वाराणसी", category: "जनसभा" },
    { src: "Public/Amit5.jpg", title: "प्रेस वार्ता", loc: "कानपुर", category: "मीडिया" },
    { src: "Public/Amit6.jpg", title: "कार्यकर्ता बैठक", loc: "प्रयागराज", category: "संगठन" },
    { src: "Public/Amit7.jpg", title: "महिला अधिकार रैली", loc: "झांसी", category: "जनसभा" },
    { src: "Public/Amit8.jpg", title: "विकास कार्यों का निरीक्षण", loc: "गोरखपुर", category: "विकास" }
  ];

  const filters = ["All", "जनसभा", "संवाद", "संगठन", "विकास", "मीडिया"];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section id="गैलरी" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 text-saffron mb-4">
              <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">फोटो गैलरी</span>
              <div className="h-px w-12 bg-saffron/40" />
            </div>
            <h2 className="font-display text-5xl font-bold leading-tight text-charcoal">
              आंदोलन की<br /><span className="text-saffron">झलकियां</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-[10px] font-condensed font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === filter 
                    ? "bg-saffron border-saffron text-dark" 
                    : "border-charcoal/10 text-charcoal/40 hover:border-saffron hover:text-saffron"
                }`}
              >
                {filter === "All" ? "सभी" : filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div 
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                onClick={() => setSelectedImage(img.src)}
                className="relative aspect-square overflow-hidden group cursor-pointer border border-saffron/10"
              >
                <LazyImage 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 backdrop-blur-[1px]">
                  <h4 className="font-condensed text-xl font-black text-saffron uppercase tracking-wider mb-1 drop-shadow-md">{img.title}</h4>
                  <div className="flex items-center gap-2 text-sm font-bold text-white tracking-wide drop-shadow-sm">
                    <MapPin size={14} className="text-saffron fill-saffron/20" /> {img.loc}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white/50 hover:text-saffron transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video md:aspect-auto max-h-full overflow-hidden border border-saffron/20 shadow-2xl shadow-saffron/10"
              onClick={(e) => e.stopPropagation()}
            >
              <LazyImage 
                src={selectedImage} 
                alt="Expanded view"
                className="w-full h-full"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const News = () => (
  <section id="समाचार" className="bg-cream py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 text-saffron mb-4">
        <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">समाचार और अपडेट</span>
        <div className="h-px w-12 bg-saffron/40" />
      </div>
      <h2 className="font-display text-5xl font-bold leading-tight mb-12 text-charcoal">
        ताज़ा<br /><span className="text-saffron">खबरें</span>
      </h2>

      <div className="space-y-0">
        {[
          { source: "Amar Ujala", title: "अमित जानी ने UP सरकार से बेरोज़गार युवाओं के लिए विशेष भर्ती अभियान की माँग की", sub: "उत्तर प्रदेश नवनिर्माण सेना ने लखनऊ में विरोध-प्रदर्शन का नेतृत्व किया", date: "फ़रवरी 2025" },
          { source: "Dainik Jagran", title: "नवनिर्माण सेना की महापंचायत में हज़ारों किसान शामिल", sub: "अमित जानी ने कहा — किसान की आवाज़ दिल्ली तक पहुँचेगी", date: "जनवरी 2025" },
          { source: "Live Hindustan", title: "अमित जानी ने महिला सुरक्षा पर UP सरकार को घेरा", sub: "UP नवनिर्माण सेना ने विधानसभा के बाहर प्रदर्शन किया", date: "दिसंबर 2024" },
          { source: "Facebook Live", title: "Social Media Live: राष्ट्रीय अध्यक्ष अमित जानी ने युवाओं से किया सीधा संवाद", sub: "3 घंटे की Live बैठक में 50,000 से अधिक दर्शक शामिल", date: "नवंबर 2024" }
        ].map((news, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[150px_1fr_150px] gap-8 items-center py-8 border-b border-saffron/10 hover:bg-saffron/5 transition-colors cursor-pointer group px-4"
          >
            <div className="bg-saffron/10 border border-saffron/20 px-4 py-1.5 text-center text-[10px] font-condensed font-bold uppercase tracking-widest text-saffron">
              {news.source}
            </div>
            <div>
              <h4 className="font-condensed text-lg font-bold text-charcoal group-hover:text-saffron transition-colors">{news.title}</h4>
              <p className="text-sm text-charcoal/40 mt-1">{news.sub}</p>
            </div>
            <div className="text-right font-condensed text-xs text-charcoal/30 tracking-widest uppercase">
              {news.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Events = () => (
  <section id="कार्यक्रम" className="bg-charcoal py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 text-saffron mb-4">
        <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">आगामी कार्यक्रम</span>
        <div className="h-px w-12 bg-saffron/40" />
      </div>
      <h2 className="font-display text-5xl font-bold leading-tight mb-12">
        जन-सभाएं और<br /><span className="text-saffron">अभियान</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { day: "12", month: "Mar", type: "महारैली", title: "युवा रोज़गार महासम्मेलन", loc: "लखनऊ — रामलीला मैदान" },
          { day: "18", month: "Mar", type: "जन-संवाद", title: "किसान संवाद कार्यक्रम", loc: "मेरठ — गन्ना संस्थान परिसर" },
          { day: "25", month: "Mar", type: "प्रेस कॉन्फ़्रेंस", title: "नवनिर्माण सेना का 100-दिन एजेंडा जारी", loc: "प्रेस क्लब — लखनऊ" },
          { day: "02", month: "Apr", type: "पदयात्रा", title: "नवनिर्माण जन-जागरण यात्रा — पूर्वांचल", loc: "वाराणसी → आज़मगढ़ → गोरखपुर" }
        ].map((event, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="flex gap-6 bg-saffron/5 border border-saffron/10 border-l-4 border-l-saffron p-8 hover:translate-x-2 transition-transform"
          >
            <div className="bg-saffron text-dark p-3 text-center min-w-[70px] h-fit">
              <div className="font-condensed text-3xl font-black leading-none">{event.day}</div>
              <div className="font-condensed text-[10px] font-bold uppercase tracking-widest mt-1">{event.month}</div>
            </div>
            <div>
              <div className="text-[10px] font-condensed font-bold uppercase tracking-[0.2em] text-saffron mb-2">{event.type}</div>
              <h4 className="font-condensed text-xl font-bold text-cream mb-3">{event.title}</h4>
              <div className="flex items-center gap-2 text-cream/40 text-xs">
                <MapPin size={14} className="text-saffron" /> {event.loc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", district: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 text-saffron mb-4">
            <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">संपर्क करें</span>
            <div className="h-px w-12 bg-saffron/40" />
          </div>
          <h2 className="font-display text-5xl font-bold leading-tight mb-6 text-charcoal">
            आंदोलन में<br /><span className="text-saffron">जुड़ें</span>
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-10">
            अगर आप उत्तर प्रदेश नवनिर्माण सेना के साथ जुड़ना चाहते हैं, मीडिया संपर्क करना चाहते हैं, या किसी अभियान में सहयोग देना चाहते हैं — हम से संपर्क करें।
          </p>
          
          <div className="flex flex-wrap gap-4">
            {[
              { icon: <Facebook size={18} />, label: "Facebook" },
              { icon: <Instagram size={18} />, label: "Instagram" },
              { icon: <Twitter size={18} />, label: "Twitter/X" }
            ].map((social, i) => (
              <a key={i} href="#" className="flex items-center gap-3 border border-saffron/20 px-6 py-3 text-xs font-condensed font-bold uppercase tracking-widest text-charcoal hover:border-saffron hover:text-saffron transition-all">
                {social.icon} {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          className="relative"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-saffron/10 border border-saffron/30 p-12 text-center"
            >
              <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-dark" size={32} />
              </div>
              <h3 className="font-display text-3xl font-bold text-charcoal mb-4">धन्यवाद!</h3>
              <p className="text-charcoal/60 mb-8">आपका संदेश अमित जानी के कार्यालय को भेज दिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-saffron font-condensed font-bold uppercase tracking-widest hover:underline"
              >
                एक और संदेश भेजें
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-condensed font-bold uppercase tracking-widest text-charcoal/40">नाम / Name *</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-saffron/5 border border-saffron/15 p-4 text-charcoal outline-none focus:border-saffron transition-colors" 
                    placeholder="आपका पूरा नाम" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-condensed font-bold uppercase tracking-widest text-charcoal/40">मोबाइल / Phone *</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    className="w-full bg-saffron/5 border border-saffron/15 p-4 text-charcoal outline-none focus:border-saffron transition-colors" 
                    placeholder="+91 XXXXX XXXXX" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-condensed font-bold uppercase tracking-widest text-charcoal/40">ईमेल / Email</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full bg-saffron/5 border border-saffron/15 p-4 text-charcoal outline-none focus:border-saffron transition-colors" 
                  placeholder="your@email.com" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-condensed font-bold uppercase tracking-widest text-charcoal/40">ज़िला / District</label>
                <select 
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full bg-saffron/5 border border-saffron/15 p-4 text-charcoal outline-none focus:border-saffron transition-colors appearance-none"
                >
                  <option value="" className="bg-cream">अपना ज़िला चुनें</option>
                  {["लखनऊ", "आगरा", "वाराणसी", "मेरठ", "कानपुर", "प्रयागराज"].map(d => (
                    <option key={d} value={d} className="bg-cream">{d}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-condensed font-bold uppercase tracking-widest text-charcoal/40">संदेश / Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-saffron/5 border border-saffron/15 p-4 text-charcoal outline-none focus:border-saffron transition-colors h-32 resize-none" 
                  placeholder="आप किस तरह से जुड़ना चाहते हैं? स्वयंसेवक, मीडिया, समर्थक..." 
                />
              </div>
              
              <button 
                disabled={isSubmitting}
                type="submit"
                className="bg-saffron text-dark px-10 py-4 font-condensed font-bold uppercase tracking-widest clip-path-btn hover:bg-saffron-light transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "भेजा जा रहा है..." : "संदेश भेजें ↗"}
              </button>
              
              <p className="text-[10px] text-charcoal/30 uppercase tracking-widest">आपकी जानकारी सुरक्षित है। हम 24 घंटे के भीतर संपर्क करेंगे।</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Support = () => (
  <section id="support" className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-deep-green/15 opacity-50" />
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="flex items-center justify-center gap-4 text-saffron mb-4">
        <div className="h-px w-12 bg-saffron/40" />
        <span className="text-[10px] font-condensed font-bold uppercase tracking-[0.3em]">सहयोग करें</span>
        <div className="h-px w-12 bg-saffron/40" />
      </div>
      <h2 className="font-display text-5xl font-bold leading-tight mb-6">
        नवनिर्माण आंदोलन को<br /><span className="text-saffron">आगे बढ़ाएं</span>
      </h2>
      <p className="max-w-xl mx-auto text-cream/60 leading-relaxed mb-16">
        आपका हर योगदान — चाहे समय हो, आवाज़ हो, या आर्थिक सहयोग — इस आंदोलन को ताक़त देता है।
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          { amount: "₹500", label: "सहयोगी" },
          { amount: "₹1,000", label: "सक्रिय सदस्य" },
          { amount: "₹5,000", label: "⭐ संरक्षक", featured: true },
          { amount: "₹10,000", label: "महादाता" }
        ].map((tier, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-10 border transition-all cursor-pointer min-w-[200px] ${tier.featured ? "bg-saffron border-saffron text-dark" : "bg-saffron/5 border-saffron/20 text-charcoal hover:border-saffron"}`}
          >
            <div className="font-condensed text-4xl font-black mb-1">{tier.amount}</div>
            <div className={`font-condensed text-[10px] font-bold uppercase tracking-widest ${tier.featured ? "text-dark/60" : "text-charcoal/40"}`}>{tier.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-saffron text-dark px-12 py-5 font-condensed font-bold uppercase tracking-widest clip-path-btn hover:bg-saffron-light transition-all">
          डोनेट करें — UPI / Online
        </button>
        <a href="#contact" className="border border-charcoal/30 text-charcoal px-12 py-5 font-condensed font-bold uppercase tracking-widest hover:border-saffron hover:text-saffron transition-all">
          स्वयंसेवक बनें
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t border-saffron/10 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr] gap-16 mb-20">
      <div>
        <div className="font-display text-3xl font-bold text-charcoal mb-4">
          Amit<span className="text-saffron">Jani</span>.in
        </div>
        <p className="font-hindi text-charcoal/40 leading-relaxed mb-8">
          उत्तर प्रदेश नवनिर्माण सेना<br />राष्ट्रीय अध्यक्ष — अमित जानी<br />नई सोच। नया उत्तर प्रदेश।
        </p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 border border-saffron/20 flex items-center justify-center text-charcoal/50 hover:border-saffron hover:text-saffron transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h5 className="font-condensed text-[10px] font-bold uppercase tracking-[0.3em] text-saffron mb-8">Quick Links</h5>
        <ul className="space-y-4">
          {["परिचय", "विज़न और एजेंडा", "मीडिया गैलरी", "समाचार", "कार्यक्रम"].map(link => (
            <li key={link}>
              <a href="#" className="text-sm text-charcoal/40 hover:text-saffron transition-colors">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h5 className="font-condensed text-[10px] font-bold uppercase tracking-[0.3em] text-saffron mb-8">जुड़ें</h5>
        <ul className="space-y-4">
          {["संपर्क करें", "डोनेट करें", "स्वयंसेवक बनें", "न्यूज़लेटर सब्सक्राइब", "प्रेस / मीडिया"].map(link => (
            <li key={link}>
              <a href="#" className="text-sm text-charcoal/40 hover:text-saffron transition-colors">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto pt-10 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="font-condensed text-[10px] uppercase tracking-widest text-charcoal/20">
        © 2025 अमित जानी — उत्तर प्रदेश नवनिर्माण सेना। सर्वाधिकार सुरक्षित।
      </p>
      <p className="font-condensed text-[10px] uppercase tracking-widest text-charcoal/20">
        Built with 🧡 for UP
      </p>
    </div>
    
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] z-[100]" />
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Vision />
      <Gallery />
      <News />
      <Events />
      <Contact />
      <Support />
      <Footer />
    </div>
  );
}
