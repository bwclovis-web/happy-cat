import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import StyledProfileCard from "./ProfileCardStyles"
import { GrMail } from "@react-icons/all-files/gr/GrMail"
import { GrFacebook } from "@react-icons/all-files/gr/GrFacebook"
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram"

const ProfileCard = ({image}) => (
    <StyledProfileCard>
        <div className="content">
            <GatsbyImage image={image} />
            <h2>Amanda Clovis</h2>
            <ul>
               <li>
                    <a className="social">
                        <GrMail size={42} />
                        <span>amandalynn629@gmail.com</span>
                    </a>
               </li>
               <li>
                    <a className="social">
                        <GrFacebook size={42} />
                        <span>Facebook coming soon</span>
                    </a>
               </li> 

               <li>
                    <a className="social">
                        <GrInstagram size={42} />
                        <span>Instagram coming soon</span>
                    </a>
               </li> 
            </ul>
        </div>
    </StyledProfileCard>
)

export default ProfileCard