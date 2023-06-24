import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { DataProvider } from "./context/DataContext";
import { IndividualPost } from "./pages/IndividualPost";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postID" element={<IndividualPost/>} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
