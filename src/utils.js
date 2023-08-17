import jwtDecode from "jwt-decode";
import { isPast } from "date-fns";
import { useHistory } from "react-router-dom";

export function CheckUserFrmLs() {
  const token = localStorage.getItem("instaToken");
  const history = useHistory();
  if (token) {
    const usr = jwtDecode(token);
    const isExpired = isPast(new Date(usr.exp * 1000));
    console.log(usr);
    if (isExpired) {
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
