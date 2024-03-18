import React from "react";
import leftImg from '../../img/left-side-img/1-left-min.jpg';
import WeekMenu from "../../week_menu";

const Breakfast = () => {

    const date = new Date();
    const formattedDate = date.toLocaleDateString();

    for (const key in WeekMenu) {
        if (formattedDate === key) {
            return (
                <div className="menu__slide" data-meal="breakfast" data-side="left">
                    <img className="menu__img" src={leftImg} alt="1-left-min"/>
                    <div className="menu__description">
                        <div className="menu__header-block">
                            <div className="menu__diet">{WeekMenu[key].diet}</div>
                            <div className="menu__date">
                                <span className="menu__date-day">{WeekMenu[key].day}</span>
                                <span className="menu__date-data">{key}</span>
                            </div>
                        </div>
                        <div className="menu__title">{WeekMenu[key].breakfast.name}</div>
                        <ul className="menu__meals-block">
                            <li className="menu__meals-item">
                                <p className="menu__meals-name">{WeekMenu[key].breakfast.dish_1.name}</p>
                                <span className="menu__meals-output">{WeekMenu[key].breakfast.dish_1.output}</span>
                            </li>
                            <li className="menu__meals-item">
                                <p className="menu__meals-name">{WeekMenu[key].breakfast.dish_2.name}</p>
                                <span className="menu__meals-output">{WeekMenu[key].breakfast.dish_2.output}</span>
                            </li>
                            <li className="menu__meals-item">
                                <p className="menu__meals-name">{WeekMenu[key].breakfast.dish_3.name}</p>
                                <span className="menu__meals-output">{WeekMenu[key].breakfast.dish_3.output}</span>
                            </li>
                        </ul>
                        <ul className="menu__footer-block">
                            <li className="menu__responsible-item">
                                <p className="menu__meals-name">{WeekMenu[key].chief_position}</p>
                                <span className="menu__meals-output">{WeekMenu[key].chief_name}</span>
                            </li>
                            <li className="menu__responsible-item">
                                <p className="menu__responsible-chief">{WeekMenu[key].cook}</p>
                                <span className="menu__responsible-cook">{WeekMenu[key].cook_name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default Breakfast;
