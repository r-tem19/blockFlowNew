import axios from "axios";
import React from "react";
import { editor, components } from "../rete";

export default function Header() {
  const saveHandler = async (el) => {
    el.preventDefault();

    try {
      const res = await axios.post(`/json/api/set.php?id=1`, editor.toJSON());
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <header className="header">
      <button onClick={saveHandler}>Save</button>
    </header>
  );
}
