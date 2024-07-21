import {Link} from 'react-router-dom';
import Card from "./Card.jsx";

function HomeCards()  {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-2xl font-bold">Display Your Tasks</h2>
                        <p className="mt-2 mb-4">
                            Browse all of your tasks that you currently have on your profile!
                        </p>
                        <Link to="/all-tasks"
                              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Browse Tasks
                        </Link>
                    </Card>
                    <Card>
                        <h2 className="text-2xl font-bold">Add A Task</h2>
                        <p className="mt-2 mb-4">
                            List your task to be able to track and manage your life!
                        </p>
                        <Link to="/add-task"
                              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Add Task
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards;