import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import HomeStyles from '../pages/Home.module.css'
import { NavLink } from "react-router-dom";

export const SideNav = () => {
  const { state } = useContext(DataContext);
  return (
    <div className={HomeStyles.sideNav}>
      <div>
        <NavLink to="/"><p>Home</p></NavLink>
        <p>Explore</p>
        <p>Bookmarks</p>
        <p>Profile</p>
      </div>
      <div className={HomeStyles.usernameContainer}>
        <img src={state.picUrl} alt="" width={50} height={50}/>
        <div>
          <p>{state.name}</p>
          <p>{state.username}</p>
        </div>
      </div>
    </div>
  );
};
