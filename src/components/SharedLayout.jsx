import { Outlet, NavLink} from "react-router-dom";
import'./styles.css'
import ModalForm from "pages/ModalForm";

export const SharedLayout = () => {
  
  return (
    <>
    <div className="bg-photo">
      <header className="header">
          <nav className="header_nav">
            <NavLink className="nav_link" to='/'>Home</NavLink >
            <NavLink className="nav_link" to='/posts'>Posts</NavLink >
          </nav>

          <ul className="contacts_list">
            <li className="contact_item">
              <div className="svg_nav svg_instagram"></div>
            </li>
            <li className="contact_item">
              <div className="svg_nav svg_twitter"></div>
            </li>
            <li className="contact_item">
              <div className="svg_nav svg_facebook">
              </div>
            </li>
          </ul>
      </header>

      <div className="hero_title-container">
        <h1 className="hero_title">
          Welcome
        </h1>
      </div>

      <ModalForm/>
    </div>
    <Outlet />
    </>
  );
};