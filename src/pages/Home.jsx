import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import TaskListings from "../components/TaskListings.jsx";
import ViewAllTasks from "../components/ViewAllTasks.jsx";

function HomePage() {
    return (
        <>
            <Hero />
            <HomeCards />
            <TaskListings isHome={true}/>
            <ViewAllTasks />
        </>
    );
}

export default HomePage;

