import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Page Not Found</h2>
      <Link className={s.link} to="/">
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
