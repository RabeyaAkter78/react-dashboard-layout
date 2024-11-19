/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { FiUser, FiLogOut } from "react-icons/fi";
import { BsBox, BsChat, BsGraphUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

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
        { icon: <AiOutlineDashboard className="h-5 w-5" />, label: "Dashboard", Link: "/" },
        { icon: <FiUser className="h-5 w-5" />, label: "User Details", Link: "/allUser" },
        { icon: <BsGraphUp className="h-5 w-5" />, label: "Salons Details", Link: "/salonsDetails" },
        { icon: <BsBox className="h-5 w-5" />, label: "Salons Services", Link: "/salonsServices" },
        { icon: <BsChat className="h-5 w-5" />, label: "Chat", Link: "/chat" },

        {
            icon: <AiOutlineSetting className="h-5 w-5" />,
            label: "Settings",
            isDropdown: true,
            subItems: [
                { label: "Slider Setting", Link: "/slider" },
                { label: "About Us", Link: "/aboutUs" },
                { label: "Privacy Policy", Link: "/privacyPolicy" },
                { label: "Terms & Condition", Link: "/termsCondition" },
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
                                                {subItem.label}

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

                                                className={`py-2 px-5 cursor-pointer ${active === subItem.label ? "text-white bg-red-300 font-bold" : "text-black bg-white"}`}
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
                            className="bg-pink-300 w-52 md:mt-20 py-3 flex justify-center items-center cursor-pointer hover:bg-red-200"
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
