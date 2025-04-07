import React from "react";
import rightImg from '../../img/right-side-img/1-right-min.jpg';

const Dinner = (props) => {
    return (
        <div className="menu__slide" data-meal="dinner" data-side="left">
            <img className="menu__img" src={rightImg} alt="1-right-min" />
            <div className="menu__description">
                <div className="menu__header-block">
                    <div className="menu__diet">{props.dataWeekMenu[props.dataKey].diet}</div>
                    <div className="menu__date">
                        <span className="menu__date-day">{props.dataWeekMenu[props.dataKey].day}</span>
                        <span className="menu__date-data">{props.dataKey}</span>
                    </div>
                </div>
                <div className="menu__title">{props.dataWeekMenu[props.dataKey].dinner.name}</div>
                <ul className="menu__meals-block">
                    <li className="menu__meals-item">
                        <p className="menu__meals-name" dangerouslySetInnerHTML={{ __html: props.dataWeekMenu[props.dataKey].dinner.dish_1.name }}/>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].dinner.dish_1.output}</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name" dangerouslySetInnerHTML={{ __html: props.dataWeekMenu[props.dataKey].dinner.dish_2.name }}/>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].dinner.dish_2.output}</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name" dangerouslySetInnerHTML={{ __html: props.dataWeekMenu[props.dataKey].dinner.dish_3.name }}/>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].dinner.dish_3.output}</span>
                    </li>
                    <li className="menu__meals-item">
                        <p className="menu__meals-name" dangerouslySetInnerHTML={{ __html: props.dataWeekMenu[props.dataKey].dinner.dish_4.name }}/>
                        <span className="menu__meals-output">{props.dataWeekMenu[props.dataKey].dinner.dish_4.output}</span>
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

export default Dinner;
