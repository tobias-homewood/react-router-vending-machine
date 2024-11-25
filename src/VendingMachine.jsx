import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = ({ snacks }) => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <h2>Snacks:</h2>
            <ul>
                {snacks.map((snackName, idx) => (
                    <li key={idx}>
                        <Link to={snackName}>{snackName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendingMachine;