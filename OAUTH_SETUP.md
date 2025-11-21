# OAuth2 Setup Guide for Jahezmart

## Overview
This application now supports OAuth2 authentication with Google and Facebook, in addition to traditional email/password login.

## Prerequisites
- Google Cloud Console account
- Facebook Developers account

---

## 1. Google OAuth Setup

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API

### Step 2: Configure OAuth Consent Screen
1. Navigate to **APIs & Services > OAuth consent screen**
2. Choose **External** user type
3. Fill in required fields:
   - App name: `Jahezmart`
   - User support email: Your email
   - Developer contact: Your email
4. Add scopes: `email`, `profile`
5. Save and continue

### Step 3: Create OAuth Credentials
1. Navigate to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth client ID**
3. Choose **Web application**
4. Configure:
   - Name: `Jahezmart Web Client`
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
5. Click **Create**
6. Copy your **Client ID** and **Client Secret**

---

## 2. Facebook OAuth Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **My Apps > Create App**
3. Choose **Consumer** app type
4. Fill in app details:
   - App Name: `Jahezmart`
   - Contact Email: Your email

### Step 2: Add Facebook Login
1. In your app dashboard, click **Add Product**
2. Find **Facebook Login** and click **Set Up**
3. Choose **Web** platform
4. Enter Site URL: `http://localhost:3000`

### Step 3: Configure OAuth Settings
1. Go to **Facebook Login > Settings**
2. Add Valid OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook`
3. Save changes

### Step 4: Get Credentials
1. Go to **Settings > Basic**
2. Copy your **App ID** (Client ID)
3. Click **Show** to reveal and copy **App Secret** (Client Secret)

---

## 3. Environment Configuration

Create `.env.local` file in the frontend root:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-app-id-here
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret-here

# API Base URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

### Generate NEXTAUTH_SECRET
Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

---

## 4. Testing OAuth Login

### Local Development
1. Start backend: `cd jahezmart-backend && npm run dev`
2. Start frontend: `cd jahezmart-frontend && npm run dev`
3. Navigate to `http://localhost:3000/signin`
4. Click **Google** or **Facebook** button
5. Authorize the app
6. You'll be redirected to `/account` upon success

### Troubleshooting
- **Redirect URI mismatch**: Ensure the callback URLs match exactly in your OAuth provider settings
- **CORS errors**: Backend already has CORS enabled for localhost:3000
- **Session not persisting**: Check NEXTAUTH_SECRET is set correctly

---

## 5. Production Deployment

### Update OAuth Provider Settings
1. **Google**: Add production domain to authorized origins and redirect URIs
   - Origin: `https://yourdomain.com`
   - Redirect: `https://yourdomain.com/api/auth/callback/google`

2. **Facebook**: Add production domain to App Domains and Valid OAuth Redirect URIs
   - Domain: `yourdomain.com`
   - Redirect: `https://yourdomain.com/api/auth/callback/facebook`

### Update Environment Variables
```env
NEXTAUTH_URL=https://yourdomain.com
# Keep other variables, update if needed
```

---

## 6. Features

### What Works
✅ Sign in with Google  
✅ Sign in with Facebook  
✅ Traditional email/password login  
✅ User registration  
✅ Automatic account creation for OAuth users  
✅ JWT token generation and storage  
✅ Session persistence across page refreshes  
✅ Secure backend integration  

### Security Features
- JWT tokens with 7-day expiration
- CORS protection
- Secure password hashing for OAuth users
- Session management with NextAuth

---

## 7. How It Works

1. **User clicks OAuth button** → NextAuth initiates OAuth flow
2. **User authorizes** → Provider redirects back with auth code
3. **NextAuth exchanges code for tokens** → Gets user profile
4. **Backend creates/finds user** → `/api/auth/oauth` endpoint
5. **JWT token issued** → Stored in NextAuth session and localStorage
6. **User redirected to /account** → Authenticated session active

---

## Support
For issues or questions, check:
- [NextAuth Documentation](https://next-auth.js.org/)
- [Google OAuth Docs](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Docs](https://developers.facebook.com/docs/facebook-login/)
