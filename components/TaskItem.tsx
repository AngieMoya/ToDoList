"use client";
import SelectState from "./SelectState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, Task, updateTask } from "@/fetch";
import { useRouter } from "next/navigation";

type TaskItemProps = Task;

export default function TaskItem(props: TaskItemProps) {
  const { id, title, description, date, state } = props;

  const router = useRouter();

  return (
    <div className="p-4 bg-blue-50 w-80  rounded-xl shadow-lg">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl text-blue-500">{title}</h2>
        <SelectState
          state={state}
          onChange={async (newState) => {
            if (newState !== state) {
              await updateTask(
                {
                  state: newState,
                },
                id
              );

              router.push("/tasks");
            }
          }}
        />
      </div>
      <p>{description}</p>
      <span className="text-gray-400 text-sm">{date}</span>
      <div className="flex justify-end gap-2">
        <button
          onClick={async () => {
            await deleteTask(id);
            router.push("/tasks");
          }}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-gray-400 hover:text-blue-500"
          ></FontAwesomeIcon>
        </button>
        <button
          onClick={() => {
            router.push(`/task/edit/${id}`);
          }}
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="text-gray-400 hover:text-blue-500"
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
