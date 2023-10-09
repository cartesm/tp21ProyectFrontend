import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "../context/Auth.context";
import { useLocations } from "../context/Locations.context";
function AddLocation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userData } = useAuth();
  const { setPoint } = useLocations();

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

    //TODO: verificar tipo de imagen
  };

  return (
    <div className="bg-gray-400 w-full h-full">
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 items-center">
          <div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Nombre del Punto"
            />
            {errors.name?.type == "required" && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <input
              {...register("description", { required: true })}
              type="text"
              placeholder="Descripcion"
            />
            {errors.description?.type == "required" && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <input
              accept="image/*"
              type="file"
              {...register("img", { required: true })}
              className="w-[200px] h-[200px]"
              onChange={(e) => {
                setImageData(e.target.files[0]);
              }}
            />
            {errors.img?.type == "required" && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div>
            <input
              {...register("country", { required: true })}
              type="text"
              placeholder="pais"
            />
            {errors.country?.type == "required" && (
              <span>Este campo es obligatorio</span>
            )}
          </div>
          <div className="flex flex-col">
            <div>
              <label>Carton</label>
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"cardboard"}
              />
            </div>
            <div>
              <label>Papel</label>
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"paper"}
              />
            </div>
            <div>
              <label>Plastico</label>
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"plastic"}
              />
            </div>
            <div>
              <label>Vidrio</label>
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"glass"}
              />
            </div>
            <div>
              <label>Organicos</label>
              <input
                type="checkbox"
                {...register("types", { required: true })}
                value={"organic"}
              />
            </div>
          </div>
          <input type="submit" name="" id="" />
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
