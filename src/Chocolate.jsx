import { useNavigate } from "react-router-dom";

const Chocolate = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Chocolate</h1>
            <button onClick={() => navigate("/")}>Go back</button>
        </div>
    );
};

export default Chocolate;
