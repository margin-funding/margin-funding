import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      price: "$ 5,000",
      monthlyPrice: "$35",
      newPrice: "$25",
      link: "https://buy.stripe.com/7sI5mcdJic3a6sM4gt",
      items: [
        { label: "Target 1 Phase", percentage: "8%" },
        { label: "Target 2 Phase", percentage: "5%" },
        { label: "Daily Drawdown", percentage: "4%" },
        { label: "Max Drawdown", percentage: "10%" },
        { label: "Accounts", percentage: "5k" },
      ],
    },
    {
      price: "$ 10,000",
      monthlyPrice: "$75",
      newPrice: "$45",
      link: "https://buy.stripe.com/6oEeWM34E8QY18s5kw",
      items: [
        { label: "Target 1 Phase", percentage: "8%" },
        { label: "Target 2 Phase", percentage: "5%" },
        { label: "Daily Drawdown", percentage: "4%" },
        { label: "Max Drawdown", percentage: "10%" },
        { label: "Accounts", percentage: "10k" },
      ],
    },
    {
      price: "$ 25,000",
      monthlyPrice: "$135",
      newPrice: "$115",
      link: "https://buy.stripe.com/8wM9CseNm0ksg3m00b",
      items: [
        { label: "Target 1 Phase", percentage: "8%" },
        { label: "Target 2 Phase", percentage: "5%" },
        { label: "Daily Drawdown", percentage: "4%" },
        { label: "Max Drawdown", percentage: "10%" },
        { label: "Accounts", percentage: "25k" },
      ],
    },
    {
      price: "$ 50,000",
      monthlyPrice: "$265",
      newPrice: "$220",
      link: "https://buy.stripe.com/8wMdSI48I4AIg3m00a",
      items: [
        { label: "Target 1 Phase", percentage: "8%" },
        { label: "Target 2 Phase", percentage: "5%" },
        { label: "Daily Drawdown", percentage: "4%" },
        { label: "Max Drawdown", percentage: "10%" },
        { label: "Accounts", percentage: "50k" },
      ],
    },
    {
      price: "$ 100,000",
      monthlyPrice: "$427",
      newPrice: "$395",
      link: "https://buy.stripe.com/3cseWMgVuc3a6sM8wK",
      items: [
        { label: "Target 1 Phase", percentage: "8%" },
        { label: "Target 2 Phase", percentage: "5%" },
        { label: "Daily Drawdown", percentage: "4%" },
        { label: "Max Drawdown", percentage: "10%" },
        { label: "Accounts", percentage: "100k" },
      ],
    },
  ];

  return (
    <section
      className="pricing-section"
      style={{ paddingTop: "150px" }}
      id="plans"
    >
      <div className="w-layout-blockcontainer container-medium w-container">
        <div className="section-title text-center">
          <h2 className="section-title-color no-margin">Pricing plan</h2>
        </div>
        <div className="w-layout-grid grid-pricing">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-item">
              <div className="pricing-header">
                <div className="pricing-monthly">
                  <h4 className="heading-h6"></h4>
                  <div className="pricing-simple-title-wrap">
                    <h4
                      className={`pricing-simple-price text-primary-${index}`}
                    >
                      {plan.price}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="pricing-list">
                <div className="pricing-monthly">
                  {plan.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="pricing-list-item">
                      <div className={`list-divider-primary-${index}`}></div>
                      <div>{`${item.label} - ${item.percentage}`}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="pricing-simple-title-wrap"
                style={{ marginBottom: "15px" }}
              >
                <div className="price-container">
                  <h4 className="pricing-simple-price crossed-price">
                    {plan.monthlyPrice}
                  </h4>
                  <h4 className="pricing-simple-price new-price">
                    {plan.newPrice}
                  </h4>
                </div>
              </div>
              <a
                href={plan.link}
                className="button-black-inline w-inline-block"
              >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
