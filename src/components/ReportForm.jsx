import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "../context/Auth.context";
import Closer from "./Closer";
import Loader from "./Loader";

function Report() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loader, userLoged, authErrors, setAuthErrors, report, userData } =
    useAuth();

  const onSubmit = (data) => {
    data.userId = userData.id;
    report(data);
    if (!authErrors && !loader) toast("Gracias por tu aporte");
  };

  useEffect(() => {
    setAuthErrors(null);
  }, [userLoged]);

  return (
    <div className="relative bg-[#dee2e4] flex flex-col items-center pt-[100px] w-full h-full">
      <Closer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center w-[300px] justify-center gap-5 ">
          <h2 className="text-2xl py-2 text-gray-700 text-start mx-auto font-semibold w-full">
            Reportar error
          </h2>

          <div className="container-input">
            <label className="label-input">Descripcion breve</label>
            <input
              className="input-login-register"
              type="text"
              {...register("tittle", {
                required: true,
                minLength: 15,
              })}
            />
            {errors.tittle?.type == "required" ? (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            ) : null}
            {errors.tittle?.type == "minLength" ? (
              <span className="error-form-input">Minimo 15 caracteres</span>
            ) : null}
          </div>
          <div className="container-input">
            <label className="label-input">Descripcion detallada</label>
            <textarea
              className="input-login-register min-h-[100px] select-none"
              type="text"
              {...register("description", { minLength: 30, required: true })}
            />
            {errors.description?.type == "required" ? (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            ) : null}
            {errors.description?.type == "minLength" ? (
              <span className="error-form-input">Minimo 30 caracteres</span>
            ) : null}
          </div>
          <input className="submit-button" type="submit" value={"Reportar"} />
        </div>
      </form>
      <div className="py-3">
        {loader && <Loader />}
        <span className="auth-errors">{authErrors}</span>
      </div>
    </div>
  );
}

export default Report;
