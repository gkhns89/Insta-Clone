import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Login from "./components/Login";

function App() {
  return (
    <div className="container max-w-[480px] mx-auto">
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <article>
            <div className="flex items-center p-2">
              <img
                src="./avatar.jpg"
                alt="avatar"
                className="w-8 h-8 mr-3 rounded-full"
              ></img>
              <h3 className="font-bold text-stone-100 flex-1">
                Kermit - Love green!
              </h3>
              <div className="text-stone-300">1sa önce</div>
            </div>
            <img
              src="https://fastly.picsum.photos/id/613/600/600.jpg?hmac=-31ZWbeRv17h3qkckRxrqcBFx23V5LmgioBtbfzXpbk"
              alt="Gönderi"
            ></img>
            <div>like, like sayısıt</div>
            <div>commentler</div>
          </article>
        </Route>

        <Route path="/profile">
          <h1 className="text-3xl font-bold text-yellow-600">Profil</h1>
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
