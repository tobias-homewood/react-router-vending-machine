import { useNavigate } from "react-router-dom";

const Soda = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Soda</h1>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
                Go back
            </button>
        </div>
    );
};

export default Soda;
