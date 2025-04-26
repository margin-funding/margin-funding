import React from "react";
import Accordion from "./Accordion";

const AboutFaqs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 py-8">
      <div className="space-y-4">
        <Accordion
          question={"How do I get funded by GRY?"}
          answer={
            "To get funded with us, you must complete our evaluation process. Select your account size, reach the profit targets without breaching any of our rules, and become funded with us!"
          }
        />

        <Accordion
          question={"What countries are restricted?"}
          answer={
            "Any country is allowed to participate, including U.S based traders"
          }
        />

        <Accordion
          question={"How many accounts can I trade with?"}
          answer={
            "We have a maximum total allocation of $400,000, as many accounts as you wish that add up to that number is your maximum number of accounts"
          }
        />

        <Accordion
          question={"How active must I be on the account?"}
          answer={
            "As long as you place one trade every 30 days, your account will remain active"
          }
        />

        <Accordion
          question={"Is there maximum trading days?"}
          answer={
            "there is no maximum or minimum trading days, take as long as you like with your evaluation"
          }
        />

        <Accordion
          question={"How do I get payouts?"}
          answer={`You can request a payout for up to 6% every payout period for the profit you gain on your account past the starting balance during the "funded" stage. Payouts are eligible for request every 21 days.`}
        />
      </div>

      <div className="space-y-4">
        <Accordion
          question={"Am I trading with real capital?"}
          answer={`The evaluation as well as the "funded" stage are not considered live accounts. You are trading in a simulated environment utilizing real market quotes.`}
        />

        <Accordion
          question={"Once I am funded, what is the profit split?"}
          answer={`80% for your first payout, and 90% ongoing for future payouts.`}
        />

        <Accordion
          question={"Do I have to pay any money I lose on the account?"}
          answer={`The only fee you have to pay is the one time evaluation fee for each account, if you loose capital on an account you are NOT required to pay any of that.`}
        />

        <Accordion
          question={"Can I leave profits in my account during a payout?"}
          answer={`Yes, you can leave profits in your account, you do not have to take all of the profits for your payout.`}
        />

        <Accordion
          question={"Do I get refunded when I pass the evaluation?"}
          answer={`Yes, we offer 100% refunds for all accounts purchased after April 17th 2024 🙂`}
        />

        <Accordion
          question={"Are there any discounts running?"}
          answer={`Code: GRYWELCOME for 17.5% OFF`}
        />
      </div>
    </div>
  );
};

export default AboutFaqs;
