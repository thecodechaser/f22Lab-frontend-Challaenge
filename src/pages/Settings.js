import React from "react";
import SettingsSideBar from "../components/SettingsSideBar";
import SettingsMainContent from "../components/SettingsMainContent";

const Settings =() =>{
    return(
        <div className="h-screen flex overflow-hidden bg-white">
      <div className="hidden lg:flex lg:flex-shrink-0">
        <SettingsSideBar />
      </div>
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <SettingsMainContent />
        <div className="flex-1 relative z-0 flex overflow-hidden">
        
        </div>
      </div>
    </div>
    );
}

export default Settings;