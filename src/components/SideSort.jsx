import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const SideSort = () => {
    const {sort, setSort} = useContext(DataContext)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <p style={{ fontSize: "larger" }}>Sort the posts here</p>
      <select
        name="sort-filters"
        id=""
        style={{
          width: "200px",
          height: "45px",
          borderRadius: "8px",
          padding: "10px",
          fontSize: "large",
        }}
        defaultValue={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="latest">Latest Posts 🔥</option>
        <option value="most-upvoted">Most Upvoted 💹</option>
      </select>
    </div>
  );
};
