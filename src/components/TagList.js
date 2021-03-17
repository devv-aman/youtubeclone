import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TagList = () => {
    const [tags, updateTags] = useState([]);
    const [selectedTag, updateSelectedTag] = useState("All");

    useEffect(() => {
        updateTags([
            "All",
            "Stock Markets",
            "JavaScript",
            "Live",
            "Mixes",
            "Liverpool",
            "React",
            "Angular",
            "Science Fiction",
            "Gadgets",
            "A.R. Rahman",
            "Recently Uploaded",
            "Watched",
        ]);
    }, []);

    return (
        <div className="tagList flex item-center overflow-x-scroll flex-nowrap">
            {tags.map((tag) => (
                <Link
                    key={tag}
                    to={`/${tag.replace(/\s/g, "-").toLowerCase()}`}
                    onClick={() => updateSelectedTag(tag)}
                    className={`bg-white mr-4 px-4 py-2 rounded-xl text-sm flex-grow-0 flex-shrink-0 ${
                        selectedTag === tag ? " bg-gray-800 text-white" : ""
                    }`}
                >
                    {tag}
                </Link>
            ))}
        </div>
    );
};

TagList.displayName = "TagList";

export default TagList;
