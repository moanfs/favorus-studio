import { NavLink } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
const NotFound = () =>{
    return(
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        <NavLink to="/" className="px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded">Go Home</NavLink>
    </div>
    );
};
export default NotFound;