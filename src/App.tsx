import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Sprout, Sun, Droplets, Heart, Send, TreePine, Bird, MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieBanner from './components/CookieBanner';
import CookiePolicy from './pages/CookiePolicy';

const MainContent: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkywdja");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/images/cultivo-gallego-logo.png" alt="Cultivo Gallego Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-green-800">Cultivo Gallego</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-green-600">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600">¿Qué ofrecemos?</button>
              <button onClick={() => scrollToSection('story')} className="text-gray-600 hover:text-green-600">Nuestra Historia</button>
              <button onClick={() => scrollToSection('method')} className="text-gray-600 hover:text-green-600">Método Biointensivo</button>
              <button onClick={() => scrollToSection('training')} className="text-gray-600 hover:text-green-600">Formación</button>
              <button onClick={() => scrollToSection('alliances')} className="text-gray-600 hover:text-green-600">Alianzas</button>
              <button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-green-600">Impacto</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600">Contacto</button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-600 hover:text-green-600">Inicio</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-green-600">¿Qué ofrecemos?</button>
                <button onClick={() => scrollToSection('story')} className="text-gray-600 hover:text-green-600">Nuestra Historia</button>
                <button onClick={() => scrollToSection('method')} className="text-gray-600 hover:text-green-600">Método Biointensivo</button>
                <button onClick={() => scrollToSection('training')} className="text-gray-600 hover:text-green-600">Formación</button>
                <button onClick={() => scrollToSection('alliances')} className="text-gray-600 hover:text-green-600">Alianzas</button>
                <button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-green-600">Impacto</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-green-600">Contacto</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-24 md:pt-32 md:pb-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <div className="flex items-center mb-8">
                <div className="w-[40%]">
                  <img src="/images/cultivo-gallego-logo.png" alt="Cultivo Gallego Logo" className="w-full h-auto" />
                </div>
                <div className="w-[60%]">
                  <h1 className="text-4xl md:text-6xl font-bold text-green-800">
                    Cultivo Gallego
                  </h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                Realizamos cultivo biointensivo de manera sostenible, respetando la tierra y ofreciendo productos frescos y saludables.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nuestro compromiso es proporcionar alimentos de la más alta calidad mientras cuidamos del medio ambiente.
                Utilizamos técnicas ancestrales combinadas con innovación para garantizar una agricultura sostenible y productiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
                >
                  Contáctanos
                </button>
                <button
                  onClick={() => scrollToSection('method')}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition duration-300 text-lg"
                >
                  Conoce Nuestro Método
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <img
                src="/images/invernadero.jpeg"
                alt="Cultivo biointensivo"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">¿Qué Ofrecemos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/productos1.jpeg"
                alt="Variedad de productos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Sprout className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Variedad de Productos</h3>
                </div>
                <p className="text-gray-600">Amplia selección de verduras y hortalizas cultivadas de manera sostenible, garantizando la mejor calidad en cada temporada.</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/productos2.jpeg"
                alt="Producto de temporada"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Sun className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Producto de Temporada</h3>
                </div>
                <p className="text-gray-600">Alimentos frescos siguiendo el ciclo natural de las estaciones, respetando los tiempos de la naturaleza.</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/productos3.jpeg"
                alt="Cultivo sostenible"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Droplets className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Cultivo Sostenible</h3>
                </div>
                <p className="text-gray-600">Métodos de cultivo que respetan y mejoran el medio ambiente, garantizando un futuro sostenible para las próximas generaciones.</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src="/images/productos4.jpeg"
                alt="Calidad garantizada"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Calidad Garantizada</h3>
                </div>
                <p className="text-gray-600">Productos frescos y nutritivos directos del campo a tu mesa, con el sabor y la calidad que solo la agricultura biointensiva puede ofrecer. Nuestros cultivos se recolectan el mismo día de la entrega, garantizando una frescura óptima con un máximo de 24 horas entre la recolección y la entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section id="story" className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Nuestra Historia</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-green-600">A</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-green-800">Aitor</h3>
                      <p className="text-gray-600">Fundador de Cultivo Gallego</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Soy Aitor, formado en música, y siempre tuve una profunda conexión con la naturaleza y una preocupación creciente por mi entorno y el impacto que tenemos sobre él.
                    </p>
                    <p>
                      Este proyecto comenzó con un pequeño huerto y la venta de limones, lo que me llevó a fundar un negocio de jardinería, que gestioné durante cinco años. Con esa experiencia y mucha formación, creé Cultivo Gallego, un proyecto agrícola basado en el método biointensivo, enfocado en la sostenibilidad, el respeto por la tierra y la autosuficiencia.
                    </p>
                    <p>
                      Tengo un gran compromiso por el rural y lo local.
                    </p>
                    <p className="font-medium text-green-800">
                      Hoy, Cultivo Gallego es más que una finca: representa un compromiso con un futuro más verde y demuestra que es posible vivir en armonía con el medio ambiente.
                    </p>
                    <div className="pt-4">
                      <p className="text-gray-600 mb-4">
                        Si quieres saber más sobre este método de cultivo y sus ventajas y oportunidades:
                      </p>
                      <button
                        onClick={() => scrollToSection('training')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
                      >
                        Comencemos juntos esta aventura
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="/images/foto-aitor.jpeg"
                    alt="Aitor, fundador de Cultivo Gallego"
                    className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biointensive Method Section */}
      <section id="method" className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">El Método Biointensivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">¿Qué es la agricultura biointensiva?</h3>
              <p className="text-gray-700 mb-6">
                La agricultura biointensiva es un sistema de cultivo resiliente que restaura y mejora el terreno de cultivo.
                Este método mezcla el saber tradicional con los conocimientos científicos actuales, permitiendo realizar
                un cultivo respetuoso con el medio ambiente y sostenible a largo plazo.
              </p>
              <img
                src="/images/metodo1.jpeg"
                alt="Cultivo biointensivo en práctica"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ventajas del método</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Regeneración y mejora del suelo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mayor producción en menos espacio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Alimentos más nutritivos y saludables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Reducción de costes de producción</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Preservación de la biodiversidad</span>
                </li>
              </ul>
              <img
                src="/images/metodo2.jpeg"
                alt="Resultados del método biointensivo"
                className="mt-6 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alliances Section */}
      <section id="alliances" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Alianzas</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Colaboramos con organizaciones líderes en agricultura sostenible y alimentación responsable
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <img
                  src="/images/milpa.jpeg"
                  alt="A Milpa do Salnés"
                  className="w-40 h-40 mx-auto mb-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-3">A Milpa do Salnés</h3>
                <p className="text-gray-600 mb-4">
                  Cooperativa gallega especializada en cultivo biointensivo de maíz y producción 
                  de harina nixtamalizada siguiendo técnicas tradicionales mayas y aztecas.
                </p>
                <a
                  href="https://www.amilpadosalnes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  Visitar web →
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <img
                  src="/images/slow-food.jpeg"
                  alt="Slow Food Compostela"
                  className="w-40 h-40 mx-auto mb-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-3">Slow Food Compostela</h3>
                <p className="text-gray-600 mb-4">
                  Convivium local del movimiento internacional Slow Food que promueve la 
                  alimentación buena, limpia y justa, defendiendo la biodiversidad y la producción local.
                </p>
                <a
                  href="https://www.slowfoodcompostela.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  Visitar web →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Formación</h2>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6 text-green-800">Compartimos Nuestro Conocimiento</h3>
            <p className="text-xl text-gray-700 mb-8">
              Todo nuestro conocimiento y experiencia en agricultura biointensiva está disponible 
              a través de programas de formación personalizados.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Ofrecemos cursos, talleres y asesoramiento para agricultores, estudiantes y 
              cualquier persona interesada en aprender métodos de cultivo sostenibles y respetuosos 
              con el medio ambiente.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-4">¿Te interesa nuestra formación?</h4>
              <p className="text-gray-700 mb-6">
                Ponte en contacto con nosotros para conocer nuestros programas de formación, 
                horarios disponibles y precios.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
              >
                Contactar para Formación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="impact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-4">Impacto Ambiental</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Nuestro método de cultivo biointensivo reduce significativamente la huella ambiental, promoviendo la biodiversidad y la regeneración natural del suelo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Sprout className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-green-800">1. Regeneración del suelo</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Se mejora la fertilidad del suelo año tras año, en lugar de degradarlo.
                </p>
                <p className="text-gray-700">
                  Se fomenta la vida microbiana y la biodiversidad del suelo, gracias al uso de compost y el no uso de agroquímicos.
                </p>
                <p className="text-gray-700">
                  Se evita la erosión del suelo mediante cultivos densos que lo protegen del sol y la lluvia.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Droplets className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-green-800">💧 2. Ahorro significativo de agua</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  El cultivo biointensivo puede reducir el uso de agua hasta en un 80-90% respecto a métodos convencionales.
                </p>
                <p className="text-gray-700">
                  Esto se logra mediante la alta densidad de siembra, que sombrea el suelo y reduce la evaporación.
                </p>
                <p className="text-gray-700">
                  Se utilizan técnicas de riego eficiente como riego por goteo o manual.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Bird className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-green-800">🐝 3. Protección de la biodiversidad</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  No se usan pesticidas ni fertilizantes sintéticos, lo que protege a polinizadores (abejas, mariposas) y otros insectos beneficiosos.
                </p>
                <p className="text-gray-700">
                  Se fomenta un ecosistema agrícola diverso y equilibrado.
                </p>
                <p className="text-gray-700">
                  Las técnicas biointensivas pueden convivir con agroecosistemas locales sin desplazar especies nativas.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <TreePine className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold text-green-800">🌍 4. Reducción de huella de carbono</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  El método biointensivo es principalmente manual, reduciendo el uso de maquinaria pesada y, por tanto, de combustibles fósiles.
                </p>
                <p className="text-gray-700">
                  El compostaje y la producción local de alimentos secuestran carbono en el suelo, ayudando a mitigar el cambio climático.
                </p>
                <p className="text-gray-700">
                  Promueve el cultivo local, disminuyendo la necesidad de transporte y sus emisiones asociadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-4">Contacta con Nosotros</h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Estamos aquí para responder a tus preguntas y ayudarte a conocer mejor nuestro método de cultivo
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Información de Contacto</h3>
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <MapPin className="h-6 w-6 text-green-600 mt-1" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">Dirección</p>
                          <p className="text-gray-600">Lugar Romai</p>
                          <p className="text-gray-600">Portas</p>
                          <p className="text-gray-600">Pontevedra, Galicia</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Phone className="h-6 w-6 text-green-600 mt-1" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">Teléfono</p>
                          <p className="text-gray-600">+34 620 06 76 10</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Mail className="h-6 w-6 text-green-600 mt-1" />
                        </div>
                        <div className="ml-4">
                          <p className="font-medium text-gray-900">Email</p>
                          <a
                            href="mailto:cultivogallego@gmail.com"
                            className="text-green-600 hover:text-green-700 transition-colors duration-200"
                          >
                            cultivogallego@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-green-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-900">Horario</p>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Redes sociales</h3>
                    <div className="space-y-3">
                      <a
                        href="https://facebook.com/cultivogallego"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                      >
                        <Facebook className="h-5 w-5 mr-2" />
                        <span>@cultivogallego</span>
                      </a>
                      <a
                        href="https://instagram.com/cultivo_gallego"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:text-green-700 transition-colors duration-200"
                      >
                        <Instagram className="h-5 w-5 mr-2" />
                        <span>@cultivo_gallego</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex justify-center items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </form>
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-100 text-sm mb-4 md:mb-0 md:w-1/3">
              <p>Hecho con 💚 desde el rural gallego by <a href="https://ruralhackers.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300 transition-colors duration-200">Rural Hackers</a> • <a href="https://github.com/ruralhackers/cultivo-gallego" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300 transition-colors duration-200">GitHub</a></p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0 md:w-1/3 justify-center">
              <a
                href="https://facebook.com/cultivogallego"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/cultivo_gallego"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="text-center md:text-right md:w-1/3">
              <p>© {new Date().getFullYear()} Cultivo Gallego. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <CookieBanner />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;