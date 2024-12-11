import { Link } from "react-router-dom";
import useQuery from "../hook/useQuery";
import ItemTraining from "./ItemTraining";

export type Exercise = {
    id: number;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced';
  };
  
const exercises: Exercise[] = [
{
    id: 1,
    title: 'Reverse a String',
    description: 'Write a function that reverses a string.',
    level: 'beginner',
},
{
    id: 2,
    title: 'Fibonacci Sequence',
    description: 'Generate the Fibonacci sequence up to a given number.',
    level: 'intermediate',
},
{
    id: 3,
    title: 'Prime Numbers',
    description: 'Find all prime numbers up to a given number.',
    level: 'advanced',
},
// Ajoutez plus d'exercices ici
];

const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
};

const ExerciseCard: React.FC<{ exercise: Exercise }> = ({ exercise }) => {

return (
    <div className="max-w-xs mx-auto my-6 transform transition-all hover:scale-105">
    <div className="overflow-hidden">
      <div className="relative rounded-2xl h-48 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-2xl font-extrabold text-white drop-shadow-lg">{exercise.title}</h2>
        </div>
      </div>
      <div className="p-6 text-gray-300">
        <p className="text-base">{exercise.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${levelColors[exercise.level]} shadow-md`}
          >
            {exercise.level.charAt(0).toUpperCase() + exercise.level.slice(1)}
          </span>
          <Link
            to={`?id=${exercise.id}`}
            className="text-blue-400 hover:underline text-sm transition duration-300 ease-in-out"
          >
            Start Exercise
          </Link>
        </div>
      </div>
    </div>
  </div>
);
};

function Training() {

    const id = useQuery("id")

    const oneTrain = id ? exercises?.find(ex => String(ex.id) === id) : null

    if(!oneTrain){
        return (
            <>
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center">JavaScript Algorithm Exercises</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
                </div>
            </div>
            </>
          )
    }

    return <ItemTraining exercise={oneTrain}/>

}

export default Training
