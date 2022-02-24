import React from "react";

const tabs = [
    { name: "General", href: "#", current: true },
    { name: "Password", href: "#", current: false },
    { name: "Notifications", href: "#", current: false },
    { name: "Plan", href: "#", current: false },
    { name: "Billings", href: "#", current: false },
    { name: "Team Members", href: "#", current: false },
  ];

const profileDetails=[
    {first: "name", second: "Chelesia Hagon", third: "Update"},
    {first: "Photo", second: "imageUrl", third: "Update | Remove"},
    {first: "Email", second: "email@email.com", third: "Update"},
    {first: "Job Title", second: "Human Resource Manager", third: "Update"}
]

const accountDetails = [
    {first: "Language", second: "English", third: "Update"},
    {first: "Date-Formate", second: "DD-MM-YY", third: "Update | Remove"},
]

const SettingsMainContent=()=>{
    return (
        <div className="settings-top-c">
            <h2 className="settings-title text-3xl font-bold ">Settings</h2>
        <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                className={`border-transparent text-gray-500 py-4 px-1 hover:text-gray-700 hover:border-gray-300 ${tab.current ? 'border-b-4 border-purple-500' : ''}`}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="settings-profile-c">
                <h3 className="settings-h3">Profile</h3>
                <p className="settings-p">This information will be displayed publicly so be carefull what you share</p>
                <div className="profile-details-c">
               { profileDetails.map((item)=>(
                   <div>
                       <hr className="border-t border-gray-200 my-5" aria-hidden="true" />
                   <div className="settings-row">
                       <p className="profile-item1">{item.first}</p>
                       <p className={`profile-item2 ${item.second == "Human Resource Manager" ? '' : 'p-item2'}`}>{item.second}</p>
                       <p className="profile-item3">{item.third}</p>
                   </div>
                   </div>
               ))
            }
            </div>
            </div>
            <div className="settings-account-c">
            <h3 className="settings-h3">Account</h3>
            <p className="settings-p">Manage how information should be displayed on your account</p>
            <div className="account-details-c">
               { accountDetails.map((item)=>(
                    <div>
                    <hr className="border-t border-gray-200 my-5" aria-hidden="true" />
                   <div className="settings-row">
                       <p className="account-item1">{item.first}</p>
                       <p className={`account-item2 ${item.second == "English" ? 'a-item2' : ''}`}>{item.second}</p>
                       <p className="account-item3">{item.third}</p>
                   </div>
                   </div>
               ))
            }
            </div>
            </div>
      </div>
    );
}

export default SettingsMainContent;