import React from "react";
import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";
import { removeColumn } from "../../helpers/removeColumn";
import { addItem } from "../../helpers/addItem";
import "./Column.css";

function Column({ columnId, columns, column, setColumns }) {
  return (
    <Card
      title={column.name}
      hoverable={true}
      extra={
        <Button
          type="primary"
          icon={<CloseOutlined />}
          onClick={() => removeColumn(columnId, columns, setColumns)}
        />
      }
      style={{ minWidth: 350, marginLeft: 8 }}
    >
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              }}
              className="column__container"
            >
              {column.items.map((item, index) => {
                return (
                  <Item
                    key={item.id}
                    item={item}
                    columnId={columnId}
                    index={index}
                    setColumns={setColumns}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      <div className="column__button">
        <Button
          size="large"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => addItem(columnId, setColumns)}
        />
      </div>
    </Card>
  );
}

export default Column;
