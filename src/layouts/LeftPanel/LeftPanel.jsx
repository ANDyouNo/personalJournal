import React from "react";
import "./LeftPanel.css";
export const LeftPanel = ({ children }) => {
  return (
    <div className="left-panel w-96 flex flex-col gap-8 h-4/5 overflow-auto">
      {children}
    </div>
  );
};
export default LeftPanel;
