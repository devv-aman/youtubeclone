import React from "react";
import PropTypes from "prop-types";

const VideoCard = ({
    videoImg,
    channelDp,
    videoImgAlt,
    channelAlt,
    videoTitle,
    channelName,
    videoViews,
    videoTime,
    videoLink,
}) => (
    <a
        href={videoLink}
        target="__blank"
        className="videoCard rounded-lg bg-white p-3 shadow-xl w-full"
    >
        <img
            src={videoImg}
            alt={videoImgAlt}
            className="w-52 rounded-lg w-full"
        />
        <div className="relative">
            <img
                src={channelDp}
                alt={channelAlt}
                className="w-8 rounded-xl absolute -top-4 left-1"
            />
            <p className="pt-6 text-sm font-bold h-16">
                {videoTitle.length > 80
                    ? `${videoTitle.substr(0, 80)}...`
                    : videoTitle}
            </p>
            <p className="text-xs text-gray-500 mt-2">{channelName}</p>
            <p className="flex items-center mt-2">
                <span className="views text-xs text-gray-500 flex items-center">
                    {videoViews}
                </span>
                <span className="text-xs text-gray-500">{videoTime}</span>
            </p>
        </div>
    </a>
);

VideoCard.propTypes = {
    videoImg: PropTypes.string,
    channelDp: PropTypes.string,
    videoImgAlt: PropTypes.string,
    channelAlt: PropTypes.string,
    videoTitle: PropTypes.string,
    channelName: PropTypes.string,
    videoViews: PropTypes.string,
    videoTime: PropTypes.string,
    videoLink: PropTypes.string,
};

VideoCard.defaultProps = {
    videoImg: "",
    channelDp: "",
    videoImgAlt: "",
    channelAlt: "",
    videoTitle: "",
    channelName: "",
    videoViews: "",
    videoTime: "",
    videoLink: "",
};

VideoCard.displayName = "VideoCard";

export default VideoCard;
