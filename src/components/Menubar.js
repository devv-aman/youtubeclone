import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdHome } from "react-icons/io";
import { MdWhatshot, MdSubscriptions, MdVideoCall } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { FaBell } from "react-icons/fa";

const Menubar = () => {
    const [icons, updateIcons] = useState([]);

    useEffect(() => {
        updateIcons([
            {
                label: "home",
                icon: (
                    <IoMdHome className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
                link: "/",
            },
            {
                label: "hot",
                icon: (
                    <MdWhatshot className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
                link: "/hot",
            },
            {
                label: "subscriptions",
                icon: (
                    <MdSubscriptions className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
                link: "/subscriptions",
            },
            {
                label: "search",
                icon: "",
                link: "",
            },
            {
                label: "create",
                icon: (
                    <MdVideoCall className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
                link: "/create",
            },
            {
                label: "menu",
                icon: (
                    <CgMenuGridR className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
            },
            {
                label: "notification",
                icon: (
                    <FaBell className="text-xl text-gray-500 group-hover:text-red-700" />
                ),
            },
        ]);
    }, []);

    return (
        <div className="menubar flex flex-grow shadow-xl rounded-2xl bg-white p-4 mb-8">
            {icons.map((icon) => {
                if (icon.label === "search") {
                    return (
                        <input
                            className="bg-gray-100 rounded-xl flex-grow mx-20 px-4 text-xs duration-100 ease-out outline-none border-b focus:border-red-400"
                            key={icon.label}
                            placeholder="Search..."
                        />
                    );
                }

                if (icon.link) {
                    return (
                        <NavLink
                            exact
                            to={icon.link}
                            className="bg-gray-100 p-2 mr-4 rounded-xl hover:bg-red-100 active:bg-red-100 duration-100 ease-in group"
                            key={icon.label}
                        >
                            {icon.icon}
                        </NavLink>
                    );
                }

                return (
                    <div
                        className="bg-gray-100 p-2 mr-4 rounded-xl hover:bg-red-100 active:bg-red-100 duration-100 ease-in group cursor-pointer"
                        key={icon.label}
                    >
                        {icon.icon}
                    </div>
                );
            })}
        </div>
    );
};

Menubar.displayName = "Menubar";

export default Menubar;
