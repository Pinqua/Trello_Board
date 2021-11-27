import { CloseOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { removeItem } from "../../helpers/removeItem";
import "./Item.css";

function Item({ item, index, columnId, setColumns }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="item"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
              ...provided.draggableProps.style,
            }}
          >
            <Card
              title={item.title}
              type="inner"
              extra={
                <Button
                  type="primary"
                  size="small"
                  icon={<CloseOutlined />}
                  onClick={() => removeItem(columnId, item.id, setColumns)}
                />
              }
            >
              {item.desc}
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
}

export default Item;
