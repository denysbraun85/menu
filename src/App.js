import './App.css';
import Breakfast from "./components/Breakfast";
import React from "react";
import WeekMenu from "./week_menu";

const date = new Date();
const formattedDate = date.toLocaleDateString();

function App() {
  for (const key in WeekMenu) {
    if (formattedDate === key) {
      return (
          <Breakfast dataWeekMenu={WeekMenu} dataKey={key}/>
          // <Carousel dataKey={key} dataWeekMenu={WeekMenu}/>
      );
    }
  }
}

export default App;
