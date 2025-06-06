import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Format from "./pages/Format";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Chips from "./pages/Chips";
import CalendarInline from "./pages/w-calendar-inline";
import Inputs from "./pages/Inputs";
import TabStrips from "./pages/TabStrips";
import Dialogs from "./pages/Dialogs";
import Custom from "./pages/Custom";
import SearchTextBox from "./pages/TextBoxSearch";
import NoPage from "./pages/NoPage"; // Make sure this exists
import './App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Format />}>
          <Route index element={<Home />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="chips" element={<Chips />} />
          <Route path="cards" element={<Cards />} />
          <Route path="w-calendar-inline" element={<CalendarInline />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="tabstrip" element={<TabStrips />} />
          <Route path="dialogs" element={<Dialogs />} />
          <Route path="custom" element={<Custom />} />
          <Route path="search-textbox" element={<SearchTextBox />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
