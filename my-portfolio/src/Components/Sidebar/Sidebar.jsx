import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="close-sidebar" onClick={closeSidebar}>✖</button>
      <h2>AI Friend 🤖</h2>
      <p>Olá! Como posso te ajudar hoje? 🚀</p>
      <ul>
        <li><button onClick={() => alert("Gerando Código...")}>Gerar Código</button></li>
        <li><button onClick={() => alert("Explicando Conceito...")}>Explicar Conceito</button></li>
        <li><button onClick={() => alert("Sugestões de Projetos...")}>Sugestões de Projetos</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
