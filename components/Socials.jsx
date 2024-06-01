import { Link } from "lucide-react"
import {FaGitHub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"


const socials = [
    {icon: <FaGitHub/>, path: "https://github.com/CesaltinoFelix"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/cesaltinofelix"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/@cesaltinofelix"},
    {icon: <FaTwitter/>, path: "https://x.com/CesaltinoFelix"}
]

const Socials = ()=> {
    return <div>
        {socials.map((social, index)=>{
            return 
        })}
    </div>
}

export default Socials