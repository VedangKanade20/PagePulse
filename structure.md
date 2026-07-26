Phase 1: Project setup and architecture
Phase 2: Core audit endpoint
Phase 3: Validation and error handling
Phase 4: HTTP client with timeout and retries
Phase 5: Redis cache
Phase 6: Concurrency limiter
Phase 7: Rate limiting and logging
Phase 8: Testing
Phase 9: Docker and CI/CD
Phase 10: Deployment, documentation, and finally Task B architecture

Dependencies
| Package | Why |
| ----------- | -------------------------------------------------------------------- |
| express | Server |
| dotenv | Environment variables |
| cors | Cross-Origin Support |
| helmet | Security Headers |
| compression | Gzip Responses |
| morgan | HTTP request logging (temporary, we'll later switch to Pino/Winston) |
| uuid | Request IDs |
| zod | Request validation |
| axios | HTTP client for URL audits |

============================================
Why app.ts and server.ts separately?

app.ts Contains
Express app

↓

Middlewares

↓

Routes

↓

Error Handler

It does not start the server.

server.ts

Import app

↓

Read PORT

↓

app.listen(PORT)

Why?

Because tests can import the Express app without opening a network port. That makes integration testing with Supertest much cleaner.

============================================

Folder responsibilities

controllers/-------------------------------------
Only talks to Express.
Knows about
req
res
next
Nothing else.

services/--------------------------
Business logic.
Example
auditUrl()
checkCache()
fetchWebsite()

clients/----------------------------------------
Anything external.
Later
axios
redis
database
queue

middlewares/----------------------------------
Request ID
Rate Limiter
Logger
Error Handler
Validation

validators/-----------------------------
Only Zod schemas.

config/-------------------------------------
Environment
Logger
Redis
Future configs.
