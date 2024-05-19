import { useState } from "react";
import "./components.css";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

function SkrivOUt() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);

  const addTodo = (todo) => {
    if (todo.trim() !== "") {
      const newTodo = {
        id: Math.random(),
        todo: todo,
      };

      setList([...list, newTodo]);
      setInput("");
      setShowInput(false);
    }
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const { userName } = useContext(UserContext);

  return (
    <div className="write">
      {showInput && (
        <form
          className="writeForm"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(input);
          }}
        >
          <input
            className="writeForumText"
            placeholder="Skriv kommentar"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Dela</button>
        </form>
      )}
      <ul className="MyBloggBox">
        {list.map((todo) => (
          <div key={todo.id}>
            <div className="MyCommentText">
              <b>{userName}:</b>
              {todo.todo}
            </div>
            <br></br>
            <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SkrivOUt;
