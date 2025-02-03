# 🚀 Node.js Express Application Template

A robust and scalable boilerplate for building modern web applications with Node.js, Express, and TypeScript.

## ✨ Features

- **TypeScript** - Strongly typed development for reliability.
- **Nodemon** - Automatic server reloads for an efficient workflow.
- **ESLint** - Enforces coding standards and best practices.
- **Jest** - Preconfigured testing suite for unit and integration tests.
- **Docker Support** - Prebuilt `Dockerfile` for containerized deployment.
- **Redis Client** - Integrated Redis support for caching and session storage.
- **EJS View Engine** - Server-side rendering with Embedded JavaScript Templates.
- **Custom Error Handling** - Centralized error management middleware.
- **Winston Logging** - Advanced logging for debugging and monitoring.
- **Rate Limiting** - Protect against abuse with `express-rate-limit`.
- **Joi Request Validation** - Ensures API request integrity.
- **Swagger API Documentation** - Preconfigured interactive API docs.
- **Response Compression** - Optimized API responses for better performance.
- **Security Middleware** - Helmet and CORS for improved security.

## ⚡ Installation

```bash
gh repo create YOUR_REPO_NAME --template=0xRadioAc7iv/express-template --private
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

### Using Docker

```bash
docker build -t express-app .
docker run -p 3000:3000 express-app
```

## 🧪 Running Tests

```bash
npm test
```

## 📜 API Documentation

Swagger API documentation is available at:

http://localhost:3000/docs

## Contributing

Contributions are welcome! If you'd like to contribute:

- Fork the repository.
- Create a feature branch: `git checkout -b feature-name`.
- Commit your changes: `git commit -m "Add feature-name"`.
- Push to the branch: `git push origin feature-name`.
- Submit a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
