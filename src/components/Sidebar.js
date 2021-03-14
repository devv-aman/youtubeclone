import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import YoutubeLogo from "img/yt_logo_rgb_light.png";

// static subscribers display pictures
import MrWhosetheboss from "img/subs/mywhosetheboss.jpeg";
import Netflix from "img/subs/netflix.jpeg";
import NetNinja from "img/subs/netninja.jpeg";
import SmallCase from "img/subs/smallcase.jpeg";
import Whatif from "img/subs/whatif.jpeg";

import { MdVideoLibrary, MdHistory, MdKeyboardArrowDown } from "react-icons/md";
import {
    AiOutlinePlaySquare,
    AiFillClockCircle,
    AiTwotoneLike,
    AiFillYoutube,
} from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { BiBroadcast } from "react-icons/bi";

const Sidebar = () => {
    const [menuList, updateMenuList] = useState([]);
    const [subscriptions, updateSubscriptions] = useState([]);
    const [moreMenu, updateMoreMenu] = useState([]);

    useEffect(() => {
        updateMenuList([
            {
                icon: <MdVideoLibrary className="text-gray-500 text-xl" />,
                label: "Library",
            },
            {
                icon: <MdHistory className="text-gray-500 text-xl" />,
                label: "History",
            },
            {
                icon: <AiOutlinePlaySquare className="text-gray-500 text-xl" />,
                label: "Your videos",
            },
            {
                icon: <AiFillClockCircle className="text-gray-500 text-xl" />,
                label: "Watch later",
            },
            {
                icon: <AiTwotoneLike className="text-gray-500 text-xl" />,
                label: "Liked videos",
            },
        ]);
    }, []);

    useEffect(() => {
        updateSubscriptions([
            {
                image: MrWhosetheboss,
                label: "Mrwhosetheboss",
                link:
                    "https://www.youtube.com/channel/UCMiJRAwDNSNzuYeN2uWa0pA",
            },
            {
                image: Netflix,
                label: "Netflix India",
                link:
                    "https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg",
            },
            {
                image: NetNinja,
                label: "The Net Ninja",
                link:
                    "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg",
            },
            {
                image: SmallCase,
                label: "smallcase",
                link:
                    "https://www.youtube.com/channel/UC0w2TsYMm4Zb8ncDjkVsxQQ",
            },
            {
                image: Whatif,
                label: "What If",
                link:
                    "https://www.youtube.com/channel/UCphTF9wHwhCt-BzIq-s4V-g",
            },
        ]);
    }, []);

    useEffect(() => {
        updateMoreMenu([
            {
                icon: <AiFillYoutube className="text-gray-500 text-xl" />,
                label: "Youtube Premium",
            },
            {
                icon: <SiYoutubegaming className="text-gray-500 text-xl" />,
                label: "Gaming",
            },
            {
                icon: <BiBroadcast className="text-gray-500 text-xl" />,
                label: "Live",
            },
        ]);
    }, []);

    return (
        <div className="sidebarContainer p-6 shadow-xl rounded-3xl bg-white">
            <div className="flex justify-center w-full py-2 mb-8">
                <img className="w-32" src={YoutubeLogo} alt="Youtube Logo" />
            </div>
            {menuList.map((menu) => (
                <NavLink
                    exact
                    key={menu.label}
                    to={menu.label.toLowerCase().replace(/\s/g, "-")}
                    className="flex items-center mb-4 hover:text-red-50"
                >
                    {menu.icon}
                    <p
                        key={menu.label}
                        className="text-gray-500 font-body ml-4 text-base"
                    >
                        {menu.label}
                    </p>
                </NavLink>
            ))}
            <div className="flex items-center mb-4 cursor-pointer">
                <MdKeyboardArrowDown className="text-gray-500 text-2xl" />
                <p className="text-gray-500 font-body ml-4 text-base">
                    Show more
                </p>
            </div>
            <div className="mt-8 sidebarContainer--subscriptions">
                <p className="font-bold text-base tracking-wider uppercase mb-6">
                    Subscriptions
                </p>
                {subscriptions.map((subs) => (
                    <a
                        target="__blank"
                        className="flex items-center mb-4"
                        href={subs.link}
                        key={subs.label}
                    >
                        <img
                            className="w-8 rounded-full mr-4"
                            src={subs.image}
                            alt={subs.label}
                        />
                        <p className="text-gray-500">{subs.label}</p>
                    </a>
                ))}
                <div className="flex items-center mb-4 cursor-pointer">
                    <MdKeyboardArrowDown className="text-gray-500 text-2xl" />
                    <p className="text-gray-500 font-body ml-4 text-base">
                        Show 170 more
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-bold text-base tracking-wider uppercase mb-6">
                    More from youtube
                </p>
                {moreMenu.map((menu) => (
                    <NavLink
                        key={menu.label}
                        exact
                        to={menu.label.toLowerCase().replace(/\s/g, "-")}
                        className="flex items-center mb-4"
                    >
                        {menu.icon}
                        <p
                            key={menu.label}
                            className="text-gray-500 font-body ml-4 text-base"
                        >
                            {menu.label}
                        </p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
