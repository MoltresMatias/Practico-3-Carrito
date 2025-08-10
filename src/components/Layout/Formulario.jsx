import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {};

  const incluirTelefono = watch("incluirTelefono");
  return (
    <div className="w-50 mx-auto shadow p-4 my-5">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && <p>El nombre es requerido</p>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            {...register("email", {
              pattern:
                /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>

        <div className="form-check mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            {...register("incluirTelefono")}
          />
          <label className="form-check-label">¿Incluir Telefono?</label>
        </div>

        {incluirTelefono && (
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              className="form-control"
              type="text"
              {...register("telefono")}
              id=""
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Comentario</label>
          <textarea
            class="form-control"
            {...register("comentario", {
              required: true,
              maxLength: 50,
            })}
            id=""
          ></textarea>
          {errors.comentario?.type === "maxLength" && (
            <p>Tu comentario debe ser mas breve</p>
          )}
        </div>

        <input className="btn btn-warning" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Formulario;
