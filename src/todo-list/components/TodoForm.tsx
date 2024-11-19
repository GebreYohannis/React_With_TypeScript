import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  text: z
    .string({ invalid_type_error: "This field is required." })
    .min(3, { message: "Input field should contains at least 3 characters." }),
  dueDate: z.date(),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  addTodo: (text: string, dueDate: Date) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    addTodo(data.text, data.dueDate);
    reset();
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 d-flex align-items-center justify-content-start">
        <div className="me-4">
          <input
            {...register("text")}
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Add todo"
          />
          {errors.text && <p className="text-danger">{errors.text.message}</p>}
        </div>
        <div>
          <input
            {...register("dueDate", { valueAsDate: true })}
            type="date"
            className="form-control mb-2 mr-sm-2"
            placeholder="Add todo"
          />
          {errors.dueDate && (
            <p className="text-danger">{errors.dueDate.message}</p>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-primary mb-2">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;
