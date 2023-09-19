import React, { useState } from "react";
import TableData from "../../Components/tableData/Index";
import CardView from "../../Components/CardView/Index";
function Index() {
  const [currentView, setCurrentView] = useState("dataTable");

  return (
    <div className="bg-secondary min-h-screen pt-4">
      <h1 className="text-center bg-tertiary md:w-1/6 mx-auto p-3 text-white font-semibold rounded-xl pt-3">
        Welcome to MR Property
      </h1>
      <h1 className="text-center bg-quatenary md:w-1/4 mt-5 mx-auto p-3 text-white font-semibold rounded-xl pt-3">
        Choose your View Type
      </h1>
      <div className="flex md:w-1/3 mx-auto justify-between mt-6">
        <h1
          className={`text-center ${
            currentView === "dataTable" ? "bg-quatenary" : "bg-tertiary"
          } w-11/12 mx-auto p-3 text-white font-semibold rounded-xl pt-3 cursor-pointer`}
          onClick={() => setCurrentView("dataTable")}
        >
          Data Table
        </h1>
        <h1
          className={`text-center ${
            currentView === "cardView" ? "bg-quatenary" : "bg-tertiary"
          } w-11/12 ml-3 mx-auto p-3 text-white font-semibold rounded-xl pt-3 cursor-pointer`}
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
