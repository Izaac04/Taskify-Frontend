import {Link} from 'react-router-dom';

function ViewAllTasks() {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
            <Link to='/all-tasks' className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
                View All Tasks
            </Link>
        </section>
    )
}

export default ViewAllTasks;