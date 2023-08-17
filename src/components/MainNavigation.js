import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Flip, toast } from "react-toastify";

export default function MainNavigation(props) {
  console.log("MainNav props: ", props);
  const history = useHistory();

  function LogoutHandle() {
    localStorage.removeItem("instaToken");
    props.setUser(null);

    setTimeout(() => {
      toast.success("Çıkabildin, aferin", {
        autoClose: 1000,
        transition: Flip,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 500);
  }

  return (
    <nav className="text-lg   text-stone-100 py-2 font-bold flex gap-2 justify-center">
      <NavLink to="/" exact activeClassName="text-lime-600">
        Anasayfa
      </NavLink>
      <NavLink to="/profile" activeClassName="text-lime-600">
        Profil
      </NavLink>

      {props.user ? (
        <button onClick={() => LogoutHandle()}>Çıkış</button>
      ) : (
        <NavLink to="/login" activeClassName="text-lime-600">
          Giriş
        </NavLink>
      )}
    </nav>
  );
}
