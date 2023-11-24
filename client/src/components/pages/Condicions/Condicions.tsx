import React from "react";
import ButtonOrange from "../../atoms/ButtonOrange";
import "./condicions.style.css";

const Condicions = (): React.JSX.Element => {
  return (
    <>
      <div className="container py-4 px-3 mx-auto d-flex flex-column gap-3">
        <h1 className="titleOrange text-center text " data-testid="title-condicions">
          Politica de privacidad
        </h1>

        <p data-testid="text-condicions">
          Bienvenido/a a Orange. Valoramos tu confianza y queremos informarte
          sobre cómo manejamos tu información personal de acuerdo con las leyes
          de protección de datos de la Unión Europea.
        </p>
        <ol className="p-0" data-testid="list-condicions">
          <li>
            Información que Recopilamos: Recopilamos datos como nombre,
            dirección de correo electrónico y otra información necesaria para
            proporcionarte nuestros servicios.
          </li>
          <li>
            Uso de la Información: Utilizamos tu información para mejorar
            nuestros servicios, procesar transacciones y comunicarnos contigo.
            Siempre lo hacemos de manera segura y transparente.
          </li>
          <li>
            Cookies: Utilizamos cookies y tecnologías similares para mejorar tu
            experiencia en nuestro sitio. Puedes gestionar tus preferencias de
            cookies desde tu navegador.
          </li>
          <li>
            Compartir Información: Solo compartimos tu información con terceros
            cuando es necesario para brindarte nuestros servicios.
          </li>
          <li>
            Seguridad: Implementamos medidas de seguridad para proteger tu
            información contra accesos no autorizados.
          </li>
          <li>
            Tus Derechos: Tienes derechos sobre tus datos, como el acceso,
            rectificación y eliminación. Puedes ejercer estos derechos en
            cualquier momento.
          </li>
          <li>
            Retención de Datos: Mantenemos tus datos solo durante el tiempo
            necesario para cumplir con los propósitos para los que fueron
            recopilados.
          </li>
          <li>
            Cambios en la Política: Te informaremos sobre cambios en nuestra
            política de privacidad.
          </li>
          <li>
            Contacto: Para preguntas o inquietudes sobre nuestra política de
            privacidad, contáctanos [enlace de contacto].
          </li>
        </ol>
        <p data-testid="footer-text-condicions">
          Gracias por confiar en Orange. Tu privacidad es importante para
          nosotros.
        </p>
        <div className="w-100 text-center">
          <ButtonOrange direction="/register" textButton="Volver" />
        </div>
        <p className="titleOrange text-center text" data-testid="footer-text-condicions">Orange Restricted</p>
      </div>
    </>
  );
};

export default Condicions;
