import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MainLayout from "./layouts/MainLayout.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import CompletedTasks from "./pages/CompletedTasks.jsx";
import ImportantTasks from "./pages/ImportantTasks.jsx";
import DoItNowTasks from "./pages/DoItNowTasks.jsx";
import AddTask from "./pages/AddTask.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import axiosInstance from "./api/axios.jsx";
import AllTasks from "./pages/AllTasks.jsx";
import EditTask from "./pages/EditTask.jsx";

const getAuthToken = () => localStorage.getItem('authToken');


const addTask = async (newTask) => {
    const token = getAuthToken();

    try {
        const response = await axiosInstance.post('http://localhost:8000/tasks', newTask, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};

const deleteTask = async (id) => {
    try {
        const response = await axiosInstance.delete(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

const updateTaskSubmit = async (task) => {
    const token = getAuthToken();

    try {
        const response = await axiosInstance.put(`http://localhost:8000/tasks/${task.id}`, task, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error updating task:", error.response ? error.response.data : error.message);
        throw error;
    }
};

const taskLoader = async ({ params }) => {
    const response = await axiosInstance.get(`http://localhost:8000/tasks/${params.id}`);
    return response.data;
};

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('authToken');
    return token ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <WelcomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            {
                path: "/home",
                element: (
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                )
            },
            {
                path: "/all-tasks",
                element: (
                    <PrivateRoute>
                        <AllTasks />
                    </PrivateRoute>
                )
            },
            {
                path: "/important-tasks",
                element: (
                    <PrivateRoute>
                        <ImportantTasks />
                    </PrivateRoute>
                )
            },
            {
                path: "/completed-tasks",
                element: (
                    <PrivateRoute>
                        <CompletedTasks />
                    </PrivateRoute>
                )
            },
            {
                path: "/doItNow-tasks",
                element: (
                    <PrivateRoute>
                        <DoItNowTasks />
                    </PrivateRoute>
                )
            },
            {
                path: "/add-task",
                element: (
                    <PrivateRoute>
                        <AddTask addTaskSubmit={addTask} />
                    </PrivateRoute>
                )
            },
            {
                path: '/tasks/:id',
                element: (
                    <PrivateRoute>
                        <TaskPage deleteTask={deleteTask} />
                    </PrivateRoute>
                ),
                loader: taskLoader
            },
            {
                path: '/edit-task/:id',
                element: (
                    <PrivateRoute>
                        <EditTask updateTaskSubmit={updateTaskSubmit} />
                    </PrivateRoute>
                ),
                loader: taskLoader
            },
            { path: "*", element: <Navigate to="/login" /> }
        ]
    }
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;



