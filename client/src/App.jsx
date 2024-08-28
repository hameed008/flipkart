

//* Component:
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";
import "./App.css";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  // console.log(import.meta.env)
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView />} />
            </Routes>
          </div>

        </BrowserRouter>
      </DataProvider>


    </>
  );
}

export default App;
