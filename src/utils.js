import jwtDecode from "jwt-decode";
import { isPast } from "date-fns";
import { useHistory } from "react-router-dom";

export function CheckUserFrmLs() {
  const history = useHistory();
  const token = localStorage.getItem("instaToken");

  if (token) {
    const usr = jwtDecode(token);
    const isExpired = isPast(new Date(usr.exp * 1000));
    console.log(usr);
    if (isExpired) {
      localStorage.removeItem("instaToken");
      history.push("/");
      console.log("Süre aşımı ana sayfaya yönlendi!");
      return null;
    } else return usr;
  } else {
    console.log("token yok girişe yönlendirildi.");
    history.push("/login");
    return null;
  }
}


