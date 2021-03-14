// node_modules
import React from "react";

// components
import Sidebar from "components/Sidebar";
import Menubar from "components/Menubar";

const Home = () => (
    <div className="flex p-2 items-start">
        <Sidebar />
        <Menubar />
    </div>
);

Home.displayName = "Home";

export default Home;
