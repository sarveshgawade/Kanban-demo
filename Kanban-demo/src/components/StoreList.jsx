import React from 'react'
import '../App.css'
import { Draggable, Droppable } from 'react-beautiful-dnd'

function StoreList({store}) {
  return (
    <Droppable droppableId={store.id}>
        {(provided)=>(
            <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="store-container">
                  <h3>{store.name}</h3>
                </div>
        
                <div className='items-container'>
                    {store.items.map((item,idx)=>(
                      <Draggable
                        draggableId={item.id}
                        index={idx}
                        key={item.id}
                      >
                        {(provided)=>(
                            <div 
                              className='item-container'
                              key={item.id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
        
                            <h4>{item.name}</h4>
                          </div>
                        )}
                        
                      </Draggable>
        
                    ))}
                </div>
                {provided.placeholder}
            </div>
            
        )}
        
    </Droppable>
  )
}

export default StoreList
