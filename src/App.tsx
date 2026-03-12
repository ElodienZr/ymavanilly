/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Instagram, Facebook, ChevronRight, Leaf, Star, Award, LucideLink, Linkedin } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "vanilla-premium",
    name: "Vanille de Madagascar - Qualité Premium",
    description: "Gousses de vanille d'exception, charnues et luisantes. Un parfum intense et envoûtant, pilier de la gastronomie malgache.",
    image: "/G0s6mWkE.jpg",
    details: ["Origine: SAVA, Madagascar", "Qualité: Noire / Gourmet", "Taille: 17-21 cm", "Séchage: Traditionnel"]
  },
  {
    id: "vanilla-gourmet",
    name: "Vanille de Madagascar - Sélection Gourmet",
    description: "Une sélection rigoureuse de nos meilleures gousses, présentées en fagots traditionnels pour préserver toute leur fraîcheur et leurs arômes.",
    image: "/0CyFVAMs.jpg",
    details: ["Origine: Madagascar", "Conditionnement: Fagot", "Arôme: Vanillé Intense", "Usage: Pâtisserie Fine"]
  },
  {
    id: "vanilla-artisan",
    name: "Vanille de Madagascar - Édition Artisanale",
    description: "Le fruit d'un savoir-faire ancestral. Nos gousses sont préparées avec soin pour offrir une expérience sensorielle unique.",
    image: "/vanille-carre.jpg",
    details: ["Origine: Madagascar", "Récolte: Manuelle", "Préparation: Artisanale", "Texture: Souple"]
  },
  {
    id: "pepper",
    name: "Poivre Vert de Madagascar",
    description: "Récolté avant maturité, ce poivre vert offre une fraîcheur végétale unique et un piquant délicat. Idéal pour les sauces et les viandes blanches.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2027&auto=format&fit=crop",
    details: ["Type: Piper Nigrum", "Récolte: Manuelle", "Séchage: Naturel", "Arôme: Frais et Fruité"]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

    return (
      <div className="min-h-screen selection:bg-secondary/30">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img 
                src="/Logo_yma.png" 
                alt="Yma Vanilly Logo" 
                className="h-16 w-16"
              />
              <span className="text-xl font-serif font-bold tracking-widest text-primary hidden sm:block">YMA VANILLY DE MADAGASCAR</span>
            </div>
            
            <div className="hidden md:flex items-center gap-12">
              <button onClick={() => scrollToSection('products')} className="text-sm uppercase tracking-widest hover:text-secondary transition-colors">Produits</button>
              <button onClick={() => scrollToSection('about')} className="text-sm uppercase tracking-widest hover:text-secondary transition-colors">Notre Histoire</button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-primary text-cream rounded-full text-sm uppercase tracking-widest hover:bg-secondary transition-all">Contact</button>
            </div>

          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-cream border-b border-primary/5 p-6 flex flex-col gap-6"
          >
            <button onClick={() => scrollToSection('products')} className="text-left text-lg font-serif">Produits</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-lg font-serif">Notre Histoire</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-serif">Contact</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Madagascar Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/0 via-cream/50 to-cream"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src="/Logo_yma.png" 
              alt="Yma Vanilly Logo" 
              className="w-64 md:w-80 drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-serif mb-6 text-primary"
          >
            Vanille de Madagascar
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 italic"
          >
            Découvrez l'excellence de la vanille et du poivre vert, cultivés avec passion sur les terres fertiles de la Grande Île.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button 
              onClick={() => scrollToSection('products')}
              className="group flex items-center gap-3 mx-auto text-sm uppercase tracking-[0.3em] font-medium hover:text-secondary transition-all"
            >
              Explorer nos trésors
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Nos Produits</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">Une Sélection d'Exception</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
                </div>
                <h3 className="text-3xl font-serif mb-4 text-primary">{product.name}</h3>
                <p className="text-secondary leading-relaxed mb-6 italic">
                  {product.description}
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary/70">
                      <Leaf className="w-4 h-4 text-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-primary text-primary rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-cream transition-all"
                >
                  Demander un devis
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Notre Histoire</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">De Madagascar à votre Table</h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Yma Vanilly est née d'un amour profond pour les richesses agricoles de Madagascar. Nous travaillons en étroite collaboration avec des producteurs locaux pour vous garantir des produits d'une pureté inégalée.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Chaque gousse de vanille est pollinisée à la main, chaque grain de poivre est sélectionné avec soin, respectant les cycles de la nature et le savoir-faire ancestral malgache.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="text-xs uppercase tracking-widest font-bold">Qualité Premium</span>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
                <span className="text-xs uppercase tracking-widest font-bold">100% Naturel</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/unnamed.png" 
              alt="Madagascar Spices"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl text-cream hidden md:block">
              <p className="text-3xl font-serif mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest">Origine Madagascar</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Parlons de vos Projets</h2>
              <p className="text-lg text-secondary mb-12">
                Que vous soyez un professionnel de la gastronomie ou un amateur passionné, nous sommes à votre écoute pour répondre à vos besoins.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">Email</p>
                    <p className="text-primary">ymavanilly@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">Téléphone</p>
                    <p className="text-primary">07 59 74 39 86</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-secondary">Siège</p>
                    <p className="text-primary">Charleville Mézières, France</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-cream p-10 rounded-3xl space-y-6 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary">Nom</label>
                  <input type="text" className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-secondary">Prénom</label>
                  <input type="text" className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-secondary">Email</label>
                <input type="email" className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-secondary">Message</label>
                <textarea rows={4} className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-cream rounded-xl text-sm uppercase tracking-widest font-bold hover:bg-secondary transition-all">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="text-center md:text-left">
              <span className="text-2xl font-serif font-bold tracking-widest block mb-2">YMA VANILLY</span>
              <p className="text-cream/60 text-sm max-w-xs">L'excellence des épices de Madagascar livrée chez vous.</p>
            </div>
            
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/yma-vanilly-3aa0b43b7/" className="hover:text-secondary transition-colors" target="blanc"><Linkedin className="w-6 h-6" /></a>
              <a href="https://www.facebook.com/profile.php?id=61579501581379" className="hover:text-secondary transition-colors" target="blanc"><Facebook className="w-6 h-6" /></a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-bold">
              <button onClick={() => scrollToSection('products')} className="hover:text-secondary transition-colors">Produits</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors">Histoire</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Contact</button>
            </div>
          </div>
          
          <div className="pt-12 border-t border-cream/10 text-center text-[10px] uppercase tracking-[0.2em] text-cream/40">
            © {new Date().getFullYear()} Yma Vanilly Madagascar. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
