import React from "react";

const Features = () => {
  return (
    <section className="feature-section" style={{ paddingTop: "160px" }}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-layout-grid grid-feature-item">
          <div className="hero-image-wrap">
            <div className="hero-decoration-line-top"></div>
            <div className="hero-decoration-line-center"></div>
            <div className="hero-image-right-wrap">
              <img
                src="/logo.jpg"
                loading="eager"
                className="hero-image"
                alt="Logo"
              />
            </div>
            <div className="hero-decoration-line-bottom"></div>
          </div>
          <div className="feature-item-inline-wrap">
            <FeatureTag
              imgSrc="/bank.webp"
              imgAlt="Bank Transfer"
              title="Bank Transfer"
              description="Simple and Efficient"
            />
            <FeatureTag
              imgSrc="/payout.webp"
              imgAlt="Fast Payouts"
              title="Fast Payouts"
              description="Get transfers quick and easily"
            />
            <FeatureTag
              imgSrc="/profit.webp"
              imgAlt="Profit Split"
              title="Profit Split"
              description="Get up to 90% payouts"
            />
          </div>
          <div className="feature-item-inline-wrap">
            <FeatureTag
              imgSrc="/time.webp"
              imgAlt="No time limit"
              title="No time limit"
              description="No Minimum or Maximum trading"
            />
            <FeatureTag
              imgSrc="/rules.webp"
              imgAlt="The Best Rules"
              title="The Best Rules"
              description="Most forgiving drawdown rules in the industry"
            />
            <FeatureTag
              imgSrc="/price.webp"
              imgAlt="Affordable Price"
              title="Affordable Price"
              description="Competitive pricing per account size"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureTag = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="feature-tag-inline">
      <img
        src={imgSrc}
        style={{ width: "70px" }}
        loading="eager"
        alt={imgAlt}
      />
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <div style={{ fontSize: "larger" }}>{title}</div>
        <p style={{ fontSize: "small" }}>{description}</p>
      </div>
    </div>
  );
};

export default Features;
