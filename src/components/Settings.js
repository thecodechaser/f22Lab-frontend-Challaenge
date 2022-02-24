
import React from "react";

const Settings =() =>{
    const settingsTabs = [
        {name: "General"},
        {name: "Password"},
        {name: "Notifications"},
        {name: "Plan"},
        {name: "Billings"},
        {name: "Team Members"}
    ]

    const profileDetails=[
        {first: "name", second: "Chelesia Hagon", third: "Update"},
        {first: "Photo", second: "imageUrl", third: "Update | Remove"},
        {first: "Email", second: "email@email.com", third: "Update"},
        {first: "Job Title", second: "Human Resource Manager", third: "Update"}
    ]

    const accountDetails = [
        {first: "Language", second: "English", third: "Update"},
        {first: "Date-Formate", second: "DD-MM-YY", third: "Update | Remove"},
        {first: "Automatic Timezone", second: "", third: "icon"},
    ]
    return(
        <div className="settings-main">
            <h2 className="settings-title">Settings</h2>
            <div className="settings-tabs">
                {
                    settingsTabs.map((item)=>{
                        <a className="settings-tab" key={item.name} href="#">item.name</a>
                    })
                }
            </div>
            <div className="settings-profile-c">
                <h3 className="settings-profile-h3">Profile</h3>
                <p className="settings-profile-p">This information will be displayed publicly so be carefull what you share</p>
                <div className="profile-details-c">
               { profileDetails.map((item)=>(
                   <div className="profile-row">
                       <p className="profile-item1">{item.first}</p>
                       <p className="profile-item2">{item.second}</p>
                       <p className="profile-item3">{item.third}</p>
                   </div>
               ))
            }
            </div>
            <h3 className="settings-account-h3">Account</h3>
            <p className="settings-acount-p">Manage how information should be displayed on your account</p>
            <div className="account-details-c">
               { accountDetails.map((item)=>(
                   <div className="acount-row">
                       <p className="account-item1">{item.first}</p>
                       <p className="account-item2">{item.second}</p>
                       <p className="account-item3">{item.third}</p>
                   </div>
               ))
            }
            </div>
            </div>

        </div>
    );
}

export default Settings;