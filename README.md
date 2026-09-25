# NestJS Users CRUD API

A RESTful API for managing users, built with NestJS as part of a 1-week sprint to learn the framework's core architecture: modules, controllers, services, DTOs, and pipes.

## Overview

This project implements full CRUD operations for a `Users` resource. Data is currently stored in-memory; database integration (PostgreSQL/TypeORM or Prisma) is the next milestone.

## Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Validation:** class-validator (via NestJS `ValidationPipe`)
- **Testing:** Jest (unit test scaffolding included)
- **Database:** In-memory array (persistent DB integration planned)

## Features

- Create, read, update, and delete users
- Filter users by role via query param
- Input validation on create/update via DTOs
- Typed route params with `ParseIntPipe`
- Basic error handling (`NotFoundException` for missing users)

## Project Structure

```
src/
└── users/
    ├── dto/
    │   ├── createUser.dto.ts
    │   └── updateUser.dto.ts
    ├── users.controller.ts
    ├── users.controller.spec.ts
    ├── users.service.ts
    ├── users.service.spec.ts
    └── users.module.ts
```

## Getting Started

```bash
git clone <repo-url>
cd <project-name>
npm install
npm run start:dev
```

Requires Node.js v18+.

## API Endpoints

| Method | Endpoint      | Description                              |
|--------|---------------|-------------------------------------------|
| GET    | /users        | Get all users (optional `?role=` filter)  |
| GET    | /users/:id    | Get a single user by ID                   |
| POST   | /users        | Create a new user                         |
| PATCH  | /users/:id    | Update an existing user                   |
| DELETE | /users/:id    | Delete a user                             |

## What's Next

- [ ] Connect PostgreSQL via TypeORM/Prisma
- [ ] Replace in-memory store with real persistence
- [ ] Add authentication/authorization
- [ ] Expand test coverage beyond scaffolding
- [ ] Fix delete route decorator (`@Get` → `@Delete`)

## What I Learned

Built in a week while working with JavaScript daily but new to NestJS. Picked up module/controller/service separation, dependency injection, DTO-based validation with pipes, and route param typing. The architecture forces discipline that's easy to skip in plain Express — that structure is the main thing that clicked.

## Contact

[GitHub](https://github.com/EmmanuelAjobo) · [LinkedIn](https://linkedin.com/in/emmanuel-ajobo)
