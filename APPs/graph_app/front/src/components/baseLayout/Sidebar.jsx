import React from 'react';
import { Icons } from '../../assets/icons';

const Sidebar = () => {
   return (
      <div className="sidebar-wrapper bg-gray-950 py-5 px-4 shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] lg:w-[20%] md:w-[30%] w-[50%] h-full flex flex-col rounded-sm z-[999] fixed lg:left-0">
         <div className="sidebar-top">
            <div className="sidebar-brand">
               <span className="brand-logo">
                  <img src={Icons.LogoWhite} alt="logo" />
               </span>
               <span>Marshall</span>
            </div>
         </div>
         <div className="sidebar-body"></div>
      </div>
   );
};

export default Sidebar;
