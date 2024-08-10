import { ReactComponent as Logo } from "../../graphicalContent/logo.svg";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">

     <Link to='/'><Logo /> &nbsp; Recipe Basket</Link>
      
    </div>
  );
};
