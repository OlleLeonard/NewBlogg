import { useState } from "react";
import "./components.css";
import AuthName from "../components/AuthName";

function SkrivOUt() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);

  const addComment = (comment) => {
    if (comment.trim() !== "") {
      const newComment = {
        id: Math.random(),
        comment: comment,
      };

      setList([...list, newComment]);
      setInput("");
      setShowInput(false);
    }
  };

  const deleteComment = (id) => {
    const newList = list.filter((comment) => comment.id !== id);
    setList(newList);
  };

  return (
    <div className="write">
      {showInput && (
        <form
          className="writeForm"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(input);
          }}
        >
          <input
            placeholder="Skriv kommentar"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Dela</button>
        </form>
      )}
      <ul className="MyBloggBox">
        {list.map((comment) => (
          <div key={comment.id}>
            <div className="MyCommentText">
              <AuthName />:{comment.comment}
            </div>
            <br></br>
            <button onClick={() => deleteComment(comment.id)}>Ta bort</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SkrivOUt;
