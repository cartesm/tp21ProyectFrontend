import { useForm } from "react-hook-form";
function AddLocation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-400 w-full h-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 items-center">
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Nombre del lugar"
            />
          </div>
          <div>
            <input
              {...register("description")}
              type="text"
              placeholder="Descripcion"
            />
          </div>
          <div>
            <input type="file" placeholder="imagen del lugar" />
          </div>
          <div>
            <input {...register("country")} type="text" placeholder="pais" />
          </div>
          <div>
            <label>Tipos de reciduos</label>
            <select {...register("types")}>
              <option value="papel">papel</option>
              <option value="papel">carton</option>
            </select>
          </div>
          <input type="submit" name="" id="" />
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
