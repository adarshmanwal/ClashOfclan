import { useState } from "react";
import TabContents from "./components/TabContents";
import TroopsContextProvider from "./store/troops-context";
export default function App() {
  const [selectedTab, setSelectedTab] = useState("ARMY");

  function handleTabChange(tab) {
    setSelectedTab(tab);
  }

  return (
    <TroopsContextProvider>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg w-[75%] h-[500px] flex flex-col p-6">
          {/* Tabs */}
          <div className="flex justify-between border-b  border-gray-200 mb-6">
            {[
              "ARMY",
              "TRAIN-TROOPS",
              "BREW-SPELLS",
              "BUILD-SIEGE",
              "QUICK-TRAIN",
            ].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 font-semibold ${
                  selectedTab === tab
                    ? "text-while-500 border-b-2 border-blue-500 rounded-lg"
                    : "text-white bg-slate-700 hover:text-blue-500 rounded-lg"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div>
            <TabContents selectedTab={selectedTab}></TabContents>
          </div>
        </div>
      </div>
    </TroopsContextProvider>
  );
}
