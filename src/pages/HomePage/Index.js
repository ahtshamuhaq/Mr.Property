import React, { useState } from "react";
import TableData from "../../Components/tableData/Index";
import CardView from "../../Components/CardView/Index";
function Index() {
  const [currentView, setCurrentView] = useState("dataTable");

  return (
    <div className="bg-[#3D2B3D] min-h-screen pt-4">
      <h1 className="text-center bg-[#6B4C6B] md:w-1/6 mx-auto p-3 text-white font-semibold rounded-xl pt-3">
        Welcome to MR Property
      </h1>
      <h1 className="text-center bg-[#A27CA2] md:w-1/4 mt-5 mx-auto p-3 text-white font-semibold rounded-xl pt-3">
        Choose your View Type
      </h1>
      <div className="flex md:w-1/3 mx-auto justify-between mt-6">
        <h1
          className="text-center bg-[#A27CA2] w-11/12 mx-auto p-3 text-white font-semibold rounded-xl pt-3 cursor-pointer"
          onClick={() => setCurrentView("dataTable")}
        >
          Data Table
        </h1>
        <h1
          className="text-center w-11/12 bg-[#A27CA2] ml-3 mx-auto p-3 text-white font-semibold rounded-xl pt-3 cursor-pointer"
          onClick={() => setCurrentView("cardView")}
        >
          Cards view
        </h1>
      </div>
      <div>{currentView === "dataTable" && <TableData />}</div>
      {currentView === "cardView" && (
        <div className="mt-4 ml-4">
          <CardView />
        </div>
      )}
    </div>
  );
}

export default Index;
