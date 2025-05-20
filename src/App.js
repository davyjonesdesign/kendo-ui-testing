import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Format from "./pages/Format";
import Buttons from "./pages/Buttons";
import CalendarInline from "./pages/w-calendar-inline";
import Inputs from "./pages/Inputs";
import Layout from "./pages/Layout";
import Dialogs from "./pages/Dialogs";
import Custom from "./pages/Custom";
import NoPage from "./pages/NoPage"; // Make sure this exists
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Format />}>
          <Route index element={<Home />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="w-calendar-inline" element={<CalendarInline />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="layout" element={<Layout />} />
          <Route path="dialogs" element={<Dialogs />} />
          <Route path="custom" element={<Custom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
