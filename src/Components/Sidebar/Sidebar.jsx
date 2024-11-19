/* eslint-disable react/prop-types */

import homeIcon from "../../assets/image/home.png"; // Example icon for "Dashboard"
import { useState } from "react";
import { FaPlus, FaInfoCircle, FaTrophy, FaBook, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import necessary icons
import { FaDashcube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = ({ closeDrawer }) => {
    const [activeRoute, setActiveRoute] = useState("Dashboard");
    const [showSettings, setShowSettings] = useState(false);

    const handleActiveRoute = (item) => {
        setActiveRoute(item);
    };

    const toggleDropdown = (item) => {
        setShowSettings(item === "Setting" ? !showSettings : false);
    };

    const menuItems = [
        { icon: <img src={homeIcon} alt="home" className="" />, label: "Dashboard", link: "/" },
        { icon: <FaDashcube />, label: "Sponsor", link: "/sponsor" },
        { icon: <FaPlus />, label: "Add Question", link: "/add-question" },
        { icon: <FaInfoCircle />, label: "Info Mode", link: "/info-mode" },
        { icon: <FaTrophy />, label: "Leader Boards", link: "/leader-boards" },
        { icon: <FaBook />, label: "Text Book", link: "/text-book" },
        {
            icon: <FaCog />,
            label: "Setting",
            isDropdown: true,
            subItems: [{ label: "Sub-setting 1", link: "/sub-setting-1" }]
        },
        { icon: <FaSignOutAlt />, label: "Logout", link: "/logout" },
    ];

    return (
        <div className="px-5 w-64 ">

            <div className="flex flex-col">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <Link to={item.link} onClick={!item.isDropdown ? closeDrawer : undefined}>
                            <div
                                className={`w-full flex justify-between items-center px-5 py-2 cursor-pointer rounded-lg mb-2 ${activeRoute === item.label ? "bg-primary text-white font-bold" : "bg-blue-100 text-primary"
                                    }`}
                                onClick={() => {
                                    handleActiveRoute(item.label);
                                    if (item.isDropdown) toggleDropdown(item.label);
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    {item.icon}
                                    <p>{item.label}</p>
                                </span>
                            </div>
                        </Link>
                        {item.isDropdown && showSettings && item.subItems && (
                            <div className="pl-10">
                                {item.subItems.map((subItem, subIndex) => (
                                    <Link
                                        to={subItem.link}
                                        key={subIndex}
                                        onClick={() => {
                                            handleActiveRoute(subItem.label);
                                            closeDrawer(); // Close drawer only when a sub-item is selected
                                        }}
                                    >
                                        <div
                                            className={`py-2 cursor-pointer ${activeRoute === subItem.label ? "text-primary font-semibold" : "text-gray-700"
                                                }`}
                                        >
                                            {subItem.label}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
