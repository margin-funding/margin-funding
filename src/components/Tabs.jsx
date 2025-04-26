import { useState } from "react";
import AboutFaqs from "./AboutFaqs";
import RulesFaqs from "./RulesFaqs";
import PlatformFaqs from "./PlatformFaqs";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("about"); // State to keep track of current tab

  const tabContent = {
    about: {
      body: <AboutFaqs />,
    },
    rules: {
      body: <RulesFaqs />,
    },
    // platform: {
    //   body: <PlatformFaqs />,
    // },
  };

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="">
    <div className="faq-tabs_menu w-tab-menu">
      <div
        className={`faq-tabs_tablink w-inline-block w-tab-link ${
          currentTab === "about" && "w--current"
        }`}
        onClick={() => handleTabChange("about")}
      >
        <div>About</div>
        <div
          className={currentTab === "about" ? "faq-tabs_tablink-line2" : "faq-tabs_tablink-line"}
        ></div>
      </div>
      <div
        className={`faq-tabs_tablink w-inline-block w-tab-link ${
          currentTab === "rules" && "w--current"
        }`}
        onClick={() => handleTabChange("rules")}
      >
        <div>Rules</div>
        <div
          className={currentTab === "rules" ? "faq-tabs_tablink-line2" : "faq-tabs_tablink-line"}
        ></div>
      </div>
      

    </div>

    {/* Tab Content */}
    <div>
      <p>{tabContent[currentTab].body}</p>
    </div>
    
    </div>
    
  );
};

export default Tabs;
