

//* Component:
import Header from "./components/header/Header";
import Home from "./components/home/Home";

import "./App.css";
import DataProvider from "./context/DataProvider";

function App() {
  console.log(import.meta.env)
  return (
    <>
      <DataProvider>
        <Header></Header>
        <Home></Home>
      </DataProvider>

    </>
  );
}

export default App;
