import './Tabbar.css';
import { MdOutlineAdd } from 'react-icons/md';
import React, { useState, useEffect } from 'react';

function Tabbar() {
    const [tabs, setTabs] = useState([])

    useEffect(() => {
        newTab("New Tab");
    }, []);

    function newTab(title) { //TODO init new Tab Type
        setTabs([...tabs, {title: title}])
        return
    }

    return (
        <div className="Tabbar">
            <div className="Tabbar_tablist">
                {tabs.map((v) => {
                    //TODO use Tabs into own component with close button
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
