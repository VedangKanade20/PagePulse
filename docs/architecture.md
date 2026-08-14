# Architecture

## Request Flow

```text
Client
   │
   ▼
Express
   ▼
Request ID Middleware
   ▼
Pino Logger
   ▼
Rate Limiter
   ▼
Concurrency Limiter
   ▼
Zod Validation
   ▼
Controller
   ▼
Audit Service
   ▼
Cache Service
   ▼
Redis
   │
   ├── Cache Hit → Return Cached Response
   └── Cache Miss
           ▼
       HTTP Client (Axios)
           ▼
       External Website
           ▼
       Parse HTML (Cheerio)
           ▼
       Store in Redis
           ▼
       Return Response
```

## Layer Responsibilities

### Routes

Map HTTP endpoints to controllers.

### Controllers

Handle request/response and delegate business logic.

### Services

Contain application logic such as auditing, caching, and external HTTP calls.

### Middleware

Cross-cutting concerns including validation, logging, rate limiting, request tracing, and concurrency control.

### Config

Centralized configuration for Redis and logging.

## Error Handling

Application errors are represented using `AppError` and handled centrally through a global error middleware, ensuring consistent structured responses.
