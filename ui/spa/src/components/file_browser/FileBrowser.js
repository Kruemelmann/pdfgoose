import './FileBrowser.css';
import {
    BsFolder2,
    BsFillFileEarmarkFill,
    BsFillFileEarmarkPdfFill
} from 'react-icons/bs';
import {
    AiOutlineArrowUp
} from 'react-icons/ai';
import React, { useRef, useState, useEffect } from 'react';

function FileBrowser() {
    const [files, setFiles] = useState([]);
    const [dirs, setDirs] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        fetchFiles("")
    }, []);

    //TODO maybe template this later this is for development
    const route =  "http://"+window.location.hostname+":9000/file"
    const fetchFiles = (path) => {
        let requestOptions = {}
        requestOptions = {
            method: 'POST',
            body: JSON.stringify({ path: path })
        };

        fetch(route, requestOptions)
            .then(response => response.json())
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
                    <td onClick={() => {fetchFiles(v.Path)}}>{v.Name}</td>
                </tr>
            )
        } else if (v.Name.endsWith("pdf")){
            return (
                <tr key={i}>
                    <td><BsFillFileEarmarkPdfFill /></td>
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

    const fetchUpFiles = () => {
        fetch(route + "/up")
            .then(response => response.json())
            .then((data) => {
                fetchFiles(data.path)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div className="FileBrowser">
            <div>
                <button onClick={() => {fetchUpFiles()}}>
                    <AiOutlineArrowUp />
                    Up
                </button>
            </div>
            <div>
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
        </div>
    );
}

export default FileBrowser;
