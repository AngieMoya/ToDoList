import { fetchTasks } from "@/fetch";
import TaskItem from "./TaskItem";
import { formatDateWithIntl } from "@/utils";

export default async function TasksList() {
  const res = await fetchTasks();
  return (
    <div className="flex w-full justify-evenly pt-14 flex-1">
      <div className="bg-blue-200 w-1/3 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-semibold p-2 text-gray-400">Tareas</h2>
        {res
          .filter((e) => e.state === "TODO") // Filtrar las tareas con status 'INPROGRESS'
          .map((e) => (
            <TaskItem
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              date={formatDateWithIntl(new Date(e.date))}
              state={e.state}
            ></TaskItem>
          ))}
      </div>
      <div className="bg-amber-100 w-1/3 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-semibold p-2 text-gray-400">
          En progreso
        </h2>
        {res
          .filter((e) => e.state === "INPROGRESS") // Filtrar las tareas con status 'INPROGRESS'
          .map((e) => (
            <TaskItem
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              date={formatDateWithIntl(new Date(e.date))}
              state={e.state}
            ></TaskItem>
          ))}
      </div>
      <div className="bg-violet-200 w-1/3 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-semibold p-2 text-gray-400">Hecho</h2>
        {res
          .filter((e) => e.state === "DONE") // Filtrar las tareas con status 'INPROGRESS'
          .map((e) => (
            <TaskItem
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              date={formatDateWithIntl(new Date(e.date))}
              state={e.state}
            ></TaskItem>
          ))}
      </div>
    </div>
  );
}
