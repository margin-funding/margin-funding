import React from "react";

const steps = [
  {
    number: "Step 1",
    iconSrc:
      "https://assets-global.website-files.com/655c521643f3726e71438eaf/65647f20f406c1104c2352d3_step-icon-02.svg",
    alt: "Step icon 02",
    title: "Sign up",
    description:
      "Immediately after you start your Challenge you will receive an e-mail with your trading credentials.",
  },
  {
    number: "Step 2",
    iconSrc:
      "https://assets-global.website-files.com/655c521643f3726e71438eaf/655dc4c8a5fe52fbd7f2cb44_feature-tag-icon-02.svg",
    alt: "Step icon 03",
    title: "Pass Challenge",
    description:
      "As soon as you pass phase 2 and your results are verified, you will be able to trade on your account.",
  },
  {
    number: "Step 3",
    iconSrc:
      "https://assets-global.website-files.com/655c521643f3726e71438eaf/6564607bba90770b2c640028_about-feature-icon-04.svg",
    alt: "Step icon 01",
    title: "GRY Trader",
    description:
      "Do your best, trade safe and receive up to 90% of your profits on our Scaling plan if you consistently generate long term results.",
  },
];

const AboutUs = () => {
  return (
    <section
      data-w-id="b246b29b-0672-ee74-427b-6514bf368d76"
      className="step-section"
      style={{ paddingTop: "100px" }}
      id="about"
    >
      <div className="w-layout-blockcontainer container-medium w-container">
        <div className="section-title text-center">
          <h2 className="section-title-color no-margin">How we work</h2>
        </div>
        <div className="w-layout-grid grid-step">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-divider-rounded-wrap">
                <div className="step-divider"></div>
              </div>
              <div className="step-divider-line"></div>
              <div className="step-content-wrap">
                <img
                  src={step.iconSrc}
                  loading="eager"
                  alt={step.alt}
                  className="step-icon"
                />
                <h3 className="heading-h6">{step.title}</h3>
                <p className="no-margin">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
