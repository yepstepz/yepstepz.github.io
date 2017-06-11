import React from 'react';
const text = pug`div.container
    h1 Junior Front End Developer
    p Hello,
    p My name is Tatiana Leontieva. 
      | I'm working with single-page application and high-loaded websites 
      | using HTML5, CSS3 (SASS/LESS), Js.
    p I'm also developing my own projects with React/Redux, ECMAScript 6. 
      | Webpack and Gulp helps me to improve and optimize my developing process.
    p I enjoy maths and algorithms.

    h2 My skills
    ul
        li JS, ECMAScript 6, React, jQuery
        li Sass/Less, CSS3
        li Webpack, Gulp
        li PHPStorm, GIT
        li Mocha/Chai Tests (TDD)
    h2 Work Experience
    h3 Developer | Demis, Voronezh
    p January 2016 - Present
    p
      | Was promoted from junior to middle developer;
      | Succesfully passed inner tests and certified
      | with Bitrix certificates.
    ul
       li Working with popular CMS,
       li HTML-coding,
       li adding functionality with js (jQuery),
       li adding adaptivity and responsibility,
       li mentoring interns,
       li doing educational materials for interns.
    h3 Webmaster | Viled, St. Petersburg
    p August 2015 - December 2015
    p
     | Got important webmaster skills;
     | Started managing and planning own time;
     | Understood important UX-patterns.
    ul
      li Using jQuery and css3 for adding functionality on site,
      li Analysing user behaviors with Google analytics,
      li Trying and testing UX-practices to engage and involve the target audience,
      li A/B testing,
      li making technical tasks,
      li communicating with freelancers.
    h3 Content-manager | Promotion Group, Moscow
    p August 2014 - March 2015
    p
     | Got html skills and learned
     | how to make SEO-content.
    ul
      li writing and editing SEO-content,
      li html-coding
    h2 Education
    h3 Bachelor of Engineering (B.Eng.) | National Research University of Electronic Technology (MIET)
    p 2010 - 2014
    p Department of Computer Science and Telecommunications
    h2 Contact me:
    ul
      li.github
        a(href='https://github.com/yepstepz') Github
      li.fb
        a(href='https://facebook.com/yepstepz') Facebook
      li.mail
        a(href="mailto:tatiana.leontieva94@gmail.com") Mail`;

export default text;