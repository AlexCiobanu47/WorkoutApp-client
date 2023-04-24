import { useState, useEffect } from "react";
//components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/v1/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
};
export default Home;
