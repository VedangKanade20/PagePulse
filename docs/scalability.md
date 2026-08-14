# Scalability Notes

## Current Design

- In-memory semaphore for concurrency limiting
- Redis for short-lived audit caching
- Stateless Express application
- External HTTP requests through a shared HTTP client

## Scaling to 10,000+ Audits per Day

### Horizontal Scaling

Run multiple application instances behind a load balancer.

### Shared Cache

Redis remains shared across all application instances.

### Rate Limiting

Move rate limiting from in-memory storage to a Redis-backed store for distributed enforcement.

### Concurrency

Replace the in-memory semaphore with a distributed queue or worker model (BullMQ, RabbitMQ, or a message broker).

### Observability

Export structured logs to a centralized logging system such as ELK, Datadog, or CloudWatch.

### Failure Modes

1. Redis unavailable
2. External website timeout
3. Burst traffic exhausting concurrency

Mitigations include graceful degradation, request timeouts, retries with backoff, and queue-based processing.
