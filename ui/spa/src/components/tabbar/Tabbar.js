import './Tabbar.css';
import { MdOutlineAdd } from 'react-icons/md';
import React, { useState, useEffect } from 'react';

function Tabbar() {
    const [tabs, setTabs] = useState([])
    const [index, setIndex] = useState(0)

    useEffect((index) => {
        setTabs([{id: index,title: "new Tab"}])
    }, []);

    const newTab = (title) => {
        setTabs([...tabs, {id: index,title: "new Tab"}])
        setIndex(index+1)
    }

    return (
        <div className="Tabbar">
            <div className="Tabbar_tablist">
                {tabs.map((v, i) => {
                    return (
                        <span key={i} style={{textAlign: "center"}}>{v.title}</span>
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
