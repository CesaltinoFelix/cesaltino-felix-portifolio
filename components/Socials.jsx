
import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"


const socials = [
    {icon: <FaGithub/>, path: "https://github.com/CesaltinoFelix"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/cesaltinofelix"},
    {icon: <FaYoutube/>, path: "https://www.youtube.com/@cesaltinofelix"},
    {icon: <FaTwitter/>, path: "https://x.com/CesaltinoFelix"}
]

const Socials = ({containerStyles, iconStyles})=> {
    return (
    <div className={containerStyles}>
        {socials.map((social, index)=>{
            return<Link key={index} href={social.path} className={iconStyles} target="_blank">
                    {social.icon}
                </Link>
        })}
    </div>
    )
}

export default Socials