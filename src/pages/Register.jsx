import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/authContext";

import {channels} from "../constants"


export default function Register() {
    const navigate = useNavigate();
    const { setUser: setGlobalUser } = useAuth();

    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const onChangeForm = (key, value) => {
        setUser({ ...user, [key]: value })
    }

    const onSigninClick = () => {
        navigate("/login");
    }

    const onSignUpClick = () => {
        if (user.email.trim().length > 0 && user.password.trim().length > 0 && user.confirmPassword.trim().length > 0) {
            if (user.password !== user.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            
            localStorage.setItem("user", JSON.stringify(user))
            setGlobalUser({ ...user })
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
                    Signup
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
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
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
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
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password
                                </label>
                                <input
                                    onChange={(e) => {
                                        onChangeForm(e.target.name, e.target.value)
                                    }}
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <button
                                onClick={onSignUpClick}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <div
                                    onClick={onSigninClick}
                                    className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Login here
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}