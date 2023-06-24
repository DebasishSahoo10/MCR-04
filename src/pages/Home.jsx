import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { SideNav } from "../components/SideNav";
import { SideSort } from "../components/SideSort";
import HomeStyles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={HomeStyles.header}>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          color: "black",
          justifyContent: "space-between",
          minWidth: "90vw",
        }}
      >
        <SideNav />
        <Post />
        <SideSort />
      </div>
    </>
  );
};
