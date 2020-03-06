import React from "react";


// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item">]
      <a href={"/books/" + props.id}>
                      <strong>
                        {props.title} by {props.author}
                      </strong>
                    </a>
  </li>;
}
