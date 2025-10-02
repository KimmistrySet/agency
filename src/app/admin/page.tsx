'use client';

import { useState } from 'react';
import WorkflowBuilder from './components/WorkflowBuilder';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      {/* Header */}
      <div className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BP</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              BluePrinter Command Center
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">System Online</span>
            </div>
            
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-64 border-r border-white/10 backdrop-blur-xl bg-black/20 flex flex-col">
          <div className="p-4 flex-1 overflow-y-auto">
            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: '📊' },
                { id: 'workflows', label: 'Bot Workflows', icon: '🤖' },
                { id: 'figma', label: 'Figma Pipeline', icon: '🎨' },
                { id: 'clients', label: 'Client Projects', icon: '👥' },
                { id: 'revenue', label: 'Revenue Analytics', icon: '💰' },
                { id: 'system', label: 'System Health', icon: '⚙️' },
                { id: 'logs', label: 'Activity Logs', icon: '📋' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Bot Status - Fixed at bottom */}
          <div className="p-4 border-t border-white/10">
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
              <h3 className="text-white font-semibold mb-3">AI Bot Team</h3>
              <div className="space-y-2">
                {[
                  { name: 'SilentSentry', status: 'active', color: 'bg-green-400' },
                  { name: 'TinkerBot', status: 'active', color: 'bg-purple-400' },
                  { name: 'Analytics Pro', status: 'active', color: 'bg-cyan-400' },
                ].map((bot) => (
                  <div key={bot.name} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{bot.name}</span>
                    <div className={`w-2 h-2 ${bot.color} rounded-full animate-pulse`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">Business Overview</h2>
                <div className="text-gray-400">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Active Projects', value: '12', change: '+3', colorClass: 'text-purple-400' },
                  { label: 'Code Generated', value: '847', change: '+156', colorClass: 'text-green-400' },
                  { label: 'Revenue (MTD)', value: '$8,420', change: '+24%', colorClass: 'text-cyan-400' },
                  { label: 'Bot Uptime', value: '99.9%', change: '24/7', colorClass: 'text-pink-400' },
                ].map((stat, index) => (
                  <div key={index} className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className={`${stat.colorClass} text-xs font-medium`}>{stat.change}</span>
                    </div>
                    <div className={`text-2xl font-bold ${stat.colorClass}`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'Figma design processed', project: 'Client Dashboard', time: '2 min ago', status: 'success' },
                    { action: 'Code deployed to staging', project: 'E-commerce Site', time: '15 min ago', status: 'success' },
                    { action: 'New client onboarded', project: 'SaaS Platform', time: '1 hour ago', status: 'info' },
                    { action: 'Payment received', project: 'Mobile App UI', time: '3 hours ago', status: 'success' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-400' : 
                          activity.status === 'info' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`}></div>
                        <div>
                          <div className="text-white font-medium">{activity.action}</div>
                          <div className="text-gray-400 text-sm">{activity.project}</div>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'workflows' && <WorkflowBuilder />}

          {/* Add other sections as needed */}
        </div>
      </div>
    </div>
  );
}
