import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
