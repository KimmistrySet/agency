'use client';

import { useState } from 'react';

export default function Home() {
  const [activeAgent, setActiveAgent] = useState('silentsentry');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  TinkerBot Agency
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#agents" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">AI Agents</a>
                <a href="#ecosystem" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Ecosystems</a>
                <a href="#proof" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Case Studies</a>
                <a href="#contact" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/25">
                  Hire Agents
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300FF88%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Adaptive Agentic AI - Beyond Traditional Automation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Hire Your AI Workforce
              </span>
              <br />
              <span className="text-white">From Our Elite</span>
              <br />
              <span className="text-white">Agent Pool</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              TinkerBot Agency pioneers <span className="text-green-400 font-semibold">Adaptive Agentic AI</span> - intelligent agents that learn, 
              adapt, and collaborate like a real workforce. Beyond simple automation, our agents evolve with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1">
                Browse Agents
              </button>
              <button className="border-2 border-purple-500 hover:border-purple-400 text-purple-400 hover:text-purple-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 bg-purple-500/10 hover:bg-purple-500/20 transform hover:scale-105 hover:-translate-y-1">
                View Case Studies
              </button>
            </div>

            {/* Agency Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-400 font-medium group-hover:text-green-300 transition-colors duration-300">Specialized Agents</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-gray-400 font-medium group-hover:text-purple-300 transition-colors duration-300">Successful Placements</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-gray-400 font-medium group-hover:text-cyan-300 transition-colors duration-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Showcase */}
      <div id="agents" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Adaptive Agentic AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Intelligent agents that learn, adapt, and collaborate - each with unique capabilities and proven performance
            </p>
          </div>

          {/* Agent Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700">
              <button
                onClick={() => setActiveAgent('silentsentry')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeAgent === 'silentsentry'
                    ? 'bg-green-500 text-black'
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                SilentSentry
              </button>
              <button
                onClick={() => setActiveAgent('tinkerbot')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeAgent === 'tinkerbot'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                TinkerBot
              </button>
              <button
                onClick={() => setActiveAgent('analytics')}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeAgent === 'analytics'
                    ? 'bg-cyan-500 text-black'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                Analytics Pro
              </button>
            </div>
          </div>

          {/* Agent Profiles */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
            {activeAgent === 'silentsentry' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">SilentSentry</h3>
                      <p className="text-green-400 font-medium">Security Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Agent Resume</h4>
                      <p className="text-gray-300 leading-relaxed">
                        &quot;I am SilentSentry, a specialized security agent with expertise in threat detection, 
                        automated response, and system recovery. I excel at monitoring AI ecosystems, 
                        identifying potential attacks, and implementing protective measures.&quot;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Threat Detection</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Network Analysis</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Automated Response</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">System Recovery</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-400">99.9%</div>
                          <div className="text-gray-400 text-sm">Detection Rate</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-400">&lt;2s</div>
                          <div className="text-gray-400 text-sm">Response Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Hire This Agent</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Availability</span>
                      <span className="text-green-400 font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Integration Time</span>
                      <span className="text-green-400 font-medium">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monthly Rate</span>
                      <span className="text-green-400 font-medium">$2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Setup Fee</span>
                      <span className="text-green-400 font-medium">$5,000</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      Request Interview
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeAgent === 'tinkerbot' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">TinkerBot</h3>
                      <p className="text-purple-400 font-medium">Development Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Agent Resume</h4>
                      <p className="text-gray-300 leading-relaxed">
                        &quot;I am TinkerBot, a development specialist focused on code optimization, 
                        AI-powered suggestions, and workflow automation. I help teams build 
                        faster, cleaner, and more efficient applications.&quot;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Code Optimization</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">AI Suggestions</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Workflow Automation</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Debugging</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-purple-400">10x</div>
                          <div className="text-gray-400 text-sm">Faster Development</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-purple-400">95%</div>
                          <div className="text-gray-400 text-sm">Bug Reduction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Hire This Agent</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Availability</span>
                      <span className="text-purple-400 font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Integration Time</span>
                      <span className="text-purple-400 font-medium">12-24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monthly Rate</span>
                      <span className="text-purple-400 font-medium">$1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Setup Fee</span>
                      <span className="text-purple-400 font-medium">$3,500</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-bold transition-all duration-200">
                      Request Interview
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeAgent === 'analytics' && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Analytics Pro</h3>
                      <p className="text-cyan-400 font-medium">Data Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Agent Resume</h4>
                      <p className="text-gray-300 leading-relaxed">
                        &quot;I am Analytics Pro, a data specialist focused on performance tracking, 
                        user behavior analysis, and actionable insights. I help organizations 
                        make data-driven decisions and optimize their operations.&quot;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Data Analysis</span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Performance Tracking</span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">User Insights</span>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Reporting</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-cyan-400">Real-time</div>
                          <div className="text-gray-400 text-sm">Data Processing</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-cyan-400">98%</div>
                          <div className="text-gray-400 text-sm">Accuracy Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-600">
                  <h4 className="text-xl font-semibold text-white mb-4">Hire This Agent</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Availability</span>
                      <span className="text-cyan-400 font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Integration Time</span>
                      <span className="text-cyan-400 font-medium">6-12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monthly Rate</span>
                      <span className="text-cyan-400 font-medium">$1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Setup Fee</span>
                      <span className="text-cyan-400 font-medium">$2,500</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-200">
                      Request Interview
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Security Theme Elements */}
      <div className="py-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-y-2 border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-bold text-lg">SECURE ZONE</span>
              <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <div className="h-8 w-px bg-yellow-500/50"></div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-yellow-400 font-medium">AI PROTECTED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div id="ecosystem" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Adaptive Agentic AI Ecosystems
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Complete teams of intelligent agents that learn, adapt, and collaborate like a real workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Security Team</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Complete security ecosystem with SilentSentry, monitoring agents, and automated response systems.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-400">• SilentSentry (Lead)</div>
                <div className="text-sm text-gray-400">• Network Monitor</div>
                <div className="text-sm text-gray-400">• Response Coordinator</div>
                <div className="text-sm text-gray-400">• Recovery Specialist</div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black py-3 rounded-xl font-bold transition-all duration-200">
                Hire Team - $8,500/mo
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Development Team</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Full-stack development team with TinkerBot, code reviewers, and deployment specialists.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-400">• TinkerBot (Lead)</div>
                <div className="text-sm text-gray-400">• Code Reviewer</div>
                <div className="text-sm text-gray-400">• Deployment Manager</div>
                <div className="text-sm text-gray-400">• QA Specialist</div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-bold transition-all duration-200">
                Hire Team - $6,200/mo
              </button>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Analytics Team</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Comprehensive analytics team with data processors, insight generators, and reporting specialists.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-400">• Analytics Pro (Lead)</div>
                <div className="text-sm text-gray-400">• Data Processor</div>
                <div className="text-sm text-gray-400">• Insight Generator</div>
                <div className="text-sm text-gray-400">• Report Specialist</div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-200">
                Hire Team - $4,800/mo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Section */}
      <div id="proof" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Live By Our Own Adaptive Agentic AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              TinkerBot Agency operates entirely on our own Adaptive Agentic AI ecosystem
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Zero Human Overhead
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our entire company operates through our <span className="text-green-400 font-semibold">Adaptive Agentic AI</span> ecosystem. 
                  Customer support, project management, security monitoring, analytics, and internal communications 
                  are all handled by intelligent agents that learn and adapt to our needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">24/7 Automated Operations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">AI-Powered Customer Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">Automated Project Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">Real-Time Performance Analytics</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-600">
                <h4 className="text-xl font-bold text-white mb-6">Live Agency Operations</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">SilentSentry Security</span>
                    <span className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TinkerBot Development</span>
                    <span className="flex items-center text-purple-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Analytics Pro</span>
                    <span className="flex items-center text-cyan-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Support</span>
                    <span className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">
                    All systems operational • Zero downtime • 100% Adaptive Agentic AI-powered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-green-500/10 to-purple-500/10 border-t border-green-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Deploy Adaptive Agentic AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Join forward-thinking companies who trust TinkerBot Agency for intelligent, adaptive AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1">
              Browse All Agents
            </button>
            <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              TinkerBot Agency
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Pioneering Adaptive Agentic AI - intelligent agents that learn, adapt, and collaborate.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Support</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}