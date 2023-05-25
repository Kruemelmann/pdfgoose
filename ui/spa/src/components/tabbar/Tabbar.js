import './Tabbar.css';
import { MdOutlineAdd } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import TabLayout from '../tab_layout/TabLayout.js';

function Tabbar() {
    const [tabs, setTabs] = useState([])
    const [index, setIndex] = useState(0)
    const [activIndex, setActivIndex] = useState(0)

    useEffect((index) => {
        if (tabs.length === 0) {
            newTab()
        }
    }, []);

    const newTab = () => {
        setTabs([...tabs,{
            id: index,
            title: "new Tab "+index,
            pdfPath: "",
        }])
        setIndex(index+1)
    }

    const switchTab = (index) => {
        setActivIndex(index)
    }

    return (
        <>
            <div className="Tabbar">
                <div className="Tabbar_tablist">
                    {tabs.map((v, i) => {
                        return (
                            <button key={i} onClick={() => {switchTab(i)}}>{v.title}</button>
                        )
                    })}
                </div>
                <div className="Tabbar_add" onClick={() => {newTab()}}>
                    <MdOutlineAdd />
                </div>
            </div>
            <div>
                {tabs.map((v, i) => {
                    if (i === activIndex) {
                        return (
                            <TabLayout key={i} tab_property={tabs[i]} />
                        )
                    }
                })}
            </div>
        </>
    );
}

export default Tabbar;
