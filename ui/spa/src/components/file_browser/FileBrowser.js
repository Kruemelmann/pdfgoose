import './FileBrowser.css';
import { BsFolder2, BsFillFileEarmarkFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';

function FileBrowser() {
    const [files, setFiles] = useState([]);
    const [dirs, setDirs] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        fetchFiles()
    }, [])

    const fetchFiles = () => {
        //TODO maybe template this later this is for development
        fetch("http://"+window.location.hostname+":9000/file")
            .then((response) => response.json())
            .then((data) => {
                setFiles(data.files)
                setDirs(data.directorys)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const renderFile = (v,i,isDir) => {
        if (isDir) {
            return (
                <tr key={i}>
                    <td><BsFolder2 /></td>
                    <td>{v.Name}</td>
                </tr>
            )
        } else {
            return (
                <tr key={i}>
                    <td><BsFillFileEarmarkFill /></td>
                    <td>{v.Name}</td>
                </tr>
            )
        }
    }

    return (
        <div className="FileBrowser">
            <table>
                <thead>
                    <tr>
                        <th style={{width:"2%"}}></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {dirs.map((v, i) => {
                        return renderFile(v,i, true)
                    })}
                    {files.map((v, i) => {
                        return renderFile(v,i, false)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default FileBrowser;
