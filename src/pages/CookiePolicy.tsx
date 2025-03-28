import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Política de Cookies</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informamos sobre la política de recogida y tratamiento de cookies.
          </p>

          <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">¿Qué son las cookies?</h2>
          <p className="text-gray-600 mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos ayudan a hacer que nuestro sitio web funcione correctamente y a mejorar nuestros servicios.
          </p>

          <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">Tipos de cookies que utilizamos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Cookies técnicas</h3>
              <p className="text-gray-600">
                Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Cookies analíticas</h3>
              <p className="text-gray-600">
                Nos permiten analizar el comportamiento de los usuarios de forma anónima para mejorar nuestros servicios.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Cookies de personalización</h3>
              <p className="text-gray-600">
                Permiten al usuario acceder al servicio con algunas características predefinidas en función de una serie de criterios.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">¿Cómo gestionar las cookies?</h2>
          <p className="text-gray-600 mb-6">
            Puede configurar su navegador para rechazar todas las cookies o para recibir un aviso cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
          </p>

          <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">Actualizaciones de la política</h2>
          <p className="text-gray-600 mb-6">
            Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Cualquier cambio en esta política será publicado en esta página.
          </p>

          <h2 className="text-2xl font-semibold text-green-800 mt-8 mb-4">Contacto</h2>
          <p className="text-gray-600">
            Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en{' '}
            <a href="mailto:cultivogallego@gmail.com" className="text-green-600 hover:text-green-700">
              cultivogallego@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 