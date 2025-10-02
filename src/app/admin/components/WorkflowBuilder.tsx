'use client';

import { useState, useRef, useCallback } from 'react';

interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'output';
  title: string;
  description: string;
  x: number;
  y: number;
  inputs: number;
  outputs: number;
  icon: string;
  color: string;
}

interface Connection {
  id: string;
  from: string;
  to: string;
  fromOutput: number;
  toInput: number;
}

const nodeTypes = [
  // BluePrinter Nodes
  {
    type: 'trigger',
    title: 'Figma Design Updated',
    description: 'Triggers when a Figma design is updated',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    inputs: 0,
    outputs: 1,
    category: 'blueprinter'
  },
  {
    type: 'trigger',
    title: 'New Client Request',
    description: 'Triggers when a new client submits a request',
    icon: '👤',
    color: 'from-green-500 to-emerald-500',
    inputs: 0,
    outputs: 1,
    category: 'blueprinter'
  },
  {
    type: 'action',
    title: 'Generate Code',
    description: 'Generate code from Figma design',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    inputs: 1,
    outputs: 1,
    category: 'blueprinter'
  },
  
  // Game Development Nodes
  {
    type: 'trigger',
    title: 'Unity Scene Modified',
    description: 'Triggers when Unity scene files are changed',
    icon: '🎮',
    color: 'from-indigo-500 to-purple-600',
    inputs: 0,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'trigger',
    title: 'Asset Import Complete',
    description: 'Triggers when new game assets are imported',
    icon: '🖼️',
    color: 'from-emerald-500 to-teal-600',
    inputs: 0,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Unity Build Pipeline',
    description: 'Build Unity project for target platforms',
    icon: '🔨',
    color: 'from-orange-500 to-red-600',
    inputs: 1,
    outputs: 2,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Creature AI Training',
    description: 'Train creature behavior AI models',
    icon: '🧠',
    color: 'from-pink-500 to-rose-600',
    inputs: 1,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Environment Generator',
    description: 'Generate procedural environments',
    icon: '🌿',
    color: 'from-green-500 to-emerald-600',
    inputs: 1,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'condition',
    title: 'Performance Check',
    description: 'Check game performance metrics',
    icon: '📊',
    color: 'from-yellow-500 to-amber-600',
    inputs: 1,
    outputs: 2,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Steam Upload',
    description: 'Upload build to Steam for testing',
    icon: '🚂',
    color: 'from-slate-500 to-gray-600',
    inputs: 1,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Creature Bond System',
    description: 'Process creature trust and bond mechanics',
    icon: '💚',
    color: 'from-emerald-400 to-green-600',
    inputs: 2,
    outputs: 1,
    category: 'gamedev'
  },
  {
    type: 'action',
    title: 'Environmental Healing',
    description: 'Process environmental restoration mechanics',
    icon: '🌱',
    color: 'from-lime-500 to-green-500',
    inputs: 1,
    outputs: 2,
    category: 'gamedev'
  },
  
  // General Nodes
  {
    type: 'action',
    title: 'Deploy to Staging',
    description: 'Deploy to staging environment',
    icon: '🚀',
    color: 'from-orange-500 to-red-500',
    inputs: 1,
    outputs: 1,
    category: 'general'
  },
  {
    type: 'action',
    title: 'Notify Team',
    description: 'Send notification to team',
    icon: '📧',
    color: 'from-indigo-500 to-purple-500',
    inputs: 1,
    outputs: 0,
    category: 'general'
  },
];

export default function WorkflowBuilder() {
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<typeof nodeTypes[0] | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (nodeType: typeof nodeTypes[0]) => {
    setDraggedNode(nodeType);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedNode || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      type: draggedNode.type as WorkflowNode['type'],
      title: draggedNode.title,
      description: draggedNode.description,
      x: x - 100, // Center the node
      y: y - 50,
      inputs: draggedNode.inputs,
      outputs: draggedNode.outputs,
      icon: draggedNode.icon,
      color: draggedNode.color,
    };

    setNodes(prev => [...prev, newNode]);
    setDraggedNode(null);
  }, [draggedNode]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const NodeComponent = ({ node }: { node: WorkflowNode }) => (
    <div
      className={`absolute cursor-move select-none transition-all duration-200 ${
        selectedNode === node.id ? 'scale-105 z-20' : 'z-10'
      }`}
      style={{ left: node.x, top: node.y }}
      onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
    >
      <div className={`w-48 bg-gradient-to-r ${node.color} p-0.5 rounded-xl shadow-lg`}>
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">{node.icon}</span>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm">{node.title}</h3>
              <p className="text-gray-400 text-xs">{node.description}</p>
            </div>
          </div>
          
          {/* Input/Output connectors */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex space-x-1">
              {Array.from({ length: node.inputs }).map((_, i) => (
                <div
                  key={`input-${i}`}
                  className="w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 hover:border-white cursor-pointer transition-colors"
                />
              ))}
            </div>
            <div className="flex space-x-1">
              {Array.from({ length: node.outputs }).map((_, i) => (
                <div
                  key={`output-${i}`}
                  className="w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 hover:border-white cursor-pointer transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full flex">
      {/* Node Library Sidebar */}
      <div className="w-80 border-r border-white/10 bg-black/20 backdrop-blur-xl p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Workflow Builder</h2>
          <p className="text-gray-400 text-sm">Drag nodes to the canvas to build your automation workflow</p>
        </div>

        <div className="space-y-4">
          {/* Game Development Section */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              🎮 Game Development
            </h3>
            <div className="space-y-2">
              {nodeTypes.filter(node => node.category === 'gamedev').map((node, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(node)}
                  className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-grab hover:bg-white/10 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{node.icon}</span>
                    <div>
                      <div className="text-white font-medium text-sm">{node.title}</div>
                      <div className="text-gray-400 text-xs">{node.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BluePrinter Section */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              🎨 BluePrinter
            </h3>
            <div className="space-y-2">
              {nodeTypes.filter(node => node.category === 'blueprinter').map((node, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(node)}
                  className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-grab hover:bg-white/10 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{node.icon}</span>
                    <div>
                      <div className="text-white font-medium text-sm">{node.title}</div>
                      <div className="text-gray-400 text-xs">{node.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Section */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              ⚙️ General
            </h3>
            <div className="space-y-2">
              {nodeTypes.filter(node => node.category === 'general').map((node, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(node)}
                  className="p-3 bg-white/5 border border-white/10 rounded-lg cursor-grab hover:bg-white/10 transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{node.icon}</span>
                    <div>
                      <div className="text-white font-medium text-sm">{node.title}</div>
                      <div className="text-gray-400 text-xs">{node.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Controls */}
        <div className="mt-8 space-y-3">
          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200">
            Save Workflow
          </button>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200">
            Test Workflow
          </button>
          <button 
            onClick={() => setNodes([])}
            className="w-full border border-red-500/50 text-red-400 hover:bg-red-500/10 py-2 px-4 rounded-lg font-medium transition-all duration-200"
          >
            Clear Canvas
          </button>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div className="flex-1 relative overflow-hidden">
        <div
          ref={canvasRef}
          className="w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, transparent 24%, rgba(255, 255, 255, 0.02) 25%, rgba(255, 255, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.02) 75%, rgba(255, 255, 255, 0.02) 76%, transparent 77%),
              linear-gradient(-45deg, transparent 24%, rgba(255, 255, 255, 0.02) 25%, rgba(255, 255, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.02) 75%, rgba(255, 255, 255, 0.02) 76%, transparent 77%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 30px 30px, 30px 30px'
          }}
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} />
          </div>

          {/* Welcome Message */}
          {nodes.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-2">Build Your AI Workflow</h3>
                <p className="text-gray-400 max-w-md">
                  Drag nodes from the sidebar to create automated workflows for your AI bot team. 
                  Connect triggers, actions, and conditions to build powerful automations.
                </p>
              </div>
            </div>
          )}

          {/* Render Nodes */}
          {nodes.map(node => (
            <NodeComponent key={node.id} node={node} />
          ))}

          {/* Selected Node Info */}
          {selectedNode && (
            <div className="absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Node Properties</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white ml-2">{nodes.find(n => n.id === selectedNode)?.type}</span>
                </div>
                <div>
                  <span className="text-gray-400">Inputs:</span>
                  <span className="text-white ml-2">{nodes.find(n => n.id === selectedNode)?.inputs}</span>
                </div>
                <div>
                  <span className="text-gray-400">Outputs:</span>
                  <span className="text-white ml-2">{nodes.find(n => n.id === selectedNode)?.outputs}</span>
                </div>
              </div>
              <button 
                onClick={() => setNodes(prev => prev.filter(n => n.id !== selectedNode))}
                className="w-full mt-3 bg-red-500/20 border border-red-500/50 text-red-400 py-1 px-3 rounded text-xs hover:bg-red-500/30 transition-colors"
              >
                Delete Node
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
