---
description: How to deploy the nyooco portfolio to Cloudflare Pages
---

# Cloudflare Pages Deployment Guide

Follow these steps to deploy the portfolio to Cloudflare Pages.

## Prerequisites
- A Cloudflare account.
- The repository pushed to GitHub: `https://github.com/benyoo/nyooco.git`

## Deployment Steps

1. **Log in to Cloudflare Dashboard**: Go to [Cloudflare](https://dash.cloudflare.com/).
2. **Workers & Pages**: Navigate to `Workers & Pages` > `Create application` > `Pages` > `Connect to Git`.
3. **Select Repository**: Select `benyoo/nyooco`.
4. **Build Settings**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `out`
   - **Deploy Command**: **[IMPORTANT] Leave this field BLANK.**

> [!WARNING]
> Do NOT enter anything into the "Deploy Command" field. Cloudflare Pages automatically deploys the contents of the `out` directory after `npm run build` finishes. Entering `npx wrangler deploy` will cause a Worker-specific error.

5. **Environment Variables**:
   - Ensure `NODE_VERSION` is set to `20` or higher if required.
6. **Save and Deploy**: Click `Save and Deploy`.

## Automatic Deploys
Once connected, every push to the `main` branch will automatically trigger a new deployment.
