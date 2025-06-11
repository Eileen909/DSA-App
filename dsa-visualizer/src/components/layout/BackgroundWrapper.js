import Aurora from '@/components/ui/Aurora';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Aurora Background - Fixed and behind everything */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Aurora
          colorStops={["#1e3a8a", "#3b82f6", "#8b5cf6"]} // Blue to purple gradient
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20 z-10"></div>
      
      {/* Content Layer - All components will be rendered here */}
      <div className="relative z-20 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;