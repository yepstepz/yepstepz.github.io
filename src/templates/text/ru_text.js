import React from 'react';
const RuText = () => {
    return (
        <div className="container">
            <div className="description">
                <p>Привет,</p>
                <p>Меня зовут Татьяна Леонтьева.
                    Я работаю с одностраничными приложениями
                    и высоконагруженными сайтами,</p>
                <p>Также я разрабатываю собственные проекты с помощью React/Redux, ECMAScript 6.
                    Для сборки проекта использую Webpack или Gulp.</p>
                <p>Мне нравится изучать алгоритмы и математику.</p>
            </div>
            <div className="skills">
                <a name="skills">
                    <div className="skills__title">Навыки:</div>
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
                    <div className="experience__title">Опыт работы</div>
                </a>
                <div className="experience__item">
                    <div className="experience__item__title">Программист | Demis, Воронеж</div>
                    <p className="experience__item__year">Январь 2016 - Настоящее время</p>
                    <div className="experience__advantages">
                        <div className="experience__advantages__time"></div>
                        <div className="experience__advantages__time"></div>
                    </div>
                    <p className="experience__item__description">
                        Получила повышение до старшего программиста.
                        Активно участвовала в обучении новых сотрудников.
                        Самостоятельно изучила веб-инструменты для повышения
                        скорости и качества разработки.
                    </p>
                    <p className="experience__item__listBtn"
                        onClick={(e) => {
                            e.target.nextSibling.classList.toggle('showed')
                        }}
                    >Обязанности</p>
                    <ul className="experience__item__responsibilities">
                        <li>Работа с популярными CMS,</li>
                        <li>HTML-вёрстка,</li>
                        <li>добавление функционала с помощью js (jQuery) и php,</li>
                        <li>добавление адаптивности и «резины»,</li>
                        <li>обучение стажёров,</li>
                        <li>составление обучающих материалов для стажеров.</li>
                    </ul>
                </div>
                <div className="experience__item">
                    <div className="experience__item__title">Веб-мастер | Viled, Санкт-Петербург</div>
                    <p className="experience__item__year">Август 2015 - Декабрь 2015</p>
                    <p className="experience__item__description">
                        Получила важные сео- и веб- навыки;
                        Научилась планировать свое время и
                        делегировать задачи.
                        Изучила важные UX-паттерны.
                    </p>
                    <p className="experience__item__listBtn"
                       onClick={(e) => {
                           e.target.nextSibling.classList.toggle('showed')
                       }}
                    >Обязанности</p>
                    <ul className="experience__item__responsibilities">
                        <li>Добавление на сайт функционала с помощью jQuery и css3, </li>
                        <li>Анализ поведенческих факторов с помощью Google analytics, </li>
                        <li>Тестирование UX-практик для привлечения и вовлечения целевой аудитории, </li>
                        <li>A/B тестирование,</li>
                        <li>составление технических заданий,</li>
                        <li>общение с фрилансерами.</li>
                    </ul>
                </div>
                <div className="experience__item">
                    <div className="experience__item__title">Контент-менеджер | Promotion Group, Москва</div>
                    <p className="experience__item__year">Август 2014 - Март 2015</p>
                    <p className="experience__item__description">
                        Получила навыки вёрстки и SEO, научилась
                        создавать оптимизированный контент.
                    </p>
                    <p className="experience__item__listBtn"
                       onClick={(e) => {
                           e.target.nextSibling.classList.toggle('showed')
                       }}
                    >Обязанности</p>
                    <ul className="experience__item__responsibilities">
                        <li>написание и редактирование SEO-контента,</li>
                        <li>вёрстка</li>
                    </ul>
                </div>
            </div>
            <div className="education">
                <a name="education">
                    <div className="education__title">Образование</div>
                </a>
                <div className="education__item">
                    <div className="education__item__title">Бакалавр Техники и Технологий | Национальный исследовательский университет «МИЭТ»</div>
                    <p className="education__item__year">2010 - 2014</p>
                    <p>Специальность Вычислительная Техника.</p>
                </div>
            </div>
        </div>
    )
}

export default RuText;