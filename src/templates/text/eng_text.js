import React from 'react';
const EngText = () => {
    return (
        <div className="container">
            <div className="description">
                <p>Hello,</p>
                <p>My name is Tatiana Leontieva. I'm working with single-page application and high-loaded websites using HTML5, CSS3 (SASS/LESS), Js.</p>
                <p>I'm also developing my own projects with React/Redux, ECMAScript 6. Webpack and Gulp helps me to improve and optimize my developing process.</p>
                <p>I enjoy maths and algorithms.</p>
            </div>
            <div className="skills">
                <a name="skills">
                    <div className="skills__title">My skills</div>
                </a>
                <ul className="skills__list">
                    <li className="skills__list__item">JS, ECMAScript 6 </li>
                    <li className="skills__list__item">React </li>
                    <li className="skills__list__item">jQuery</li>
                    <li className="skills__list__item">CSS3</li>
                    <li className="skills__list__item">Sass/Less </li>
                    <li className="skills__list__item">Webpack</li>
                    <li className="skills__list__item">Gulp</li>
                    <li className="skills__list__item">PHPStorm</li>
                    <li className="skills__list__item">GIT</li>
                    <li className="skills__list__item">Mocha/Chai Tests (TDD)</li>
                </ul>
            </div>
            <div className="experience">
                <a name="workExperience">
                    <div className="experience__title">Work Experience</div>
                </a>
                <div className="experience__item">
                    <div className="experience__item__title">Developer | Demis, Voronezh</div>
                    <p className="experience__item__year">January 2016 - Present</p>
                    <div className="experience__advantages">
                        <div className="experience__advantages__time"></div>
                        <div className="experience__advantages__time"></div>
                    </div>
                    <p className="experience__item__description">
                        Was promoted from junior to mnamedle developer; Succesfully passed inner tests and certified with Bitrix certificates.
                    </p>
                    <p className="experience__item__listBtn"
                       onClick={(e) => {
                           e.target.nextSibling.classList.toggle('showed')
                       }}
                    >Responsibilities</p>
                    <ul className="experience__item__responsibilities">
                        <li>Working with popular CMS,</li>
                        <li>HTML-coding,</li>
                        <li>adding functionality with js (jQuery),</li>
                        <li>adding adaptivity and responsibility,</li>
                        <li>mentoring interns,</li>
                        <li>doing educational materials for interns.</li>
                    </ul>
                </div>
                <div className="experience__item">
                    <div className="experience__item__title">Developer Webmaster | Viled, St. Petersburg</div>
                    <p className="experience__item__year">August 2015 - December 2015</p>
                    <p className="experience__item__description">
                        Got important webmaster skills; Started managing and planning own time; Understood important UX-patterns.
                    </p>
                    <p className="experience__item__listBtn"
                       onClick={(e) => {
                           e.target.nextSibling.classList.toggle('showed')
                       }}
                    >Responsibilities</p>
                    <ul className="experience__item__responsibilities">
                        <li>Using jQuery and css3 for adding functionality on site,</li>
                        <li>Analysing user behaviors with Google analytics,</li>
                        <li>Trying and testing UX-practices to engage and involve the target audience,</li>
                        <li>A/B testing,</li>
                        <li>making technical tasks,</li>
                        <li>communicating with freelancers.</li>
                    </ul>
                </div>
                <div className="experience__item">
                    <div className="experience__item__title">Content-manager | Promotion Group, Moscow</div>
                    <p className="experience__item__year">August 2014 - March 2015</p>
                    <p className="experience__item__description">
                        Got html skills and learned how to make SEO-content.
                    </p>
                    <p className="experience__item__listBtn"
                       onClick={(e) => {
                           e.target.nextSibling.classList.toggle('showed')
                       }}
                    >Responsibilities</p>
                    <ul className="experience__item__responsibilities">
                        <li>writing and editing SEO-content,</li>
                        <li>html-coding</li>
                    </ul>
                </div>
            </div>
            <div className="education">
                <a name="education">
                    <div className="education__title">Education</div>
                </a>
                <div className="education__item">
                    <div className="education__item__title">Bachelor of Engineering (B.Eng.) | National Research University of Electronic Technology (MIET)</div>
                    <p className="education__item__year">2010 - 2014</p>
                    <p>Department of Computer Science and Telecommunications</p>
                </div>
            </div>
        </div>
    )
}

export default EngText;