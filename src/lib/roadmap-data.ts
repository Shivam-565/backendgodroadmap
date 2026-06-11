export interface Task {
  id: string;
  title: string;
  bullets: string[];
}

export interface Topic {
  id: string;
  title: string;
  tasks: Task[];
  miniProject?: string;
}

export interface Phase {
  id: string;
  title: string;
  goal: string;
  time: string;
  topics: Topic[];
}

export const roadmapData: Phase[] = [
  {
    "id": "1",
    "title": "Foundations",
    "goal": "Understand how the internet and servers actually work before writing code.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "1.1",
        "title": "Internet Basics [T]",
        "tasks": [
          {
            "id": "1-1-1",
            "title": "How does the internet work?",
            "bullets": [
              "What is a packet and how data travels in chunks across networks",
              "What is an IP address and how every device on a network is identified",
              "TCP vs UDP — TCP guarantees delivery, UDP is faster but lossy",
              "What is a port number and why it matters (80=HTTP, 443=HTTPS, 3000=dev)",
              "What is a client and what is a server — the fundamental request/response model"
            ]
          },
          {
            "id": "1-1-2",
            "title": "HTTP vs HTTPS — Request/Response cycle",
            "bullets": [
              "HTTP methods — GET (read), POST (create), PUT (replace), PATCH (update), DELETE (remove) and when to use each",
              "What is a request header and a response header — metadata about the message",
              "What is a status code — 200 (ok), 201 (created), 400 (bad request), 401 (unauthenticated), 403 (unauthorized), 404 (not found), 500 (server error)",
              "What is HTTPS and why HTTP alone sends data in plain text",
              "What is SSL/TLS at a high level — handshake, encryption in transit",
              "What is a request body and when it is used — POST/PUT/PATCH carry data here"
            ]
          },
          {
            "id": "1-1-3",
            "title": "How browsers work",
            "bullets": [
              "What happens step by step when you type a URL and hit Enter",
              "What is rendering — how HTML/CSS/JS becomes a visual page",
              "What are browser dev tools and how to use the Network tab to inspect requests",
              "What is a cookie — small data stored by the server on the client",
              "What is local storage — client-side key-value storage, no server involvement"
            ]
          },
          {
            "id": "1-1-4",
            "title": "DNS",
            "bullets": [
              "What is a domain name and who owns it — registrars, ICANN",
              "What is a DNS resolver and what it does — translates names to IPs",
              "What is an A record (domain → IP), CNAME (alias), MX record (email)",
              "What is TTL — how long a DNS result is cached before re-queried",
              "How DNS resolution flows — browser cache → OS cache → resolver → root server"
            ]
          },
          {
            "id": "1-1-5",
            "title": "Hosting basics",
            "bullets": [
              "What is a VPS — a virtual machine you control fully",
              "Shared hosting vs cloud hosting — trade-offs of control vs convenience",
              "What is a server process — your app runs as a process on a machine",
              "What is a region and why geographic proximity reduces latency",
              "IP address vs domain name in hosting — the domain points to the IP"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 1.1:\n   Draw (on paper or Excalidraw) the full journey of a request from browser\n   to server and back. Label every step — DNS lookup, TCP connection, HTTP\n   request, server processing, HTTP response, browser rendering.\n   Write one paragraph explaining it in plain English as if teaching someone."
      },
      {
        "id": "1.2",
        "title": "Terminal & Git [TP]",
        "tasks": [
          {
            "id": "1-2-1",
            "title": "Basic Linux/terminal commands",
            "bullets": [
              "Navigating — pwd (where am I), ls (list files), cd (change dir), cd ..",
              "Files — touch (create), mkdir (folder), rm (delete), rm -rf (delete folder), cp (copy), mv (move/rename)",
              "Reading files — cat (print all), less (scroll), head (first lines), tail (last lines), tail -f (follow live)",
              "Permissions — chmod basics, what 755 (owner rwx, others rx) and 644 (owner rw, others r) mean",
              "Processes — ps (list processes), kill (terminate), what a running process is"
            ]
          },
          {
            "id": "1-2-2",
            "title": "Git fundamentals",
            "bullets": [
              "What is version control and why it exists — history, collaboration, safety",
              "git init, git status, git add, git commit — the basic save loop",
              "What is a commit hash — a unique fingerprint for every snapshot",
              "git log — reading the history of a project",
              "git diff — seeing exactly what changed between states",
              ".gitignore — what to exclude: node_modules, .env, build artifacts"
            ]
          },
          {
            "id": "1-2-3",
            "title": "GitHub workflow",
            "bullets": [
              "git push, git pull, git clone — syncing with a remote",
              "What is a branch — an isolated line of work, never work directly on main",
              "git checkout -b (create branch), git merge, git rebase — integrating work",
              "What is a pull request — a request to merge, the unit of code review",
              "Resolving a merge conflict step by step — edit, stage, commit"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 1.2:\n   Create a GitHub repo. Write a plain text file documenting your Phase 1.1\n   notes. Commit it with a proper message. Create a branch, edit the file,\n   push the branch, open a pull request, and merge it into main yourself.\n   Deliberately create a merge conflict and resolve it."
      }
    ]
  },
  {
    "id": "2",
    "title": "Node.js Core",
    "goal": "Be genuinely comfortable with JS and the runtime before touching frameworks.",
    "time": "4–6 weeks",
    "topics": [
      {
        "id": "2.1",
        "title": "JavaScript (beyond basics) [TP]",
        "tasks": [
          {
            "id": "2-1-1",
            "title": "ES6+ syntax",
            "bullets": [
              "let and const vs var — block scope vs function scope, why var is avoided",
              "Arrow functions — shorter syntax, lexical `this` binding",
              "Destructuring — extracting values from objects and arrays cleanly",
              "Spread and rest operators — spreading arrays/objects, collecting arguments",
              "Template literals — string interpolation with backticks and ${}",
              "Optional chaining (?.) — safely access nested properties without crashing",
              "Nullish coalescing (??) — default value only when null or undefined",
              "Short-circuit evaluation — && and || as conditional expressions"
            ]
          },
          {
            "id": "2-1-2",
            "title": "Async JavaScript",
            "bullets": [
              "What is the call stack — JS executes one thing at a time, in order",
              "What is a callback — a function passed to another to call when done",
              "Callback hell — nested callbacks, why they become unreadable",
              "What is a Promise — an object representing a future value",
              "Promise states — pending, fulfilled, rejected",
              ".then(), .catch(), .finally() — chaining promise handlers",
              "async/await — syntactic sugar over promises, reads synchronously",
              "Promise.all — run multiple promises in parallel, wait for all",
              "Promise.allSettled — run all, get all results regardless of failure",
              "Promise.race — resolve as soon as the first one settles",
              "Handling errors in async functions — try/catch around await"
            ]
          },
          {
            "id": "2-1-3",
            "title": "Modules",
            "bullets": [
              "What is a module — a file with its own scope, exports an interface",
              "CommonJS — module.exports and require(), the Node.js default",
              "ES Modules — export, export default, import — the modern standard",
              "When you see each — CommonJS in older Node, ESM in modern code",
              "Circular dependency — A imports B imports A, leads to undefined exports"
            ]
          },
          {
            "id": "2-1-4",
            "title": "Error handling",
            "bullets": [
              "try / catch / finally — catching runtime errors gracefully",
              "The Error object — message (human text), stack (where it happened), name",
              "Creating custom error classes — extend Error, add statusCode, isOperational",
              "Throwing errors intentionally — fail fast, fail loudly",
              "Unhandled promise rejections — crash Node apps, always catch async errors"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 2.1:\n   Build a CLI tool in plain Node.js (no frameworks). It reads a .txt file,\n   counts word frequency, and prints the top 10 words. Use async/await for\n   file reading, a custom error class if the file is missing, and split code\n   across at least 2 modules. One module handles file reading, one handles\n   counting logic."
      },
      {
        "id": "2.2",
        "title": "Node.js Runtime [TP]",
        "tasks": [
          {
            "id": "2-2-1",
            "title": "How Node.js works",
            "bullets": [
              "What is the V8 engine — compiles JS to machine code",
              "What is the event loop — the mechanism that handles async operations",
              "Event loop phases — timers, I/O callbacks, poll, check, close callbacks",
              "What is non-blocking I/O — Node delegates I/O to the OS, stays free",
              "What is libuv — the C library that handles async I/O under the hood",
              "Blocking the event loop — running heavy CPU work stops all requests"
            ]
          },
          {
            "id": "2-2-2",
            "title": "Built-in modules",
            "bullets": [
              "fs — readFile, writeFile, appendFile, sync vs async versions",
              "path — join (build paths), resolve (absolute path), dirname, extname",
              "http — creating a raw HTTP server, understanding what Express wraps",
              "os — cpus, platform, totalmem — useful for health checks and diagnostics",
              "events — EventEmitter, on() (listen), emit() (fire) — the pattern Node is built on internally"
            ]
          },
          {
            "id": "2-2-3",
            "title": "npm",
            "bullets": [
              "What npm is and what the registry is — the world's largest package repo",
              "npm init, package.json — name, version, scripts, dependencies",
              "dependencies vs devDependencies — shipped vs dev-only tools",
              "package-lock.json — exact version tree, always commit this",
              "npm scripts — start, dev, test, and writing custom commands",
              "Semantic versioning — 1.2.3 (exact), ^1.2.3 (minor updates ok), ~1.2.3 (patch updates only)"
            ]
          },
          {
            "id": "2-2-4",
            "title": "Environment variables",
            "bullets": [
              "What an environment variable is — config that lives outside your code",
              "The dotenv package — loads a .env file into process.env at startup",
              "What goes in .env — DB URLs, API keys, ports, secrets",
              "Why .env must never be committed — add to .gitignore immediately",
              "process.env.VARIABLE_NAME — how to access vars in code"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 2.2:\n   Build a raw HTTP server using only Node's built-in `http` module, no\n   Express. Handle GET /hello (return JSON greeting), GET /file (read and\n   return a .txt file asynchronously), POST /echo (return the request body),\n   and any other route returns 404. Port loaded from .env via dotenv.\n   No npm packages except dotenv."
      }
    ]
  },
  {
    "id": "3",
    "title": "Software Design & Architecture Landscape",
    "goal": "Understand the architectural options before writing a single route.",
    "time": "2–3 weeks",
    "topics": [
      {
        "id": "3.1",
        "title": "Architectural Patterns [T]",
        "tasks": [
          {
            "id": "3-1-1",
            "title": "Monolithic Architecture",
            "bullets": [
              "What it is — entire app in one deployable unit, one codebase",
              "Pros — simple to develop, deploy, debug, test at early stage",
              "Cons — hard to scale individual parts, grows complex over time",
              "When to use — always start here, premature splitting is a trap",
              "Real example — one Node.js app handling auth, payments, AI, everything"
            ]
          },
          {
            "id": "3-1-2",
            "title": "Microservices Architecture",
            "bullets": [
              "What it is — app split into small independent services per domain",
              "Pros — independent scaling, independent deploys, team autonomy",
              "Cons — massive operational complexity, network failures, distributed transactions, debugging hell",
              "When to use — only after a monolith is straining under real traffic",
              "The trap — most startups that start with microservices regret it"
            ]
          },
          {
            "id": "3-1-3",
            "title": "Serverless Architecture",
            "bullets": [
              "What it is — functions deployed individually, no server management",
              "Pros — auto-scaling, pay per execution, zero server maintenance",
              "Cons — cold starts, vendor lock-in, poor for long-running tasks, hard to debug locally",
              "When to use — background tasks, webhooks, low-traffic utilities",
              "Real example — AWS Lambda for image processing, Vercel for APIs"
            ]
          },
          {
            "id": "3-1-4",
            "title": "Event-Driven Architecture",
            "bullets": [
              "What it is — services communicate by emitting and consuming events",
              "Pros — decoupled services, natural audit trail, async by default",
              "Cons — harder to trace flows, eventual consistency, more moving parts",
              "When to use — when actions in one domain should trigger work in another without tight coupling (payment succeeded → send email, update quota)"
            ]
          },
          {
            "id": "3-1-5",
            "title": "SOA — Service Oriented Architecture",
            "bullets": [
              "What it is — predecessor to microservices, large services communicate over standardised protocols (usually SOAP/XML)",
              "Why microservices replaced it — SOA services were still too large and coupled, protocols were heavy",
              "Why you still need to know it — enterprise and legacy fintech systems still run SOA, you will encounter it"
            ]
          },
          {
            "id": "3-1-6",
            "title": "Service Mesh",
            "bullets": [
              "What it is — infrastructure layer that handles service-to-service communication, observability, and security automatically",
              "Examples — Istio, Linkerd",
              "When it matters — only at serious microservices scale (10+ services)",
              "For now — understand it exists, come back when you need it"
            ]
          },
          {
            "id": "3-1-7",
            "title": "Twelve-Factor App",
            "bullets": [
              "What it is — 12 principles for building portable, scalable SaaS apps",
              "The 12 factors — codebase, dependencies, config, backing services, build/release/run, processes, port binding, concurrency, disposability, dev/prod parity, logs, admin processes",
              "Why it matters — violating these creates production pain at scale"
            ]
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Software Design Patterns [TP]",
        "tasks": [
          {
            "id": "3-2-1",
            "title": "GOF Design Patterns (Gang of Four)",
            "bullets": [
              "What design patterns are — reusable solutions to common problems",
              "Creational patterns",
              "Factory — create objects without specifying exact class",
              "Singleton — one instance of a class globally (e.g. DB connection)",
              "Structural patterns",
              "Repository — abstraction layer between business logic and data layer",
              "Adapter — wrap incompatible interfaces to work together",
              "Behavioral patterns",
              "Observer — one object notifies many when state changes (EventEmitter)",
              "Strategy — swap algorithms/behaviors at runtime",
              "Middleware pattern — chain of handlers, each can pass to next (Express)"
            ]
          },
          {
            "id": "3-2-2",
            "title": "CQRS — Command Query Responsibility Segregation",
            "bullets": [
              "What it is — separate the model for reading data from writing data",
              "Commands — change state, return nothing or confirmation",
              "Queries — return data, never change state",
              "Why it matters — read and write workloads scale differently",
              "When to use — complex domains, high read/write ratio differences",
              "Implementation — separate route handlers, services, even DB models for reads vs writes"
            ]
          },
          {
            "id": "3-2-3",
            "title": "Event Sourcing",
            "bullets": [
              "What it is — store every state change as an immutable event, not the current state",
              "Instead of storing \"balance = 500\", store \"deposited 200\", \"withdrew 100\"",
              "Pros — complete audit trail, replay history, debug any past state",
              "Cons — complexity, eventual consistency, harder to query current state",
              "Why it matters for fintech — financial systems need complete audit trails, event sourcing gives you this naturally",
              "Relationship with CQRS — they are often used together"
            ]
          },
          {
            "id": "3-2-4",
            "title": "Domain Driven Design (DDD) — basics",
            "bullets": [
              "What it is — structure code around the business domain, not technical layers",
              "Ubiquitous language — use the same words in code as business uses",
              "Bounded contexts — clear boundaries between domains (billing domain, auth domain, AI domain)",
              "Entities vs Value Objects — entities have identity, value objects do not",
              "Why it matters — prevents the \"big ball of mud\" as your app grows"
            ]
          },
          {
            "id": "3-2-5",
            "title": "Test Driven Development (TDD)",
            "bullets": [
              "What it is — write the test before writing the code",
              "Red/Green/Refactor cycle — write failing test, make it pass, clean up",
              "Pros — forces clear requirements, catches regressions, drives better design",
              "Cons — slower initially, requires discipline, not suited for all tasks",
              "When to apply — critical business logic, payment flows, auth systems"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 3:\n   Write a design document (plain text) for your SaaS product's backend.\n   Decide: monolith or not, and why. Identify 3 bounded contexts in your\n   product. List 3 places where the Observer pattern or EventEmitter would\n   be natural. Identify one flow that would benefit from Event Sourcing.\n   This document will guide every phase that follows."
      }
    ]
  },
  {
    "id": "4",
    "title": "Building APIs",
    "goal": "Build clean production-grade APIs and understand every API paradigm.",
    "time": "6–8 weeks",
    "topics": [
      {
        "id": "4.1",
        "title": "Express.js [TP]",
        "tasks": [
          {
            "id": "4-1-1",
            "title": "Setting up an Express server",
            "bullets": [
              "Installing Express, creating app.js, app.listen()",
              "What app.use() does — registers middleware for all routes",
              "express.json() — parses JSON request bodies automatically",
              "express.urlencoded() — parses form data",
              "What req, res, next are — request, response, next middleware function"
            ]
          },
          {
            "id": "4-1-2",
            "title": "Routing",
            "bullets": [
              "Defining routes — app.get(), app.post(), app.put(), app.delete()",
              "Route parameters — /users/:id accessed via req.params.id",
              "Query strings — /search?q=term accessed via req.query.q",
              "express.Router() — splitting routes into separate files by resource",
              "Grouping routes — /api/v1/users, /api/v1/payments, /api/v1/ai"
            ]
          },
          {
            "id": "4-1-3",
            "title": "Middleware",
            "bullets": [
              "What middleware is — a function that runs between request and response",
              "Writing a custom logger middleware — log method, path, status, duration",
              "Writing an auth middleware — verify JWT before the route handler runs",
              "Third-party middleware — morgan (logging), helmet (security headers), cors (cross-origin), compression (gzip responses)",
              "Order matters — middleware runs top to bottom, wrong order = bugs"
            ]
          },
          {
            "id": "4-1-4",
            "title": "Request validation",
            "bullets": [
              "Why input validation is non-negotiable — never trust user input",
              "Zod — define a schema, parse req.body, get typed and validated data",
              "Returning a structured 400 error when validation fails",
              "Validating route params and query strings with the same approach"
            ]
          },
          {
            "id": "4-1-5",
            "title": "Error handling middleware",
            "bullets": [
              "The special 4-argument signature — (err, req, res, next)",
              "Centralising all error responses in one place in the app",
              "AppError class — extends Error, adds statusCode and isOperational flag",
              "Operational errors (expected) vs programmer errors (bugs)",
              "Global uncaught exception and unhandled rejection handlers"
            ]
          },
          {
            "id": "4-1-6",
            "title": "Project structure",
            "bullets": [
              "routes/ — only route definitions, no logic",
              "controllers/ — handle req/res, call services, return response",
              "services/ — all business logic, no req/res objects here",
              "models/ — data access layer, DB queries",
              "middleware/ — reusable middleware functions",
              "Why this separation makes large projects maintainable"
            ]
          },
          {
            "id": "4-1-7",
            "title": "REST API Design",
            "bullets": [
              "Statelessness — every request carries all info needed, no server sessions",
              "Resource naming — /users not /getUsers, plural nouns, no verbs in paths",
              "Correct HTTP verb usage for each operation",
              "Consistent JSON envelope — { success: true, data: {}, error: null }",
              "API versioning — /api/v1/ prefix, never break existing clients"
            ]
          },
          {
            "id": "4-1-8",
            "title": "OpenAPI / Swagger",
            "bullets": [
              "What OpenAPI is — a machine-readable standard for describing REST APIs",
              "swagger-jsdoc — generate spec from JSDoc comments in your route files",
              "swagger-ui-express — serve interactive docs at /api-docs",
              "Why documentation from day one saves weeks of pain later"
            ]
          }
        ]
      },
      {
        "id": "4.2",
        "title": "REST API — Paid Endpoints [TP]",
        "tasks": [
          {
            "id": "4-2-1",
            "title": "API key generation and management",
            "bullets": [
              "crypto.randomBytes(32).toString('hex') — generating a secure random key",
              "Hashing the key with SHA-256 before storing — never store plaintext keys",
              "Send the raw key to the user exactly once — they must save it",
              "Middleware that reads Authorization header, hashes input, looks up in DB"
            ]
          },
          {
            "id": "4-2-2",
            "title": "Rate limiting per API key",
            "bullets": [
              "What rate limiting is — preventing abuse and ensuring fair usage",
              "express-rate-limit — windowMs (time window) and max (request limit)",
              "Keying limits per API key, not per IP — IP is not a reliable identifier",
              "Returning 429 Too Many Requests with Retry-After header"
            ]
          },
          {
            "id": "4-2-3",
            "title": "Usage tracking",
            "bullets": [
              "Incrementing a usage counter per API key on every successful request",
              "Storing call count, timestamps, and endpoint in DB",
              "Returning X-RateLimit-Remaining and X-RateLimit-Reset in response headers",
              "Blocking requests when quota is fully exceeded, returning clear error"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.1 + 4.2:\n   Build a fully structured REST API for a \"Tasks\" resource. Full CRUD.\n   Zod validation on all inputs. Centralised error handler. Proper HTTP\n   status codes. API key auth — generate a key, hash and store it, require\n   it on all routes. Rate limit to 20 requests per minute per key. Track\n   usage. Swagger docs. Data in-memory for now."
      },
      {
        "id": "4.3",
        "title": "GraphQL [TP]",
        "tasks": [
          {
            "id": "4-3-1",
            "title": "What GraphQL is",
            "bullets": [
              "A query language for APIs — clients request exactly the data they need",
              "Single endpoint (/graphql) vs multiple REST endpoints",
              "Schema-first — you define types and operations before implementing",
              "Strongly typed — every field has an explicit type"
            ]
          },
          {
            "id": "4-3-2",
            "title": "Core concepts",
            "bullets": [
              "Schema — defines types, queries, mutations, subscriptions",
              "Types — scalar (String, Int, Boolean, ID), object types, input types",
              "Queries — read operations, client specifies exact fields needed",
              "Mutations — write operations (create, update, delete)",
              "Subscriptions — real-time updates over WebSocket",
              "Resolvers — functions that return data for each field in the schema"
            ]
          },
          {
            "id": "4-3-3",
            "title": "Implementation with Apollo Server",
            "bullets": [
              "Setting up Apollo Server with Express",
              "Defining a schema with type definitions",
              "Writing resolvers — query resolvers, mutation resolvers",
              "Context — passing auth info to all resolvers",
              "Error handling in GraphQL — ApolloError, error codes"
            ]
          },
          {
            "id": "4-3-4",
            "title": "Advanced GraphQL",
            "bullets": [
              "N+1 problem in GraphQL — fetching nested data inefficiently",
              "DataLoader — batching and caching DB calls to solve N+1",
              "Fragments — reusable field selections on the client",
              "Directives — @deprecated, @skip, @include",
              "Persisted queries — caching named queries for performance"
            ]
          },
          {
            "id": "4-3-5",
            "title": "Pros and cons vs REST",
            "bullets": [
              "Pros — no over-fetching, no under-fetching, self-documenting schema, strong typing, single endpoint, great for complex data graphs",
              "Cons — caching is harder (no HTTP cache by default), complex queries can be expensive, overkill for simple CRUD, learning curve",
              "When to use — when your frontend needs flexible data fetching, when you have a complex domain with many related entities",
              "When NOT to use — simple CRUD APIs, file uploads as primary feature, when HTTP caching is critical"
            ]
          },
          {
            "id": "4-3-6",
            "title": "HATEOAS",
            "bullets": [
              "What it is — Hypermedia As The Engine Of Application State",
              "REST responses include links to related actions and resources",
              "Example — a GET /orders/123 response includes links to cancel, update, get items — client discovers available actions from the response",
              "Why most APIs don't implement it fully — added complexity, most clients don't use the links anyway",
              "Know it exists, understand the concept, don't stress the implementation"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.3:\n   Build a GraphQL API for a Blog — Posts, Comments, Users with relations.\n   Implement queries (get post, list posts, get user's posts), mutations\n   (create post, add comment, delete post), and one subscription (new\n   comment on a post). Solve the N+1 problem with DataLoader. Add auth\n   context — only post authors can delete their posts."
      },
      {
        "id": "4.4",
        "title": "gRPC [TP]",
        "tasks": [
          {
            "id": "4-4-1",
            "title": "What gRPC is",
            "bullets": [
              "Remote Procedure Call framework built by Google",
              "Uses Protocol Buffers (protobuf) as the interface definition language",
              "Calls remote functions as if they were local functions",
              "Runs over HTTP/2 — multiplexing, header compression, bidirectional streaming"
            ]
          },
          {
            "id": "4-4-2",
            "title": "Protocol Buffers",
            "bullets": [
              "What .proto files are — define message types and service methods",
              "Scalar types — string, int32, int64, bool, bytes, float",
              "Message definitions — structured data types",
              "Service definitions — the RPC methods your server exposes",
              "Generating code — protoc compiles .proto to Node.js client and server code"
            ]
          },
          {
            "id": "4-4-3",
            "title": "Implementation with @grpc/grpc-js",
            "bullets": [
              "Writing a .proto file for a service",
              "Implementing the server — loading proto, adding service handlers",
              "Implementing the client — creating a stub, calling remote methods",
              "Unary RPC — one request, one response (most common)",
              "Server streaming — one request, stream of responses",
              "Client streaming — stream of requests, one response",
              "Bidirectional streaming — both sides stream simultaneously"
            ]
          },
          {
            "id": "4-4-4",
            "title": "Error handling in gRPC",
            "bullets": [
              "gRPC status codes — OK, CANCELLED, INVALID_ARGUMENT, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, UNAVAILABLE",
              "Metadata — sending auth tokens and request context",
              "Interceptors — middleware equivalent for gRPC"
            ]
          },
          {
            "id": "4-4-5",
            "title": "Pros and cons vs REST",
            "bullets": [
              "Pros — strongly typed contracts, 5-10x faster than REST/JSON, built-in code generation, streaming support, HTTP/2 multiplexing",
              "Cons — not human-readable (binary protocol), browser support is limited (needs grpc-web), harder to debug, steeper learning curve",
              "When to use — internal service-to-service communication, high-performance data pipelines, when you control both client and server",
              "When NOT to use — public APIs consumed by browsers or third parties, when simplicity matters more than performance"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.4:\n   Build a gRPC service for a simple \"Wallet\" — methods: GetBalance,\n   Deposit, Withdraw, GetTransactionHistory (server streaming). Write the\n   .proto file. Implement the server. Write a Node.js client that calls all\n   methods. Add basic auth via metadata. Test all four RPC types."
      },
      {
        "id": "4.5",
        "title": "WebSockets as an API Type [TP]",
        "tasks": [
          {
            "id": "4-5-1",
            "title": "WebSockets vs HTTP as an API paradigm",
            "bullets": [
              "HTTP is request/response — client always initiates, server always responds",
              "WebSocket is bidirectional — either side can send at any time",
              "Use as an API — define an event-based contract instead of URL-based",
              "Event naming conventions — action:resource pattern (message:send, notification:read, presence:update)",
              "Authentication over WebSocket — pass JWT on connection handshake"
            ]
          }
        ]
      },
      {
        "id": "4.6",
        "title": "SOAP [TP]",
        "tasks": [
          {
            "id": "4-6-1",
            "title": "What SOAP is",
            "bullets": [
              "Simple Object Access Protocol — XML-based messaging protocol",
              "Predates REST, was the dominant API standard in enterprise in the 2000s",
              "Uses WSDL (Web Services Description Language) to define the contract",
              "Typically runs over HTTP but protocol-agnostic by design",
              "Stateful or stateless — unlike REST which is always stateless"
            ]
          },
          {
            "id": "4-6-2",
            "title": "SOAP message structure",
            "bullets": [
              "Envelope — root element that wraps everything",
              "Header — optional metadata (auth tokens, transaction IDs)",
              "Body — the actual request or response payload in XML",
              "Fault — error information, equivalent of HTTP error responses"
            ]
          },
          {
            "id": "4-6-3",
            "title": "Integrating with a SOAP service in Node.js",
            "bullets": [
              "The strong-soap or soap npm packages",
              "Loading a WSDL file — describes available operations",
              "Creating a client — soap.createClient(wsdlUrl)",
              "Calling a method — client.MethodName(args, callback)",
              "Parsing the XML response — navigating nested objects",
              "Handling SOAP faults — checking for fault in the response"
            ]
          },
          {
            "id": "4-6-4",
            "title": "Pros and cons vs REST",
            "bullets": [
              "Pros — strict contracts via WSDL, built-in error handling standard, WS-Security standard for enterprise auth, strongly typed",
              "Cons — verbose XML, heavy payloads, slow parsing, complex tooling, harder to test and debug, overkill for most modern APIs",
              "When you'll encounter it — banking APIs, government systems, legacy enterprise integrations, insurance platforms, payment processors (some older ones still use SOAP)",
              "When to build it — never for a new system. Only when integrating with a system that requires it."
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.5 + 4.6:\n   Find a free public SOAP service (e.g. a currency conversion or weather\n   SOAP API). Write a Node.js script that loads the WSDL, calls one method,\n   parses the response, and returns clean JSON. Then write a one-page\n   comparison document: REST vs GraphQL vs gRPC vs WebSocket vs SOAP —\n   when you would choose each for your SaaS product and why."
      }
    ]
  },
  {
    "id": "5",
    "title": "Databases Part 1 — Relational",
    "goal": "Store, query, and model data reliably. This is your primary database.",
    "time": "5–6 weeks",
    "topics": [
      {
        "id": "5.1",
        "title": "PostgreSQL [TP]",
        "tasks": [
          {
            "id": "5-1-1",
            "title": "Relational model",
            "bullets": [
              "What a table, row, column, and schema are — the grid of data",
              "Primary keys — unique identifier for every row, never null",
              "Foreign keys — reference another table's primary key, enforces integrity",
              "One-to-many — one user has many posts (foreign key on posts)",
              "Many-to-many — users and roles linked via a junction table",
              "What NULL means — absence of value, not zero, not empty string"
            ]
          },
          {
            "id": "5-1-2",
            "title": "SQL fundamentals",
            "bullets": [
              "SELECT with WHERE, ORDER BY, LIMIT, OFFSET — reading and paginating",
              "INSERT INTO — adding rows",
              "UPDATE with WHERE — always include WHERE or you update every row",
              "DELETE with WHERE — same warning as UPDATE",
              "INNER JOIN — rows with matches in both tables",
              "LEFT JOIN — all rows from left, matched rows from right (null if no match)",
              "RIGHT JOIN — opposite of left join",
              "GROUP BY with COUNT, SUM, AVG, MAX, MIN — aggregating data",
              "Subqueries — a SELECT inside another SELECT"
            ]
          },
          {
            "id": "5-1-3",
            "title": "Indexes",
            "bullets": [
              "What an index is — a sorted data structure for fast lookups",
              "Without an index — Postgres scans every row (sequential scan)",
              "With an index — Postgres jumps directly to matching rows (index scan)",
              "Cost of indexes on writes — every INSERT/UPDATE must update the index",
              "When to add — columns used in WHERE, JOIN ON, ORDER BY frequently",
              "Composite indexes — indexing multiple columns together, column order matters",
              "EXPLAIN ANALYZE — read the query plan, identify seq scans on large tables"
            ]
          },
          {
            "id": "5-1-4",
            "title": "Transactions and ACID",
            "bullets": [
              "What a transaction is — a group of operations that succeed or fail together",
              "BEGIN / COMMIT / ROLLBACK — the transaction control commands",
              "Atomicity — all operations succeed or none do, no partial state",
              "Consistency — all constraints (foreign keys, not null) are enforced",
              "Isolation — concurrent transactions don't see each other's partial work",
              "Isolation levels — read uncommitted, read committed, repeatable read, serializable — what each prevents",
              "Durability — committed data survives crashes, written to disk",
              "Why this matters for fintech — a payment deducting from one account and crediting another must be atomic"
            ]
          },
          {
            "id": "5-1-5",
            "title": "BASE properties (contrast with ACID)",
            "bullets": [
              "Basically Available — the system guarantees availability",
              "Soft state — the state may change over time even without new input",
              "Eventually consistent — given enough time, all nodes converge to the same value",
              "When BASE is acceptable — social media feeds, recommendation engines, shopping carts, analytics counters",
              "When BASE is NOT acceptable — financial transactions, inventory that can't be oversold, anything requiring strong consistency"
            ]
          },
          {
            "id": "5-1-6",
            "title": "CAP Theorem",
            "bullets": [
              "Consistency — every read receives the most recent write",
              "Availability — every request receives a response (not necessarily latest)",
              "Partition tolerance — the system continues despite network failures",
              "The theorem — you can only guarantee two of three simultaneously",
              "Postgres is CA — consistent and available, assumes no network partition",
              "Redis is AP — available and partition tolerant, eventual consistency",
              "How this guides your database choices in practice"
            ]
          },
          {
            "id": "5-1-7",
            "title": "Normalization",
            "bullets": [
              "What normalization is — eliminating redundancy, ensuring data integrity",
              "1NF — atomic values, no repeating groups",
              "2NF — no partial dependencies on a composite key",
              "3NF — no transitive dependencies",
              "When to denormalize — intentional redundancy for read performance"
            ]
          },
          {
            "id": "5-1-8",
            "title": "Migrations",
            "bullets": [
              "What a migration is — a versioned, repeatable script that changes schema",
              "Why you never manually ALTER TABLE in production — it's not repeatable",
              "Writing up migrations (apply) and down migrations (rollback)",
              "Running migrations safely — in CI before deployment, not during"
            ]
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Prisma ORM [TP]",
        "tasks": [
          {
            "id": "5-2-1",
            "title": "Schema and models",
            "bullets": [
              "prisma/schema.prisma — defining models, field types, attributes",
              "Field types — String, Int, Boolean, DateTime, Json, Bytes",
              "@id, @unique, @default, @updatedAt — common field attributes",
              "Defining relations — @relation, one-to-many, many-to-many via explicit junction model",
              "prisma migrate dev — creates migration file and applies it",
              "prisma generate — regenerates the Prisma Client after schema change"
            ]
          },
          {
            "id": "5-2-2",
            "title": "CRUD with Prisma Client",
            "bullets": [
              "findMany — list records with filtering, sorting, pagination",
              "findUnique — get one record by unique field",
              "findFirst — get first matching record",
              "create — insert one record",
              "createMany — insert multiple records in one query",
              "update — modify one record",
              "updateMany — modify multiple matching records",
              "upsert — create if not exists, update if exists",
              "delete / deleteMany — remove records",
              "where, orderBy, skip, take — filtering, sorting, and pagination"
            ]
          },
          {
            "id": "5-2-3",
            "title": "Advanced Prisma",
            "bullets": [
              "Nested writes — create a user and their profile in one operation",
              "select — return only specific fields, reduces data transfer",
              "include — eagerly load related records (joins)",
              "Prisma transactions — $transaction([...]) for atomic operations",
              "Raw queries — $queryRaw and $executeRaw for when Prisma can't express it"
            ]
          },
          {
            "id": "5-2-4",
            "title": "N+1 problem",
            "bullets": [
              "What it is — fetching 10 posts then looping to fetch each author separately = 11 queries instead of 1",
              "How it silently kills performance at scale",
              "Fixing with include — one query with a JOIN instead of N+1 queries",
              "Using select to avoid over-fetching large fields"
            ]
          },
          {
            "id": "5-2-5",
            "title": "Profiling database performance",
            "bullets": [
              "EXPLAIN ANALYZE in Postgres — read the query plan output",
              "pg_stat_statements — track slowest queries across your app",
              "Slow query log — log queries that exceed a threshold (log_min_duration)",
              "Prisma query logging — log all queries in development",
              "Connection pool monitoring — track idle, active, waiting connections",
              "What to do when you find a slow query — add index, rewrite query, denormalize, or cache the result"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 5:\n   Rebuild your Tasks API with a real Postgres database via Prisma.\n   Add a User model and an Organisation model. Each task belongs to a user,\n   each user belongs to an org. All queries scoped by org_id (multi-tenancy\n   preview). Write migrations. Add pagination to the GET all endpoint.\n   Use a Prisma transaction when deleting a user to also delete their tasks.\n   Run EXPLAIN ANALYZE on your most complex query. Add an index where needed."
      }
    ]
  },
  {
    "id": "6",
    "title": "Databases Part 2 — Document, Key-Value & Realtime",
    "goal": "Understand when Postgres is not the right tool and what to reach for.",
    "time": "5–6 weeks",
    "topics": [
      {
        "id": "6.1",
        "title": "Redis (Key-Value) [TP]",
        "tasks": [
          {
            "id": "6-1-1",
            "title": "What Redis is",
            "bullets": [
              "In-memory key-value store — data lives in RAM, not disk",
              "Persistence options — RDB snapshots, AOF append-only log, or both",
              "Data types — strings, hashes, lists, sets, sorted sets, streams",
              "TTL — set an expiry on any key with EXPIRE or EX",
              "Pros — microsecond latency, simple operations, pub/sub, battle-tested",
              "Cons — data fits in RAM (expensive at scale), not for complex queries",
              "When to use — caching, sessions, rate limiting, queues, pub/sub, leaderboards, real-time counters"
            ]
          },
          {
            "id": "6-1-2",
            "title": "Caching patterns",
            "bullets": [
              "Cache-aside — check Redis first, on miss fetch from DB, store in Redis",
              "Write-through — write to DB and Redis simultaneously",
              "Write-behind — write to Redis first, sync to DB asynchronously",
              "Cache invalidation — delete or update the cache when source data changes",
              "Cache stampede — many requests hit DB simultaneously on cache miss, fix with mutex/lock or probabilistic early expiration",
              "What to cache — expensive DB queries, AI responses, static config"
            ]
          },
          {
            "id": "6-1-3",
            "title": "Session storage",
            "bullets": [
              "Storing user sessions in Redis instead of DB",
              "connect-redis with express-session",
              "Session TTL — auto-expire idle sessions",
              "Session renewal — reset TTL on every active request"
            ]
          },
          {
            "id": "6-1-4",
            "title": "Rate limiting with Redis",
            "bullets": [
              "INCR + EXPIRE pattern — increment counter, set expiry on first request",
              "Sliding window with sorted sets — more accurate than fixed window",
              "Why Redis-backed rate limiting works across multiple server instances unlike in-memory rate limiting"
            ]
          },
          {
            "id": "6-1-5",
            "title": "BullMQ — Job Queues",
            "bullets": [
              "What a job queue is — offload slow work from the request/response cycle",
              "Queue — a named list of jobs waiting to be processed",
              "Worker — a process that picks jobs from the queue and runs them",
              "Job lifecycle — waiting, active, completed, failed, delayed",
              "Retries — automatic retry with configurable backoff strategy",
              "Dead letter — jobs that exhaust retries, need manual review",
              "Concurrency — how many jobs a worker processes simultaneously",
              "Use cases — sending emails, AI jobs, webhook delivery, PDF generation"
            ]
          },
          {
            "id": "6-1-6",
            "title": "Pub/Sub with Redis",
            "bullets": [
              "What pub/sub is — publishers send messages to channels, subscribers receive them without knowing who published",
              "PUBLISH and SUBSCRIBE commands",
              "Use case — broadcasting events across multiple server instances (e.g. cache invalidation across servers)"
            ]
          },
          {
            "id": "6-1-7",
            "title": "DynamoDB (AWS Key-Value)",
            "bullets": [
              "What it is — fully managed key-value and document DB by AWS",
              "Partition key and sort key — how data is distributed and queried",
              "Pros — infinite scale, serverless pricing, managed by AWS, single-digit millisecond latency, built-in TTL",
              "Cons — very limited query patterns (must query by partition key), expensive for complex access patterns, vendor lock-in, learning curve",
              "How it differs from Redis — persistent, for application data not cache, not in-memory",
              "When to use — when you're all-in on AWS, need infinite scale with no ops overhead, and your access patterns are simple and predictable",
              "When NOT to use — complex queries, joins, when you're not on AWS, when your access patterns aren't known upfront"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 6.1:\n   Add Redis to your Tasks API. Cache the GET all tasks response with a\n   30 second TTL. Invalidate the cache on create/update/delete. Add a\n   BullMQ job queue — when a task is created, add a job that sends a fake\n   (console.log) email notification. Add rate limiting backed by Redis.\n   Run with Docker Compose: app + postgres + redis."
      },
      {
        "id": "6.2",
        "title": "MongoDB (Document DB) [TP]",
        "tasks": [
          {
            "id": "6-2-1",
            "title": "What MongoDB is",
            "bullets": [
              "Document database — stores JSON-like documents (BSON) instead of rows",
              "Collections instead of tables, documents instead of rows",
              "Flexible schema — documents in the same collection can have different fields",
              "_id field — automatically generated unique identifier per document",
              "Pros — flexible schema for evolving data, natural fit for nested/ hierarchical data, horizontal scaling built-in, fast for document reads",
              "Cons — no joins (by design), no multi-document ACID transactions (until v4.0), data duplication is normal, consistency trade-offs",
              "When to use — content management, product catalogs, user profiles, event logs, any domain where schema changes frequently",
              "When NOT to use — financial transactions requiring ACID, highly relational data with complex joins, when data integrity constraints are critical"
            ]
          },
          {
            "id": "6-2-2",
            "title": "Core MongoDB with Mongoose",
            "bullets": [
              "Connecting to MongoDB — mongoose.connect()",
              "Defining a Schema — field types, required, default, validators",
              "Models — mongoose.model('User', userSchema)",
              "CRUD — Model.create(), Model.find(), Model.findById(), Model.findByIdAndUpdate(), Model.findByIdAndDelete()",
              "Query operators — $eq, $gt, $lt, $in, $or, $and, $regex",
              "Projection — selecting specific fields to return",
              "Population — ref fields that auto-fetch related documents (like JOIN)"
            ]
          },
          {
            "id": "6-2-3",
            "title": "MongoDB data modeling",
            "bullets": [
              "Embedding vs referencing — embed when you always access together, reference when data is large or accessed independently",
              "One-to-few — embed the array directly in the parent document",
              "One-to-many — reference with an array of IDs",
              "One-to-squillions — store the parent reference on the child document",
              "Document size limit — 16MB per document, design around this"
            ]
          },
          {
            "id": "6-2-4",
            "title": "MongoDB indexing and performance",
            "bullets": [
              "Single field index — same concept as Postgres",
              "Compound index — multiple fields, order matters for queries",
              "Text index — full-text search on string fields",
              "explain() — inspect the query plan, look for COLLSCAN vs IXSCAN",
              "Aggregation pipeline — $match, $group, $sort, $project, $lookup"
            ]
          },
          {
            "id": "6-2-5",
            "title": "CouchDB",
            "bullets": [
              "What it is — document database with a unique HTTP-native API",
              "Every document has a _rev (revision) for conflict resolution",
              "CouchDB vs MongoDB — CouchDB built for sync/offline-first apps, MongoDB built for web backend scale",
              "When to use — offline-first mobile apps with sync, when HTTP API for the DB itself is useful",
              "Specific quirk — MVCC (Multi-Version Concurrency Control) means conflicts are stored and resolved by your app, not the DB"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 6.2:\n   Build a simple Content Management API using MongoDB and Mongoose.\n   Articles have a title, body, tags array, author (referenced), and\n   nested comments (embedded). Implement full CRUD for articles. Add\n   text search on title and body. Use the aggregation pipeline to get\n   articles grouped by tag with count. Compare the experience to your\n   Postgres/Prisma API — note where MongoDB felt natural and where it felt\n   awkward."
      },
      {
        "id": "6.3",
        "title": "Graph Databases [TP]",
        "tasks": [
          {
            "id": "6-3-1",
            "title": "What graph databases are",
            "bullets": [
              "Store data as nodes (entities) and edges (relationships)",
              "Edges are first-class citizens — relationships have properties too",
              "Traversal queries — follow relationships to any depth efficiently",
              "Pros — natural for highly connected data, relationship queries are fast regardless of depth, intuitive for network-like domains",
              "Cons — not general purpose, steep learning curve, smaller ecosystem, overkill for most data",
              "When to use — social networks, recommendation engines, fraud detection (connected accounts), knowledge graphs, access control hierarchies",
              "When NOT to use — tabular/relational data, simple CRUD, financial transactions"
            ]
          },
          {
            "id": "6-3-2",
            "title": "Neo4j",
            "bullets": [
              "Nodes — entities with labels (User, Product, Order) and properties",
              "Relationships — directed, named, with properties (FOLLOWS, PURCHASED, KNOWS since: 2020)",
              "Cypher query language — MATCH (u:User)-[:FOLLOWS]->(other) RETURN other",
              "CREATE, MATCH, MERGE, DELETE — the core Cypher operations",
              "Indexes in Neo4j — on node labels and properties",
              "The neo4j-driver for Node.js — connecting, running sessions, transactions",
              "Specific quirk — Neo4j stores relationship counts on nodes, so \"how many followers\" is O(1), unlike a COUNT query in SQL"
            ]
          },
          {
            "id": "6-3-3",
            "title": "Practical use case implementation",
            "bullets": [
              "Model a simple social follow graph in Neo4j",
              "Query: who does User A follow who also follows User B (mutual follows)",
              "Query: recommend users to follow (friends of friends)",
              "Query: detect a cycle (User A follows B follows C follows A)"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 6.3:\n   Build a Friend Recommendation API backed by Neo4j. Users can follow\n   each other. Implement: GET /recommendations/:userId (people followed\n   by people you follow, that you don't follow yet). GET /mutual/:userA/:userB\n   (mutual follows). Depth-2 traversal. Use the Node.js driver directly\n   without an ORM."
      },
      {
        "id": "6.4",
        "title": "Time Series Databases [TP]",
        "tasks": [
          {
            "id": "6-4-1",
            "title": "What time series databases are",
            "bullets": [
              "Optimised for data indexed by time — measurements, metrics, events",
              "Data is always written with a timestamp, queries are always time-ranged",
              "Compression — time series data is highly compressible (sequential values)",
              "Retention policies — automatically delete data older than N days",
              "Pros — massively better write throughput than Postgres for time data, built-in downsampling, compression, time-based functions",
              "Cons — not general purpose, limited update/delete operations, schema is time-centric only",
              "When to use — IoT sensor data, financial tick data, server metrics, user activity tracking, API call logs with time analysis",
              "When NOT to use — general application data, when time is not the primary dimension"
            ]
          },
          {
            "id": "6-4-2",
            "title": "InfluxDB",
            "bullets": [
              "Measurements — like tables",
              "Tags — indexed metadata fields (string only, used for filtering)",
              "Fields — the actual measurements (numeric, string, boolean)",
              "Timestamps — always present, nanosecond precision",
              "Flux query language — time-based filtering, aggregations, joins",
              "Retention policies — auto-delete old data",
              "The @influxdata/influxdb-client for Node.js",
              "Specific quirk — high cardinality tag sets destroy performance, don't use user IDs as tags if you have millions of users"
            ]
          },
          {
            "id": "6-4-3",
            "title": "TimescaleDB",
            "bullets": [
              "What it is — PostgreSQL extension for time series data",
              "Hypertables — automatically partition Postgres tables by time",
              "Continuous aggregates — precomputed summaries that auto-update",
              "Why it matters — you get time series performance with full SQL and Postgres tooling you already know",
              "When to prefer TimescaleDB over InfluxDB — when you want SQL, when you need joins with relational data, when you want one DB"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 6.4:\n   Add API usage time series tracking to your project. Use TimescaleDB\n   (Postgres extension). Create a hypertable for api_calls with columns:\n   time, api_key_id, endpoint, response_time_ms, status_code. Write every\n   API call to it. Build two query endpoints: GET /analytics/usage\n   (calls per hour for last 24h) and GET /analytics/slowest (top 5\n   slowest endpoints by p99 latency)."
      },
      {
        "id": "6.5",
        "title": "Column Databases [T]",
        "tasks": [
          {
            "id": "6-5-1",
            "title": "What column databases are",
            "bullets": [
              "Store data by column instead of by row",
              "Row DB — all fields of a row stored together on disk",
              "Column DB — all values of a column stored together on disk",
              "Why this matters — analytical queries read a few columns across millions of rows, column storage only reads the columns needed",
              "Pros — massively faster for analytical queries (OLAP), excellent compression per column (similar values grouped), good for aggregations",
              "Cons — terrible for transactional writes, not for OLTP, row updates are expensive",
              "When to use — analytics, data warehousing, reporting, BI dashboards, queries like \"sum of all revenue last month across all customers\"",
              "When NOT to use — your primary application database, frequent single row reads/writes, transactional operations"
            ]
          },
          {
            "id": "6-5-2",
            "title": "Cassandra",
            "bullets": [
              "What it is — distributed wide-column store, built for massive scale",
              "Keyspace — like a database/schema",
              "Tables with a partition key and clustering columns",
              "Partition key — determines which node stores the data",
              "Clustering columns — sort order within a partition",
              "CQL — Cassandra Query Language, SQL-like syntax",
              "Pros — linear horizontal scalability, no single point of failure, multi-datacenter replication, extremely high write throughput",
              "Cons — eventual consistency by default, no joins, no transactions, data model must be designed around your queries (not your entities), complex to operate",
              "Specific quirk — you model your tables around your queries, not your domain. One query = one table is the Cassandra way.",
              "When to use — write-heavy workloads at massive scale, time series at IoT scale, global multi-region deployments",
              "When NOT to use — when you need strong consistency, complex queries, small to medium scale (operational overhead not worth it)"
            ]
          }
        ]
      },
      {
        "id": "6.6",
        "title": "Realtime Databases [TP]",
        "tasks": [
          {
            "id": "6-6-1",
            "title": "Firebase Realtime Database / Firestore",
            "bullets": [
              "What it is — Google's managed cloud database with real-time sync",
              "Data is pushed to connected clients automatically when it changes",
              "Firestore — document model, better querying than Realtime DB",
              "Pros — real-time sync out of the box, offline support, managed completely by Google, tight mobile SDK integration",
              "Cons — vendor lock-in (Google Cloud), limited query capabilities, expensive at scale, not suitable for complex server-side logic",
              "Specific quirks — Firestore charges per read/write/delete, costs escalate quickly with frequent updates, pagination is cursor-based",
              "When to use — mobile apps needing offline sync, collaborative tools, prototyping fast, when real-time is the core feature",
              "When NOT to use — complex server-side processing, when you want to own your data, when cost predictability matters"
            ]
          },
          {
            "id": "6-6-2",
            "title": "RethinkDB",
            "bullets": [
              "What it is — document database with built-in real-time push",
              "Changefeeds — subscribe to query results, get notified when they change",
              "ReQL — RethinkDB query language, chainable in Node.js",
              "Pros — elegant real-time architecture, changefeeds are powerful, easier to reason about than polling",
              "Cons — smaller community, slower development, not widely adopted in production at scale",
              "When to use — when real-time is core and you want server-side control (unlike Firebase)",
              "Specific quirk — changefeeds can subscribe to any query result, not just a document — you can watch \"all orders over $1000\" and get notified when new ones appear"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 6.5 + 6.6:\n   Write a \"database decision document\" for your SaaS product. For each\n   of the following needs, state which database you'd use and why:\n   1. Primary application data (users, orgs, tasks)\n   2. Session storage and caching\n   3. API usage metrics and analytics\n   4. A potential future social/graph feature\n   5. Real-time collaborative document editing\n   Back every decision with at least two reasons. This document will be\n   a reference for every architectural decision in later phases."
      }
    ]
  },
  {
    "id": "7",
    "title": "Authentication & Security",
    "goal": "Secure, scalable auth for a SaaS with multiple user types.",
    "time": "4–5 weeks",
    "topics": [
      {
        "id": "7.1",
        "title": "Authentication Foundations [TP]",
        "tasks": [
          {
            "id": "7-1-1",
            "title": "Basic Authentication",
            "bullets": [
              "What it is — username:password encoded as Base64 in the Authorization header on every request",
              "How it works — Authorization: Basic base64(username:password)",
              "Pros — extremely simple, built into HTTP spec, no state needed",
              "Cons — credentials sent on every request, Base64 is not encryption (trivially decoded), no logout mechanism, requires HTTPS always",
              "When to use — internal tools, server-to-server calls over HTTPS, quick prototypes, never for user-facing products"
            ]
          },
          {
            "id": "7-1-2",
            "title": "Token Authentication",
            "bullets": [
              "What it is — user authenticates once, receives a token, sends token on subsequent requests",
              "The concept — server issues a token, client stores it, sends it in Authorization: Bearer <token> header",
              "Stateful tokens — token is stored in server DB, server checks DB on every request (session tokens)",
              "Stateless tokens — token is self-contained and verifiable without DB lookup (JWT)",
              "Why token auth replaced Basic Auth — no credentials on every request, tokens can expire, can be revoked, can carry claims"
            ]
          },
          {
            "id": "7-1-3",
            "title": "Hashing passwords",
            "bullets": [
              "Why plaintext passwords are catastrophic — DB breach = all accounts compromised",
              "What a hash function is — one-way transformation, cannot reverse",
              "Why you can't use MD5 or SHA — fast to compute, rainbow tables, GPU brute force is trivial",
              "bcrypt — deliberately slow, built-in salt, cost factor you can tune",
              "Cost factor — higher = slower hash = harder to brute force, default 12",
              "bcrypt.hash(password, rounds) and bcrypt.compare(input, hash)"
            ]
          },
          {
            "id": "7-1-4",
            "title": "JWT — JSON Web Tokens",
            "bullets": [
              "JWT structure — three Base64URL encoded parts: header.payload.signature",
              "Header — algorithm (HS256, RS256) and token type",
              "Payload — claims: sub (subject/user ID), iat (issued at), exp (expiry), plus any custom claims (role, org_id)",
              "Signature — HMAC of header.payload with a secret key",
              "Signed vs encrypted — JWTs are signed (tamper-proof) not encrypted (payload is readable), never put sensitive data in payload",
              "Verifying — recompute the signature, check exp, check claims",
              "Short-lived access tokens — 15 minutes, if stolen, limited damage",
              "Refresh tokens — 7-30 days, used only to get new access tokens"
            ]
          },
          {
            "id": "7-1-5",
            "title": "Cookie vs token-based auth",
            "bullets": [
              "HTTP-only cookie — browser can't read it with JS, resistant to XSS",
              "SameSite attribute — prevents CSRF attacks",
              "Bearer token in Authorization header — how SPAs and mobile apps work",
              "Pros/cons — cookies are more secure against XSS, tokens are more flexible for mobile and third-party clients",
              "Best practice — access token in memory (JS), refresh token in HTTP-only cookie"
            ]
          },
          {
            "id": "7-1-6",
            "title": "OpenID Connect",
            "bullets": [
              "What it is — identity layer built on top of OAuth 2.0",
              "OAuth 2.0 gives you access (can I do X?) — OpenID gives you identity (who is this person?)",
              "ID token — a JWT containing user identity claims (name, email, picture)",
              "UserInfo endpoint — fetch additional profile data with the access token",
              "Scopes — openid (required), profile, email",
              "Why it matters — it's the standard for federated identity, \"Login with Google\" uses OpenID Connect"
            ]
          },
          {
            "id": "7-1-7",
            "title": "SAML",
            "bullets": [
              "What it is — Security Assertion Markup Language, XML-based auth standard",
              "Enterprise SSO — your SaaS integrates with a company's identity provider (Okta, Azure AD, Google Workspace) so their employees log in with their corporate credentials",
              "How it works — SP (your app) redirects to IdP, IdP authenticates user, IdP sends SAML assertion (XML) back to SP, SP creates session",
              "Pros — enterprise standard, single sign-on across all company tools, IT-controlled access",
              "Cons — complex XML, difficult to implement, debugging is painful",
              "When to use — when selling to enterprise customers who require SSO",
              "Node.js library — passport-saml or samlify",
              "Specific quirk — you'll spend more time on certificate management and metadata exchange than actual code"
            ]
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Implementation [TP]",
        "tasks": [
          {
            "id": "7-2-1",
            "title": "Email/password signup + login",
            "bullets": [
              "Signup — validate input (Zod), check duplicate email, hash password with bcrypt, save user, issue tokens",
              "Login — find user by email, bcrypt.compare(), issue tokens on match",
              "Returning tokens — access token in response body, refresh token in HTTP-only cookie"
            ]
          },
          {
            "id": "7-2-2",
            "title": "Access + refresh token rotation",
            "bullets": [
              "Issue access token (15 min exp) and refresh token (7 day exp)",
              "Store hashed refresh token in DB with user_id and expiry",
              "POST /auth/refresh — verify refresh token, issue new pair, invalidate old refresh token (rotation)",
              "POST /auth/logout — delete refresh token from DB"
            ]
          },
          {
            "id": "7-2-3",
            "title": "OAuth 2.0 and Google Login",
            "bullets": [
              "Authorization code flow — redirect to Google, get code, exchange for tokens, get user profile, create or link account",
              "passport.js with passport-google-oauth20",
              "Linking OAuth to existing email/password accounts",
              "Storing provider (google/github) and provider_id on user record"
            ]
          },
          {
            "id": "7-2-4",
            "title": "RBAC — Role Based Access Control",
            "bullets": [
              "Roles — admin, user, api_client (store on user record)",
              "requireRole('admin') middleware — check req.user.role",
              "Principle of least privilege — default every new user to lowest role",
              "Permission checks inside services — don't rely only on route middleware"
            ]
          },
          {
            "id": "7-2-5",
            "title": "Email verification + password reset",
            "bullets": [
              "Generate a cryptographically random token — crypto.randomBytes(32)",
              "Hash it before storing in DB with an expiry (1 hour)",
              "Send the raw token in the verification link via email",
              "On click — find by hashed token, check expiry, mark verified",
              "Password reset — same pattern, additionally invalidate all existing refresh tokens after reset"
            ]
          },
          {
            "id": "7-2-6",
            "title": "Multi-tenancy",
            "bullets": [
              "Row-level tenancy — every table has an org_id column",
              "Every query scoped by org_id — never return data across org boundaries",
              "Tenant context middleware — attach org to req.user after JWT verification",
              "Invitation flow — create a pending_invitations record with email + org, send link, on accept create user and link to org"
            ]
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Security Basics (OWASP) [TP]",
        "tasks": [
          {
            "id": "7-3-1",
            "title": "CORS",
            "bullets": [
              "Same-origin policy — browser blocks requests to different origins",
              "CORS headers — Access-Control-Allow-Origin tells browser who can call",
              "Configuring cors package — whitelist specific origins, never * in prod",
              "Preflight requests — OPTIONS request browser sends before the real one"
            ]
          },
          {
            "id": "7-3-2",
            "title": "Input sanitisation",
            "bullets": [
              "SQL injection — user input in a query without parameterisation",
              "Parameterised queries — Prisma and pg both do this automatically",
              "XSS — storing script tags in DB and rendering them to other users",
              "Sanitise with DOMPurify (frontend) or sanitize-html (backend)",
              "Never trust req.body — validate every field, reject unknown fields"
            ]
          },
          {
            "id": "7-3-3",
            "title": "Security headers with Helmet",
            "bullets": [
              "helmet() — sets 11 security headers in one call",
              "CSP — Content-Security-Policy, restricts what scripts can execute",
              "HSTS — HTTP Strict Transport Security, forces HTTPS for all requests",
              "X-Frame-Options — prevents your app being embedded in an iframe"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 7:\n   Build a complete auth system. Signup (email/password + email verification),\n   login, JWT access + refresh tokens with rotation, logout, Google OAuth,\n   password reset, two roles (user/admin), one admin-only route, SAML SSO\n   stub (read the WSDL, understand the flow, implement the redirect and\n   assertion handler). Full multi-tenancy — users belong to orgs, all data\n   scoped by org_id. CORS configured, Helmet on, input sanitised."
      }
    ]
  },
  {
    "id": "8",
    "title": "Payments & Billing",
    "goal": "Charge users reliably. Get this wrong and it costs money and trust.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "8.1",
        "title": "Stripe Core [TP]",
        "tasks": [
          {
            "id": "8-1-1",
            "title": "Stripe data model",
            "bullets": [
              "Products — what you sell (Pro Plan, API Access)",
              "Prices — how much and how often (£49/month, £0.001 per API call)",
              "Customers — Stripe's record of your user, always create on signup",
              "PaymentMethods — cards and bank accounts attached to a customer",
              "Subscriptions — customer + price + billing cycle bound together"
            ]
          },
          {
            "id": "8-1-2",
            "title": "Subscription billing",
            "bullets": [
              "Creating a Stripe Customer on user signup — store stripe_customer_id",
              "Creating a Subscription via Stripe Checkout or API",
              "Linking subscription to your DB — store stripe_subscription_id, status",
              "Plan upgrades/downgrades — proration, immediate vs end of period",
              "Cancellation — cancel_at_period_end vs immediate cancellation",
              "Trial periods — trial_end on subscription creation"
            ]
          },
          {
            "id": "8-1-3",
            "title": "One-time payments",
            "bullets": [
              "Stripe Checkout Session — hosted page, Stripe handles the UI",
              "Payment Intents — custom UI with Stripe Elements, you control the flow",
              "Confirming payment on client, webhook confirms on server",
              "Updating your DB only from webhooks, never from client confirmation"
            ]
          },
          {
            "id": "8-1-4",
            "title": "Webhooks",
            "bullets": [
              "What a webhook is — Stripe POSTs to your server when events occur",
              "Verifying Stripe-Signature header — mandatory, reject unverified payloads",
              "Key events to handle: invoice.paid — mark subscription active, provision access invoice.payment_failed — notify user, retry logic customer.subscription.deleted — revoke access checkout.session.completed — fulfill one-time purchase",
              "Idempotency — store processed event IDs, skip if already handled"
            ]
          },
          {
            "id": "8-1-5",
            "title": "Idempotency keys",
            "bullets": [
              "What idempotency means — retrying the same request produces same result",
              "Stripe idempotency keys — send on every API call that creates something",
              "Storing Stripe event IDs in a processed_events table",
              "Skipping webhook processing if event ID already exists"
            ]
          }
        ]
      },
      {
        "id": "8.2",
        "title": "Usage-Based Billing [TP]",
        "tasks": [
          {
            "id": "8-2-1",
            "title": "Metered billing in Stripe",
            "bullets": [
              "Creating a metered Price — billing_scheme: 'per_unit', usage_type: 'metered'",
              "Reporting usage — stripe.subscriptionItems.createUsageRecord()",
              "When to report — end of day batch is safer than real-time",
              "Billing thresholds — charge when usage hits a defined amount"
            ]
          },
          {
            "id": "8-2-2",
            "title": "Internal usage tracking",
            "bullets": [
              "usage_logs table — user_id, api_key_id, endpoint, timestamp, tokens_used",
              "Aggregating usage per billing period for display and reporting",
              "Syncing your internal counts with what you report to Stripe"
            ]
          }
        ]
      },
      {
        "id": "8.3",
        "title": "Fintech Considerations [T]",
        "tasks": [
          {
            "id": "8-3-1",
            "title": "PCI compliance basics",
            "bullets": [
              "What PCI DSS is — Payment Card Industry Data Security Standard",
              "SAQ-A — the compliance level when Stripe handles all card data",
              "Never touch raw card numbers — use Stripe Elements or Checkout only",
              "What this means in code — no card fields on your server, ever"
            ]
          },
          {
            "id": "8-3-2",
            "title": "Audit logs",
            "bullets": [
              "Every financial action needs an immutable log entry",
              "Append-only table — no UPDATE or DELETE on audit_logs, ever",
              "What to log — payment initiated, succeeded, failed, refunded, subscription created/changed/cancelled, with who and when"
            ]
          },
          {
            "id": "8-3-3",
            "title": "Reconciliation",
            "bullets": [
              "Matching every Stripe event to an internal record",
              "What to do when they disagree — flag for review, never auto-correct",
              "Running a nightly reconciliation job via BullMQ"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 8:\n   Add billing to your app. Users can subscribe to a Pro plan. Implement\n   Stripe Checkout, a full webhook handler for the key events, and update\n   a subscriptions table in your DB. Add a usage_logs table — log every\n   API call with token count. Write a BullMQ job that runs nightly and\n   reports metered usage to Stripe. Write a reconciliation script that\n   compares your DB subscriptions table against Stripe's API and flags\n   mismatches. Test fully in Stripe test mode."
      }
    ]
  },
  {
    "id": "9",
    "title": "Real-Time Features",
    "goal": "Live data, notifications, and event-driven UX.",
    "time": "3 weeks",
    "topics": [
      {
        "id": "9.1",
        "title": "Real-Time Fundamentals [T]",
        "tasks": [
          {
            "id": "9-1-1",
            "title": "Long Polling",
            "bullets": [
              "What it is — client sends request, server holds it open until data is available or timeout, client immediately re-requests",
              "Pros — works everywhere, no special protocol, simple to implement",
              "Cons — latency (one round trip per event), high server connection count, not truly real-time",
              "When to use — fallback when WebSockets unavailable, simple notification polling, legacy system compatibility"
            ]
          },
          {
            "id": "9-1-2",
            "title": "Short Polling",
            "bullets": [
              "What it is — client sends a request every N seconds regardless of whether data has changed",
              "Pros — trivial to implement",
              "Cons — wasteful (mostly empty responses), high unnecessary load, latency equal to polling interval",
              "When to use — almost never in a new system, only for very infrequent updates where simplicity beats efficiency"
            ]
          },
          {
            "id": "9-1-3",
            "title": "Comparison — Polling vs SSE vs WebSocket",
            "bullets": [
              "Short poll — client asks every N seconds",
              "Long poll — client waits for server to respond",
              "SSE — server pushes one-way stream over HTTP",
              "WebSocket — bidirectional persistent connection",
              "Decision rule — SSE for server → client only (AI streaming, notifications), WebSocket for bidirectional (chat, live collaboration, gaming)"
            ]
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Socket.io (WebSockets) [TP]",
        "tasks": [
          {
            "id": "9-2-1",
            "title": "WebSocket fundamentals",
            "bullets": [
              "What a WebSocket is — persistent TCP connection, full duplex",
              "The handshake — HTTP Upgrade request to switch protocols",
              "ws library — raw WebSocket implementation in Node.js",
              "Why Socket.io wraps ws — adds rooms, namespaces, auto-reconnect, fallback to long polling"
            ]
          },
          {
            "id": "9-2-2",
            "title": "Socket.io implementation",
            "bullets": [
              "Attaching Socket.io to an Express server",
              "Emitting events — socket.emit() (to one), io.emit() (to all), io.to(room).emit() (to room)",
              "Listening for events — socket.on('eventName', handler)",
              "Rooms — grouping sockets by user_id, org_id, conversation_id",
              "Namespaces — separating concerns: /notifications, /chat, /presence",
              "Broadcasting — io.to(room).emit() excludes or includes sender",
              "Disconnect handling — clean up room membership, update presence"
            ]
          },
          {
            "id": "9-2-3",
            "title": "Authentication over WebSocket",
            "bullets": [
              "Pass JWT as a query param or in auth object on connection",
              "Verify token in the connection middleware before allowing the socket",
              "Attach user to socket object — socket.user = decoded token",
              "Reject unauthenticated connections with socket.disconnect()"
            ]
          },
          {
            "id": "9-2-4",
            "title": "Real-time notifications",
            "bullets": [
              "Store notification in DB — user_id, type, message, read: false",
              "Emit to the user's room immediately after storing",
              "Client acknowledges receipt",
              "Mark as read endpoint — PATCH /notifications/:id"
            ]
          }
        ]
      },
      {
        "id": "9.3",
        "title": "Server-Sent Events [TP]",
        "tasks": [
          {
            "id": "9-3-1",
            "title": "What SSE is",
            "bullets": [
              "One-way stream from server to client over a persistent HTTP connection",
              "Uses the text/event-stream content type",
              "Built into browsers via EventSource API",
              "Auto-reconnects if connection drops"
            ]
          },
          {
            "id": "9-3-2",
            "title": "SSE implementation in Express",
            "bullets": [
              "Setting headers — Content-Type: text/event-stream, Cache-Control: no-cache, Connection: keep-alive",
              "Writing events — data: {json}\\n\\n format",
              "Sending heartbeats — empty comment (:) every 30s to keep alive",
              "Handling client disconnect — req.on('close')"
            ]
          },
          {
            "id": "9-3-3",
            "title": "AI streaming with SSE",
            "bullets": [
              "Why SSE is perfect for AI — server gets stream from OpenAI, pipes to client",
              "Streaming chunks as they arrive — no waiting for full completion",
              "Client renders tokens progressively with EventSource"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 9:\n   Add two real-time features. 1) Notification system — when a payment\n   event occurs (simulate with a test endpoint), the user receives a live\n   notification via Socket.io in their room, stored in DB, with a mark-as-\n   read endpoint. 2) AI streaming endpoint — POST /ai/stream, calls OpenAI\n   with streaming enabled, pipes response chunks via SSE to a simple HTML\n   test page that renders tokens word by word."
      }
    ]
  },
  {
    "id": "10",
    "title": "AI / ML API Integration",
    "goal": "Build and expose AI-powered endpoints at scale.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "10.1",
        "title": "Consuming AI APIs [TP]",
        "tasks": [
          {
            "id": "10-1-1",
            "title": "OpenAI and Anthropic SDK setup",
            "bullets": [
              "Installing the SDK, initialising the client with API key from env",
              "Chat completions — messages array with system, user, assistant roles",
              "Streaming completions — stream: true, iterate chunks with for await",
              "Token limits — context window per model, max_tokens for output",
              "Truncation strategy — trim oldest messages when approaching limit",
              "Temperature — 0 (deterministic) to 2 (creative), what each means",
              "top_p, frequency_penalty, presence_penalty — what they control"
            ]
          },
          {
            "id": "10-1-2",
            "title": "Handling streaming responses",
            "bullets": [
              "Stream vs non-stream response shapes — different objects entirely",
              "Iterating over stream chunks — for await (const chunk of stream)",
              "Extracting delta content — chunk.choices[0].delta.content",
              "Piping chunks to SSE endpoint in real time",
              "Handling stream errors — try/catch, emit error event to client",
              "Client disconnect mid-stream — abort the upstream AI call too"
            ]
          },
          {
            "id": "10-1-3",
            "title": "Retry logic and resilience",
            "bullets": [
              "Errors to retry — 429 (rate limit), 503 (overloaded), 500 (server error)",
              "Errors NOT to retry — 400 (bad request), 401 (auth), 404 (not found)",
              "Exponential backoff — wait 1s, then 2s, then 4s, then 8s",
              "Jitter — add random delay to backoff to prevent thundering herd",
              "Max retry count — 3-5 retries, then fail with clean error to user",
              "Circuit breaker pattern (see Phase 13) — stop calling if failure rate is too high"
            ]
          }
        ]
      },
      {
        "id": "10.2",
        "title": "Building AI Endpoints [TP]",
        "tasks": [
          {
            "id": "10-2-1",
            "title": "Endpoint design",
            "bullets": [
              "Input schema — validate prompt, max length, model, temperature",
              "Output schema — consistent envelope even for streaming",
              "Prompt templating — build prompts from user input safely",
              "Prompt injection — user input that hijacks your system prompt, basic defence: validate input, use system prompt to constrain"
            ]
          },
          {
            "id": "10-2-2",
            "title": "Queuing AI jobs",
            "bullets": [
              "Why you must not await AI calls for long tasks in the request thread",
              "POST /ai/jobs returns jobId immediately",
              "BullMQ worker processes the AI call asynchronously",
              "Worker stores result in DB when done",
              "Client polls GET /ai/jobs/:id or receives WebSocket notification"
            ]
          },
          {
            "id": "10-2-3",
            "title": "Cost and token tracking",
            "bullets": [
              "Log prompt_tokens, completion_tokens, model, cost per request",
              "Usage record — user_id, api_key_id, model, tokens, cost, timestamp",
              "Per-user monthly cost aggregation",
              "Hard limits — reject requests when user exceeds daily/monthly quota",
              "Alerting — notify yourself when your own bill spikes"
            ]
          }
        ]
      },
      {
        "id": "10.3",
        "title": "Vector Databases and RAG [TP]",
        "tasks": [
          {
            "id": "10-3-1",
            "title": "Embeddings",
            "bullets": [
              "What a vector embedding is — a list of numbers representing meaning",
              "Similar meaning → vectors that are close in high-dimensional space",
              "Generating embeddings — OpenAI text-embedding-3-small",
              "Embedding dimension — 1536 numbers per text chunk"
            ]
          },
          {
            "id": "10-3-2",
            "title": "pgvector",
            "bullets": [
              "PostgreSQL extension for storing and querying vectors",
              "CREATE EXTENSION vector — enabling it",
              "vector column type in your Prisma schema",
              "Cosine similarity search — find N most similar vectors to a query"
            ]
          },
          {
            "id": "10-3-3",
            "title": "RAG pattern — Retrieval Augmented Generation",
            "bullets": [
              "Chunking documents — split large docs into smaller pieces",
              "Embedding each chunk and storing with pgvector",
              "At query time — embed the user question, find similar chunks",
              "Inject retrieved chunks into the system prompt",
              "Generate answer grounded in retrieved context",
              "Why RAG beats fine-tuning for most use cases — no retraining, always up to date, source attribution possible"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 10:\n   Build a complete AI API product. Users POST a prompt, server streams\n   the OpenAI response via SSE. Track tokens per API key. Enforce daily\n   token quota. Queue long AI jobs via BullMQ with WebSocket notification\n   on completion. Add a RAG endpoint — user uploads a .txt doc, you chunk\n   it, embed with pgvector, and answer questions about it. One retry with\n   exponential backoff on AI API failure."
      }
    ]
  },
  {
    "id": "11",
    "title": "Testing & CI/CD",
    "goal": "Ship confidently. Catch bugs before users do.",
    "time": "3 weeks",
    "topics": [
      {
        "id": "11.1",
        "title": "Testing [TP]",
        "tasks": [
          {
            "id": "11-1-1",
            "title": "Unit testing with Jest",
            "bullets": [
              "What a unit test is — one function, isolated, no external dependencies",
              "Arrange, Act, Assert pattern — set up, run, check result",
              "Mocking — jest.fn() to replace dependencies with fakes",
              "jest.spyOn() — spy on real functions without replacing them",
              "Testing pure service functions — no Express, no DB, fast tests",
              "Code coverage — what it measures, why 100% is not the goal"
            ]
          },
          {
            "id": "11-1-2",
            "title": "Integration testing with Supertest",
            "bullets": [
              "What integration testing is — test a full route with real DB",
              "Test database setup — separate DB, seeded before tests, cleaned after",
              "supertest — make real HTTP requests to your Express app in tests",
              "Testing signup, login, protected routes, token refresh",
              "beforeEach / afterEach hooks for test isolation"
            ]
          },
          {
            "id": "11-1-3",
            "title": "Functional testing",
            "bullets": [
              "What functional testing is — does the feature work from the user's perspective, end to end",
              "Testing complete user flows — sign up, subscribe, make API call, get billed, cancel subscription",
              "Difference from integration — functional tests span multiple services and the full stack, integration tests are within one service",
              "Tools — Supertest for API, Playwright for E2E if you have a frontend"
            ]
          },
          {
            "id": "11-1-4",
            "title": "Testing critical paths",
            "bullets": [
              "Webhook handler — replay a real Stripe event payload, verify DB state",
              "Rate limiting — fire N+1 requests, assert 429 on the last",
              "RBAC — user calling admin route returns 403",
              "Auth flows — expired token, invalid token, missing token"
            ]
          },
          {
            "id": "11-1-5",
            "title": "GitHub Actions CI",
            "bullets": [
              "What CI is — automated checks on every push/PR",
              ".github/workflows/ci.yml — define the pipeline",
              "Steps — checkout, node setup, npm install, lint, test",
              "Service containers — Postgres and Redis in CI for integration tests",
              "Failing the pipeline when tests fail — PRs can't merge if red",
              "Caching node_modules in CI — faster runs"
            ]
          },
          {
            "id": "11-1-6",
            "title": "Linting and formatting",
            "bullets": [
              "ESLint — catches actual errors and enforces style rules",
              "Prettier — opinionated formatter, eliminates style debates",
              "eslint-config-prettier — disables ESLint rules that conflict with Prettier",
              "Husky + lint-staged — run lint/format on staged files before commit"
            ]
          },
          {
            "id": "11-1-7",
            "title": "CD — Continuous Deployment",
            "bullets": [
              "What CD is — auto-deploy when CI passes on main",
              "Environment promotion — dev → staging → production",
              "Deploy only after all tests pass",
              "Never share secrets between environments"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 11:\n   Write a full test suite for your app. Unit tests for service functions.\n   Integration tests for auth routes (signup, login, refresh, logout).\n   Functional test for subscribe → API call → usage tracked flow.\n   Webhook handler test with real Stripe payload. Rate limit test. RBAC\n   test. GitHub Actions pipeline — runs full suite on every push, deploys\n   to staging on green main. Coverage report in CI output."
      }
    ]
  },
  {
    "id": "12",
    "title": "Containerisation & Deployment",
    "goal": "Your app runs the same everywhere. Deploy with confidence.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "12.1",
        "title": "Docker [TP]",
        "tasks": [
          {
            "id": "12-1-1",
            "title": "Containerisation vs Virtualisation",
            "bullets": [
              "Virtual machine — emulates entire hardware, full OS, heavy (GBs)",
              "Container — shares host OS kernel, isolated process, lightweight (MBs)",
              "LXC — Linux Containers, the underlying Linux technology Docker uses",
              "Docker — a layer of tooling on top of LXC/namespaces/cgroups",
              "Why containers — identical environment from dev to prod, fast startup, efficient resource usage, easy to scale horizontally"
            ]
          },
          {
            "id": "12-1-2",
            "title": "Docker fundamentals",
            "bullets": [
              "What an image is — immutable blueprint, layers of filesystem changes",
              "What a container is — a running instance of an image",
              "Dockerfile — instructions to build an image",
              ".dockerignore — exclude node_modules, .env, .git from the build context",
              "docker build -t name . — build an image",
              "docker run — start a container from an image",
              "docker ps — list running containers",
              "docker logs — view container output",
              "docker exec -it — open a shell inside a running container"
            ]
          },
          {
            "id": "12-1-3",
            "title": "Writing a production Dockerfile for Node.js",
            "bullets": [
              "Multi-stage build — build stage and production stage",
              "Stage 1 — install all deps, run build if TypeScript",
              "Stage 2 — copy only production artifacts, install prod deps only",
              "Run as non-root user — security best practice",
              "EXPOSE port, CMD [\"node\", \"src/index.js\"]",
              "Result — small, secure production image"
            ]
          },
          {
            "id": "12-1-4",
            "title": "Docker Compose",
            "bullets": [
              "What Docker Compose is — define and run multi-container apps",
              "docker-compose.yml — services, networks, volumes",
              "Services — app, postgres, redis, each with image or build",
              "Volumes — persist Postgres data across container restarts",
              "Networks — containers on same network can reach each other by name",
              "Environment variables — loaded from .env file",
              "docker compose up -d — start all services in background",
              "depends_on — start order, but not readiness (add healthchecks)"
            ]
          }
        ]
      },
      {
        "id": "12.2",
        "title": "Web Servers [T]",
        "tasks": [
          {
            "id": "12-2-1",
            "title": "Nginx",
            "bullets": [
              "What a reverse proxy is — sits in front of Node.js, forwards requests",
              "Why not expose Node.js directly — Nginx handles SSL, static files, load balancing, rate limiting at the network level",
              "Basic config — server block, listen 80, proxy_pass to Node.js",
              "SSL termination — Nginx handles HTTPS, Node gets plain HTTP internally",
              "Serving static files — Nginx is faster than Node for static assets",
              "Load balancing — upstream block with multiple Node instances"
            ]
          },
          {
            "id": "12-2-2",
            "title": "Caddy — comparison",
            "bullets": [
              "What it is — modern web server with automatic HTTPS",
              "Pros — automatic SSL via Let's Encrypt with zero config, simpler Caddyfile syntax vs Nginx config, HTTP/3 support out of the box",
              "Cons — smaller community than Nginx, fewer resources and examples, less battle-tested at very high scale",
              "When to choose Caddy — smaller projects, when you want zero-config SSL, when Nginx config complexity is not worth it",
              "When to stick with Nginx — when you need fine-grained control, when your team knows Nginx, at high scale with complex routing needs"
            ]
          }
        ]
      },
      {
        "id": "12.3",
        "title": "Cloud Deployment [TP]",
        "tasks": [
          {
            "id": "12-3-1",
            "title": "Migration Strategies",
            "bullets": [
              "Blue/Green deployment — two identical environments, switch traffic instantly, instant rollback by switching back",
              "Canary release — route small % of traffic to new version first, monitor, then gradually increase",
              "Rolling update — replace instances one by one, always some old and new running simultaneously",
              "Feature flags — deploy code but keep feature off, enable without redeploy",
              "When to use each — blue/green for safety with resource cost, canary for risk reduction at scale, rolling for zero-downtime with less infrastructure"
            ]
          },
          {
            "id": "12-3-2",
            "title": "Types of Scaling",
            "bullets": [
              "Vertical scaling (scale up) — bigger machine, more CPU/RAM",
              "Horizontal scaling (scale out) — more machines, load balanced",
              "Stateless scaling — your app has no local state, any instance handles any request (required for horizontal scale)",
              "Stateful scaling — session/state lives on a server, hard to scale (why JWT and Redis sessions matter)",
              "Auto-scaling — add/remove instances based on load automatically"
            ]
          },
          {
            "id": "12-3-3",
            "title": "Railway / Render deployment",
            "bullets": [
              "Connect GitHub repo, auto-deploy on push to main",
              "Add managed Postgres and Redis services",
              "Environment variables in the platform dashboard",
              "Deployment logs — how to debug a failed deploy",
              "Custom domains and automatic HTTPS"
            ]
          },
          {
            "id": "12-3-4",
            "title": "Domain and HTTPS",
            "bullets": [
              "Buying a domain, pointing A record to server IP",
              "Let's Encrypt — free SSL certificate authority",
              "Certbot — automates certificate issuance and renewal",
              "Auto-renewal — certificates expire every 90 days, automate it"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 12:\n   Dockerise your full app. Multi-stage Dockerfile. docker-compose.yml\n   spins up app + postgres + redis with one command. Deploy to Railway or\n   Render with a custom domain. HTTPS working. Blue/green deployment\n   understanding — write a doc explaining how you would do a zero-downtime\n   deploy of a breaking DB migration."
      }
    ]
  },
  {
    "id": "13",
    "title": "Scalability & Operations",
    "goal": "Build something that doesn't fall over when it gets traction.",
    "time": "4–6 weeks",
    "topics": [
      {
        "id": "13.1",
        "title": "Scaling Databases [TP]",
        "tasks": [
          {
            "id": "13-1-1",
            "title": "Read replicas",
            "bullets": [
              "What a read replica is — a copy of the primary DB, receives replicated writes, serves read queries",
              "Replication lag — replica may be slightly behind primary",
              "When to use — offload heavy read traffic from primary DB",
              "Implementation — route read queries to replica connection, writes to primary"
            ]
          },
          {
            "id": "13-1-2",
            "title": "Data Replication",
            "bullets": [
              "Synchronous replication — primary waits for replica to confirm write before acknowledging to client (consistent, slower)",
              "Asynchronous replication — primary acknowledges immediately, replica catches up (faster, risk of data loss on primary failure)",
              "Leader-follower — one primary handles writes, followers handle reads",
              "Multi-leader — multiple primaries, conflict resolution needed",
              "Replication lag — understanding staleness and its impact on your queries"
            ]
          },
          {
            "id": "13-1-3",
            "title": "Connection pooling with PgBouncer",
            "bullets": [
              "Why Node.js + Postgres needs pooling — each connection costs ~5MB RAM, Postgres handles ~100 concurrent connections well",
              "PgBouncer — a lightweight proxy that pools connections",
              "Transaction mode vs session mode — transaction mode is most efficient",
              "Pool size formula — (num_cores * 2) + effective_spindle_count"
            ]
          },
          {
            "id": "13-1-4",
            "title": "CDN — Content Delivery Network",
            "bullets": [
              "What a CDN is — distributed network of servers caching content at edge locations close to users",
              "Edge nodes — servers in major cities worldwide",
              "What to put on a CDN — static assets (JS, CSS, images), API responses that are public and cacheable",
              "Cache-Control headers — max-age, s-maxage, stale-while-revalidate",
              "Cloudflare — CDN + DDoS protection + DNS + Workers at the edge",
              "When it helps — global user base, high static asset traffic, reducing origin server load"
            ]
          },
          {
            "id": "13-1-5",
            "title": "Profiling database performance (advanced)",
            "bullets": [
              "pg_stat_statements — track all queries, their frequency and duration",
              "EXPLAIN ANALYZE vs EXPLAIN — one runs the query, one estimates",
              "Common performance killers — sequential scans on large tables, missing indexes on foreign keys, N+1 queries, fetching too many columns",
              "Connection monitoring — track idle connections eating into pool limit",
              "Vacuum and autovacuum — Postgres cleans up dead rows, understand when to manual vacuum"
            ]
          },
          {
            "id": "13-1-6",
            "title": "Resilience Patterns                                                   [TP]",
            "bullets": [
              "Circuit Breaker — if OpenAI fails 5 times in 60 seconds, stop calling it for 2 minutes, return cached or error response (use opossum library in Node.js)",
              "Graceful Degradation — if AI service is down, return a cached response or a clear error instead of failing the whole request",
              "Throttling — intentionally limit request processing rate to protect downstream services",
              "Backpressure — when a consumer is slower than a producer, signal the producer to slow down (BullMQ handles this for queues)",
              "Load shifting — move non-urgent work to off-peak hours via BullMQ scheduled jobs"
            ]
          },
          {
            "id": "13-1-7",
            "title": "Message Queues at Scale",
            "bullets": [
              "BullMQ recap — Redis-backed, suitable to ~10k jobs/day per queue",
              "Dead letter queue — jobs that exhaust retries, store for manual review",
              "At-least-once delivery — job may run more than once, handlers must be idempotent",
              "Exactly-once — much harder, requires distributed locks or transactional outbox pattern"
            ]
          }
        ]
      },
      {
        "id": "13.2",
        "title": "Architecture Patterns (Advanced) [T]",
        "tasks": [
          {
            "id": "13-2-1",
            "title": "GOF Patterns in practice (revisit Phase 3 with production context)",
            "bullets": [
              "Repository pattern — abstract all DB access behind an interface, swap Prisma for raw SQL without changing service layer",
              "Factory pattern — create different AI provider clients based on config",
              "Observer/EventEmitter — decouple side effects from business logic"
            ]
          },
          {
            "id": "13-2-2",
            "title": "CQRS in practice",
            "bullets": [
              "Separate read models — denormalised views optimised for display",
              "Separate write models — normalised, enforces business rules",
              "Implementation in Node.js — separate service files for commands and queries, potentially separate DB connections"
            ]
          },
          {
            "id": "13-2-3",
            "title": "Event Sourcing in practice",
            "bullets": [
              "Events table — append-only, never update or delete",
              "Projections — read models built by replaying events",
              "Snapshots — cached current state to avoid replaying all history",
              "When to introduce — financial ledgers, audit-critical flows, anywhere you need full history"
            ]
          },
          {
            "id": "13-2-4",
            "title": "Domain Driven Design in practice",
            "bullets": [
              "Bounded context boundaries in your codebase — separate folders, separate Prisma models or even separate DBs per context",
              "Anti-corruption layer — translate between contexts without leaking internal models",
              "Aggregate roots — the entry point for a cluster of related entities"
            ]
          },
          {
            "id": "13-2-5",
            "title": "Twelve-Factor App in practice (revisit each factor against your codebase)",
            "bullets": [
              "Config in env — check every hardcoded value",
              "Backing services as attached resources — swap DB URLs without code change",
              "Disposability — fast startup, graceful shutdown (handle SIGTERM)",
              "Dev/prod parity — same Docker images, same OS, same dependencies"
            ]
          },
          {
            "id": "13-2-6",
            "title": "CAP Theorem in practice",
            "bullets": [
              "Your Postgres primary — CP (consistent, partition tolerant)",
              "Your Redis cache — AP (available, partition tolerant)",
              "Understanding what \"eventually consistent\" means for your caches",
              "Designing for the tradeoffs you've chosen"
            ]
          },
          {
            "id": "13-2-7",
            "title": "Observability                                                         [TP]",
            "bullets": [
              "Three pillars — logs (what happened), metrics (how much/how fast), traces (how a request flowed through the system)",
              "Structured logging with Pino — JSON logs, log levels, request IDs",
              "Correlation ID — a UUID attached to every request, included in all log lines for that request",
              "Sentry — error tracking, grouping, alerting in production",
              "OpenTelemetry — the standard for traces and metrics",
              "Health check endpoints — /health (is the process alive), /ready (can it serve traffic — DB connected, queues running)",
              "Key metrics — p50/p95/p99 request latency, error rate, queue depth, DB connection pool usage, cache hit rate"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 13:\n   Add observability to your app. Pino logging with request correlation ID\n   on every log line. /health and /ready endpoints. Sentry integration —\n   deliberately throw an error, confirm it appears. Implement a circuit\n   breaker around your OpenAI calls with opossum. Add a scheduled BullMQ\n   job that runs a daily reconciliation. Write a scaling document — what\n   you would do if your app got 100x current traffic tomorrow."
      }
    ]
  },
  {
    "id": "14",
    "title": "Kafka",
    "goal": "Understand and implement event streaming at scale.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "14.1",
        "title": "Kafka Fundamentals [T]",
        "tasks": [
          {
            "id": "14-1-1",
            "title": "What Kafka is",
            "bullets": [
              "Distributed event streaming platform — a log of events that multiple consumers can read independently",
              "Not a message queue — events stay in Kafka after consumption, consumers track their own position (offset)",
              "Built for throughput — millions of events per second",
              "Durable — events persisted to disk with configurable retention"
            ]
          },
          {
            "id": "14-1-2",
            "title": "Core concepts",
            "bullets": [
              "Event — an immutable record of something that happened",
              "Topic — a named, ordered, partitioned log of events",
              "Partition — a topic is split into partitions for parallelism, each partition is an ordered log",
              "Offset — the position of a consumer in a partition",
              "Producer — writes events to a topic",
              "Consumer — reads events from a topic, tracks its own offset",
              "Consumer Group — multiple consumers sharing a topic's partitions, each partition assigned to one consumer in the group",
              "Broker — a Kafka server, topics are distributed across brokers",
              "Cluster — multiple brokers, replication, fault tolerance",
              "ZooKeeper / KRaft — coordination layer (KRaft is the modern replacement)"
            ]
          },
          {
            "id": "14-1-3",
            "title": "Topics and Partitions",
            "bullets": [
              "Partition key — determines which partition an event goes to",
              "Events with the same key always go to the same partition",
              "Why partition key matters — guarantees ordering for a specific entity (all events for order_id=123 are in order in the same partition)",
              "Replication factor — how many brokers store a copy of each partition",
              "Leader and follower replicas — leader handles reads/writes, followers replicate"
            ]
          },
          {
            "id": "14-1-4",
            "title": "Kafka vs BullMQ",
            "bullets": [
              "BullMQ — job queue, message consumed once and removed, Redis-backed",
              "Kafka — event log, events retained, multiple consumer groups can independently replay, built for high throughput",
              "When to move from BullMQ to Kafka — multiple services consuming the same events, need event replay, throughput > 10k events/second, event sourcing at infrastructure level",
              "When to stay with BullMQ — single consumer per job type, moderate throughput, simpler ops"
            ]
          },
          {
            "id": "14-1-5",
            "title": "Kafka vs RabbitMQ",
            "bullets": [
              "RabbitMQ — traditional message broker, push-based, rich routing (exchanges, queues, bindings), messages deleted after consumption",
              "Kafka — pull-based, consumers control pace, events retained, simpler routing but massively higher throughput",
              "When to choose RabbitMQ — complex routing logic, when you need message acknowledgment and guaranteed delivery without building it, moderate throughput with rich routing needs",
              "When to choose Kafka — event sourcing, event replay, multiple independent consumers, very high throughput"
            ]
          }
        ]
      },
      {
        "id": "14.2",
        "title": "Kafka Implementation [TP]",
        "tasks": [
          {
            "id": "14-2-1",
            "title": "Setup with KafkaJS (Node.js)",
            "bullets": [
              "Installing kafkajs",
              "Creating a Kafka client — brokers, clientId, sasl config",
              "Admin client — creating topics programmatically",
              "Topic configuration — numPartitions, replicationFactor"
            ]
          },
          {
            "id": "14-2-2",
            "title": "Producers",
            "bullets": [
              "Creating a producer — producer.connect()",
              "Sending messages — producer.send({ topic, messages })",
              "Message structure — key, value (JSON stringified), headers, timestamp",
              "Partition key — set message.key to route to correct partition",
              "Compression — gzip or snappy for high-volume topics",
              "Idempotent producer — ensure no duplicate messages on retry",
              "Transactions — atomic multi-topic produce"
            ]
          },
          {
            "id": "14-2-3",
            "title": "Consumers",
            "bullets": [
              "Creating a consumer — consumer.connect(), consumer.subscribe()",
              "Consumer group — groupId, multiple instances share partitions",
              "Running the consumer — consumer.run({ eachMessage })",
              "eachMessage handler — topic, partition, message, offset",
              "Manual offset commit — commitOffsets() for at-least-once processing",
              "Rebalancing — what happens when consumers join or leave a group",
              "Backpressure — pause/resume consumption when processing is slow"
            ]
          },
          {
            "id": "14-2-4",
            "title": "Error handling in Kafka consumers",
            "bullets": [
              "Dead letter topic — failed messages sent to a separate topic",
              "Retry topic — retry with delay before dead lettering",
              "Poison pill — a message that always fails, must detect and skip",
              "Idempotent handlers — processing the same message twice must be safe"
            ]
          },
          {
            "id": "14-2-5",
            "title": "Kafka patterns",
            "bullets": [
              "Event sourcing with Kafka — Kafka as the system of record for events",
              "CQRS with Kafka — commands produce events, projections consume them",
              "Saga pattern — distributed transaction across services via events",
              "Outbox pattern — write event to DB in same transaction as business data, relay process reads outbox and publishes to Kafka"
            ]
          },
          {
            "id": "14-2-6",
            "title": "Monitoring Kafka",
            "bullets": [
              "Consumer lag — how far behind a consumer group is from the latest offset",
              "High lag = consumer is slow, serious in production",
              "Kafka UI or Confluent Control Center for visibility",
              "Key metrics — messages per second, consumer lag, partition distribution"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 14:\n   Set up Kafka locally with Docker. Create three topics: user.events,\n   payment.events, ai.usage. Build a producer service that publishes to\n   all three from your app (user signed up, payment succeeded, AI call made).\n   Build two consumer services: 1) analytics consumer that reads all three\n   topics and aggregates into a stats table, 2) notification consumer that\n   reads payment.events and triggers a Socket.io notification. Implement\n   a dead letter topic for failed events. Observe consumer lag in Kafka UI."
      }
    ]
  },
  {
    "id": "15",
    "title": "Elasticsearch",
    "goal": "Build powerful search capabilities and understand the search layer.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "15.1",
        "title": "Elasticsearch Fundamentals [T]",
        "tasks": [
          {
            "id": "15-1-1",
            "title": "What Elasticsearch is",
            "bullets": [
              "Distributed search and analytics engine built on Apache Lucene",
              "Not a primary database — a search layer on top of your primary DB",
              "Near real-time search — documents indexed and searchable within 1 second",
              "Horizontal scaling — sharding and replication built in",
              "RESTful API — every operation via HTTP"
            ]
          },
          {
            "id": "15-1-2",
            "title": "Core concepts",
            "bullets": [
              "Index — like a database/table, holds documents of the same type",
              "Document — a JSON object stored in an index",
              "Shard — an index is split into shards for distribution",
              "Replica — a copy of a shard for fault tolerance and read scaling",
              "Node — a single Elasticsearch server",
              "Cluster — multiple nodes, shards distributed across them",
              "Inverted index — the data structure behind fast text search — maps terms to the documents containing them"
            ]
          },
          {
            "id": "15-1-3",
            "title": "How Elasticsearch differs from Postgres full-text search",
            "bullets": [
              "Postgres FTS — good for simple full-text search on small to medium data",
              "Elasticsearch — better relevance scoring, fuzzy matching, synonyms, multi-language, faceted search, analytics, scales independently",
              "When to use Postgres FTS — simple search on existing data, small dataset, don't want another service",
              "When to use Elasticsearch — complex search requirements, large dataset, need relevance tuning, need search analytics"
            ]
          }
        ]
      },
      {
        "id": "15.2",
        "title": "Elasticsearch Implementation [TP]",
        "tasks": [
          {
            "id": "15-2-1",
            "title": "Mappings and Index Design",
            "bullets": [
              "Mapping — defines the schema of an index (field types, analyzers)",
              "Field types — text (analyzed for search), keyword (exact match), integer, float, date, boolean, nested, object",
              "text vs keyword — text is analyzed (split into tokens), keyword is not (used for exact filters, sorting, aggregations)",
              "Analyzers — how text is processed: standard, language-specific, custom with tokenizers and filters",
              "Dynamic mapping vs explicit mapping — let ES guess or define yourself",
              "Index templates — apply mappings to new indices automatically"
            ]
          },
          {
            "id": "15-2-2",
            "title": "Indexing documents",
            "bullets": [
              "The @elastic/elasticsearch Node.js client",
              "client.index() — index a single document",
              "client.bulk() — index many documents efficiently",
              "Document ID — provide your own (e.g. DB primary key) for upsert",
              "Refresh policy — when=true forces refresh, when='wait_for' waits, default is async (best performance)",
              "Synchronisation strategy — sync on write from your API, or use a Kafka consumer / BullMQ job to sync from DB"
            ]
          },
          {
            "id": "15-2-3",
            "title": "Search queries",
            "bullets": [
              "match — full-text search on analyzed text fields",
              "term — exact match on keyword fields",
              "range — numeric or date range filtering",
              "bool query — combine must, should, must_not, filter clauses",
              "multi_match — search across multiple fields simultaneously",
              "fuzzy — match despite typos (Levenshtein distance)",
              "wildcard and regexp — pattern matching (use sparingly, expensive)",
              "highlight — return snippets showing where the match occurred"
            ]
          },
          {
            "id": "15-2-4",
            "title": "Relevance scoring",
            "bullets": [
              "BM25 — the default scoring algorithm (replaces TF-IDF)",
              "Boosting — increase the relevance weight of specific fields",
              "Function score — multiply relevance by a custom function (e.g. boost recent documents, or documents with higher ratings)"
            ]
          },
          {
            "id": "15-2-5",
            "title": "Aggregations",
            "bullets": [
              "What aggregations are — analytics on your search results",
              "terms aggregation — count documents per unique value (faceted search)",
              "date_histogram — count documents per time bucket (usage over time)",
              "avg, sum, min, max, percentiles — numeric aggregations",
              "Nested aggregations — aggregate within aggregations"
            ]
          },
          {
            "id": "15-2-6",
            "title": "Node.js Integration Patterns",
            "bullets": [
              "Sync on write — after saving to Postgres, index to Elasticsearch",
              "Async sync — BullMQ job or Kafka consumer handles ES indexing",
              "Full reindex — script that reads all records from DB and bulk indexes",
              "Partial update — client.update() with doc field, only changed fields",
              "Delete on DB delete — client.delete() by document ID",
              "Index aliases — point an alias at an index, reindex without downtime"
            ]
          },
          {
            "id": "15-2-7",
            "title": "The ELK Stack context",
            "bullets": [
              "Elasticsearch — stores and searches the data",
              "Logstash — ingest pipeline (parse, transform, load logs into ES)",
              "Kibana — UI for searching, visualising, and dashboarding ES data",
              "For your use case — Elasticsearch + Kibana is sufficient, Logstash optional if you're not ingesting complex log formats",
              "Kibana Dev Tools — run queries directly, essential for development"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 15:\n   Add search to your app. Create an Elasticsearch index for tasks/notes\n   with explicit mapping (title as text, status as keyword, created_at as\n   date, org_id as keyword). Sync records to ES via a BullMQ job on\n   create/update/delete. Build a search endpoint — GET /search?q=term with\n   bool query (must match title, filter by org_id). Add a faceted count\n   aggregation by status. Add fuzzy matching for typo tolerance. Set up\n   Kibana and use Dev Tools to inspect your index and run queries manually."
      }
    ]
  },
  {
    "id": "16",
    "title": "Advanced Security (Fintech-specific)",
    "goal": "Not optional when handling money and user data.",
    "time": "2–3 weeks",
    "topics": [
      {
        "id": "16.1",
        "title": "API & Application Security [TP]",
        "tasks": [
          {
            "id": "16-1-1",
            "title": "API security hardening",
            "bullets": [
              "Auth on every endpoint — zero unauthenticated routes except /health",
              "Principle of least privilege — tokens and keys carry minimum scope",
              "Never log sensitive data — no passwords, no card details, no JWTs, no personal data in logs",
              "Request size limits — prevent payload flooding with express body limits",
              "Parameter pollution prevention — express-hpp middleware"
            ]
          },
          {
            "id": "16-1-2",
            "title": "Rate limiting and abuse detection",
            "bullets": [
              "Layered rate limits — per IP (login), per user, per API key",
              "Credential stuffing detection — many failed logins from one IP",
              "Account lockout — lock after N failed attempts, exponential backoff on unlock, notify user via email",
              "Anomaly detection — unusual usage spikes per API key trigger review"
            ]
          },
          {
            "id": "16-1-3",
            "title": "Audit trail",
            "bullets": [
              "Append-only audit_log table — action, actor_id, target_type, target_id, ip_address, user_agent, timestamp, result",
              "Log all auth events — login, logout, failed login, password change, email change, role change",
              "Log all payment events — every Stripe event, every DB update",
              "Log all admin actions — any action by an admin role",
              "Audit logs must survive app data deletion — separate storage or schema"
            ]
          }
        ]
      },
      {
        "id": "16.2",
        "title": "Data Security [TP]",
        "tasks": [
          {
            "id": "16-2-1",
            "title": "Encryption",
            "bullets": [
              "Encryption in transit — TLS everywhere, no HTTP in production, verify certificates don't expire (automate renewal)",
              "Encryption at rest — enable Postgres encryption at the disk level (cloud providers do this by default for managed DBs)",
              "Field-level encryption — encrypt PII columns (SSN, bank account numbers) in the application before writing to DB",
              "Key management — never store encryption keys in code or .env, use AWS Secrets Manager, HashiCorp Vault, or Doppler"
            ]
          },
          {
            "id": "16-2-2",
            "title": "Secrets rotation",
            "bullets": [
              "What rotation is — periodically replacing secrets with new ones",
              "JWT secret rotation — deploy new secret, accept both old and new tokens during overlap period, phase out old secret",
              "API key rotation — issue new key, deprecate old with grace period",
              "DB password rotation — update in secrets manager, trigger app restart",
              "Automation — rotate on a schedule, not just after suspected breach"
            ]
          }
        ]
      },
      {
        "id": "16.3",
        "title": "Dependency & Infrastructure Security [T]",
        "tasks": [
          {
            "id": "16-3-1",
            "title": "Dependency security",
            "bullets": [
              "npm audit — scan for known vulnerabilities, run in CI",
              "GitHub Dependabot — automated PRs for security updates",
              "Snyk — deeper vulnerability scanning, license compliance",
              "Pinning versions — use exact versions in production, review updates",
              "Supply chain awareness — before installing a package check: weekly downloads, last published, open issues, maintainer reputation"
            ]
          },
          {
            "id": "16-3-2",
            "title": "Infrastructure security",
            "bullets": [
              "Firewall — only expose ports 80 and 443 publicly, DB on private network",
              "SSH hardening — key-based auth only, disable password auth, fail2ban",
              "Least privilege IAM — each service has minimum cloud permissions",
              "VPC — your DB and Redis not reachable from the public internet",
              "Security scanning — periodic OWASP ZAP scan against your staging env"
            ]
          }
        ],
        "miniProject": ">> FINAL PROJECT — Security Capstone:\n   Do a full security review pass on your codebase. Checklist:\n   - Every route is authenticated (except /health, /ready, /auth/*)\n   - Rate limits on all public endpoints\n   - No secrets in code or git history (use git-secrets to scan)\n   - Audit log covers all financial and auth actions\n   - npm audit returns zero high/critical vulnerabilities\n   - All PII fields encrypted at rest\n   - JWT rotation plan documented\n   Write a one-page threat model — the top 5 attack vectors on your app\n   and exactly what you've done to mitigate each."
      }
    ]
  }
];
