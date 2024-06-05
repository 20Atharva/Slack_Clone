import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

import {channels} from "../constants"

export default function Login() {
    const navigate = useNavigate();
    const { setUser: setGlobalUser } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onChangeForm = (key, value) => {
        setUser({ ...user, [key]: value })
    }

    const onSignupClick = () => {
        navigate("/register");
    }

    const onLoginClick = () => {
        if (user.email.trim().length > 0 && user.password.trim().length > 0) {
            setGlobalUser({ ...user })
            localStorage.setItem("user", JSON.stringify(user))
            navigate(`/channel/${channels[0].name}`);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
                        alt="logo"
                    />
                    Slack
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChangeForm(e.target.name, e.target.value)
                                    }}
                                    type="email"
                                    value={user.email}
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChangeForm(e.target.name, e.target.value)
                                    }}
                                    type="password"
                                    value={user.password}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required={true}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start"></div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                onClick={onLoginClick}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <div
                                    onClick={onSignupClick}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                                >
                                    Sign up
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}