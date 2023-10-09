import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import { useNormal } from "../context/normalContext";
import Loader from "./Loader";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setMobment } = useNormal();
  const { register: authRegister, loader, userLoged, authErrors } = useAuth();

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
  }, [userLoged]);

  return (
    <div className="bg-gray-300 flex items-center justify-center w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <input
              type="text"
              {...register("userName", { min: 4, required: true })}
              placeholder="Ingresa un nombre de usuario"
            />
            {errors.userName?.type == "required" ? (
              <span>Este campo es obligatorio</span>
            ) : null}
          </div>
          <div>
            <input
              type="file"
              {...register("img", { required: false })}
              accept="image/*"
              onChange={(e) => setImageLocation(e.target.files[0])}
            />
          </div>
          <div>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="Ingresa un correo electronico"
            />
            {errors.email?.type == "pattern" ? (
              <span>Ingrese un formato de email valido</span>
            ) : null}
            {errors.email?.type == "required" ? (
              <span>Este campo es obligatorio</span>
            ) : null}
          </div>
          <div>
            <input
              type="password"
              {...register("password", { min: 5, required: true })}
              placeholder="Crea una contraseña"
            />
            {errors.password?.type == "required" ? (
              <span>Este campo es obligatorio</span>
            ) : null}
          </div>
          <input
            className="bg-blue-500 text-white font-sans px-3 py-1 rounded-sm hover:cursor-pointer"
            type="submit"
            value={"Registro"}
          />
        </div>
      </form>
      {loader && <Loader />}
      <span>{authErrors}</span>
    </div>
  );
}

export default Register;
