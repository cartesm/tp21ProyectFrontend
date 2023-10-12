import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../context/Auth.context";
import { useLocations } from "../context/Locations.context";
import Closer from "./Closer";
import Loader from './Loader';
function AddLocation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userData, userLoged } = useAuth();
  const { setPoint ,loader} = useLocations();
  const navigate = useNavigate();

  const [imageData, setImageData] = useState(null);

  const onSubmit = (data) => {
    const fromData = new FormData();

    navigator.geolocation.getCurrentPosition(
      (succsess) => {
        // ! toma pocicion equivocada
        // ?testing
        fromData.append("coordinates", [
          succsess.coords.latitude.toPrecision(),
          succsess.coords.longitude.toPrecision(),
        ]);
        fromData.append("img", imageData);
        fromData.append("author", {
          userName: userData.userName,
          id: userData.id,
        });
        fromData.append("country", data.country);
        fromData.append("description", data.description);
        fromData.append("types", data.types);
        fromData.append("name", data.name);
        setPoint(fromData);
      },
      () => {
        toast(
          "Para poder ofrecerte todos los servicios, necesitamos acceder a tu ubicación. Si no aceptas, se desactivaran acciones vitales."
        );
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  useEffect(() => {
    if (!userLoged) navigate("/");
  }, [userLoged]);

  return (
    <div className="bg-[#a3bfc7] w-full  py-20">
      <Closer />
      <h2 className="text-gray-800 text-2xl mx-auto text-center mb-8 font-semibold">
        !Añade un punto de reciclaje!
      </h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 items-center max-w-[400px] mx-auto">
          <div className="container-input">
            <label className="label-input ">Nombre del punto</label>
            <input
              className="input-login-register"
              {...register("name", { required: true })}
              type="text"
            />
            {errors.name?.type == "required" && (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            )}
          </div>
          <div className="container-input">
            <label className="label-input">Descripcion</label>
            <textarea
              className=" w-[400px] min-h-[100px] outline-none mt-2 rounded-sm"
              {...register("description", { required: true })}
              type="text"
            />
            {errors.description?.type == "required" && (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            )}
          </div>
          <div className="container-input">
            <label className="label-input ">Imagen</label>
            <input
              accept="image/*"
              type="file"
              {...register("img", { required: true })}
              className=" image-upload mt-2"
              onChange={(e) => {
                setImageData(e.target.files[0]);
              }}
            />
            {errors.img?.type == "required" && (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            )}
          </div>
          <div className="container-input">
            <label className="label-input ">Lugar (Pais) del punto</label>
            <input
              className="input-login-register"
              {...register("country", { required: true })}
              type="text"
            />
            {errors.country?.type == "required" && (
              <span className="error-form-input">
                Este campo es obligatorio
              </span>
            )}
          </div>
          <div className="flex flex-col py-2 container-input">
            <h3 className="text-xl text-gray-800 py-6 font-semibold">
              Seleciona los tipos de residuos aceptados
            </h3>
            <hr />
            <div className="div-check">
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"cardboard"}
              />
              <label className="text-[17px]">Carton</label>
            </div>
            <div className="div-check">
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"paper"}
              />
              <label>Papel</label>
            </div>
            <div className="div-check">
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"plastic"}
              />
              <label>Plastico</label>
            </div>
            <div className="div-check">
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"glass"}
              />
              <label>Vidrio</label>
            </div>
            <div className="div-check">
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"organic"}
              />
              <label>Organicos</label>
            </div>
          </div>
          <input className="submit-button" type="submit" name="" id="" />
        </div>
        <div className="py-3">
          {loader && <Loader />}
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
