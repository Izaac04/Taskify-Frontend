import logo from "../assets/tasks.png";

function Header() {
    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <img className="h-10 w-auto" src={logo} alt="React Jobs"/>
                        <span className="hidden md:block text-white text-2xl font-bold ml-2">Taskify</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;