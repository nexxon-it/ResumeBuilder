import React from "react";
import Resume from "./Resume";
import ResumeForm from "./ResumeForm";
import Sidebar from "../layout/Sidebar";

const Homepage = () => {
   return (
      <div className="row justify-content-between">
         <div className="col-5">
            <Sidebar/>
         </div>
         <div className="col-7">
            <Resume />
         </div>
      </div>
   );
};

export default Homepage;
