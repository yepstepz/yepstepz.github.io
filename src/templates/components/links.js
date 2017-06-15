import React, {PropTypes} from 'react';

const Links = ({link}) => {
    return (
        <aside>
            <div>Links</div>
            <ul className="bottom__links">
                <li><a href="#skills">{link.skills}</a></li>
                <li><a href="#workExperience">{link.experience}</a></li>
                <li><a href="#education">{link.education}</a></li>
            </ul>
            <div>Contacts</div>
            <ul className="bottom__contacts">
                <li className="github"><a href="https://github.com/yepstepz">Github</a></li>
                <li className="fb"><a href="https://facebook.com/yepstepz">Facebook</a></li>
                <li className="mail"><a href="mailto:tatiana.leontieva94@gmail.com">E-mail</a></li>
            </ul>
        </aside>
    )
}
export default Links;