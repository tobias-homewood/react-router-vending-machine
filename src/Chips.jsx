import { useNavigate } from "react-router-dom";

const Chips = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Chips</h1>{" "}
            <button onClick={() => navigate("/")}>Go back</button>
        </div>
    );
};

export default Chips;
