import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/tasks.png';
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";

function Navbar() {
    const linkClass = ({ isActive }) => isActive
        ? 'link-active link-default'
        : 'link-default';

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            logout();
            navigate('/');
        }
    }

    return (
        <>
            <nav className="bg-gray-900 border-b border-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/home">
                                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
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
                                    <NavLink to="/" onClick={handleLogout} className={linkClass}>Logout</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <style>{`
                .link-default {
                    position: relative;
                    display: block;
                    padding: 15px;
                    text-decoration: none;
                    color: #aaa;
                    margin: 0 10px;
                    transition: all 0.5s;
                }

                .link-default:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 0%;
                    height: 1px;
                    background: #aaa;
                    transition: all 0.5s;
                }

                .link-default:hover,
                .link-active {
                    color: #fff;
                }

                .link-default:hover:after,
                .link-active:after {
                    width: 100%;
                }
            `}</style>
        </>
    )
}

export default Navbar;