# API Contract

## POST /api/audit

### Request

```json
{
  "url": "https://example.com"
}
```

### Success Response

Status: `200`

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

### Validation Error

Status: `400`

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid URL"
  }
}
```

### Rate Limited

Status: `429`

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests. Please try again later."
  }
}
```

## GET /api/health

Returns runtime diagnostics including service status, Redis connectivity, uptime, memory usage, Node version, environment, and timestamp.
