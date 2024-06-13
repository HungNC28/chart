import "./App.css";
import { Route, Routes } from "react-router-dom";
import LineChart from "./component/LineChart/lineChart";
import BarChart from "./component/BarChart/barChart";
import MultiChart from "./component/MultiChart/multiChart";
import Nav from "./Nav/Nav";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/line" element={<LineChart />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/multi" element={<MultiChart />} />
            </Routes>
        </>
    );
}

export default App;
