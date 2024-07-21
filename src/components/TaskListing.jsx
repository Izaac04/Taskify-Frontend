import {useState} from "react";
import {Link} from "react-router-dom";

const TaskListing = ({task, key}) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = task.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    return (
        <div key={task.id} className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">{task.title}</h3>
                </div>
                <div className="mb-5">
                    {description}
                </div>

                <button onClick={() => setShowFullDescription((prevState) => !prevState)}
                        className="text-black mb-5 hover: text-black">
                    {showFullDescription ? "Less" : "More"}
                </button>

                <h3 className="text-black mb-2">{task.date}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">

                    <Link to={`/tasks/${task.id}`}
                          className="h-[36px] bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TaskListing;