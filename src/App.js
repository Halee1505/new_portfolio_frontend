import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage";
import NotFound from "./page/notfound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage curPage={1} />} />
        <Route path="/about" element={<HomePage curPage={2} />} />
        <Route path="/album/*" element={<HomePage curPage={3} />} />
        <Route path="/skills" element={<HomePage curPage={4} />} />
        <Route path="/experience" element={<HomePage curPage={5} />} />
        <Route path="/contact" element={<HomePage curPage={6} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
