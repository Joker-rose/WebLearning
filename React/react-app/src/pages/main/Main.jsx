import { Outlet, Link } from "react-router-dom";
import Menu from "components/Menu/Menu";

export default function Main() {
  return (
    <div>
      <div className="top">
        <Menu />
      </div>
      <hr />
      <div className="center">
        <nav>
          <ul>
            <li>
              <Link to={`main-module1`}>module1</Link>
            </li>
            <li>
              <Link to={`main-module2`}>module2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <Outlet />
      </div>
    </div>
  );
}
