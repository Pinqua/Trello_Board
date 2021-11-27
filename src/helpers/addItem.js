import { v4 as uuidv4 } from "uuid";

export const addItem = (id, setColumns) => {
  const title = window.prompt("Enter title");
  const desc = window.prompt("Enter Description");
  if (title && desc) {
    setColumns((columns) => {
      return Object.entries(columns)?.map(([columnId, column]) => {
        if (columnId === id) {
          return {
            ...column,
            items: [...column.items, { id: uuidv4(), title, desc }],
          };
        }
        return column;
      });
    });
  }
};
