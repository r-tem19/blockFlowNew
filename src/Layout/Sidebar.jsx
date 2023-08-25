import React, { useEffect, useState } from "react";
import { editor, components } from "../rete";

export default function Sidebar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    editor.on("nodecreated connectioncreated", async () => {
      setItems(components);
    });
  }, []);

  const addNodeHandler = (index) => (el) => {
    el.preventDefault();

    // console.log(components[index].createNode());
    components[index].createNode().then((component) => {
      editor.addNode(component);
    });
  };

  return (
    <div className="sidebar">
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <button onClick={addNodeHandler(index)}> {item.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
