import Task from "@/components/Task";
import { fetchTask } from "@/fetch";

export default async function TaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const task = await fetchTask(id);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Task
        id={id}
        title={task?.title}
        description={task?.description}
        date={task?.date}
        state={task?.state}
      />
    </div>
  );
}
