import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Basic health checks
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: await checkDatabase(),
        api: 'operational',
      },
    };

    return NextResponse.json(healthStatus, { status: 200 });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
      },
      { status: 503 }
    );
  }
}

async function checkDatabase(): Promise<string> {
  try {
    // Simple database connectivity check
    if (!process.env.POSTGRES_URL) {
      return 'not_configured';
    }
    
    // In a real app, you'd do an actual DB ping here
    // For now, just check if the URL is set
    return 'configured';
  } catch (error) {
    console.error('Database check failed:', error);
    return 'error';
  }
}

