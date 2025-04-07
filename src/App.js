import './App.css';
import Breakfast from "./components/Breakfast";
import React from "react";
import WeekMenu from "./week_menu";
import Dinner from "./components/Dinner";
import Supper from "./components/Supper";

const date = new Date();
const formattedDate = date.toLocaleDateString();

function App() {
  for (const key in WeekMenu) {
    if (formattedDate === key) {
      return (
          // <Breakfast dataWeekMenu={WeekMenu} dataKey={key}/>
          // <Dinner dataWeekMenu={WeekMenu} dataKey={key}/>
          <Supper dataWeekMenu={WeekMenu} dataKey={key}/>
      );
    }
  }
}

export default App;
