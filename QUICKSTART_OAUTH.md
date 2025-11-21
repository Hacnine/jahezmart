# Quick Start Guide - OAuth2 Setup

## For Testing (Without Real OAuth Credentials)

If you want to test the app without setting up Google/Facebook OAuth:

1. **Use email/password login only**
   - The traditional login/register still works
   - Go to `/signin` and use email/password

2. **Generate NEXTAUTH_SECRET**
   ```bash
   cd jahezmart-frontend
   node generate-secret.js
   ```

3. **Create `.env.local` with minimal config**
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<paste-generated-secret-here>
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
   ```

4. **Start servers**
   ```bash
   # Terminal 1 - Backend
   cd jahezmart-backend
   npm run dev

   # Terminal 2 - Frontend
   cd jahezmart-frontend
   npm run dev
   ```

5. **Test**
   - Go to http://localhost:3000/signin
   - Use email/password to login
   - OAuth buttons will be visible but won't work without credentials

---

## For Full OAuth2 Testing

Follow the complete guide in `OAUTH_SETUP.md` to set up:
- Google OAuth credentials
- Facebook OAuth credentials
- Complete environment variables

Once configured, both email/password AND OAuth2 login will work.

---

## What's Included

✅ **NextAuth.js** - Industry standard OAuth2 implementation  
✅ **Google OAuth** - Sign in with Google  
✅ **Facebook OAuth** - Sign in with Facebook  
✅ **Session Management** - Persistent sessions  
✅ **Backend Integration** - JWT tokens for API authentication  
✅ **Automatic Account Creation** - Users created on first OAuth login  

---

## File Structure

```
jahezmart-frontend/
├── src/
│   ├── app/
│   │   └── api/
│   │       └── auth/
│   │           └── [...nextauth]/
│   │               └── route.js          # NextAuth configuration
│   ├── store/
│   │   └── Providers.jsx                 # SessionProvider wrapper
│   └── app/(auth)/(with_auth_layout)/
│       ├── signin/page.jsx               # Updated with OAuth buttons
│       └── signup/page.jsx               # Updated with OAuth buttons
├── .env.local.example                    # Environment template
└── generate-secret.js                    # Secret generator script

jahezmart-backend/
├── src/
│   ├── controllers/
│   │   └── authController.ts             # Added oauth() method
│   ├── services/
│   │   └── authService.ts                # Added oauthLogin() method
│   └── routes/
│       └── authRoutes.ts                 # Added /oauth endpoint
```

---

## API Endpoints

### New OAuth Endpoint
```
POST /api/auth/oauth
Body: {
  email: string,
  name: string,
  provider: "google" | "facebook",
  providerId: string
}
Response: {
  token: string,
  user: { id, email, name }
}
```

### Existing Endpoints (Still Work)
```
POST /api/auth/login      # Email/password login
POST /api/auth/register   # Email/password registration
```

---

## Troubleshooting

### OAuth buttons don't work
- Make sure you've set up credentials in Google/Facebook
- Check redirect URIs match exactly
- Verify environment variables are loaded

### "Invalid callback URL" error
- Update OAuth provider settings with correct callback URL
- Format: `http://localhost:3000/api/auth/callback/{provider}`

### Session not persisting
- Generate and set NEXTAUTH_SECRET
- Clear browser cache/cookies
- Restart frontend server

---

## Next Steps

1. ✅ OAuth2 is set up (you are here)
2. 📝 Set up OAuth credentials in Google/Facebook consoles
3. 🔑 Generate and configure environment variables
4. 🧪 Test OAuth login flow
5. 🚀 Deploy to production

For detailed setup instructions, see `OAUTH_SETUP.md`
