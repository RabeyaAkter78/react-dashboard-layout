/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FiUser, FiLogOut } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { FaQuestionCircle, FaUsers } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdDashboard, MdMenuBook, MdPolicy, MdPrivacyTip } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { RiTerminalWindowLine } from "react-icons/ri";
const Sidebar = ({ closeDrawer }) => {
    const [active, setActive] = useState("Dashboard");

    const [showSettings, setShowSettings] = useState(false);

    const handleActiveRoute = (item) => {
        setActive(item);
        setShowSettings(false);
    };

    const handleSubItemClick = (subItem) => {
        setActive(subItem);
        closeDrawer();
    };

    const toggleDropdown = (item) => {
        setShowSettings(item === "Settings");
    };

    const menuItems = [
        { icon: <MdDashboard className="h-5 w-5" />, label: "dashboard", Link: "/" },
        { icon: <FiUser className="h-5 w-5" />, label: "Donar List", Link: "/donar-list" },
        { icon: <BsGraphUp className="h-5 w-5" />, label: "Project Details", Link: "/project-details" },
        { icon: <LuCircleDollarSign className="h-5 w-5" />, label: "Budgets", Link: "/budgets" },
        { icon: <FaMoneyCheckAlt className="h-5 w-5" />, label: "Fixed Costs", Link: "/fixed-cost" },

        {
            icon: <AiOutlineSetting className="h-5 w-5" />,
            label: "Settings",
            isDropdown: true,
            subItems: [
                { icon: <FaEdit className="h-5 w-5" />, label: "Edit Profile", Link: "/edit-profile" },
                { icon: <MdPolicy className="h-5 w-5" />, label: "Policies", Link: "/policies" },
                { icon: <GrAnalytics className="h-5 w-5" />, label: "Grants", Link: "/grants" },
                { icon: <MdMenuBook className="h-5 w-5" />, label: "Blogs", Link: "/blogs" },
                { icon: <FaQuestionCircle className="h-5 w-5" />, label: "FAQ", Link: "/faq" },
                { icon: <MdPrivacyTip className="h-5 w-5" />, label: "Privacy Policy", Link: "/privacy-policy" },
                { icon: <RiTerminalWindowLine className="h-5 w-5" />, label: "Terms & Condition", Link: "/terms-condition" },
            ],
        },
        { icon: <FaUsers className="h-5 w-5" />, label: "Orders Transection", Link: "/ordersTransection" },
    ];

    return (
        <div className="">
            <div className=" flex flex-col md:h-full">
                <div className="flex flex-col justify-end items-end gap-2 md:my-5 mb-10">
                    {menuItems.map((item) => (
                        <div key={item.label}>
                            <Link to={item.Link} onClick={!item.isDropdown ? closeDrawer : undefined}>
                                <div
                                    className={`w-52 flex justify-between items-center px-5 py-2 cursor-pointer ${active === item.label ? "rounded-l-3xl bg-primary text-white  hover:text-white" : "bg-white text-black hover:text-black"}`}
                                    onClick={() => (item.isDropdown ? toggleDropdown(item.label) : handleActiveRoute(item.label))}
                                >

                                    <div className={`${active === item.label ? "text-white hover:text-white" : "bg-white text-black hover:text-black"}`} >

                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            {!item.isDropdown ? (
                                                <p>{item.label}</p>
                                            ) : (
                                                <div className="flex items-center justify-between w-full">
                                                    <p>{item.label}</p>
                                                    <BiChevronDown />

                                                </div>
                                            )}
                                        </div>

                                    </div>

                                </div>
                            </Link>



                            {/* Dropdown for Settings */}
                            {item.label === "Settings" && showSettings && (
                                <div className="flex flex-col">
                                    {item.subItems.map((subItem) => (
                                        <Link to={subItem.Link} key={subItem.label}>
                                            <div

                                                className={`py-2 px-5 cursor-pointer ${active === subItem.label ? "text-white bg-red-300 font-bold" : "text-black bg-white"}`}
                                                onClick={() => handleSubItemClick(subItem.label)}
                                            >
                                                <p className="flex items-center gap-2 ml-10">
                                                    {subItem.icon}
                                                    {subItem.label}</p>

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Dropdown for Content */}
                            {item.label === "Content" && (
                                <div className="flex flex-col">
                                    {item.subItems.map((subItem) => (
                                        <Link to={subItem.Link} key={subItem.label}>
                                            <div

                                                className={`py-2 px-5 cursor-pointer ${active === subItem.label ? "text-white bg-red-700 font-bold" : "text-black bg-white"}`}
                                                onClick={() => handleSubItemClick(subItem.label)}
                                            >
                                                {subItem.label}

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Logout */}
                    <Link className="text-black hover:text-black" to="/auth/login">
                        <div
                            className="bg-red-700 w-52 md:mt-20 py-3 flex justify-center items-center cursor-pointer hover:bg-red-500 text-white"
                            onClick={() => console.log("Logged out")}
                        >
                            <FiLogOut className="text-xl" />

                            <p className="ml-2">Log out</p>

                        </div>
                    </Link>
                </div>
            </div>


        </div >
    );
};

export default Sidebar;
