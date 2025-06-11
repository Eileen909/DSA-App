import { useVisualizerStore } from '@/stores';
import Aurora from '@/components/ui/Aurora';

const Layout = ({ children }) => {
  const { sidebarOpen, darkMode } = useVisualizerStore();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Enhanced Aurora Background */}
      <Aurora />
      
      {/* Main app content */}
      <div className="relative z-10 min-h-screen">
        {/* Header with enhanced glass effect */}
        <header className="bg-black/20 backdrop-blur-lg shadow-2xl border-b border-white/10">
          <div className="px-4 py-4">
            <h1 className="text-2xl font-bold text-white drop-shadow-2xl tracking-wide">
              DSA Visualizer
            </h1>
          </div>
        </header>
        
        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          <div className="relative z-20">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;