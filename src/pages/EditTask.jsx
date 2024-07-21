import {useParams,  useLoaderData, useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";

const EditTask = ({ updateTaskSubmit  }) => {
    const task = useLoaderData();
    const navigate = useNavigate();

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [date, setDate] = useState(new Date(task.date));
    const [isComplete, setIsComplete] = useState(task.isCompleted || false); // Default to false if undefined
    const [isImportant, setIsImportant] = useState(task.isImportant || false);

    const {id} = useParams();

    const submitForm = (e) => {
        e.preventDefault();

        const updatedTask = {
            id,
            title,
            description,
            date: date.toISOString().split('T')[0], // Format the date
            isCompleted: isComplete, // Match backend property name
            isImportant,
            createdAt: task.createdAt
        };

        console.log(updatedTask); // Log the updatedTask object

        updateTaskSubmit(updatedTask);

        toast.success('Task Updated Successfully!');

        return navigate(`/tasks/${id}`);
    }

    return (
        <section className="bg-gray-100">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">Update Task</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Task Name
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Revise for chemistry exam"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="On monday after I get back from school, revise for chemistry exam using youtube and textbooks..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="border rounded w-full py-2 px-3 mb-2"
                                required
                                value={date.toISOString().split('T')[0]}
                                onChange={(e) => setDate(new Date(e.target.value))}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Is Complete
                            </label>
                            <input
                                type="checkbox"
                                id="isComplete"
                                name="isComplete"
                                className="mr-2 leading-tight"
                                checked={isComplete}
                                onChange={(e) => setIsComplete(e.target.checked)}
                            />
                            <span className="text-sm">
                                Check if task is completed
                            </span>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Is Important
                            </label>
                            <input
                                type="checkbox"
                                id="isImportant"
                                name="isImportant"
                                className="mr-2 leading-tight"
                                checked={isImportant}
                                onChange={(e) => setIsImportant(e.target.checked)}
                            />
                            <span className="text-sm">
                                Check if task is important
                            </span>
                        </div>

                        <div>
                            <button
                                className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit">
                                Update Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditTask;