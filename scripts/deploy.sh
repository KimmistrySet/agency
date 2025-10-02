#!/bin/bash

# TinkerBot Deployment Script
echo "🚀 Starting TinkerBot deployment..."

# Check if required environment variables are set
if [ -z "$NEXT_PUBLIC_APP_URL" ]; then
    echo "❌ Error: NEXT_PUBLIC_APP_URL environment variable is required"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checks..."
npm run type-check

# Run linting
echo "🧹 Running linter..."
npm run lint

# Run tests (if available)
if [ -f "package.json" ] && grep -q '"test"' package.json; then
    echo "🧪 Running tests..."
    npm test
fi

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 TinkerBot is ready for deployment at: $NEXT_PUBLIC_APP_URL"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!"

