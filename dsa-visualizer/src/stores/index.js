import { create } from 'zustand';

// Main visualizer store
export const useVisualizerStore = create((set, get) => ({
  // Current state
  currentModule: null,
  currentOperation: null,
  currentStep: 0,
  totalSteps: 0,
  isPlaying: false,
  playbackSpeed: 1,
  
  // Data structure state
  dataStructure: null,
  memoryLayout: [],
  operations: [],
  
  // Animation state
  animationQueue: [],
  isAnimating: false,
  
  // UI state
  sidebarOpen: true,
  darkMode: false,
  
  // Actions
  setCurrentModule: (module) => set({ currentModule: module }),
  setCurrentOperation: (operation) => set({ currentOperation: operation }),
  
  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1)
  })),
  
  prevStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 0)
  })),
  
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  reset: () => set({
    currentStep: 0,
    isPlaying: false,
    dataStructure: null,
    memoryLayout: [],
    operations: []
  }),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));