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

To fix the current error, your **Build Configuration** in Cloudflare must match this exactly. 

> [!IMPORTANT]
> **Are you in the right place?**
> If you see a field called **"Deploy command"**, you are likely in the **Workers** dashboard.
> 1. Go to **Workers & Pages**.
> 2. Ensure you select the **Pages** tab at the top.
> 3. Click **Create a project** > **Connect to Git**.

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | `None` |
| **Build Command** | `npm run build` |
| **Build Output Directory** | `out` |
| **Deploy Command** | `npx wrangler pages deploy` (Only if required) |

### Why it was failing:
The error `Missing entry-point` or `Must specify a directory` occurs because the system doesn't know where your built files are located during the deploy step. 

I have added a [wrangler.jsonc](file:///home/benyoo/Dev/nyooco/wrangler.jsonc) to your project that fixes this by explicitly pointing to the `out` directory.

## Fix Steps in Cloudflare Dashboard:
1. Select your project in **Workers & Pages** > **Pages** tab.
2. Click **Settings** > **Build & deployments**.
3. Under **Configure Build Settings**, click **Edit**.
4. Set **Framework preset** to `None`.
5. Set **Build command** to `npm run build`.
6. Set **Build output directory** to `out`.
7. Set **Deploy command** to `npx wrangler pages deploy` (if the field is required).
8. **SAVE**.
9. Go back to your latest deployment and click **Retry deployment**.


## Automatic Deploys
Once connected, every push to the `main` branch will automatically trigger a new deployment.
