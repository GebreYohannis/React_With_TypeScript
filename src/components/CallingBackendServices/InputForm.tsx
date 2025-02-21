import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "This field is required." }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onAdd: (name: string) => void;
}

const InputForm = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    onAdd(data.name);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 d-flex justify-content-between">
        <input
          {...register("name")}
          type="text"
          className="form-control me-2"
          placeholder="Add user"
        />
        <button className="btn btn-primary">Add</button>
      </div>
      {errors && <p className="text-danger">{errors.name?.message}</p>}
    </form>
  );
};

export default InputForm;
