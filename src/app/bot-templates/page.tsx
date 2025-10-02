'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BotTemplates() {
  const [activeCategory, setActiveCategory] = useState('security');

  const botTemplates = {
    security: [
      {
        name: 'SilentSentry',
        role: 'Security Specialist',
        description: 'Advanced threat detection and automated response for AI ecosystems',
        coreSkills: ['Threat Detection', 'Network Analysis', 'Automated Response', 'System Recovery'],
        performanceMetrics: { detectionRate: '99.9%', responseTime: '<2s', falsePositives: 'Zero' },
        integrationTime: '24-48 hours',
        monthlyRate: '$2,500',
        setupFee: '$5,000'
      },
      {
        name: 'Network Monitor',
        role: 'Network Security Agent',
        description: 'Continuous network traffic analysis and anomaly detection',
        coreSkills: ['Traffic Analysis', 'Anomaly Detection', 'Real-time Monitoring', 'Alert Management'],
        performanceMetrics: { uptime: '99.99%', latency: '<100ms', accuracy: '98%' },
        integrationTime: '12-24 hours',
        monthlyRate: '$1,200',
        setupFee: '$2,500'
      },
      {
        name: 'Response Coordinator',
        role: 'Incident Response Agent',
        description: 'Orchestrates automated response protocols during security incidents',
        coreSkills: ['Incident Response', 'Protocol Management', 'Escalation Handling', 'Recovery Planning'],
        performanceMetrics: { responseTime: '<30s', successRate: '95%', escalationTime: '<5min' },
        integrationTime: '18-36 hours',
        monthlyRate: '$1,800',
        setupFee: '$3,500'
      },
      {
        name: 'Recovery Specialist',
        role: 'System Recovery Agent',
        description: 'Manages backup systems and automated recovery procedures',
        coreSkills: ['Backup Management', 'Recovery Procedures', 'Data Integrity', 'Restore Points'],
        performanceMetrics: { recoveryTime: '<1hr', dataLoss: '0%', successRate: '99.8%' },
        integrationTime: '24-48 hours',
        monthlyRate: '$1,500',
        setupFee: '$3,000'
      }
    ],
    development: [
      {
        name: 'TinkerBot',
        role: 'Development Specialist',
        description: 'AI-powered development assistant for code optimization and workflow automation',
        coreSkills: ['Code Optimization', 'AI Suggestions', 'Workflow Automation', 'Debugging'],
        performanceMetrics: { speedIncrease: '10x', bugReduction: '95%', efficiency: '85%' },
        integrationTime: '12-24 hours',
        monthlyRate: '$1,800',
        setupFee: '$3,500'
      },
      {
        name: 'Code Reviewer',
        role: 'Code Quality Agent',
        description: 'Automated code review and quality assurance specialist',
        coreSkills: ['Code Review', 'Quality Assurance', 'Best Practices', 'Security Scanning'],
        performanceMetrics: { reviewSpeed: '5x', issueDetection: '92%', qualityScore: '98%' },
        integrationTime: '6-12 hours',
        monthlyRate: '$1,200',
        setupFee: '$2,000'
      },
      {
        name: 'Deployment Manager',
        role: 'DevOps Specialist',
        description: 'Automated deployment and infrastructure management',
        coreSkills: ['Deployment Automation', 'Infrastructure Management', 'CI/CD', 'Monitoring'],
        performanceMetrics: { deploymentSpeed: '8x', uptime: '99.9%', errorRate: '<0.1%' },
        integrationTime: '18-36 hours',
        monthlyRate: '$2,200',
        setupFee: '$4,500'
      },
      {
        name: 'QA Specialist',
        role: 'Quality Assurance Agent',
        description: 'Automated testing and quality control specialist',
        coreSkills: ['Automated Testing', 'Quality Control', 'Performance Testing', 'Bug Tracking'],
        performanceMetrics: { testCoverage: '95%', bugDetection: '90%', releaseQuality: '98%' },
        integrationTime: '12-24 hours',
        monthlyRate: '$1,400',
        setupFee: '$2,800'
      }
    ],
    analytics: [
      {
        name: 'Analytics Pro',
        role: 'Data Specialist',
        description: 'Advanced analytics and performance tracking specialist',
        coreSkills: ['Data Analysis', 'Performance Tracking', 'User Insights', 'Reporting'],
        performanceMetrics: { processingSpeed: 'Real-time', accuracy: '98%', insights: '50+/day' },
        integrationTime: '6-12 hours',
        monthlyRate: '$1,200',
        setupFee: '$2,500'
      },
      {
        name: 'Data Processor',
        role: 'Data Management Agent',
        description: 'Handles data ingestion, cleaning, and preparation',
        coreSkills: ['Data Ingestion', 'Data Cleaning', 'Data Preparation', 'ETL Processes'],
        performanceMetrics: { processingVolume: '1TB/day', accuracy: '99.5%', speed: '10x' },
        integrationTime: '8-16 hours',
        monthlyRate: '$1,000',
        setupFee: '$2,000'
      },
      {
        name: 'Insight Generator',
        role: 'Business Intelligence Agent',
        description: 'Generates actionable business insights from data',
        coreSkills: ['Business Intelligence', 'Insight Generation', 'Trend Analysis', 'Predictive Analytics'],
        performanceMetrics: { insights: '25+/day', accuracy: '94%', actionability: '88%' },
        integrationTime: '10-20 hours',
        monthlyRate: '$1,600',
        setupFee: '$3,200'
      },
      {
        name: 'Report Specialist',
        role: 'Reporting Agent',
        description: 'Automated report generation and distribution',
        coreSkills: ['Report Generation', 'Data Visualization', 'Automated Distribution', 'Custom Dashboards'],
        performanceMetrics: { reportSpeed: '5x', accuracy: '99%', customization: '100%' },
        integrationTime: '6-12 hours',
        monthlyRate: '$1,100',
        setupFee: '$2,200'
      }
    ],
    customer: [
      {
        name: 'Support Agent',
        role: 'Customer Support Specialist',
        description: 'AI-powered customer support and issue resolution',
        coreSkills: ['Customer Support', 'Issue Resolution', 'Ticket Management', 'Knowledge Base'],
        performanceMetrics: { responseTime: '<30s', resolutionRate: '85%', satisfaction: '92%' },
        integrationTime: '4-8 hours',
        monthlyRate: '$800',
        setupFee: '$1,500'
      },
      {
        name: 'Sales Assistant',
        role: 'Sales Support Agent',
        description: 'Lead qualification and sales process automation',
        coreSkills: ['Lead Qualification', 'Sales Automation', 'CRM Management', 'Follow-up'],
        performanceMetrics: { leadQuality: '90%', conversionRate: '25%', followUp: '100%' },
        integrationTime: '6-12 hours',
        monthlyRate: '$1,300',
        setupFee: '$2,500'
      },
      {
        name: 'Onboarding Specialist',
        role: 'Customer Onboarding Agent',
        description: 'Automated customer onboarding and training',
        coreSkills: ['Onboarding Automation', 'Training Delivery', 'Progress Tracking', 'Success Metrics'],
        performanceMetrics: { onboardingTime: '50%', completionRate: '95%', satisfaction: '89%' },
        integrationTime: '8-16 hours',
        monthlyRate: '$1,100',
        setupFee: '$2,200'
      }
    ],
    operations: [
      {
        name: 'Project Manager',
        role: 'Project Management Agent',
        description: 'Automated project management and team coordination',
        coreSkills: ['Project Management', 'Team Coordination', 'Timeline Management', 'Resource Allocation'],
        performanceMetrics: { efficiency: '40%', onTimeDelivery: '92%', budgetAccuracy: '98%' },
        integrationTime: '12-24 hours',
        monthlyRate: '$1,700',
        setupFee: '$3,400'
      },
      {
        name: 'Workflow Optimizer',
        role: 'Process Optimization Agent',
        description: 'Identifies and optimizes business processes',
        coreSkills: ['Process Analysis', 'Workflow Optimization', 'Efficiency Improvement', 'Automation'],
        performanceMetrics: { efficiencyGain: '35%', costReduction: '20%', timeSavings: '45%' },
        integrationTime: '16-32 hours',
        monthlyRate: '$1,900',
        setupFee: '$3,800'
      },
      {
        name: 'Compliance Monitor',
        role: 'Compliance Specialist',
        description: 'Monitors and ensures regulatory compliance',
        coreSkills: ['Compliance Monitoring', 'Regulatory Updates', 'Risk Assessment', 'Documentation'],
        performanceMetrics: { complianceRate: '99.8%', riskReduction: '60%', auditReadiness: '100%' },
        integrationTime: '20-40 hours',
        monthlyRate: '$2,100',
        setupFee: '$4,200'
      }
    ],
    clerical: [
      {
        name: 'Email File Clerk',
        role: 'Email Management Specialist',
        description: 'Intelligent email processing with evolved autoresponse capabilities and personalized customer service',
        coreSkills: ['Email Processing', 'Smart Autoresponse', 'Ticket Creation', 'Personalized Communication'],
        performanceMetrics: { responseTime: '<5min', personalization: '95%', ticketAccuracy: '98%' },
        integrationTime: '2-4 hours',
        monthlyRate: '$600',
        setupFee: '$1,200'
      },
      {
        name: 'Document Processor',
        role: 'Document Management Agent',
        description: 'Automated document filing, organization, and retrieval system',
        coreSkills: ['Document Filing', 'File Organization', 'Document Retrieval', 'Metadata Management'],
        performanceMetrics: { filingSpeed: '10x', accuracy: '99.5%', retrievalTime: '<30s' },
        integrationTime: '4-8 hours',
        monthlyRate: '$500',
        setupFee: '$1,000'
      },
      {
        name: 'Form Specialist',
        role: 'Form Processing Agent',
        description: 'Intelligent form processing and data extraction specialist',
        coreSkills: ['Form Processing', 'Data Extraction', 'Validation', 'Workflow Routing'],
        performanceMetrics: { processingSpeed: '8x', accuracy: '97%', validationRate: '99%' },
        integrationTime: '6-12 hours',
        monthlyRate: '$700',
        setupFee: '$1,400'
      },
      {
        name: 'Calendar Coordinator',
        role: 'Scheduling Agent',
        description: 'Automated calendar management and meeting coordination',
        coreSkills: ['Calendar Management', 'Meeting Coordination', 'Scheduling Optimization', 'Conflict Resolution'],
        performanceMetrics: { schedulingEfficiency: '60%', conflictReduction: '85%', satisfaction: '92%' },
        integrationTime: '3-6 hours',
        monthlyRate: '$550',
        setupFee: '$1,100'
      },
      {
        name: 'Invoice Processor',
        role: 'Financial Document Agent',
        description: 'Automated invoice processing and financial document management',
        coreSkills: ['Invoice Processing', 'Financial Documents', 'Payment Tracking', 'Audit Trail'],
        performanceMetrics: { processingSpeed: '12x', accuracy: '99%', auditCompliance: '100%' },
        integrationTime: '8-16 hours',
        monthlyRate: '$800',
        setupFee: '$1,600'
      },
      {
        name: 'Records Manager',
        role: 'Records Management Agent',
        description: 'Comprehensive records management and archival system',
        coreSkills: ['Records Management', 'Archival Systems', 'Retention Policies', 'Compliance Tracking'],
        performanceMetrics: { organizationEfficiency: '70%', complianceRate: '99.9%', retrievalSpeed: '5x' },
        integrationTime: '10-20 hours',
        monthlyRate: '$900',
        setupFee: '$1,800'
      }
    ]
  };

  const categories = [
    { id: 'security', name: 'Security', color: 'green', count: botTemplates.security.length },
    { id: 'development', name: 'Development', color: 'purple', count: botTemplates.development.length },
    { id: 'analytics', name: 'Analytics', color: 'cyan', count: botTemplates.analytics.length },
    { id: 'customer', name: 'Customer', color: 'blue', count: botTemplates.customer.length },
    { id: 'operations', name: 'Operations', color: 'orange', count: botTemplates.operations.length },
    { id: 'clerical', name: 'Clerical', color: 'yellow', count: botTemplates.clerical.length }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  TinkerBot Agency - Bot Templates
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Admin Access</span>
              <Link href="/" className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors">
                Back to Site
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bot Template Library
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Complete inventory of specialized AI agents available for deployment
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="py-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === category.id
                      ? `bg-${category.color}-500 text-${category.color === 'green' ? 'black' : 'white'}`
                      : 'text-gray-300 hover:text-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bot Templates Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {botTemplates[activeCategory as keyof typeof botTemplates].map((bot, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${categories.find(c => c.id === activeCategory)?.color}-500 to-${categories.find(c => c.id === activeCategory)?.color === 'green' ? 'emerald' : categories.find(c => c.id === activeCategory)?.color === 'purple' ? 'pink' : categories.find(c => c.id === activeCategory)?.color === 'cyan' ? 'blue' : categories.find(c => c.id === activeCategory)?.color === 'blue' ? 'indigo' : 'yellow'}-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className={`w-8 h-8 text-${categories.find(c => c.id === activeCategory)?.color === 'green' ? 'black' : 'white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{bot.name}</h3>
                    <p className={`text-${categories.find(c => c.id === activeCategory)?.color}-400 font-medium`}>{bot.role}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {bot.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {bot.coreSkills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={`px-3 py-1 bg-${categories.find(c => c.id === activeCategory)?.color}-500/20 text-${categories.find(c => c.id === activeCategory)?.color}-400 rounded-full text-xs`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(bot.performanceMetrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-800/50 rounded-lg p-3">
                          <div className={`text-lg font-bold text-${categories.find(c => c.id === activeCategory)?.color}-400`}>{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-2xl p-4 border border-gray-600">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing & Integration</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Integration Time</span>
                        <span className={`text-${categories.find(c => c.id === activeCategory)?.color}-400 font-medium`}>{bot.integrationTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monthly Rate</span>
                        <span className={`text-${categories.find(c => c.id === activeCategory)?.color}-400 font-medium`}>{bot.monthlyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Setup Fee</span>
                        <span className={`text-${categories.find(c => c.id === activeCategory)?.color}-400 font-medium`}>{bot.setupFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="py-12 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Template Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="text-center group cursor-pointer">
                  <div className={`text-3xl font-bold text-${category.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {category.count}
                  </div>
                  <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                    {category.name} Agents
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">26+</div>
              <div className="text-gray-400 font-medium">Total Specialized Agents</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
