import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";
import { useNormal } from "../context/normalContext";
import Closer from "./Closer";
import Loader from "./Loader";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setMobment } = useNormal();
  const {
    register: authRegister,
    loader,
    userLoged,
    authErrors,
    setAuthErrors,
  } = useAuth();

  const [imageLocation, setImageLocation] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("img", imageLocation);
    formData.append("userName", data.userName);
    formData.append("password", data.password);
    formData.append("email", data.email);

    authRegister(formData);
  };

  useEffect(() => {
    if (userLoged) setMobment(false);
    setAuthErrors(null);
  }, [userLoged]);

  return (
    <div className="relative bg-[#dee2e4] flex flex-col items-center pt-[100px] w-full h-full">
      <Closer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center w-full justify-center gap-5 ">
          <h2 className="text-2xl py-2 text-gray-700 text-start mx-auto font-semibold w-full">
            Ingreso
          </h2>
          <div className="container-input">
            <label className="label-input">Nombre</label>
            <input
              className="input-login-register"
              type="text"
              {...register("userName", { min: 4, required: true })}
            />
            {errors.userName?.type == "required" ? (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            ) : null}
          </div>
          <div className="container-input">
            <label className="label-input">Imagen de usuario</label>

            <input
              type="file"
              {...register("img", { required: false })}
              accept="image/*"
              onChange={(e) => setImageLocation(e.target.files[0])}
              className="image-upload"
            />
          </div>
          <div className="container-input">
            <label className="label-input">Correo</label>
            <input
              className="input-login-register"
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type == "pattern" ? (
              <span className="error-form-input">
                Ingrese un formato de email valido
              </span>
            ) : null}
            {errors.email?.type == "required" ? (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            ) : null}
          </div>
          <div className="container-input">
            <label className="label-input">Contraseña</label>
            <input
              className="input-login-register"
              type="password"
              {...register("password", { minLength: 5, required: true })}
            />
            {errors.password?.type == "required" ? (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            ) : null}
            {errors.password?.type == "minLength" ? (
              <span className="error-form-input">
                La Contraseña es de minimo 5 caracteres
              </span>
            ) : null}
          </div>
          <input className="submit-button" type="submit" value={"Registro"} />
        </div>
      </form>
      <div className="py-3">
        {loader && <Loader />}
        <span className="auth-errors">{authErrors}</span>
      </div>
      <div className="flex gap-2">
        <span>¿Ya tienes una cuenta?</span>
        <Link
          to={"/login"}
          className="text-[#1a7f7d] font-semibold hover:underline"
        >
          Registrate
        </Link>
      </div>
    </div>
  );
}

export default Register;
