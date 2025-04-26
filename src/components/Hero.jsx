import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChallengeModal from "./ChallengeModal";

const clientLogos = [
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d962aa1474068b082db86_client-01-light.svg",
    alt: "Client 01 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d963c9fc1373c6adc4c0b_client-02-light.svg",
    alt: "Client 02 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d96449c121a81ae3b3e0f_client-03-light.svg",
    alt: "Client 03 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d964ad37acf7a48da3656_client-04-light.svg",
    alt: "Client 04 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d96515d0ff20a79f2ff6a_client-05-light.svg",
    alt: "Client 05 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d965861daf664529f1f2c_client-06-light.svg",
    alt: "Client 06 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d9663bf7027301193da0d_client-07-light.svg",
    alt: "Client 07 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d966cbaa20d4841a30134_client-08-light.svg",
    alt: "Client 08 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d967354e99396cc430f1d_client-09-light.svg",
    alt: "Client 09 light",
  },
  {
    src: "https://assets-global.website-files.com/655c521643f3726e71438eaf/655d967c54e99396cc43135f_client-10-light.svg",
    alt: "Client 10 light",
  },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="hero-section section-spacing">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-hero-split">
          <div className="product-hero-content-wrap">
            <h1 className="hero-title-left">
              Grow your trading beyond boundaries.
            </h1>
            <p className="hero-description-left">
              Trade with us and receive up to 90% of profit.
            </p>
            <div className="buttons-inline">
              <Link to="#plans" onClick={openModal} className="button-black-inline w-inline-block">
                <div className="button-black-text" >Start challenge</div>
                <img
                  src="https://assets-global.website-files.com/655c521643f3726e71438eaf/655c69a84fb51f126b312902_button-decoration.svg"
                  loading="eager"
                  alt="Button decoration"
                  className="button-black-icon"
                />
                <div style={{ opacity: 1 }} className="button-black-bg"></div>
              </Link>
            </div>
            <div className="client-logo-item-wrap">
              <div className="client-logo-decoration left"></div>
              <div className="client-logo-item">
                {clientLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    loading="eager"
                    alt={logo.alt}
                    className="client-logo"
                  />
                ))}
              </div>
              <div className="client-logo-decoration right"></div>
            </div>
          </div>
          <img
            src="/hero.png"
            loading="eager"
            className="hero-image"
            alt="Hero"
          />
        </div>
      </div>
      <div className="hero-decoration-wrap">
        <div className="hero-decoration">
          <div className="hero-decoration-rounded"></div>
          <div className="hero-decoration-rounded two"></div>
          <div className="hero-decoration-rounded three"></div>
          <div className="hero-decoration-bg right"></div>
        </div>
      </div>

      <ChallengeModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
