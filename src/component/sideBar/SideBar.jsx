import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  return (
    <div className="flex-[0.2] bg-[#0b0b5a] text-white h-screen shrink-0">
      
      {/* Logo / Title */}
      <div className="px-[30px] py-[20px] flex flex-col items-center justify-center">
        <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
        <div className="text-[25px]  font-serif">Resume Screening</div>
      </div>

      {/* Menu */}
      <div className="mt-[30px]">

        <div className="p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10">
          <DashboardIcon sx={{ fontSize: 25,}} />
          <span>Dashboard</span>
        </div>

        <div className="p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10">
          <ManageSearchIcon sx={{ fontSize: 30,}} />
          <span>History</span>
        </div>

        <div className="p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10">
          <AdminPanelSettingsIcon sx={{ fontSize: 25,}} />
          <span>Admin</span>
        </div>

        <div className="p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10">
          <LogoutIcon sx={{ fontSize: 25,}} />
          <span>Logout</span>
        </div>

      
      </div>
    </div>
  );
};

export default SideBar;
