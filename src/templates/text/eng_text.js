import React from 'react';
const text = pug`
    div.description
        h1 Junior Front End Developer
        p Hello,
        p My name is Tatiana Leontieva. 
          | I'm working with single-page application and high-loaded websites 
          | using HTML5, CSS3 (SASS/LESS), Js.
        p I'm also developing my own projects with React/Redux, ECMAScript 6. 
          | Webpack and Gulp helps me to improve and optimize my developing process.
        p I enjoy maths and algorithms.
    div.skills
        h2 My skills
        ul.skills__List
            li JS, ECMAScript 6, React, jQuery
            li Sass/Less, CSS3
            li Webpack, Gulp
            li PHPStorm, GIT
            li Mocha/Chai Tests (TDD)
    div.experience
        h2 Work Experience
        div.experience__item
            h3.experience__item__title Developer | Demis, Voronezh
            p.experience__item__year January 2016 - Present
            div.experience__advantages
               div.experience__advantages__time
               div.experience__advantages__time
            p.experience__item__description
              | Was promoted from junior to middle developer;
              | Succesfully passed inner tests and certified
              | with Bitrix certificates.
            p Responsibilities
            ul.experience__item__responsibilities 
               li Working with popular CMS,
               li HTML-coding,
               li adding functionality with js (jQuery),
               li adding adaptivity and responsibility,
               li mentoring interns,
               li doing educational materials for interns.
        div.experience__item
            h3.experience__item__title Developer Webmaster | Viled, St. Petersburg
            p.experience__item__year August 2015 - December 2015
            p.experience__item__description
             | Got important webmaster skills;
             | Started managing and planning own time;
             | Understood important UX-patterns.
             p Responsibilities
            ul.experience__item__responsibilities 
              li Using jQuery and css3 for adding functionality on site,
              li Analysing user behaviors with Google analytics,
              li Trying and testing UX-practices to engage and involve the target audience,
              li A/B testing,
              li making technical tasks,
              li communicating with freelancers.
        div.experience__item
            h3.experience__item__title Content-manager | Promotion Group, Moscow
            p.experience__item__year August 2014 - March 2015
            p.experience__item__description
             | Got html skills and learned
             | how to make SEO-content.
             p Responsibilities
            ul.experience__item__responsibilities
              li writing and editing SEO-content,
              li html-coding
    h2 Education
    div.education
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