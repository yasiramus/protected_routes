import { Link } from "react-router-dom";

export function Navigation() {

  return (
    <nav>
        <Link to="/landing"> Landing </Link>

        <Link to="/home"> Home </Link>

        <Link to="/dashboard"> Dashboard </Link>

        <Link to="/analytics"> Analytics </Link>

        <Link to="/admin"> Admin </Link>
    </nav>
  )

};
