import  Header  from "./components/Header"
import MainContent  from "./components/MainContent"
import RoomsPage from "./components/RoomsPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./app.css"
import RoomItem from "./views/RoomItem";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainContent/>} />
        <Route path="/habitaciones" element={<RoomsPage/>} />
        <Route path="/habitaciones/:habitacion" element={<RoomItem/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
