import React from "react";
import leftImg from '../../img/left-side-img/1-left-min.jpg';

const Breakfast = (props) => {
    return (
        <div className="menu__slide" data-meal="breakfast" data-side="left">
            <img className="menu__img" src={leftImg} alt="1-left-min"/>
            <div className="menu__description">
                <div className="menu__header-block">
                    <div className="menu__diet">{props.dataWeekMenu[props.dataKey].diet}</div>
                    <div className="menu__date">
                        <span className="menu__date-day">{props.dataWeekMenu[props.dataKey].day}</span>
                        <span className="menu__date-data">{props.dataKey}</span>
                    </div>
                </div>
                <div className="menu__title">{props.dataWeekMenu[props.dataKey].breakfast.name}</div>
                <ul className="menu__meals-block">
                    <li className="menu__meals-item">
                        <p className="menu__meals-name">{props.dataWeekMenu[props.dataKey].breakfast.dish_1.name}</p>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].breakfast.dish_1.output}</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name">{props.dataWeekMenu[props.dataKey].breakfast.dish_2.name}</p>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].breakfast.dish_2.output}</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name">{props.dataWeekMenu[props.dataKey].breakfast.dish_3.name}</p>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].breakfast.dish_3.output}</span>
                    </li>
                </ul>
                <ul className="menu__footer-block">
                    <li className="menu__responsible-item">
                        <p className="menu__meals-name">{props.dataWeekMenu[props.dataKey].responsive.chief_position}</p>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].responsive.chief_name}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Breakfast;
