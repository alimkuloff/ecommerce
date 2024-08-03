import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">

      <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-lg z-10 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 animate__animated animate__bounceIn animate__delay-1s">Welcome to My Website!</h1>
        <Link to="/auth">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
             Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;