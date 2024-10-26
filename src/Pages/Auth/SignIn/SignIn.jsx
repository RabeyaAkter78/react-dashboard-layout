import { Checkbox, Form, Input, Typography } from "antd";
import brandlogo from "../../../assets/image/logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { FaLockOpen } from "react-icons/fa";
const SignIn = () => {
    const [showpassword, setShowpassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowpassword(!showpassword)
    }


    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <div className="bg-[ffffff]">
            <div className="container mx-auto">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-20  ">
                    <div className="w-full md:w-[50%] px-3 mt-10">
                        <img src={brandlogo} alt="brandlogo" className="h-full w-full object-cover" />
                    </div>
                    <div className="w-full md:w-[50%] ">
                        <div className="py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
                            <Form
                                name="login"
                                initialValues={{ remember: true }}
                                style={{ maxWidth: 550 }}
                                onFinish={onFinish}
                                layout="vertical"
                                className=" bg-[#eef6ff] py-28 mx-4 md:mx-0 px-6 md:px-10 rounded-2xl w-[450px] border-2 shadow-xl"
                            >
                                <div className="mb-4 text-center">
                                    <h2
                                        className=" text-center text-2xl md:text-3xl font-bold mb-6"
                                    >
                                        Login to Account
                                    </h2>
                                    <Typography.Text className="text-black text-center text-base ">
                                        {" "}
                                        Please enter your name, email and password to continue
                                    </Typography.Text>
                                </div>

                                <Form.Item
                                    name="email"
                                    label={<p className=" text-md">Email</p>}
                                    style={{}}
                                >
                                    <Input
                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Your Email"
                                    />
                                </Form.Item>
                                <Form.Item name="password" label={<p className=" text-md">Password</p>}>
                                    <div className="relative flex justify-center items-center">
                                        <Input
                                            required
                                            style={{ padding: "6px" }}
                                            className=" text-md"
                                            type={showpassword ? "password" : "text"}
                                            placeholder="Password"
                                        />
                                        <div className="flex justify-center absolute right-0 px-3">
                                            <button onClick={togglePasswordVisibility} type="button">

                                                {showpassword ? (<IoIosLock className="" />) : (<FaLockOpen className="" />)}
                                            </button>
                                        </div>
                                    </div>

                                </Form.Item>
                                <div className="flex justify-between items-center my-2">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox
                                            required
                                            className=" text-black text-md hover:text-black text-md"
                                        >
                                            Remember Password
                                        </Checkbox>
                                    </Form.Item>
                                    <Link to="/forgate-password" className=" ">
                                        <p className="text-blue-600  ">

                                            Forgate Password
                                        </p>
                                    </Link>
                                </div>
                                <Form.Item className="text-center my-10">
                                    <Link to="/">
                                        <button
                                            className="bg-[#2c9ef1] text-center w-full  p-2 font-semibold    text-white px-10 py-2 rounded-md shadow-lg"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </Form.Item>
                            </Form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;