import React from "react";
import leftImg from '../../img/left-side-img/1-left-min.jpg';

const Breakfast = () => {
    return (
        <div className="menu__slide" data-meal="breakfast" data-side="left">
            <img className="menu__img" src={leftImg} alt="1-left-min"/>
            <div className="menu__description">
                <div className="menu__header-block">
                    <div className="menu__diet">Дієта №15</div>
                    <div className="menu__date">
                        <span className="menu__date-day">Понеділок</span>
                        <span className="menu__date-data">04.03.2024</span>
                    </div>
                </div>
                <div className="menu__title">Сніданок</div>
                <ul className="menu__meals-block">
                    <li className="menu__meals-item">
                        <p className="menu__meals-name">Сарделька варена з макаронами відварними</p>
                        <span className="menu__meals-output">355/140</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name">Хліб, масло, цукор, чай з лимоном, сир твердий</p>
                        <span className="menu__meals-output">250</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name"><i>II сніданок: </i>йогурт</p>
                        <span className="menu__meals-output">115</span>
                    </li>
                </ul>
                <ul className="menu__footer-block">
                    <li className="menu__responsible-item">
                        <p className="menu__meals-name">Начальник їдальні:</p>
                        <span className="menu__meals-output">сержант Марія САХНЮК</span>
                    </li>
                    <li className="menu__responsible-item">
                        <p className="menu__responsible-chief">Кухар</p>
                        <span className="menu__responsible-cook">солдат Олена ДРАГАН</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breakfast;
