import { v4 as uuidv4 } from "uuid";

export const addColumn = (setColumn) => {
  const name = window.prompt("Enter List Name");
  if (name) {
    setColumn((columns) => ({ ...columns, [uuidv4()]: { name, items: [] } }));
  }
};
