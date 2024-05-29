import React, { useState } from "react";
import "./NyttInläggStyle.css";
import AuthName from "../components/AuthName";

const NyttInlägg = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [editId, setEditId] = useState(null);

  const addOrEditInlägg = (title, inlägg) => {
    if (inlägg.trim() !== "") {
      if (editId) {
        setList(
          list.map((item) =>
            item.id === editId ? { ...item, title, inlägg } : item
          )
        );
        setEditId(null);
      } else {
        const newInlägg = {
          id: Math.random(),
          title,
          inlägg,
        };
        setList([...list, newInlägg]);
      }
      setInput("");
      setTitleInput("");
      setShowInput(false);
    }
  };

  const deleteInlägg = (id) => {
    const newList = list.filter((inlägg) => inlägg.id !== id);
    setList(newList);
  };

  const editInlägg = (id) => {
    const inlägg = list.find((inlägg) => inlägg.id === id);
    setTitleInput(inlägg.title);
    setInput(inlägg.inlägg);
    setShowInput(true);
    setEditId(id);
  };

  return (
    <div className="write">
      {showInput && (
        <form
          className="writeForm"
          onSubmit={(e) => {
            e.preventDefault();
            addOrEditInlägg(titleInput, input);
          }}
        >
          <input
            className="writeTitleText"
            placeholder="Title"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <input
            className="writeForumText"
            placeholder="Skriv text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">{editId ? "Spara" : "Dela"}</button>
        </form>
      )}
      <ul className="MyBloggBox">
        {list.map((inlägg) => (
          <div key={inlägg.id}>
            <div className="Titel">
              <AuthName />
              <p className="TitelText">{inlägg.title}</p>
            </div>

            <div className="BloggText">{inlägg.inlägg}</div>

            <button onClick={() => editInlägg(inlägg.id)}>Redigera</button>
            <button onClick={() => deleteInlägg(inlägg.id)}>Ta bort</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NyttInlägg;
