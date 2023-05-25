import './FileChooser.css';

import {
    BiFolderOpen
} from 'react-icons/bi';

function FileChooser() {
  return (
    <div className="FileChooser">
        <label class="custom-file-upload">
            <input style={{display: "none"}} type="file"/>
            <BiFolderOpen />
        </label>

    </div>
  );
}

export default FileChooser;
