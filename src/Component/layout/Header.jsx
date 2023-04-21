import React from "react";

const Header = () => {
   return (
      <React.Fragment>
         <header>
            <nav class="navbar" style={{ backgroundColor: "#e3f2fd" }}>
               <div className="container-fluid">
                  <div>ResumeBuilder</div>
                  <div>
                     <ul className="list-inline">
                        <li class="list-inline-item">Home</li>
                        <li class="list-inline-item">Templates</li>
                        <li class="list-inline-item">About</li>
                        <li class="list-inline-item">Contact</li>
                     </ul>
                  </div>
               </div>
            </nav>
         </header>
      </React.Fragment>
   );
};

export default Header;
