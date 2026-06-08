================================================================================
BACKEND ROADMAP — Node.js · SaaS / Fintech / AI Platform
Profile: Startup builder · Full-time · 1–2 years to production-ready
Priorities: Auth · Payments · AI APIs · Real-time · Scale
================================================================================


--------------------------------------------------------------------------------
PHASE 1 — Foundations
Goal: Understand how the internet and servers actually work before writing code.
Time: 3–4 weeks
--------------------------------------------------------------------------------

TOPIC 1.1 — Internet Basics
------------------------------

[ ] How does the internet work?
    - What is a packet and how data travels across networks
    - What is an IP address and how devices are identified
    - TCP vs UDP — difference and when each is used
    - What is a port number and why it matters (80, 443, 3000 etc.)
    - What is a client and what is a server

[ ] HTTP vs HTTPS — Request/Response cycle
    - HTTP methods — GET, POST, PUT, DELETE, PATCH and what each means
    - What is a request header and a response header
    - What is a status code — 200, 201, 400, 401, 403, 404, 500
    - What is HTTPS and why HTTP alone is insecure
    - What is SSL/TLS at a high level (encryption in transit)
    - What is a request body and when it is used

[ ] How browsers work
    - What happens step by step when you type a URL and hit Enter
    - What is rendering — how HTML/CSS/JS becomes a page
    - What are browser dev tools and how to use the Network tab
    - What is a cookie and what is local storage

[ ] DNS
    - What is a domain name and who owns it
    - What is a DNS resolver and what it does
    - What is an A record, CNAME, MX record
    - What is TTL in DNS context
    - How DNS resolution flows from browser to root server to your IP

[ ] Hosting basics
    - What is a VPS vs shared hosting vs cloud hosting
    - What is a server process and what it means for your app to "run"
    - What is a region and why it affects latency
    - What is an IP address vs a domain name in hosting context

>> MINI PROJECT after 1.1:
   Draw (on paper or Excalidraw) the full journey of a request from browser
   to server and back. Label every step — DNS, TCP, HTTP, server, response.
   Write one paragraph explaining it in plain English.


TOPIC 1.2 — Terminal & Git
------------------------------

[ ] Basic Linux/terminal commands
    - Navigating — pwd, ls, cd, cd ..
    - Files — touch, mkdir, rm, rm -rf, cp, mv
    - Reading files — cat, less, head, tail
    - Permissions — chmod basics, what 755 and 644 mean
    - Processes — ps, kill, what a running process is

[ ] Git fundamentals
    - What is version control and why it exists
    - git init, git status, git add, git commit
    - What is a commit hash and why commits are immutable
    - git log — reading history
    - git diff — seeing what changed
    - .gitignore — what to exclude and why (node_modules, .env)

[ ] GitHub workflow
    - git push, git pull, git clone
    - What is a branch and why you never work directly on main
    - git checkout -b, git merge, git rebase basics
    - What is a pull request and how code review works
    - Resolving a merge conflict step by step

>> MINI PROJECT after 1.2:
   Create a GitHub repo. Write a plain text file documenting your Phase 1.1
   notes. Commit it with a proper message. Create a branch, edit the file,
   push the branch, open a pull request, and merge it into main yourself.


================================================================================


--------------------------------------------------------------------------------
PHASE 2 — Node.js Core
Goal: Be genuinely comfortable with JS and the runtime before touching frameworks.
Time: 4–6 weeks
--------------------------------------------------------------------------------

TOPIC 2.1 — JavaScript (beyond basics)
----------------------------------------

[ ] ES6+ syntax
    - let and const vs var — scoping differences
    - Arrow functions — syntax and how `this` behaves differently
    - Destructuring — from objects and arrays
    - Spread and rest operators — ... in different contexts
    - Template literals — string interpolation with backticks
    - Optional chaining (?.) and nullish coalescing (??)
    - Short-circuit evaluation in conditionals

[ ] Async JavaScript
    - What is the call stack and why JS is single-threaded
    - What is a callback and the problem with callback hell
    - What is a Promise — pending, fulfilled, rejected states
    - .then(), .catch(), .finally() chaining
    - async/await — writing async code that reads synchronously
    - Promise.all, Promise.allSettled, Promise.race — when to use each
    - Handling errors correctly in async functions

[ ] Modules
    - What is a module and why code is split into files
    - CommonJS — module.exports, require()
    - ES Modules — export, export default, import
    - When you'll see each in Node.js projects
    - Circular dependency — what it is and why to avoid it

[ ] Error handling
    - try / catch / finally — how it works
    - What is the Error object — message, stack, name
    - Creating custom error classes that extend Error
    - Throwing errors intentionally vs catching unexpected ones
    - Unhandled promise rejections — why they crash Node apps

>> MINI PROJECT after 2.1:
   Build a CLI tool in plain Node.js (no frameworks). It reads a .txt file,
   counts word frequency, and prints the top 10 words. Use async/await for
   file reading, a custom error class if the file is missing, and split code
   across at least 2 modules.


TOPIC 2.2 — Node.js Runtime
------------------------------

[ ] How Node.js works
    - What is the V8 engine
    - What is the event loop — phases: timers, I/O, poll, check
    - What is non-blocking I/O and why it makes Node fast for APIs
    - What is libuv and what it handles under the hood
    - What blocking the event loop means and how to avoid it

[ ] Built-in modules
    - fs — readFile, writeFile, appendFile, sync vs async versions
    - path — join, resolve, dirname, extname
    - http — creating a raw HTTP server without Express
    - os — cpus, platform, totalmem (useful for health checks)
    - events — EventEmitter, on(), emit() — the pattern Node is built on

[ ] npm
    - What is npm and what the registry is
    - npm init, package.json structure — name, version, scripts, dependencies
    - dependencies vs devDependencies — the difference
    - package-lock.json — why it exists and why you commit it
    - npm scripts — start, dev, test and writing custom ones
    - Semantic versioning — what 1.2.3, ^1.2.3, ~1.2.3 mean

[ ] Environment variables
    - What an environment variable is and why it exists
    - The dotenv package — loading a .env file
    - What goes in .env — DB URLs, API keys, ports
    - Why .env must never be committed (add to .gitignore)
    - Accessing variables via process.env.VARIABLE_NAME

>> MINI PROJECT after 2.2:
   Build a raw HTTP server using only Node's built-in `http` module — no
   Express. Handle GET /hello (return JSON), GET /file (read and return a
   .txt file async), and any other route returns 404. Use dotenv for the
   port. No npm packages except dotenv.


================================================================================


--------------------------------------------------------------------------------
PHASE 3 — Building APIs
Goal: Build clean, production-grade REST APIs — your product's backbone.
Time: 5–6 weeks
--------------------------------------------------------------------------------

TOPIC 3.1 — Express.js
------------------------

[ ] Setting up an Express server
    - Installing Express, creating app.js, app.listen()
    - What app.use() does and the middleware chain concept
    - express.json() and express.urlencoded() — parsing request bodies
    - What req, res, next are and when to call next()

[ ] Routing
    - Defining routes — app.get(), app.post(), app.put(), app.delete()
    - Route parameters — /users/:id and req.params
    - Query strings — /search?q=term and req.query
    - express.Router() — splitting routes into separate files
    - Grouping routes by resource (/api/v1/users, /api/v1/payments)

[ ] Middleware
    - What middleware is — functions that run between request and response
    - Writing a custom logger middleware
    - Writing an auth middleware (check JWT before reaching route)
    - Third-party middleware — morgan, helmet, cors
    - Order of middleware matters — common mistakes

[ ] Request validation
    - Why validating input is non-negotiable
    - Zod — defining a schema, parsing req.body, handling errors
    - Returning a proper 400 error when validation fails
    - Validating route params and query strings too

[ ] Error handling middleware
    - The special 4-argument signature — (err, req, res, next)
    - Centralising all error responses in one place
    - Creating an AppError class with statusCode and message
    - Distinguishing operational errors from programmer errors

[ ] Project structure
    - routes/ — only route definitions
    - controllers/ — request/response logic
    - services/ — business logic, no req/res here
    - models/ — data layer
    - middleware/ — reusable middleware
    - Why this separation keeps large projects maintainable

[ ] REST API Design
    - Statelessness — server stores no session, every request is self-contained
    - Resource naming — /users not /getUsers, plural nouns
    - Correct use of HTTP verbs for each action
    - Consistent JSON response envelope — { success, data, error }
    - API versioning — why /api/v1/ prefix saves you later

[ ] OpenAPI / Swagger
    - What OpenAPI is — a standard format for describing APIs
    - swagger-jsdoc + swagger-ui-express setup
    - Documenting a route with JSDoc comments
    - Why documentation from day one saves pain later

>> MINI PROJECT after 3.1:
   Build a fully structured REST API for a simple resource — e.g. "Notes"
   or "Tasks". Implement full CRUD. Use Zod for validation, a centralised
   error handler, proper HTTP status codes, and Swagger docs. Data can be
   in-memory (array) for now — no DB yet.


TOPIC 3.2 — Paid API Endpoints (Priority)
-------------------------------------------

[ ] API key generation and management
    - Generating a secure random key with crypto.randomBytes()
    - Hashing the key before storing in DB (never store plaintext)
    - Sending the key to the user once — they must save it
    - Middleware that reads Authorization header, hashes input, checks DB

[ ] Rate limiting per API key
    - What rate limiting is and why every public API needs it
    - express-rate-limit — setting windowMs and max
    - Keying limits per API key not per IP
    - Returning 429 Too Many Requests with a Retry-After header

[ ] Usage tracking
    - Incrementing a usage counter per API key on every request
    - Storing call count + timestamp in DB
    - Returning current usage in response headers (X-RateLimit-Remaining)
    - Blocking requests when quota is exceeded

>> MINI PROJECT after 3.2:
   Extend your Notes API. Add API key auth — a script generates a key,
   stores the hash in a JSON file (pretend DB). All routes require the key
   in a header. Add rate limiting — max 10 requests per minute per key.
   Log each request with timestamp and key ID.


================================================================================


--------------------------------------------------------------------------------
PHASE 4 — Databases
Goal: Store, query, and model data reliably for a multi-tenant SaaS.
Time: 5–6 weeks
--------------------------------------------------------------------------------

TOPIC 4.1 — PostgreSQL
------------------------

[ ] Relational model
    - What a table, row, column, and schema are
    - Primary keys — what they are and why every table needs one
    - Foreign keys — linking tables together
    - One-to-many and many-to-many relationships
    - What NULL means and when to allow it

[ ] SQL fundamentals
    - SELECT with WHERE, ORDER BY, LIMIT, OFFSET
    - INSERT INTO, UPDATE, DELETE with WHERE clause
    - JOINs — INNER, LEFT, RIGHT — when to use each
    - GROUP BY and aggregate functions — COUNT, SUM, AVG, MAX
    - Subqueries and when they are useful

[ ] Indexes
    - What an index is and how it speeds up queries
    - The cost of indexes on writes
    - When to add an index — high-read, filter/sort columns
    - Composite indexes — indexing multiple columns together
    - EXPLAIN ANALYZE — reading a query plan in Postgres

[ ] Transactions and ACID
    - What a transaction is — BEGIN, COMMIT, ROLLBACK
    - Atomicity — all or nothing
    - Consistency — DB constraints are always met
    - Isolation — concurrent transactions don't corrupt each other
    - Durability — committed data survives crashes
    - Why this matters for payment records

[ ] Migrations
    - What a migration is — a versioned script that changes schema
    - Why you never manually ALTER TABLE in production
    - Writing up and down migrations
    - Running migrations safely in CI/CD

TOPIC 4.2 — Prisma ORM
------------------------

[ ] Schema and models
    - prisma/schema.prisma — defining models, fields, types
    - Defining relations — @relation, one-to-many, many-to-many
    - Running prisma migrate dev to apply changes
    - prisma generate — regenerating the client after schema change

[ ] CRUD with Prisma Client
    - findMany, findUnique, findFirst — querying records
    - create, createMany — inserting records
    - update, updateMany, upsert — modifying records
    - delete, deleteMany — removing records
    - Filtering with where, sorting with orderBy, paginating with skip/take

[ ] N+1 problem
    - What N+1 is — fetching parent then looping to fetch children
    - How it silently kills performance at scale
    - Fixing it with Prisma's include and select

>> MINI PROJECT after 4.1 + 4.2:
   Rebuild your Notes/Tasks API with a real Postgres database via Prisma.
   Add a User model — each note belongs to a user. Write migrations. Add
   pagination to the GET all endpoint. Use a transaction when deleting a
   user to also delete their notes.


TOPIC 4.3 — Redis
-------------------

[ ] What Redis is
    - In-memory key-value store — data lives in RAM, not disk
    - Data types — strings, hashes, lists, sets, sorted sets
    - TTL — setting expiry on keys
    - When Redis is the right tool vs Postgres

[ ] Caching
    - Cache-aside pattern — check Redis, fallback to DB, store in Redis
    - What to cache — expensive queries, AI responses, static data
    - Cache invalidation — when and how to clear stale data
    - Cache stampede — what it is and how to prevent it

[ ] Session storage
    - Storing user sessions in Redis instead of DB
    - connect-redis with express-session
    - Session TTL and renewal on activity

[ ] Rate limiting with Redis
    - Using INCR + EXPIRE for a sliding window counter
    - Why Redis-backed rate limiting works across multiple server instances

[ ] BullMQ (job queues)
    - What a job queue is — offloading slow work from the request cycle
    - Creating a queue, adding a job, writing a worker
    - Job retries, backoff strategy, failed job handling
    - Use cases — sending emails, processing webhooks, running AI tasks

>> MINI PROJECT after 4.3:
   Add Redis to your API. Cache the GET all notes response — invalidate
   cache on create/update/delete. Add a background job with BullMQ that
   sends a (fake, console.log) email when a note is created. Run the whole
   thing locally with Docker Compose (app + postgres + redis).


================================================================================


--------------------------------------------------------------------------------
PHASE 5 — Authentication & User Management  [PRIORITY]
Goal: Secure, scalable auth for a SaaS with multiple user types.
Time: 3–4 weeks
--------------------------------------------------------------------------------

TOPIC 5.1 — Core Auth Concepts
--------------------------------

[ ] Password hashing
    - Why plaintext passwords are catastrophic
    - What a hash function is vs encryption
    - bcrypt — cost factor, salting, why it is slow by design
    - bcrypt.hash() and bcrypt.compare() usage

[ ] JWT
    - JWT structure — header.payload.signature
    - What is signed vs encrypted — JWTs are signed, not secret
    - Signing a token with a secret key using jsonwebtoken
    - Verifying a token and extracting the payload
    - Token expiry — why short-lived access tokens matter
    - Refresh tokens — longer-lived, used to get new access tokens

[ ] Cookie vs token-based auth
    - HTTP-only cookies — what they are, why they resist XSS
    - Bearer token in Authorization header — how SPAs typically work
    - Pros and cons of each approach
    - When to combine both (access token in memory, refresh in cookie)

TOPIC 5.2 — Implementation
-----------------------------

[ ] Email/password signup + login
    - Signup flow — validate input, check duplicate email, hash password, save
    - Login flow — find user, compare password, issue tokens
    - Returning tokens securely in the response

[ ] Access + refresh token rotation
    - Issuing a short-lived access token (15 min) and refresh token (7 days)
    - Storing refresh token hash in DB
    - /auth/refresh endpoint — validate refresh token, issue new pair
    - Refresh token rotation — old token invalidated on each refresh
    - /auth/logout — deleting the refresh token from DB

[ ] OAuth 2.0
    - What OAuth 2.0 is — delegated auth, you don't handle the password
    - Authorization code flow step by step
    - Implementing Google login with Passport.js
    - Linking OAuth accounts to existing email/password accounts

[ ] RBAC
    - What roles are — admin, user, api-client
    - Storing role on the user record
    - Writing a requireRole('admin') middleware
    - Principle of least privilege — default to lowest access

[ ] Email verification + password reset
    - Generating a secure time-limited token for email verification
    - Sending the verification link (use Resend or Nodemailer)
    - Password reset flow — request link, verify token, update hash
    - Invalidating the reset token after single use

[ ] Multi-tenancy
    - What multi-tenancy means — multiple orgs sharing one app
    - Row-level tenancy — every table has an org_id column
    - Ensuring queries always filter by org_id
    - Tenant context middleware — attaching org to req object
    - Invitation flow — inviting a user to join an org

TOPIC 5.3 — Security Basics (OWASP)
--------------------------------------

[ ] CORS
    - What same-origin policy is and why it exists
    - What CORS headers do — Access-Control-Allow-Origin
    - Configuring the cors package — allowed origins, methods, headers
    - Why wildcard (*) CORS is dangerous in production

[ ] Input sanitisation
    - SQL injection — how it works, how parameterised queries prevent it
    - XSS — injecting scripts via user input, how to prevent it
    - Never trust req.body — validate and sanitise everything

[ ] Security headers
    - helmet.js — what it sets and why
    - CSP — restricting what scripts can run on your pages
    - HSTS — forcing HTTPS

>> MINI PROJECT after Phase 5:
   Build a complete auth system as a standalone Express app. Signup, login,
   JWT access + refresh tokens, logout, email verification (log the link,
   no real email needed), Google OAuth, and two roles: user and admin. One
   protected admin-only route. Multi-tenant: users belong to an org, all
   data scoped by org_id.


================================================================================


--------------------------------------------------------------------------------
PHASE 6 — Payments & Billing  [PRIORITY]
Goal: Charge users reliably. Get this wrong and it costs money and trust.
Time: 3–4 weeks
--------------------------------------------------------------------------------

TOPIC 6.1 — Stripe Core
-------------------------

[ ] Stripe data model
    - Products — what you sell
    - Prices — how much, what billing interval
    - Customers — Stripe's representation of your user
    - PaymentMethods — cards attached to a customer
    - Subscriptions — customer + price + billing cycle

[ ] Subscription billing
    - Creating a Stripe Customer when a user signs up
    - Creating a Subscription and linking to your DB
    - Handling plan upgrades and downgrades (proration)
    - Cancelling a subscription — end of period vs immediate
    - Trial periods — how to set them up

[ ] One-time payments
    - Stripe Checkout Session — hosted payment page
    - Payment Intents — custom payment UI with Stripe Elements
    - Confirming payment and updating your DB on success

[ ] Webhooks
    - What a webhook is — Stripe calls your server when things happen
    - Verifying the Stripe-Signature header — mandatory, not optional
    - Handling key events: invoice.paid, invoice.payment_failed,
      customer.subscription.deleted, checkout.session.completed
    - Idempotency — your webhook handler must be safe to call twice

[ ] Idempotency keys
    - What idempotency means — same input, same result, no duplicates
    - Sending idempotency keys on Stripe API calls
    - Storing Stripe event IDs and skipping already-processed events

TOPIC 6.2 — Usage-Based Billing
---------------------------------

[ ] Metered billing in Stripe
    - Creating a metered Price in Stripe
    - Reporting usage to Stripe via the usage records API
    - When to report — end of day batch vs real-time
    - Stripe billing thresholds — charging when usage hits a limit

[ ] Internal usage tracking
    - A usage_logs table — user_id, api_key_id, timestamp, endpoint
    - Aggregating usage per billing period
    - Syncing internal counts with Stripe reported usage

TOPIC 6.3 — Fintech Considerations
-------------------------------------

[ ] PCI compliance basics
    - What PCI DSS is and why you must care
    - Why you never touch raw card numbers — use Stripe Elements/Checkout
    - SAQ-A compliance — the simplest level when Stripe handles everything

[ ] Audit logs
    - Every financial action needs a log — who, what, when, result
    - Append-only table — no UPDATEs or DELETEs on audit records
    - What to log — payment initiated, succeeded, failed, refunded

[ ] Reconciliation
    - Matching Stripe events to your internal payment records
    - What to do when they disagree
    - Running a nightly reconciliation job

>> MINI PROJECT after Phase 6:
   Build a billing service. Users can subscribe to a "Pro" plan. Implement
   checkout with Stripe, a webhook handler for the key events, and update a
   subscriptions table in your DB. Add a usage_logs table — log every API
   call. Write a script that reads the logs and reports metered usage to
   Stripe. Test fully in Stripe test mode.


================================================================================


--------------------------------------------------------------------------------
PHASE 7 — Real-Time Features  [PRIORITY]
Goal: Live data, notifications, and event-driven UX.
Time: 3 weeks
--------------------------------------------------------------------------------

[ ] WebSockets
    - What a WebSocket is — persistent TCP connection, unlike HTTP
    - The handshake — starts as HTTP, upgrades to WS
    - ws vs socket.io — raw vs abstracted
    - When to use WebSockets vs polling vs SSE

[ ] Socket.io
    - Setting up socket.io on Express server
    - Emitting and listening to events — emit(), on()
    - Rooms — grouping sockets (one room per user, per org, per chat)
    - Namespaces — separating concerns (/notifications, /chat)
    - Broadcasting — to a room, to everyone except sender
    - Handling disconnects and reconnects
    - Authenticating socket connections — verify JWT on handshake

[ ] Server-Sent Events (SSE)
    - What SSE is — one-way stream from server to client over HTTP
    - Why it is perfect for AI streaming responses
    - Setting the right headers — text/event-stream
    - Writing an SSE endpoint in Express
    - Client-side EventSource API

[ ] Real-time notifications
    - Architecture — events trigger notifications (payment succeeded, etc.)
    - Storing notifications in DB + emitting to socket room
    - Marking notifications as read

>> MINI PROJECT after Phase 7:
   Add two real-time features to your app. 1) A notification system — when
   a payment succeeds (simulate it), the user gets a live notification via
   socket.io. 2) An AI streaming endpoint — call OpenAI with streaming on,
   pipe the response via SSE to a simple HTML page that renders it word by
   word.


================================================================================


--------------------------------------------------------------------------------
PHASE 8 — AI / ML API Integration  [PRIORITY]
Goal: Build and expose AI-powered endpoints at scale.
Time: 3–4 weeks
--------------------------------------------------------------------------------

[ ] Consuming AI APIs
    - OpenAI and Anthropic SDK setup — client, API key, first call
    - Chat completions — messages array, roles (system/user/assistant)
    - Streaming completions — what it is and why users expect it
    - Token limits — context window, max_tokens, truncation strategies
    - Temperature and other parameters — what they control

[ ] Handling streaming
    - Stream vs non-stream response shape
    - Iterating over chunks with for await...of
    - Piping stream chunks to SSE response
    - Handling stream errors and client disconnects mid-stream

[ ] Retry logic and resilience
    - Exponential backoff — why you wait longer after each retry
    - Which errors to retry — 429, 503 — and which not to — 400, 401
    - Setting a max retry count and timeout
    - Failing gracefully — returning a clean error to the user

[ ] Building your own AI endpoints
    - Designing the input schema — what your endpoint accepts
    - Designing the output schema — consistent response shape
    - Prompt templating — building prompts from user input safely
    - Prompt injection — what it is, basic defences

[ ] Queuing expensive AI jobs
    - Why you must not await AI calls in the request thread for long tasks
    - Adding AI jobs to BullMQ — jobId returned to client immediately
    - Worker processes the job, stores result in DB
    - Client polls or gets notified via WebSocket when done

[ ] Cost and token tracking
    - Logging token usage per request — prompt tokens + completion tokens
    - Storing cost per user per month
    - Setting hard limits — reject requests when user exceeds quota
    - Alerting when your own API cost spikes

[ ] Vector databases and RAG basics
    - What a vector/embedding is — a number array representing meaning
    - pgvector — Postgres extension for storing and querying embeddings
    - Generating embeddings via OpenAI embeddings API
    - Similarity search — finding the most relevant chunks for a prompt
    - RAG pattern — retrieve relevant docs, inject into prompt, generate

>> MINI PROJECT after Phase 8:
   Build an AI API product. Users authenticate with an API key. They POST
   a prompt, your server streams the OpenAI response back via SSE. Track
   token usage per key. If a key exceeds 10k tokens in a day, return 429.
   Add one RAG endpoint — user uploads a .txt doc, you chunk it, embed it
   with pgvector, and answer questions about it.


================================================================================


--------------------------------------------------------------------------------
PHASE 9 — Testing & CI/CD
Goal: Ship confidently. Catch bugs before users do.
Time: 3 weeks
--------------------------------------------------------------------------------

[ ] Unit testing with Jest
    - What a unit test is — testing one function in isolation
    - Arrange, Act, Assert pattern
    - Writing tests for pure utility functions and service logic
    - Mocking — replacing dependencies with fakes using jest.fn()
    - Code coverage — what it means, why 100% is not the goal

[ ] Integration testing
    - What integration testing is — testing a full route with real DB
    - Setting up a test database — separate from dev
    - Seeding test data before each test, cleaning up after
    - Supertest — making HTTP requests to your Express app in tests
    - Testing auth flows — signup, login, protected route

[ ] Testing critical paths specifically
    - Testing webhook handler with a fake Stripe event payload
    - Testing rate limiting — fire requests, check 429
    - Testing RBAC — user cannot hit admin routes

[ ] GitHub Actions
    - What CI is — automated checks on every push
    - Writing a .github/workflows/ci.yml file
    - Steps — checkout, install, lint, test
    - Failing the pipeline when tests fail
    - Running tests against a Postgres + Redis service container in CI

[ ] Linting and formatting
    - ESLint — catching code errors and enforcing style
    - Prettier — consistent formatting, no debates
    - Running both in CI so bad code never merges

[ ] Deployment pipeline
    - What CD is — auto-deploy when CI passes on main
    - Environment promotion — dev → staging → production
    - Environment variables per environment — never share prod secrets

>> MINI PROJECT after Phase 9:
   Write tests for your existing app. At minimum: unit tests for service
   functions, integration tests for auth routes (signup, login, refresh),
   one webhook handler test, and one RBAC test. Set up GitHub Actions to
   run the full suite on every push. Merge only if green.


================================================================================


--------------------------------------------------------------------------------
PHASE 10 — Containerisation & Deployment
Goal: Your app runs the same everywhere. Deploy with confidence.
Time: 3–4 weeks
--------------------------------------------------------------------------------

[ ] Docker
    - What a container is — isolated process with its own filesystem
    - What an image is — the blueprint for a container
    - Writing a Dockerfile for a Node.js app
    - .dockerignore — exclude node_modules, .env, etc.
    - docker build, docker run, docker ps, docker logs
    - Multi-stage builds — smaller production images

[ ] Docker Compose
    - What Docker Compose is — defining multi-container apps
    - Writing a docker-compose.yml — app, postgres, redis services
    - Volumes — persisting Postgres data across restarts
    - Networks — how containers talk to each other
    - Environment variable injection from .env file

[ ] Cloud deployment
    - Railway or Render — deploying a Node.js app in under 10 minutes
    - Connecting a managed Postgres and Redis on the platform
    - Environment variables in the platform dashboard
    - Deployment logs and basic debugging

[ ] Nginx
    - What a reverse proxy is — sits in front of your Node.js app
    - Basic Nginx config — proxy_pass to Node app
    - SSL termination at Nginx — Let's Encrypt + Certbot
    - Serving static files via Nginx

[ ] Domain and HTTPS
    - Buying a domain and pointing it to your server IP
    - A record setup
    - Let's Encrypt — free SSL certificate, auto-renewal with Certbot

>> MINI PROJECT after Phase 10:
   Dockerise your full app. Write a docker-compose.yml that spins up app,
   postgres, and redis with one command. Deploy it to Railway or Render.
   Point a real domain at it. Everything must work over HTTPS. Share the
   live URL.


================================================================================


--------------------------------------------------------------------------------
PHASE 11 — Scalability & Architecture  [PRIORITY]
Goal: Build something that doesn't fall over when it gets traction.
Time: 4–8 weeks ongoing
--------------------------------------------------------------------------------

[ ] Architectural patterns
    - Monolith first — why you should not start with microservices
    - What a monolith is — everything in one deployable unit
    - When to extract a service — clear domain boundary, independent scale
    - Twelve-Factor App — 12 principles every SaaS backend should follow
    - Event-driven architecture — services communicate via events, not calls

[ ] Scaling databases
    - Read replicas — routing read queries to a replica to reduce primary load
    - Connection pooling with PgBouncer — why Node.js + Postgres needs this
    - What database sharding is — splitting data across multiple DBs
    - Indexes revisited — EXPLAIN ANALYZE as a habit, not a last resort
    - Slow query log — identifying and fixing the worst offenders

[ ] Message queues at scale
    - BullMQ recap — Redis-backed, good to 10k jobs/day
    - When to move to Kafka — high-throughput, event log, many consumers
    - What a dead letter queue is — failed jobs that need human review
    - At-least-once vs exactly-once delivery — the tradeoff

[ ] Observability
    - Structured logging with Pino — JSON logs, request IDs, log levels
    - What a correlation ID is — tracing one request across many log lines
    - Sentry — capturing and grouping errors in production automatically
    - Health check endpoints — /health (is app alive?) /ready (can it serve?)
    - Key metrics to track — p99 latency, error rate, queue depth, DB pool size

[ ] CAP Theorem
    - Consistency, Availability, Partition tolerance — pick two
    - What this means for your database choices in practice

>> MINI PROJECT after Phase 11:
   Add observability to your app. Set up Pino logging with a request ID on
   every log line. Add a /health and /ready endpoint. Integrate Sentry —
   deliberately throw an error and confirm it appears in Sentry. Write a
   doc explaining what you would extract into a separate service first if
   your app had 10x the users, and why.


================================================================================


--------------------------------------------------------------------------------
PHASE 12 — Advanced Security (Fintech-specific)
Goal: Not optional when handling money and user data.
Time: 2–3 weeks
--------------------------------------------------------------------------------

[ ] API security
    - Auth on every endpoint — no unauthenticated routes except /health
    - Principle of least privilege — tokens and API keys get minimum scope
    - Never log sensitive data — no passwords, no card details, no JWTs

[ ] Rate limiting and abuse detection
    - Layered rate limits — per IP, per user, per API key
    - Detecting credential stuffing — many failed logins from one IP
    - Locking accounts after N failed attempts with exponential backoff

[ ] Audit trail
    - Append-only audit_log table — action, actor, target, timestamp, result
    - Logging all auth events, all payment events, all admin actions
    - Storing audit logs separately — should survive app data deletion

[ ] Encryption
    - Encryption in transit — TLS everywhere, no HTTP in production
    - Encryption at rest — enabling Postgres encryption at the DB level
    - Field-level encryption for PII — encrypting sensitive columns in app
    - Key management — where to store encryption keys safely

[ ] Dependency security
    - npm audit — running it regularly, understanding the output
    - Snyk or GitHub Dependabot — automated alerts for vulnerable packages
    - Pinning dependency versions in production
    - Supply chain basics — risks of installing random npm packages

[ ] Secrets rotation
    - What secrets rotation is and why it is needed
    - Rotating JWT secret without logging everyone out
    - Using a secrets manager — AWS Secrets Manager, Doppler, Infisical

>> FINAL PROJECT — Capstone:
   By this point you should have a near-complete SaaS backend. Do a
   security review pass on your own codebase. Check: every route is
   authed, rate limits are in place, no secrets in code, audit log covers
   all financial actions, npm audit passes clean. Write a one-page threat
   model — what are the top 5 ways someone could attack your app, and what
   have you done about each.


================================================================================


RECOMMENDED STACK REFERENCE
-----------------------------

Runtime          Node.js LTS
Framework        Express.js
Database         PostgreSQL + Prisma ORM
Cache / Queue    Redis + BullMQ
Auth             Custom JWT + Passport.js
Payments         Stripe
Real-time        Socket.io + SSE
AI APIs          OpenAI / Anthropic SDK
Testing          Jest + Supertest
Containers       Docker + Docker Compose
CI/CD            GitHub Actions
Hosting (start)  Railway or Render
Hosting (scale)  AWS / GCP
Monitoring       Sentry + Pino


PACING GUIDE (20+ hrs/week)
-----------------------------

Month 1     Phase 1 + 2  — Foundations + Node.js
Month 2     Phase 3      — APIs
Month 3     Phase 4      — Databases
Month 4     Phase 5      — Auth
Month 5     Phase 6      — Payments
Month 6     Phase 7 + 8  — Real-time + AI
Month 7     Phase 9 + 10 — Testing + Deploy
Month 8-12  Phase 11+12  — Scale + Security (build alongside your product)


WHERE THIS ROADMAP TAKES YOU
------------------------------

Complete every phase and build every project here and you will be in the
top 10% of Node.js backend engineers. That is not a small thing — it
means you can architect, build, secure, and ship a production SaaS
backend without help.

To reach the top 1% — the architect level — three things need to be
added on top of this roadmap:

1. TypeScript from day one.
   Introduce it at Phase 2 and use it for every project after that.
   Untyped Node.js at scale on a team becomes painful fast. TypeScript
   is not optional in serious production codebases anymore.

2. Designing Data-Intensive Applications by Martin Kleppmann.
   Read this alongside Phase 11. It is the single best book on how
   databases, distributed systems, and data pipelines actually work
   under the hood. It will change how you think about every architectural
   decision you make.

3. Real AWS/GCP experience after Phase 10.
   Railway and Render are fine to ship. But knowing VPCs, IAM roles,
   load balancers, auto-scaling groups, S3, CloudFront, and RDS is what
   separates engineers who can manage serious production infrastructure
   from those who cannot. Get your hands dirty on AWS after you have
   deployed your first real app.

The gaps this roadmap intentionally leaves out — system design depth,
advanced SQL (window functions, CTEs, query optimization), and data
engineering basics (event tracking, warehouses, ETL) — are real skills
that will matter as your product scales. They are not needed to ship.
They are needed when the product succeeds.

Build everything in this roadmap. Then come back for the rest.

================================================================================