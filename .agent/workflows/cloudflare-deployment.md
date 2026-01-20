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
## Correct Build Settings

To fix the current error, your **Build Configuration** in Cloudflare must match this exactly:

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | `Next.js` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `out` |
| **Deploy Command** | **(LEAVE COMPLETELY BLANK)** |

### Why it's failing:
The error `Authentication error [code: 10000]` or `Missing entry-point` happens because a manual **"Deploy Command"** (like `npx wrangler pages deploy`) is being triggered. 

Cloudflare Pages Git integration **automatically** deploys your site from the `out` directory as soon as `npm run build` finishes. You do not need (and should not use) a manual deploy command.

## Fix Steps in Cloudflare Dashboard:
1. Select your project in **Workers & Pages**.
2. Click **Settings** > **Build & deployments**.
3. Under **Configure Build Settings**, click **Edit**.
4. **DELETE** the text in the **Deploy command** field so it is totally empty.
5. Click **Save**.
6. Go back to your latest deployment and click **Retry deployment**.


## Automatic Deploys
Once connected, every push to the `main` branch will automatically trigger a new deployment.
