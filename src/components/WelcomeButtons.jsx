import {Link} from 'react-router-dom';
import Card from "./Card.jsx";

function HomeCards()  {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card>
                        <h2 className="text-2xl font-bold">Login To Your Account</h2>
                        <p className="mt-2 mb-4">
                            Login with your credentials to start organising yourself!
                        </p>
                        <Link to="/login"
                              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Login
                        </Link>
                    </Card>
                    <Card>
                        <h2 className="text-2xl font-bold">Signup</h2>
                        <p className="mt-2 mb-4">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            If you don't have an account already, sign up with your email to get started organising your tasks!
                        </p>
                        <Link to="/signup"
                              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Sign Up
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards;