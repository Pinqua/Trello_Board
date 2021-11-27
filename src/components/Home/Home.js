import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { addColumn } from "../../helpers/addColumn";
import { onDragEnd } from "../../helpers/onDragEnd";
import Column from "../Column/Column";
import "./Home.css";

function Home() {
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const col = JSON.parse(localStorage.getItem("columns"));
    setColumns(col);
  }, []);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  return (
    <div className="home">
      <div className="home__heading">
        <h1>Trello Board</h1>
      </div>
      <div className="home__right">
        <Button type="primary" onClick={() => addColumn(setColumns)}>
          <PlusOutlined />
          Add List
        </Button>
      </div>
      <div className="home__container">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Column
                columnId={columnId}
                columns={columns}
                column={column}
                key={`column${columnId}`}
                setColumns={setColumns}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Home;
