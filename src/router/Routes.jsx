import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/Main/Main";
import Analytics from "../Pages/Analytics/Analytics";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import ForgatePassword from "../Pages/Auth/ForgatePassword/ForgatePassword";
import ResetPass from "../Pages/Auth/ResetPass/ResetPass";
import Newpass from "../Pages/Auth/NewPass/Newpass";
import VerifyPass from "../Pages/Auth/VerifyPass/VerifyPass";


export const router = createBrowserRouter([
    {
        path: "/sign-in",
        element: <SignIn></SignIn>
    },

    {
        path: "/forgate-password",
        element: <ForgatePassword></ForgatePassword>
    },
    {
        path: "/varification",
        element: <VerifyPass></VerifyPass>
    },
    {
        path: "/reset-password",
        element: <ResetPass></ResetPass>
    },
    {
        path: "/new-pass",
        element: <Newpass></Newpass>
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Analytics />
            }
        ]
    },
]);
