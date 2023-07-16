"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faMoon,
    faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Navbar: NextPage<any> = () => {
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") || "light";
        setTheme(localTheme);
    }, [setTheme]);

    const navMap = [
        {
            name: "New Paste",
            url: "/",
        },
        {
            name: "Online Tools",
            url: "/tools",
        },
    ];

    const themeChangeHandler = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <div className="navbar bg-base-100  mb-5 px-5 " >
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="flex ">
                            <FontAwesomeIcon
                                icon={faBarsStaggered}
                                className="swap-on w-7 h-7 "
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/dashboard/settings">Settings</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/manage">Manage Paste</Link>
                        </li>
                        <li>
                            <Link href="/login" passHref={true}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" passHref={true}>
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link href="/">
                    <h1 className="font-bold text-2xl hover:underline">
                        {/* {env.APP_WITH_DOMAIN.slice(0, 1).toUpperCase() +
                            env.APP_WITH_DOMAIN.slice(1)} */}
                    </h1>
                </Link>
            </div>

            <button className="btn btn-primary">
                Hello
            </button>

            {/* <NavBarItems /> */}
            <div className="navbar-end child:mx-1">
                {/* <Link href="/login" className="hidden md:block">
					<div className="btn btn-primary mx-2">login</div>
				</Link> */}

                <label className="swap swap-rotate">
                    {/* <!-- this hidden checkbox controls the state --> */}
                    <input type="checkbox " onClick={themeChangeHandler} />

                    {/* <!-- sun icon --> */}
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="swap-off w-7 h-7"
                    />

                    <FontAwesomeIcon icon={faSun} className="swap-on w-7 h-7" />
                </label>
            </div>
        </div>
    );
};

export default Navbar;
