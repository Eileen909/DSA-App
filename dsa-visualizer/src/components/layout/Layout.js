import { useVisualizerStore } from '@/stores';

const Layout = ({ children }) => {
  const { sidebarOpen, darkMode } = useVisualizerStore();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark' : ''
    }`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header will go here */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              DSA Visualizer
            </h1>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;