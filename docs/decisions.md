# Technology Decisions

## Express

Chosen for its maturity, ecosystem, and middleware model.

Alternative considered: Fastify.

Reason rejected: Express was a better fit for the project timeline and familiarity while still supporting production-grade patterns.

## TypeScript

Chosen for type safety and maintainability.

Alternative considered: Plain JavaScript.

Reason rejected: TypeScript improves long-term reliability and tooling.

## Redis

Chosen for fast in-memory caching with TTL support.

Alternative considered: In-memory JavaScript cache.

Reason rejected: Redis works across processes and is production-ready.

## Pino

Chosen for structured, high-performance logging.

Alternative considered: Morgan.

Reason rejected: Pino provides structured JSON logs and lower overhead.

## Zod

Chosen for runtime request validation and inferred TypeScript types.

Alternative considered: Joi.

Reason rejected: Better TypeScript integration.

## Semaphore-Based Concurrency Limiter

Chosen to demonstrate controlled parallelism without external dependencies.

Alternative considered: Unlimited async concurrency.

Reason rejected: Can overwhelm downstream services under burst traffic.

## Docker

Chosen for environment consistency and portability.

Alternative considered: Local machine setup only.

Reason rejected: Docker simplifies onboarding and deployment.
