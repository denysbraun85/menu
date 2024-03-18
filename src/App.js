import './App.css';
import Carousel from "./components/Carousel";
import React from "react";
import WeekMenu from "./week_menu";

const date = new Date();
const formattedDate = date.toLocaleDateString();

function App() {
  for (const key in WeekMenu) {
    if (formattedDate === key) {
      return (
          <Carousel dataKey={key} dataWeekMenu={WeekMenu}/>
      );
    }
  }
}

export default App;
