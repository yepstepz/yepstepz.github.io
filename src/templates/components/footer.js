import React, {PropTypes} from 'react';
const Footer = ({links}) => {
    return(
        <footer className="bottom">
           <div className="container">
               <ul className="bottom__contacts">
                   <li className="github"><a href="https://github.com/yepstepz">Github</a></li>
                   <li className="fb"><a href="https://facebook.com/yepstepz">Facebook</a></li>
                   <li className="mail"><a href="mailto:tatiana.leontieva94@gmail.com">E-mail</a></li>
               </ul>
               <ul className="bottom__links">
                   <li><a href="#skills">{links.skills}</a></li>
                   <li><a href="#workExperience">{links.experience}</a></li>
                   <li><a href="#education">{links.education}</a></li>
               </ul>
           </div>
        </footer>
    )
}
export default Footer;