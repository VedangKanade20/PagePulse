# PagePulse

Production-oriented URL audit service built with **Node.js, Express, TypeScript, Redis, and Docker**.

PagePulse audits a URL and returns useful metadata such as response status, response time, final redirected URL, page title, HTTPS status, server headers, and caching information. The project was built with a strong focus on **production backend engineering practices** rather than just a demo implementation.

## Features

- URL validation with Zod
- Layered architecture (routes → controllers → services)
- HTTP client abstraction
- Redis caching with configurable TTL
- Rate limiting
- Concurrency limiting (semaphore-based)
- Structured logging with request IDs (Pino)
- Health endpoint with runtime diagnostics
- Docker support
- GitHub Actions CI
- Integration tests with Vitest and Supertest

## Tech Stack

- Node.js
- Express
- TypeScript
- Redis
- Zod
- Pino
- Vitest
- Supertest
- Docker
- GitHub Actions

## Project Structure

```text
src/
├── clients/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── utils/
├── validators/
├── types/
├── app.ts
└── server.ts
```

## API Contract

### POST /api/audit

Request

```json
{
  "url": "https://example.com"
}
```

Response

```json
{
  "success": true,
  "data": {
    "url": "https://example.com",
    "finalUrl": "https://example.com/",
    "status": 200,
    "responseTime": 124,
    "title": "Example Domain",
    "isHttps": true,
    "contentType": "text/html",
    "contentLength": "648",
    "server": "ECS",
    "checkedAt": "2026-08-06T10:15:30.000Z",
    "cached": false
  }
}
```

### GET /api/health

Returns service health, Redis connectivity, uptime, memory usage, environment, and timestamp.

## Running Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start Redis

```bash
docker compose up redis -d
```

### 3. Start the development server

```bash
npm run dev
```

## Docker

Run the complete stack:

```bash
docker compose up --build
```

## Testing

Run the integration test suite:

```bash
npm test
```

## CI

GitHub Actions automatically installs dependencies, runs tests, and builds the project on every push and pull request.

## Engineering Highlights

- Thin controllers and reusable service layer
- Centralized error handling
- Cache-first request flow
- Semaphore-based concurrency control
- Structured observability with request tracing
- Production-friendly middleware ordering

## AI Usage

AI tools (ChatGPT and GitHub Copilot) were used to accelerate implementation, explore production patterns, and review architectural decisions. The final structure, middleware ordering, caching flow, concurrency design, and documentation were manually refined and understood during development.
