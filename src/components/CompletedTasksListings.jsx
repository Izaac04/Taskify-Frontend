import {useEffect, useState} from "react";
import Spinner from "./Spinner.jsx";
import TaskListing from "./TaskListing.jsx";
import axiosInstance from "../api/axios.jsx";

function CompletedTasksListings() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axiosInstance.get('/tasks/completed/tasks');
                setTasks(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return (
        <>
            <section className="bg-gray-100 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-black mb-6 text-center">
                        Your Completed Tasks
                    </h2>
                    {loading ? (<Spinner loading={loading}/>) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {tasks.map((task) => (
                                <TaskListing key={task.id} task={task}/>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default CompletedTasksListings;