import React from "react";
import TableComponent from "./components/Table";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <div className="flex" style={{ paddingLeft: "280px" }}>
        <TableComponent />
      </div>
    </>
  );
}

export default App;
