import {HOME_PAGE_LINK} from "../utils/links";
import { useState } from "react";

const Header = ()=>{
    const [log,setLog] = useState("login");
    function handleClick(){
        if(log === "login"){
            setLog("logout");
        }
        else{
            setLog("login");
        }
    }
    return (<>
        <nav id="nav-bar">
            <div className="image">
                <img src={HOME_PAGE_LINK} id = "logo" alt="rest logo" />
            </div>
            <div className="items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Orders</li>
                    <li><button onClick={handleClick}>{log}</button></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header;