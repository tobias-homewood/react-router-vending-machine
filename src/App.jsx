import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Chocolate from "./Chocolate";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        index
                        element={
                            <VendingMachine
                                snacks={["chips", "soda", "chocolate"]}
                            />
                        }
                    />
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/soda" element={<Soda />} />
                    <Route path="/chocolate" element={<Chocolate />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
