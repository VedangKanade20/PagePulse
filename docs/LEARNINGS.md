# docs/LEARNINGS.md

## Purpose

This file captures the engineering concepts, design decisions, tradeoffs, and interview-level understanding gained while building the project.

It is **not documentation for users**.

It is documentation for **my future self**.

The goal is to make this project a reusable interview revision resource and a record of the engineering reasoning behind the implementation.

---

# What I Learned

## Architecture

### Problem

What architectural problem was solved?

### Solution

What architecture was implemented?

### Why This Approach

Why was this architecture chosen over simpler alternatives?

### Tradeoffs

What advantages and disadvantages does it have?

### Interview Answer

A concise explanation I could give in an interview.

### Real-world Application

Where this pattern is commonly used.

---

## Validation

- Why input validation exists
- Why the chosen validation library was used
- Request lifecycle
- Common mistakes
- Interview explanation

---

## Controllers and Services

- Why controllers should stay thin
- Why business logic belongs in services
- Separation of concerns
- Maintainability benefits
- Testing benefits

---

## Error Handling

- Centralized error handling
- Custom error classes
- Structured error responses
- Expected vs unexpected failures
- HTTP status code decisions

---

## Caching

- Why caching was introduced
- Cache-first request flow
- TTL strategy
- Cache invalidation considerations
- Performance impact
- Interview explanation

---

## Concurrency

- What problem concurrency limiting solves
- Semaphore concept
- Waiting vs rejecting requests
- Difference from rate limiting
- Production implications

---

## Rate Limiting

- Why APIs need rate limiting
- Window strategy
- Per-client limits
- Distributed rate limiting considerations

---

## Logging and Observability

- Why structured logging matters
- Request IDs
- Debugging distributed systems
- Production logging strategy

---

## Testing

- What was tested
- Integration vs unit tests
- Mocking strategy
- Why tests improve confidence
- CI integration

---

## Docker

- Why Docker was introduced
- Image vs container
- Docker Compose
- Local development vs production workflow

---

## CI/CD

- What GitHub Actions does
- Why CI matters
- What runs automatically
- Failure feedback loop

---

# Debugging Notes

Document important bugs encountered during development.

For each bug:

- Symptoms
- Root cause
- Fix
- Lesson learned

---

# Commands I Want to Remember

Useful project-specific commands, Docker commands, Redis commands, build commands, test commands, and deployment commands.

---

# Interview Revision

A short section containing the 10–20 most likely interview questions based on this project and concise answers.

This file should become a **personal engineering notebook** that I can revisit months later before interviews or when building similar systems again.
