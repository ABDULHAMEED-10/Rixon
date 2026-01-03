import PropTypes from "prop-types";

const AboutTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["founder", "services"];

  return (
    <div className="flex flex-wrap justify-center mb-12 gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === tab
              ? "bg-green-600 text-white shadow-md scale-105"
              : "bg-gradient-to-br from-gray-900 to-black text-gray-300 hover:text-green-600 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

AboutTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default AboutTabs;
