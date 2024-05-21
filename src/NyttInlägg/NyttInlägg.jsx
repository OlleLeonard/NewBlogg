import React, { useState } from "react";
import "./NyttInläggStyle.css";

const NyttInlägg = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [showInput, setShowInput] = useState(true);

  const addInlägg = (inlägg) => {
    if (inlägg.trim() !== "") {
      const newInlägg = {
        id: Math.random(),
        inlägg: inlägg,
      };

      setList([...list, newInlägg]);
      setInput("");
      setTitleInput("");
      setShowInput(false);
    }
  };

  const deleteInlägg = (id) => {
    const newList = list.filter((inlägg) => inlägg.id !== id);
    setList(newList);
  };

  return (
    <div className="write">
      {showInput && (
        <form
          className="writeForm"
          onSubmit={(e) => {
            e.preventDefault();
            addInlägg(titleInput, input);
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
          <button type="submit">Dela</button>
        </form>
      )}
      <ul className="kommentar">
        {list.map((inlägg) => (
          <div key={inlägg.id}>
            <div className="Rubrik">
              <strong>{inlägg.title}</strong> {}
            </div>

            <br />
            <div className="BloggText">{inlägg.inlägg}</div>
            <br />
            <button onClick={() => deleteInlägg(inlägg.id)}>Ta bort</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NyttInlägg;
