export const removeItem = (id, item_id, setColumns) => {
  setColumns((columns) => {
    return Object.entries(columns).map(([columnId, column]) => {
      if (columnId === id) {
        return {
          ...column,
          items: column.items.filter((item) => item.id !== item_id),
        };
      }
      return column;
    });
  });
};
