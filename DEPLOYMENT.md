# 🚀 TinkerBot Deployment Guide

## Quick Start

### Option 1: Vercel (Recommended)
1. **Fork/Clone** this repository
2. **Connect** to Vercel
3. **Set environment variables** in Vercel dashboard
4. **Deploy** automatically on push

### Option 2: Docker
```bash
# Build and run with Docker
npm run docker:build
npm run docker:run

# Or use Docker Compose
npm run docker:compose
```

### Option 3: Manual Deployment
```bash
# Install dependencies
npm ci

# Build application
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `env.example` to `.env.local` and configure:

```bash
# Required
NEXT_PUBLIC_APP_NAME=TinkerBot
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Optional
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret
OPENAI_API_KEY=your-key
```

## Domain Configuration

### Custom Domain Setup
1. **Update** `NEXT_PUBLIC_APP_URL` in environment variables
2. **Configure** DNS records to point to your hosting provider
3. **Set up** SSL certificate (usually automatic with Vercel/Netlify)

### API Endpoints
- **Main API:** `https://yourdomain.com/api/tinkerbot`
- **Health Check:** `https://yourdomain.com/api/health`
- **Analytics:** `https://yourdomain.com/api/tinkerbot/analytics`

## Production Checklist

- [ ] Environment variables configured
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Build successful (`npm run build`)
- [ ] Health check passing (`/api/health`)
- [ ] API endpoints responding
- [ ] Performance monitoring setup

## Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### API Issues
- Check environment variables
- Verify API routes are accessible
- Check server logs for errors

### Performance Issues
- Enable Next.js analytics
- Set up monitoring (Vercel Analytics, etc.)
- Optimize images and assets

## Support

For deployment issues:
1. Check the logs in your hosting provider
2. Verify environment variables
3. Test locally first (`npm run dev`)
4. Check API endpoints manually

## Security Notes

- Never commit `.env.local` files
- Use strong secrets for production
- Enable rate limiting
- Set up monitoring and alerts

