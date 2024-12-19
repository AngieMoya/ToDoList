"use client";
import { TaskState } from "@/fetch";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function SelectState({
  onChange,
  state,
}: {
  onChange: (arg: TaskState) => void;
  state?: TaskState;
}) {
  const [active, setActive] = useState(false);
  const [taskState, setTaskState] = useState<TaskState>(state ?? "TODO");
  const itemActiveClasses = "text-blue-500";

  useEffect(() => {
    onChange(taskState);
  }, [taskState, onChange]);

  return (
    <div className="relative">
      <span>
        <FontAwesomeIcon
          icon={faEllipsis}
          className="w-5 text-gray-400"
          onClick={() => setActive(!active)}
        ></FontAwesomeIcon>
      </span>
      <div
        className={`${
          active ? "flex" : "hidden"
        } absolute top-full right-0 z-10  shadow-lg rounded-xl`}
      >
        <ul className="rounded-xl bg-gray-200 text-sm font-medium text-gray-500 w-32">
          <li
            className={`hover:bg-gray-300 p-2 rounded-t-xl ${
              taskState === "TODO" ? itemActiveClasses : ""
            }`}
            onClick={() => {
              setTaskState("TODO");
            }}
          >
            Por Hacer
          </li>
          <li
            className={`hover:bg-gray-300 p-2 border-t border-gray-300 ${
              taskState === "INPROGRESS" ? itemActiveClasses : ""
            }`}
            onClick={() => {
              setTaskState("INPROGRESS");
            }}
          >
            En Progreso
          </li>
          <li
            className={`hover:bg-gray-300 p-2 rounded-b-xl border-t border-gray-300 ${
              taskState === "DONE" ? itemActiveClasses : ""
            }`}
            onClick={() => {
              setTaskState("DONE");
            }}
          >
            Hecho
          </li>
        </ul>
      </div>
    </div>
  );
}
