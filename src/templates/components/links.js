import React, {PropTypes} from 'react';

const Links = ({link}) => {
    return (
        <aside>
            <div className="links__title">{link.links}</div>
            <ul className="links__list">
                <li><a href="#skills">{link.skills}</a></li>
                <li><a href="#workExperience">{link.experience}</a></li>
                <li><a href="#education">{link.education}</a></li>
            </ul>
            <div className="contacts__title">{link.contacts}</div>
            <ul className="contacts__list">
                <li className="github"><a href="https://github.com/yepstepz">Github</a></li>
                <li className="fb"><a href="https://facebook.com/yepstepz">Facebook</a></li>
                <li className="mail"><a href="mailto:tatiana.leontieva94@gmail.com">E-mail</a></li>
            </ul>
        </aside>
    )
}
export default Links;