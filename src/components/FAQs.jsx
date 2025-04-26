import React from "react";
import "../styles/custom.css";
import Tabs from "./Tabs";

const FAQs = () => {
  return (
    <main className="main-wrapper is-with-circle-bg">
      <section className="inner-hero">
        <div className="padding-global z-index-2">
          <div className="container-large z-index-2">
            <div className="padding-vertical padding-xlarge padding-top">
              <div className="align-center text-align-center">
                <h1 className="text-color-white">Frequently Asked Questions</h1>
                <div className="padding-top padding-small"></div>
                <p className="text-size-medium align-center max-width-large">
                If you have any questions or need further assistance, please do not hesitate to contact us at {" "}
                  <a href="#" className="text-[#765aff]">
                    support@gryfunding.com
                  </a>
                </p>
                <div className="padding-top padding-xlarge"></div>
              </div>
            </div>

            <Tabs />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQs;
