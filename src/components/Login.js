import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Flip, toast } from "react-toastify";

const Login = () => {
  const toastId = React.useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const gonder = (data) => {
    //Toast başlangıç
    toastId.current = toast("Giriş Yapılıyor...", {
      autoClose: false,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    axios
      .post("https://wit-courses.onrender.com/login", data)
      .then((response) => {
        //Localstorage kayıt
        localStorage.setItem("instaToken", response.data.token);

        //Toast notification update
        toast.update(toastId.current, {
          collapseDuration: 500,
          render: "Giriş işlemi başarılı!",
          autoClose: 1500,
        });

        setTimeout(() => {
          history.push("/profile");
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  console.log(errors);

  return (
    <div className="max-w-[480px] mx-auto">
      <h1 className="text-3xl text-center font-bold text-lime-700">Giriş</h1>

      <form onSubmit={handleSubmit(gonder)}>
        {errors.email?.type === "required" && (
          <span className="text-red-700 font-bold">
            E-Posta alanı boş bırakılmamalıdır!
          </span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-red-700 font-bold">
            Geçersiz e-posta adresi girdiniz!
          </span>
        )}
        <label className="flex flex-col gap-2 py-2">
          <input
            className="flex-[2] p-2 leading-[2] rounded border border-stone-700"
            type="text"
            placeholder="E-Posta"
            autoComplete="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </label>
        <label className="flex flex-col gap-2 py-2">
          {errors.pass && (
            <span className="text-red-700 font-bold">
              Parola alanı boş bırakılmamalıdır!
            </span>
          )}
          <input
            className="flex-[2] p-2 leading-[2] rounded border border-stone-700"
            type="password"
            placeholder="Parola"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-2 py-2">
          <button
            className="flex-[2] p-1 leading-[2]  text-stone-100 bg-lime-600 rounded border border-stone-700"
            type="submit"
          >
            Giriş Yap!
          </button>
        </label>
        <label className="flex flex-col gap-2 py-2">
          <button
            className="flex-[2] p-1 leading-[2]  text-stone-100 bg-lime-500 rounded border border-stone-700"
            type="submit"
          >
            Kayıt Ol
          </button>
        </label>
      </form>
    </div>
  );
};

export default Login;
