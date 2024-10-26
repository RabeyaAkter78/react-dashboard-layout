import brandlogo from "../../assets/image/logo.png";
import homeIcon from "../../assets/image/home.png"; // Example icon for "Dashboard"
import { useState } from "react";
import { FaPlus, FaInfoCircle, FaTrophy, FaBook, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import necessary icons
import { FaDashcube } from "react-icons/fa6";

const Sidebar = () => {
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
            link: "/settings",
            isDropdown: true,
            subItems: [{ label: "Sub-setting 1", link: "/sub-setting-1" }]
        },
        { icon: <FaSignOutAlt />, label: "Logout", link: "/logout" },
    ];

    return (
        <div className="px-5 w-64">
            <div className="my-10">
                <img src={brandlogo} alt="brandLogo" className="w-full" />
            </div>
            <div className="flex flex-col">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className={`w-full flex justify-between items-center px-5 py-2 cursor-pointer rounded-lg mb-2 ${activeRoute === item.label ? "bg-blue-500 text-white font-bold" : "bg-blue-100 text-blue-500"
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
                        {item.isDropdown && showSettings && item.subItems && (
                            <div className="pl-10">
                                {item.subItems.map((subItem, subIndex) => (
                                    <div
                                        key={subIndex}
                                        className={`py-2 cursor-pointer ${activeRoute === subItem.label ? "text-blue-500 font-semibold" : "text-gray-700"
                                            }`}
                                        onClick={() => handleActiveRoute(subItem.label)}
                                    >
                                        {subItem.label}
                                    </div>
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
