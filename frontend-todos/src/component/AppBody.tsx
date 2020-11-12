import React, { useEffect, ReactElement, useState } from "react";
import { get } from "../common/fetcher";
import GridCard from "./CardGrid";
import * as types from "../component/interfaces/types";

export type AppBodyProps = {
  children?: ReactElement;
};

export function AppBody(AppBodyProp: AppBodyProps): ReactElement | null {
  const [todosTitle, setTodosTitle] = useState<types.ITodoItem[]>([]);
  //Need to make an async function to use in useEffect in order to retrieve all data
  const getData = async () => {
    const data = await get<types.ITodoItem[]>("http://localhost:3000/todos");
    setTodosTitle(data);
  };

  // Load data when entering the component
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="app-body">
      {AppBodyProp.children}
      <GridCard todoList={todosTitle} />
    </section>
  );
}
export default AppBody;
