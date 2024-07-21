import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExclamation } from "react-icons/fa";
import { toast } from "react-toastify";
import axiosInstance from "../api/axios";

const TaskPage = ({ deleteTask }) => {
    const task = useLoaderData();
    const navigate = useNavigate();

    const formatDate = (createdAt) => {
        try {
            const date = new Date(createdAt);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid Date');
            }
            return date.toISOString().split('T')[0];
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Invalid Date'; // Or another default value if preferred
        }
    };

    const onDeleteClick = async (taskId) => {
        const confirm = window.confirm('Are you sure you want to delete this task?');

        if (!confirm) return;

        try {
            await deleteTask(taskId);
            toast.success('Task deleted successfully!');
            navigate('/all-tasks');
        } catch (error) {
            toast.error('Failed to delete task');
            console.error("Error deleting task:", error);
        }
    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link to="/all-tasks" className="text-black hover:text-gray-700 flex items-center">
                        <FaArrowLeft className='mr-2' /> Back to Task Listings
                    </Link>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <h1 className="text-3xl font-bold mb-4">
                                    {task.title}
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <p className="text-orange-700">{formatDate(task.createdAt)}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-black text-lg font-bold mb-6">
                                    Task Description
                                </h3>

                                <p className="mb-4">
                                    {task.description}
                                </p>

                                <h3 className="text-black text-lg font-bold mb-2">Deadline</h3>

                                <p className="mb-4">{task.date}</p>

                                {task.isImportant && (
                                    <p className="text-red-700 font-bold flex items-center justify-center">
                                        This task is important!
                                        <FaExclamation className="mr-3" />
                                    </p>
                                )}
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Task</h3>
                                <Link to={`/edit-task/${task.id}`}
                                      className="bg-black hover:bg-gray-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Edit Task
                                </Link>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                    onClick={() => onDeleteClick(task.id)}>
                                    Delete Task
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

const taskLoader = async ({ params }) => {
    const response = await axiosInstance.get(`http://localhost:8000/tasks/${params.id}`);
    return response.data;
};

export { TaskPage as default, taskLoader };
