import "./App.css";
import VendingMachine from "./VendingMachine";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Chocolate from "./Chocolate";
import Navbar from "./Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className="d-flex justify-content-center mt-3">
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
                </div>
            </Router>
        </>
    );
}

export default App;
