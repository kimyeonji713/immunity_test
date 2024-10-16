import { HashRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/qna" element={""} />
        <Route path="/result" element={""} />
        <Route path="/*" element={""} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
