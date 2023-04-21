import React from "react";
import ResumeForm from "../pages/ResumeForm";

const Sidebar = () => {
   return (
      <React.Fragment>
         <div
            className="p-4"
            style={{ minHeight: "100vh", backgroundColor: "#f5f7f7" }}
         >
            <ResumeForm />
         </div>
      </React.Fragment>
   );
};

export default Sidebar;
