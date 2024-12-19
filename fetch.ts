export type TaskState = "TODO" | "INPROGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  description: string;
  date: string;
  state: TaskState;
};

export async function fetchTasks() {
  try {
    const response = await fetch("http://localhost:3001/tasks");
    const tasks: Array<Task> = await response.json();
    return tasks;
  } catch (error) {
    console.error("Hubo un error obteniendo las tareas", error);
    return [];
  }
}

export async function fetchTask(id: string) {
  try {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    const task: Task = await response.json();
    return task;
  } catch (error) {
    console.error("Hubo un error obteniendo la tarea", error);
    return null;
  }
}

export async function createTask(task: Omit<Task, "id">) {
  try {
    await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  } catch (error) {
    console.error("Hubo un error creando la tarea", error);
    return {};
  }
}

export async function updateTask(task: Partial<Omit<Task, "id">>, id: string) {
  try {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  } catch (error) {
    console.error("Hubo un error actualizando la tarea", error);
    return {};
  }
}

export async function deleteTask(id: string) {
  try {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Hubo un error eliminando la tarea", error);
    return {};
  }
}
