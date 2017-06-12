import React from 'react';
const EngText = () => {
    return (
        <div className="container">
            <div className="description">
                <h1>Junior Front End Developer</h1>
                <p>Hello,</p>
                <p>
                    My name is Tatiana Leontieva. I'm working with single-page application and high-loaded websites using HTML5, CSS3 (SASS/LESS), Js.
                </p>
                <p>
                    I'm also developing my own projects with React/Redux, ECMAScript 6. Webpack and Gulp helps me to improve and optimize my developing process.
                </p>
                <p>I enjoy maths and algorithms.</p>
            </div>
            <div className="skills">
                <h2>My skills</h2>
                <ul className="skills__List">
                    <li className="skills__List__item">JS, ECMAScript 6 </li>
                    <li className="skills__List__item">React </li>
                    <li className="skills__List__item">jQuery</li>
                    <li className="skills__List__item">CSS3</li>
                    <li className="skills__List__item">Sass/Less </li>
                    <li className="skills__List__item">Webpack</li>
                    <li className="skills__List__item">Gulp</li>
                    <li className="skills__List__item">PHPStorm</li>
                    <li className="skills__List__item">GIT</li>
                    <li className="skills__List__item">Mocha/Chai Tests (TDD)</li>
                </ul>
            </div>
            <div className="experience">
                <h2>Work Experience</h2>
                <div className="experience__item">
                    <h3 className="experience__item__title">Developer | Demis, Voronezh</h3>
                    <p className="experience__item__year">January 2016 - Present</p>
                    <div className="experience__advantages">
                        <div className="experience__advantages__time"></div>
                        <div className="experience__advantages__time"></div>
                    </div>
                    <p className="experience__item__description">
                        Was promoted from junior to middle developer; Succesfully passed inner tests and certified with Bitrix certificates.
                    </p>
                    <p className="experience__item__listBtn">Responsibilities</p>
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
                    <h3 className="experience__item__title">Developer Webmaster | Viled, St. Petersburg</h3>
                    <p className="experience__item__year">August 2015 - December 2015</p>
                    <p className="experience__item__description">
                        Got important webmaster skills; Started managing and planning own time; Understood important UX-patterns.
                    </p>
                    <p className="experience__item__listBtn">Responsibilities</p>
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
                    <h3 className="experience__item__title">Content-manager | Promotion Group, Moscow</h3>
                    <p className="experience__item__year">August 2014 - March 2015</p>
                    <p className="experience__item__description">
                        Got html skills and learned how to make SEO-content.
                    </p>
                    <p className="experience__item__listBtn">Responsibilities</p>
                    <ul className="experience__item__responsibilities">
                        <li>writing and editing SEO-content,</li>
                        <li>html-coding</li>
                    </ul>
                </div>
            </div>
            <h2>Education</h2>
            <div className="education">
                <h3>Bachelor of Engineering (B.Eng.) | National Research University of Electronic Technology (MIET)</h3>
                <p>2010 - 2014</p>
                <p>Department of Computer Science and Telecommunications</p>
            </div>
            <h2>Contact me:</h2>
            <ul>
                <li className="github"><a href="https://github.com/yepstepz">Github</a></li>
                <li className="fb"><a href="https://facebook.com/yepstepz">Facebook</a></li>
                <li className="mail"><a href="mailto:tatiana.leontieva94@gmail.com">Mail</a></li>
            </ul>
        </div>
    )
}

export default EngText;