# Notification System Design

## Stage 1 - REST APIs

### Get Notifications
GET /notifications

### Create Notification
POST /notifications

### Mark Notification as Read
PATCH /notifications/:id/read

### Headers
Authorization: Bearer Token

### Real Time Updates
WebSocket can be used for live notification delivery.

---

## Stage 2 - Database Design

Recommended Database: PostgreSQL

### Tables

Users
- id
- name
- email

Notifications
- id
- userId
- title
- message
- priority
- isRead
- createdAt

---

## Stage 3 - Query Optimization

Use indexing for faster queries.

Composite Index:
(userId, isRead, createdAt)

This improves notification filtering speed.

---

## Stage 4 - Performance Improvements

- Redis caching
- Pagination
- Lazy loading
- WebSocket push notifications
- CDN support

---

## Stage 5 - Mass Notification Handling

Use:
- Queue system
- Kafka or RabbitMQ
- Retry mechanism
- Worker services

This improves scalability.

---

## Stage 6 - Priority Notification Algorithm

Priority Order:
1. Placement
2. Result
3. Event

Most recent notifications are shown first.

Priority Queue or Max Heap can be used for implementation.