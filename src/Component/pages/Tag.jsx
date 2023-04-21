import React from "react";

const Tag = ({ tag }) => {
   return (
      <React.Fragment>
         <div style={{ display: "flex", flexWrap: "wrap" }}>
            {tag.map((tagName) => (
               <div className="m-1 rounded-2 px-2" style={{ backgroundColor: "#f0f2f2", color: "#343838" }}>
                  {tagName}
               </div>
            ))}
         </div>
      </React.Fragment>
   );
};

export default Tag;
