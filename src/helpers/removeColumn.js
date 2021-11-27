export const removeColumn = (id, columns, setColumns) => {
  const newCol = { ...columns };
  delete newCol[id];
  setColumns(newCol);
};
