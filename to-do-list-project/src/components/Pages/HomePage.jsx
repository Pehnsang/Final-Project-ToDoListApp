import { useTasks } from "../context/TaskContext";


export default function HomePage() {

    const { tasks } = useTasks();

    const total = tasks.length;

    const completed = tasks.filter(
        (task) => task.completed
    ).length;
    

    const remaining = tasks.filter(
        (task) => !task.completed
    ).length;


    return (

        <div>

            <h1>Dashboard</h1>


            <div>
                <h3>Total Tasks</h3>
                <p>{total}</p>
            </div>


            <div>
                <h3>Completed</h3>
                <p>{completed}</p>
            </div>


            <div>
                <h3>Remaining</h3>
                <p>{remaining}</p>
            </div>


        </div>

    )

}