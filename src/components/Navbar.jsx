import {NavLink, useNavigate} from "react-router-dom";
import logo from '../assets/tasks.png';
import {useContext} from "react";
import AuthContext from "../context/AuthContext.jsx";

function Navbar() {
    const linkClass = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogout = (e) => {
        e.preventDefault();
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            logout();
        }
        navigate('/');
    }

    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/home">
                            <img className="h-10 w-auto" src={logo} alt="React Jobs"/>
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">Taskify</span>
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/home" className={linkClass}>Home</NavLink>
                                <NavLink to="/all-tasks" className={linkClass}>All Tasks</NavLink>
                                <NavLink to="/important-tasks" className={linkClass}>Important Tasks</NavLink>
                                <NavLink to="/completed-tasks" className={linkClass}>Completed Tasks</NavLink>
                                <NavLink to="/doItNow-tasks" className={linkClass}>Do It Now</NavLink>
                                <NavLink to="/add-task" className={linkClass}>Add Task</NavLink>
                                <NavLink to="/"  onClick={handleLogout} className={linkClass}>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;