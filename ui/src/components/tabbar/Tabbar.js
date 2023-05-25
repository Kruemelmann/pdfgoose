import './Tabbar.css';
import { MdOutlineAdd } from 'react-icons/md';
import React, { useState, useEffect } from 'react';

function Tabbar() {
    const [tabs, setTabs] = useState([])

    useEffect(() => {
        setTabs([{title: "new Tab"}])
    }, []);

    const newTab = (title) => {
        setTabs([...tabs, {title: title}])
    }

    return (
        <div className="Tabbar">
            <div className="Tabbar_tablist">
                {tabs.map((v) => {
                    return (
                        <span style={{"text-align": "center"}}>{v.title}</span>
                    )
                })}
            </div>
            <div className="Tabbar_add" onClick={() => {newTab("New Tab")}}>
                <MdOutlineAdd />
            </div>
        </div>
    );
}

export default Tabbar;
