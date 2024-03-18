import React from "react";
import rightImg from '../../img/right-side-img/1-right-min.jpg';

const Dinner = () => {
    return (
        <div className="menu__slide" data-meal="dinner" data-side="right">
            <img className="menu__img" src={rightImg} alt="1-right-min" />
            <div className="menu__description">
                <div className="menu__header-block">
                    <div className="menu__diet">Дієта №15</div>
                    <div className="menu__date">
                        <span className="menu__date-day">Понеділок</span>
                        <span className="menu__date-data">04.03.2024</span>
                    </div>
                </div>
                <div className="menu__title">Обід</div>
                <ul className="menu__meals-block">
                    <li className="menu__meals-item">
                        <p className="menu__meals-name"><i>Закуска:  </i>Салат із капусти свіжої, канапе з авокадо</p>
                        <span className="menu__meals-output">101/70</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name"><i>I страва:  </i>Розсольник, сметана</p>
                        <span className="menu__meals-output">500/21</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name"><i>II страва:  </i>Печеня по-домашньому</p>
                        <span className="menu__meals-output">298/56</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name"><i>III страва:  </i>Хліб, компот, фрукт</p>
                        <span className="menu__meals-output">250</span>
                    </li>
                </ul>
                <ul className="menu__footer-block">
                    <li className="menu__responsible-item">
                        <p className="menu__meals-name">Начальник їдальні:</p>
                        <span className="menu__meals-output">сержант Марія САХНЮК</span>
                    </li>
                    <li className="menu__responsible-item">
                        <p className="menu__meals-name">Кухар</p>
                        <span className="menu__meals-output">солдат Олена ДРАГАН</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dinner;
