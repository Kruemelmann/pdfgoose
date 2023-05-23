import './Navbar.css';
import {
    BiSidebar,
    BiBorderAll
} from 'react-icons/bi';
import {
    MdOutlineElectricBolt,
    MdRemoveRedEye,
    MdOutlineEdit
} from 'react-icons/md';


function Navbar() {
  return (
    <div className="Navbar">
        <div className="Navbar_container">
            <div className="Navbar_icon_container">
                <BiSidebar />
                <BiBorderAll />
                <MdOutlineElectricBolt />
                <select name="zoom" id="zoom">
                    <option value="50">50%</option>
                    <option value="75">75%</option>
                    <option value="100">100%</option>
                    <option value="150">150%</option>
                </select>
            </div>
            <div>
                <input className="Navbar_searchbar" type="text" placeholder="Search.." name="search" />
            </div>
            <div className="Navbar_icon_container">
                <div className="Navbar_button">
                    <div><MdRemoveRedEye /></div>
                    <div>View</div>
                </div>
                <div className="Navbar_button">
                    <div><MdOutlineEdit /></div>
                    <div>Annotate</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
