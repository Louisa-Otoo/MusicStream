import './sidebar.css'
import { Link } from 'react-router-dom'
import { CiCompass1 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";



const Sidebar = () => {
  return (
    <>
        {/* <aside> */}
            <div className="sidebar">
                <p className="logo">MusicStream</p>

                <ul>
                    <li>
                        <Link to="login">
                            <button className="logBtn"><FaPowerOff /> Login</button>
                        </Link>
                    </li>       

                    <li> 
                        <Link to="/">
                            <AiOutlineHome /> Home
                        </Link>
                    </li>

                    <li>
                        <Link to="discover">
                            <CiCompass1 /> Discover
                        </Link>
                    </li>

                </ul>

                <div className="socials">
                    <p>FB</p>
                    <p>IG</p>
                    <p>X</p>
                </div>
            </div>
        {/* </aside> */}
    </>
  )
}



export default Sidebar