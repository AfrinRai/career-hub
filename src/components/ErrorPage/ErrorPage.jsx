import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-52">
            <h2>Opps!!!</h2>
            <Link to="/home">GO back to Home.</Link>
        </div>
    );
};

export default ErrorPage;