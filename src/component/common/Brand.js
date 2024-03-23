import { Nav, NavLink } from "react-bootstrap";

function Brand(props) {
    return(
        <>
            <div className="brandMenu>">
                <div className="tilleBrand">
                    <h3>Brand</h3>
                </div>
                <ul>
                <li><span><FaHome /></span><NavLink to={"/home"} className={"nav-link"}>Home</NavLink></li>
                    <li><span><FaInfo /></span><NavLink to={"/about"} className={"nav-link"}>About</NavLink></li>
                    <li><span><FaRegCalendarDays /></span><NavLink to={"/events"} className={"nav-link"}>Events</NavLink></li>
                    <li><span><RiTeamFill /></span><NavLink to={"/team"} className={"nav-link"}>Team</NavLink></li>
                    <li><span><MdOutlineWork /></span><NavLink to={"/work"} className={"nav-link"}>Work</NavLink></li>
                    <li><span><IoMdSettings /></span><NavLink to={"/services"} className={"nav-link"}>Services</NavLink></li>
                    <li><span><TiMessages /></span><NavLink to={"/contact"} className={"nav-link"}>Contact</NavLink></li>
                    <li><span><FaTwitter /></span><NavLink to={"/followme"} className={"nav-link"}>Follow me</NavLink></li>
                </ul>
            </div>
        </>
    );
}
export default Brand;