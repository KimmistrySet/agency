'use client';

import { useState } from 'react';

export default function BluePrinterPrivate() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - replace with proper auth
    if (password === 'blueprinter2025') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">BluePrinter</h2>
            <p className="text-gray-400">Private Development Tool</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter access password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Access BluePrinter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-white">
                  BluePrinter
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Private Tool</span>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BluePrinter Development Tool
          </h1>
          <p className="text-xl text-gray-600">
            Your personal Figma-to-code generator for rapid prototyping
          </p>
        </div>

        {/* Quick Access */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">SilentSentry Website</div>
              <div className="text-sm text-gray-600">Company Dashboard</div>
              <div className="text-sm text-gray-600">Client Portal</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">New Project</button>
              <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">Import Figma</button>
              <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">Generate Code</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stats</h3>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">Projects: 12</div>
              <div className="text-sm text-gray-600">Components: 156</div>
              <div className="text-sm text-gray-600">Time Saved: 47h</div>
            </div>
          </div>
        </div>

        {/* Development Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Development Note</h3>
          <p className="text-blue-800">
            This is your private development tool. Use it to rapidly prototype designs and generate code 
            for your SilentSentry and ecosystem projects. Keep this tool private and use it to maintain 
            your competitive advantage in development speed.
          </p>
        </div>
      </div>
    </div>
  );
}

