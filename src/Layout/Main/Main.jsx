import { Outlet } from "react-router-dom";
import user from "../../assets/image/user.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { ConfigProvider, Drawer } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";

const MainLayout = () => {
    const [drawer, setDrawer] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const toggleDrawer = () => setDrawer(!drawer);
    const closeDrawer = () => setDrawer(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) closeDrawer();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className="h-20 bg-[#1794ef] flex justify-between md:justify-end items-center px-2 md:px-0">
                {isMobile && (
                    <GiHamburgerMenu onClick={toggleDrawer} className="h-5 w-5 cursor-pointer text-white" />
                )}
                <div className="flex items-center gap-2 text-white mx-10">
                    <img src={user} alt="User" className="h-8 w-8 rounded-full" />
                    <p>Aamir Peerzada</p>
                </div>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Drawer: {
                            footerPaddingInline: 0,
                            footerPaddingBlock: 0,
                            padding: 0,
                            paddingLG: 0,
                            paddingXS: 30,
                        }
                    }
                }}
            >
                <div className="w-full flex">
                    {isMobile ? (
                        <Drawer
                            title="Menu"
                            placement="left"
                            closable={true}
                            onClose={closeDrawer}
                            open={drawer}
                            width="80%"
                            closeIcon={<FaX className="text-black" />}
                        >
                            <Sidebar onClose={closeDrawer} />
                        </Drawer>
                    ) : (
                        <div className="w-[20%] bg-red-500">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`flex-1 ${isMobile ? "p-4" : "p-10"}`}>
                        <Outlet />
                    </div>
                </div>
            </ConfigProvider>
        </div>
    );
};

export default MainLayout;
