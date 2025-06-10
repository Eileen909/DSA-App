// DSA Modules Configuration
export const DSA_MODULES = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Contiguous memory allocation and index-based access',
    icon: '📊',
    difficulty: 'Beginner',
    operations: ['insert', 'delete', 'search', 'update'],
    color: 'bg-blue-500'
  },
  {
    id: 'linkedlists',
    title: 'Linked Lists',
    description: 'Dynamic memory allocation with pointer-based connections',
    icon: '🔗',
    difficulty: 'Beginner',
    operations: ['insert', 'delete', 'traverse', 'reverse'],
    color: 'bg-green-500'
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'LIFO (Last In, First Out) data structure',
    icon: '📚',
    difficulty: 'Beginner',
    operations: ['push', 'pop', 'peek', 'isEmpty'],
    color: 'bg-purple-500'
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'FIFO (First In, First Out) data structure',
    icon: '🚇',
    difficulty: 'Beginner',
    operations: ['enqueue', 'dequeue', 'front', 'isEmpty'],
    color: 'bg-yellow-500'
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'Hierarchical data structure with parent-child relationships',
    icon: '🌳',
    difficulty: 'Intermediate',
    operations: ['insert', 'delete', 'traverse', 'search'],
    color: 'bg-emerald-500'
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Network of nodes connected by edges',
    icon: '🕸️',
    difficulty: 'Advanced',
    operations: ['dfs', 'bfs', 'shortestPath', 'mst'],
    color: 'bg-red-500'
  }
];

// Animation settings
export const ANIMATION_SPEEDS = {
  SLOW: 0.5,
  NORMAL: 1,
  FAST: 2,
  VERY_FAST: 3
};

// Memory visualization constants
export const MEMORY_TYPES = {
  STACK: 'stack',
  HEAP: 'heap',
  STATIC: 'static'
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280
};