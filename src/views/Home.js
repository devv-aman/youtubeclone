// node_modules
import React, { useState, useEffect } from "react";

// components
import Sidebar from "components/Sidebar";
import Menubar from "components/Menubar";
import TagList from "components/TagList";
import VideoCard from "components/VideoCard";

import Banner from "img/banner.jpeg";

// images
import Video1Img from "img/video-images/video1.webp";
import Video2Img from "img/video-images/video2.webp";
import Video3Img from "img/video-images/video3.webp";
import Video4Img from "img/video-images/video4.webp";
import Video5Img from "img/video-images/video5.webp";
import Video6Img from "img/video-images/video6.webp";
import Video7Img from "img/video-images/video7.webp";
import Video8Img from "img/video-images/video8.webp";

import Channel1Dp from "img/subs/webdevsimplified.jpeg";
import Channel2Dp from "img/subs/audi.jpeg";
import Channel3Dp from "img/subs/fireship.jpeg";
import Channel4Dp from "img/subs/dev2d.jpeg";
import Channel5Dp from "img/subs/desimusicfactory.jpeg";
import Channel6Dp from "img/subs/freecodecamp.jpeg";
import Channel7Dp from "img/subs/devsage.jpeg";
import Channel8Dp from "img/subs/primevideo.jpeg";

const Home = () => {
    const [videos, updateVideos] = useState([]);

    useEffect(() => {
        updateVideos([
            {
                id: 1,
                videoImg: Video1Img,
                videoImgAlt: "Video 1",
                channelDp: Channel1Dp,
                channelAlt: "Web Dev Simplified dp",
                videoTitle: "Advanced Button Hover Animations - CSS Only",
                channelName: "Web Dev Simplified",
                videoViews: "31K views",
                videoTime: "1 year ago",
                videoLink: "https://www.youtube.com/watch?v=cH0TC9gWiAg",
            },
            {
                id: 2,
                videoImg: Video2Img,
                videoImgAlt: "Video 2",
                channelDp: Channel2Dp,
                channelAlt: "Audi dp",
                videoTitle:
                    "Design is an attitude | Marc Lichte & the Audi e-tron GT Design is an attitude | Marc Lichte & the Audi e-tron GT",
                channelName: "Audi",
                videoViews: "112K views",
                videoTime: "2 weeks ago",
                videoLink: "https://www.youtube.com/watch?v=ClNY7NO4BDQ",
            },
            {
                id: 3,
                videoImg: Video3Img,
                videoImgAlt: "Video 3",
                channelDp: Channel3Dp,
                channelAlt: "Fireship dp",
                videoTitle: "Linux Directories Explained in 100 Seconds",
                channelName: "Fireship",
                videoViews: "226K views",
                videoTime: "1 month ago",
                videoLink: "https://www.youtube.com/watch?v=42iQKuQodW4",
            },
            {
                id: 4,
                videoImg: Video4Img,
                videoImgAlt: "Video 4",
                channelDp: Channel4Dp,
                channelAlt: "Dave2D dp",
                videoTitle: "The OnePlus 9 Hasselblad Camera",
                channelName: "Dave2D",
                videoViews: "1M views",
                videoTime: "2 days ago",
                videoLink: "https://www.youtube.com/watch?v=HuB4fd73G_8",
            },
            {
                id: 5,
                videoImg: Video5Img,
                videoImgAlt: "Video 5",
                channelDp: Channel5Dp,
                channelAlt: "Desi Music Factory dp",
                videoTitle:
                    "Dheeme Dheeme - Tony Kakkar ft. Neha Sharma | Official Music Video",
                channelName: "Desi Music Factory",
                videoViews: "593M views",
                videoTime: "1 year ago",
                videoLink: "https://www.youtube.com/watch?v=9mWdw-09dso",
            },
            {
                id: 6,
                videoImg: Video6Img,
                videoImgAlt: "Video 6",
                channelDp: Channel6Dp,
                channelAlt: "freeCodeCamp.org dp",
                videoTitle: "Javascript Project Tutorial: Budget App",
                channelName: "freeCodeCamp.org",
                videoViews: "155K views",
                videoTime: "2 years ago",
                videoLink: "https://www.youtube.com/watch?v=m_HJ3juuFvo",
            },
            {
                id: 7,
                videoImg: Video7Img,
                videoImgAlt: "Video 7",
                channelDp: Channel7Dp,
                channelAlt: "DevSage dp",
                videoTitle: "Javascript Design Patterns #2 - Singleton Pattern",
                channelName: "DevSage",
                videoViews: "16K views",
                videoTime: "1 year ago",
                videoLink: "https://www.youtube.com/watch?v=JKNjfDCNPa4",
            },
            {
                id: 8,
                videoImg: Video8Img,
                videoImgAlt: "Video 8",
                channelDp: Channel8Dp,
                channelAlt: "Amazon Prime Video India dp",
                videoTitle:
                    "Them - Official Teaser | Deborah Ayorinde, Ashley Thomas, Alison Pill | Amazon Prime Video",
                channelName: "Amazon Prime Video India",
                videoViews: "53K views",
                videoTime: "5 days ago",
                videoLink: "https://www.youtube.com/watch?v=SU8H5rt8TEc",
            },
        ]);
    }, []);

    return (
        <div className="flex p-2 items-start">
            <Sidebar />
            <div className="body fixed z-50 px-6 pb-12 shadow-xl rounded-3xl overflow-y-scroll h-full">
                <div className="fixed bg-gray-100 pr-8">
                    <Menubar />
                    <TagList />
                </div>

                <img
                    src={Banner}
                    alt="Banner"
                    className="w-full rounded-lg mt-44"
                />

                <div className="grid grid-cols-4 gap-5 mt-12">
                    {videos.map((video) => (
                        <VideoCard key={video.id} {...video} />
                    ))}
                </div>
            </div>
        </div>
    );
};

Home.displayName = "Home";

export default Home;
