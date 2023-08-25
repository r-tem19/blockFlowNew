import React from "react";
import { createEditor } from "../rete";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div
        className="layout__content"
        // style={{ width: "100vw", height: "100vh" }}
        ref={(ref) => ref && createEditor(ref)}
      />
    </div>
  );
}
