import React from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const PlatformFaqs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 py-8">
      <div className="space-y-4">
        <Accordion
          question={"What leverage do you offer?"}
          answer={
            <>
              <p>
                <strong>Evaluation</strong>
                <br />- Forex: 1:100
                <br />- Indices : 1:20
                <br />- Commodities : 1:20
                <br />- Crypto : 1:2
                <br />
                <br />
                <strong>
                  Funded
                  <br />
                </strong>
                - Forex: 1:500
                <br />- Indices : 1:10
                <br />- Commodities : 1:10
                <br />- Crypto : 1:2
              </p>
            </>
          }
        />

        <Accordion
          question={"What Broker does AquaFunded use?"}
          answer={`AquaFunded uses an exclusive partnered broker.`}
        />

        <Accordion
          question={"Can I change Platform?"}
          answer={
            <>
              <p>
                We allow platform changes for evaluation accounts with clear
                trading history. Ongoing evaluation accounts first have to pass
                the trading objectives and a new trading platform can be
                requested for the next phase.
              </p>

              <p>
                Changing the platform is not possible if trades are placed on
                the account. Request a platform change with the account number
                through{" "}
                <Link
                  className="text-blue-400"
                  to={"mailto:support@aquafunded.com"}
                >
                  support@aquafunded.com.
                </Link>
              </p>
            </>
          }
        />
      </div>

      <div className="space-y-4">
        <Accordion
          question={"What are your Spreads & Commissions?"}
          answer={
            <>
              <p>All of our accounts are ECN spreads.</p>
              <p>
                <b>Commissions:</b>
              </p>
              <p>
                <b>Fx:</b> $5 per lot
              </p>
              <p>
                <b>Commodities:</b> $5 per lot
              </p>
              <p>
                <b>Indicies:</b> $5
              </p>
              <p>
                <b>Crypto:</b> $0
              </p>
            </>
          }
        />

        <Accordion
          question={"When is the daily max limit reset time?"}
          answer={`The max daily limit resets at 5pm EST.`}
        />

        <Accordion
          question={"What platforms are available?"}
          answer={
            <>
              <p>AquaFunded offers DxTrade, cTrader & Tradelocker.</p>
              <p>
                cTrader is restricted for US customers, any US customers found
                purchasing will be forced to change to a different platform.
                Please contact support.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default PlatformFaqs;
