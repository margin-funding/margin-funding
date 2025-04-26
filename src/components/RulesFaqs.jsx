import React from "react";
import Accordion from "./Accordion";

const RulesFaqs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 py-8">
      <div className="space-y-4">
        <Accordion
          question={"What is the profit Target?"}
          answer={"8% phase 1, 5% phase 2."}
        />

        <Accordion
          question={"What is the drawdown?"}
          answer={"10% max drawdown, 4% daily drawdown."}
        />

        <Accordion
          question={"Do you allow hedging, martingale, or no stop loss?"}
          answer={
            "Martingale, grid strategies, or any other hedging strategies are prohibited. However, you are not required to place a limit stop order, you are allowed to fill your stop orders at market."
          }
        />

        <Accordion
          question={"Can I hold overnight and over weekends?"}
          answer={
            "We have no restrictions for holding positions overnight or over the weekends."
          }
        />

        <Accordion
          question={"Are EAs, or copy-traders allowed?"}
          answer={
            "Copy trading and the use of commercial EAs is not allowed. IP addresses must be consistent, and a foreign address connected to other accounts will be whitelisted."
          }
        />
      </div>

      <div className="space-y-4">
        <Accordion
          question={"Is there a consistency rule?"}
          answer={`Your trades must be in accord to consistency of position sizing. This means that no trades should be placed using excessive margin, which can be identified by the firm as resembling “gambling”.`}
        />

        <Accordion
          question={"Do you allow HFT Trading?"}
          answer={`High frequency trading is prohibited, which is the opening of closing of positions within at least 15 seconds of each other.`}
        />

        <Accordion
          question={"What instruments can I trade?"}
          answer={
            <>
              <p>
                <b>CRYPTO:</b> BTCUSD ETHUSD ONLY (NO CROSS)
              </p>

              <p>
                <b>INDICES:</b> All major Indices including but not limited to
                US500, US100, and US30 (ONLY M tickers), not 100m tickers
              </p>
              <p>
                <b>STOCKS:</b> No stocks
              </p>
              <p>
                <b>COMMODITIES:</b> ONLY GOLD AND OIL
              </p>
              <p>
                <b>FOREX:</b> Only the pairs that have "GROUP"
              </p>
            </>
          }
        />

        <Accordion
          question={"Is drawdown static or trailing?"}
          answer={`Both daily and max drawdown are static, allowing you a more forgiving drawdown structure.`}
        />
        <Accordion
          question={"Is News trading allowed?"}
          answer={`Holding through news IS allowed, however you are not allowed to open a new position less than 15 minutes before a red folder news event occurs. The position cannot open and closed 15 minutes of each other when trading a news event, this is to promote proper risk management.`}
        />
      </div>
    </div>
  );
};

export default RulesFaqs;
