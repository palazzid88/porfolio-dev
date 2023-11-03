import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <p>
              Porfolio Personal - Full Stack developer MERN.
            </p>
          </section>

          <section>
            <a className="btn btn-outline-light m-1" href="https://github.com/palazzid88" role="button" target="_blank">
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" width="30" height="30" />
            </a>

            <a className="btn btn-outline-light m-1" href="https://wa.me/543364309084" role="button" target="_blank">
              <img src="https://c0.klipartz.com/pngpicture/102/349/gratis-png-whatsapp-computer-icons-logo-whatsapp-verde-y-blanco-thumbnail.png" alt="WhatsApp" width="30" height="30" />
            </a>

            <a className="btn btn-outline-light m-1" href="mailto:palazzid88@gmail.com" role="button" target="_blank">
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Gmail" width="30" height="30" />
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 David Ezequiél PALAZZI - Todos los derechos reservados
        </div>
      </footer>
    </>
  );
};

export default Footer;
