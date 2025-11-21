# Jahezmart Backend - NestJS

Modern backend for Jahezmart e-commerce platform built with NestJS, Prisma ORM, and MongoDB.

## 🚀 Features

- **NestJS Framework** - Progressive Node.js framework for building efficient and scalable server-side applications
- **Prisma ORM** - Next-generation ORM for TypeScript & Node.js
- **MongoDB** - NoSQL database
- **JWT Authentication** - Secure authentication with JSON Web Tokens
- **OAuth2 Support** - Social login with Google/Facebook
- **Role-based Access Control** - Admin and user roles
- **Input Validation** - Class-validator for DTO validation
- **TypeScript** - Full TypeScript support

## 📋 Prerequisites

- Node.js >= 18.x
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
cd jahezmart-backend-nestjs
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/jahezmart?retryWrites=true&w=majority"
JWT_SECRET="your-super-secret-jwt-key"
PORT=8000
FRONTEND_URL="http://localhost:3000"
```

4. **Set up Prisma**
```bash
npm run prisma:generate
npm run prisma:push
```

5. **Seed database (optional)**
```bash
npm run seed
```

## 🏃 Running the Application

### Development mode
```bash
npm run start:dev
```

### Production mode
```bash
npm run build
npm run start:prod
```

The server will start at `http://localhost:8000`

## 📁 Project Structure

```
src/
├── auth/                    # Authentication module
│   ├── dto/                 # Data Transfer Objects
│   ├── guards/              # JWT & Admin guards
│   ├── strategies/          # Passport strategies
│   ├── auth.controller.ts   # Auth endpoints
│   ├── auth.service.ts      # Auth business logic
│   └── auth.module.ts       # Auth module definition
├── products/                # Products module
│   ├── dto/                 # Product DTOs
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
├── users/                   # Users module
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── prisma/                  # Prisma database service
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── app.module.ts            # Root module
└── main.ts                  # Application entry point
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user/admin
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/oauth` - OAuth login (Google/Facebook)

### Products (Public)
- `GET /api/products` - List products with filters
- `GET /api/products/:id` - Get single product

### Products (Admin Only)
- `POST /api/products` - Create product
- `PATCH /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Users (Admin Only)
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get single user
- `DELETE /api/users/:id` - Delete user

## 🔒 Authentication

All protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 🗄️ Database Schema

See `prisma/schema.prisma` for complete database schema.

### Main Models:
- **User** - User accounts (admin/user roles)
- **Product** - Product catalog

## 📦 Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot-reload
- `npm run start:prod` - Start in production mode
- `npm run build` - Build the application
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:push` - Push Prisma schema to database
- `npm run seed` - Seed database with sample data

## 🔄 Migration from Express.js

This project has been fully migrated from Express.js to NestJS. Key improvements:

1. **Modular Architecture** - Better code organization with NestJS modules
2. **Dependency Injection** - Built-in DI container for better testability
3. **Decorators** - Clean, declarative code with TypeScript decorators
4. **Guards & Interceptors** - Powerful request/response handling
5. **Built-in Validation** - Automatic DTO validation with class-validator
6. **Swagger Support** - Easy API documentation (can be added)
7. **Better Testing** - Built-in testing utilities

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | MongoDB connection string | - |
| `JWT_SECRET` | Secret key for JWT signing | changeme_jwt_secret |
| `PORT` | Server port | 8000 |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:3000 |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Hacnine**

---

Built with ❤️ using NestJS
