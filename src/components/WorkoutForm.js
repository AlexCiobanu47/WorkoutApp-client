import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("http://16.16.126.137:4000/api/v1/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("new workout added");
    }
  };
  return (
    <form className="create-workout" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <div className="inputs">
        <label>Exercise Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : " "}
        />
        <label>Load(kg): </label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={emptyFields.includes("load") ? "error" : " "}
        />
        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyFields.includes("reps") ? "error" : " "}
        />
        <button type="submit" className="form-submit-btn">
          Add workout
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};
export default WorkoutForm;
