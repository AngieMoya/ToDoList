"use client";
import { createTask, TaskState, Task as TaskType } from "@/fetch";
import SelectStates from "./SelectState";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type TaskProps = Partial<TaskType>;

export default function Task(props: TaskProps) {
  const { title, description, state } = props;
  const [selectState, setSelectState] = useState<TaskState>(state ?? "TODO");

  const router = useRouter();

  return (
    <form
      className=" flex flex-col gap-2 p-4 bg-blue-50 rounded-xl w-80 shadow-lg"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task = {
          title: e.currentTarget.tasktitle.value,
          description: e.currentTarget.description.value,
          date: new Date().toLocaleDateString(),
          state: selectState,
        };
        console.log("onsubmit A", task);
        await createTask(task);
        console.log("onsubmit B", task);
        router.push("/tasks");
      }}
    >
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold text-blue-500">Nueva tarea</h2>
        <SelectStates
          state={selectState}
          onChange={(state) => {
            setSelectState(state);
          }}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tasktitle">Título</label>
        <input
          type="text"
          name="tasktitle"
          id="tasktitle"
          required
          className="border"
          defaultValue={title}
        ></input>
      </div>
      <div className="flex flex-col pb-2">
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="description"
          required
          className="border"
          defaultValue={description}
        ></textarea>
      </div>
      <input
        type="submit"
        value="Guardar"
        className="p-2 bg-blue-300 rounded-xl font-semibold text-white hover:bg-blue-400 hover:text-white"
      />
    </form>
  );
}
