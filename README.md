A Route Guard is a mechanism used to control navigation between routes. It decides whether a user can access, leave, or load a route based on specific conditions such as authentication or authorization.

# Angular Routing & Auth Guard

A simple Angular application demonstrating Routing, Navigation, Authentication, and Route Protection using Functional Guards.

## Features

- Login Page
- Dashboard Page
- Route Navigation
- Authentication Service
- Functional Auth Guard (`CanActivateFn`)
- Protected Dashboard Route
- Login & Logout Functionality

## Project Structure

```text
src/
│
├── core/
│   ├── services/
│   │   └── auth-service.ts
│   └── guards/
│       └── auth-guard.ts
│
├── pages/
│   ├── login/
│   └── dashboard/
│
└── app.routes.ts
```

## Authentication Flow

```text
User Login
    ↓
AuthService.login()
    ↓
isLoggedIn = true
    ↓
Navigate to Dashboard
    ↓
Auth Guard Checks User
    ↓
Access Granted
```

## Concepts Covered

- Angular Routing
- Router Outlet
- Route Navigation
- Route Redirection
- Dependency Injection
- Authentication Service
- Functional Route Guards
- Route Protection with `CanActivate`

## Key Learnings

### Routing

Used Angular Router to navigate between Login and Dashboard pages without reloading the application.

### Authentication Service

Managed login state using a shared service.

### Auth Guard

Protected the Dashboard route and redirected unauthenticated users to the Login page.

### Dependency Injection

Used Angular's modern `inject()` API to access services and router instances.

## Outcome

Built a basic authentication flow where users can log in, access protected routes, and log out while understanding how Angular Routing and Guards work together.