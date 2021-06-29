import { objectTypeAnnotation } from '@babel/types';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import uuid from 'uuid/dist/v4';
import "./App.css";

const itemsFromBackend = [
    { id: uuid(), content: "Primera tarea" },
    { id: uuid(), content: "Segunda tarea" },
    { id: uuid(), content: "Tercera tarea" },
    { id: uuid(), content: "Cuarta tarea" },
    { id: uuid(), content: "Quinta tarea" }
  ];

const columnsFromBackend = {
    [uuid()]: {
      name: "Pendientes",
      items: itemsFromBackend
    },
    [uuid()]: {
      name: "En proceso",
      items: []
    },
    [uuid()]: {
      name: "Testing",
      items: []
    },
    [uuid()]: {
      name: "Terminadas",
      items: []
    }
  };

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
          const column = columns[source.droppableId];
          const copiedItems = [...column.items];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          });
        }
      };

 const Kanban = ({handleLogout}) => {
    const [columns, setColumns] = useState(columnsFromBackend);
    return(
        <section className ="kanban">
            <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div className="nomC"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
                
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div className="columna"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div className="tarjetas"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "8px 8px 8px 8px",
                                      minHeight: "50px",
                                     
                                      color: "black",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
    <button className="btn-s" onClick={handleLogout }>Cerrar Sesion</button>
        </section>
        

    )
}

export default Kanban;