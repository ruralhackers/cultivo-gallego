import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-600 mb-4 md:mb-0 md:mr-4">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
            <a href="/politica-cookies" className="text-green-600 hover:text-green-700 underline">
              Política de Cookies
            </a>
            .
          </div>
          <div className="flex space-x-4">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 