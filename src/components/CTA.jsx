import React from "react";

const CTA = () => {
  return (
    <section className="cta-section" data-w-id="055a50f6-3249-942b-ef50-c12875644500">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-wrap">
          <div className="cta-content-wrap">
            <div className="cta-content">
              <h3 className="section-title-color">
                Start your journey to success and unlock your full potential!
              </h3>
              <p className="cta-description">
                Sign up! Be among the first to get funded.
              </p>
              <a href="#plans" className="button-black-inline w-inline-block" data-w-id="f62ad346-2c8c-fe22-e8a1-56db29f9d5b3">
                <div className="button-black-text">Start challenge</div>
                <img
                  src="https://assets-global.website-files.com/655c521643f3726e71438eaf/655c69a84fb51f126b312902_button-decoration.svg"
                  loading="eager"
                  alt="Button decoration"
                  className="button-black-icon"
                />
                <div className="button-black-bg"></div>
              </a>
            </div>
            <div className="cta-image-item-wrap">
              <div className="cta-image-wrap">
                {[1, 2, 3, 4].map((index) => (
                  <img
                    key={index}
                    src="/cta.png"
                    loading="eager"
                    alt={`Cta image ${index}`}
                    className="cta-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
