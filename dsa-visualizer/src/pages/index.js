export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to DSA Visualizer
        </h1>
        <p className="text-lg text-white/80 mb-6 drop-shadow">
          Interactive Data Structures and Algorithms Learning Platform
        </p>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold px-8 py-3 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
}