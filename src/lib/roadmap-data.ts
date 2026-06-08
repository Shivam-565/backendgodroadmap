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
        "title": "Internet Basics",
        "tasks": [
          {
            "id": "1-1-1",
            "title": "How does the internet work?",
            "bullets": [
              "What is a packet and how data travels across networks",
              "What is an IP address and how devices are identified",
              "TCP vs UDP — difference and when each is used",
              "What is a port number and why it matters (80, 443, 3000 etc.)",
              "What is a client and what is a server"
            ]
          },
          {
            "id": "1-1-2",
            "title": "HTTP vs HTTPS — Request/Response cycle",
            "bullets": [
              "HTTP methods — GET, POST, PUT, DELETE, PATCH and what each means",
              "What is a request header and a response header",
              "What is a status code — 200, 201, 400, 401, 403, 404, 500",
              "What is HTTPS and why HTTP alone is insecure",
              "What is SSL/TLS at a high level (encryption in transit)",
              "What is a request body and when it is used"
            ]
          },
          {
            "id": "1-1-3",
            "title": "How browsers work",
            "bullets": [
              "What happens step by step when you type a URL and hit Enter",
              "What is rendering — how HTML/CSS/JS becomes a page",
              "What are browser dev tools and how to use the Network tab",
              "What is a cookie and what is local storage"
            ]
          },
          {
            "id": "1-1-4",
            "title": "DNS",
            "bullets": [
              "What is a domain name and who owns it",
              "What is a DNS resolver and what it does",
              "What is an A record, CNAME, MX record",
              "What is TTL in DNS context",
              "How DNS resolution flows from browser to root server to your IP"
            ]
          },
          {
            "id": "1-1-5",
            "title": "Hosting basics",
            "bullets": [
              "What is a VPS vs shared hosting vs cloud hosting",
              "What is a server process and what it means for your app to \"run\"",
              "What is a region and why it affects latency",
              "What is an IP address vs a domain name in hosting context"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 1.1:\r\n   Draw (on paper or Excalidraw) the full journey of a request from browser\r\n   to server and back. Label every step — DNS, TCP, HTTP, server, response.\r\n   Write one paragraph explaining it in plain English."
      },
      {
        "id": "1.2",
        "title": "Terminal & Git",
        "tasks": [
          {
            "id": "1-2-1",
            "title": "Basic Linux/terminal commands",
            "bullets": [
              "Navigating — pwd, ls, cd, cd ..",
              "Files — touch, mkdir, rm, rm -rf, cp, mv",
              "Reading files — cat, less, head, tail",
              "Permissions — chmod basics, what 755 and 644 mean",
              "Processes — ps, kill, what a running process is"
            ]
          },
          {
            "id": "1-2-2",
            "title": "Git fundamentals",
            "bullets": [
              "What is version control and why it exists",
              "git init, git status, git add, git commit",
              "What is a commit hash and why commits are immutable",
              "git log — reading history",
              "git diff — seeing what changed",
              ".gitignore — what to exclude and why (node_modules, .env)"
            ]
          },
          {
            "id": "1-2-3",
            "title": "GitHub workflow",
            "bullets": [
              "git push, git pull, git clone",
              "What is a branch and why you never work directly on main",
              "git checkout -b, git merge, git rebase basics",
              "What is a pull request and how code review works",
              "Resolving a merge conflict step by step"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 1.2:\r\n   Create a GitHub repo. Write a plain text file documenting your Phase 1.1\r\n   notes. Commit it with a proper message. Create a branch, edit the file,\r\n   push the branch, open a pull request, and merge it into main yourself."
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
        "title": "JavaScript (beyond basics)",
        "tasks": [
          {
            "id": "2-1-1",
            "title": "ES6+ syntax",
            "bullets": [
              "let and const vs var — scoping differences",
              "Arrow functions — syntax and how `this` behaves differently",
              "Destructuring — from objects and arrays",
              "Spread and rest operators — ... in different contexts",
              "Template literals — string interpolation with backticks",
              "Optional chaining (?.) and nullish coalescing (??)",
              "Short-circuit evaluation in conditionals"
            ]
          },
          {
            "id": "2-1-2",
            "title": "Async JavaScript",
            "bullets": [
              "What is the call stack and why JS is single-threaded",
              "What is a callback and the problem with callback hell",
              "What is a Promise — pending, fulfilled, rejected states",
              ".then(), .catch(), .finally() chaining",
              "async/await — writing async code that reads synchronously",
              "Promise.all, Promise.allSettled, Promise.race — when to use each",
              "Handling errors correctly in async functions"
            ]
          },
          {
            "id": "2-1-3",
            "title": "Modules",
            "bullets": [
              "What is a module and why code is split into files",
              "CommonJS — module.exports, require()",
              "ES Modules — export, export default, import",
              "When you'll see each in Node.js projects",
              "Circular dependency — what it is and why to avoid it"
            ]
          },
          {
            "id": "2-1-4",
            "title": "Error handling",
            "bullets": [
              "try / catch / finally — how it works",
              "What is the Error object — message, stack, name",
              "Creating custom error classes that extend Error",
              "Throwing errors intentionally vs catching unexpected ones",
              "Unhandled promise rejections — why they crash Node apps"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 2.1:\r\n   Build a CLI tool in plain Node.js (no frameworks). It reads a .txt file,\r\n   counts word frequency, and prints the top 10 words. Use async/await for\r\n   file reading, a custom error class if the file is missing, and split code\r\n   across at least 2 modules."
      },
      {
        "id": "2.2",
        "title": "Node.js Runtime",
        "tasks": [
          {
            "id": "2-2-1",
            "title": "How Node.js works",
            "bullets": [
              "What is the V8 engine",
              "What is the event loop — phases: timers, I/O, poll, check",
              "What is non-blocking I/O and why it makes Node fast for APIs",
              "What is libuv and what it handles under the hood",
              "What blocking the event loop means and how to avoid it"
            ]
          },
          {
            "id": "2-2-2",
            "title": "Built-in modules",
            "bullets": [
              "fs — readFile, writeFile, appendFile, sync vs async versions",
              "path — join, resolve, dirname, extname",
              "http — creating a raw HTTP server without Express",
              "os — cpus, platform, totalmem (useful for health checks)",
              "events — EventEmitter, on(), emit() — the pattern Node is built on"
            ]
          },
          {
            "id": "2-2-3",
            "title": "npm",
            "bullets": [
              "What is npm and what the registry is",
              "npm init, package.json structure — name, version, scripts, dependencies",
              "dependencies vs devDependencies — the difference",
              "package-lock.json — why it exists and why you commit it",
              "npm scripts — start, dev, test and writing custom ones",
              "Semantic versioning — what 1.2.3, ^1.2.3, ~1.2.3 mean"
            ]
          },
          {
            "id": "2-2-4",
            "title": "Environment variables",
            "bullets": [
              "What an environment variable is and why it exists",
              "The dotenv package — loading a .env file",
              "What goes in .env — DB URLs, API keys, ports",
              "Why .env must never be committed (add to .gitignore)",
              "Accessing variables via process.env.VARIABLE_NAME"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 2.2:\r\n   Build a raw HTTP server using only Node's built-in `http` module — no\r\n   Express. Handle GET /hello (return JSON), GET /file (read and return a\r\n   .txt file async), and any other route returns 404. Use dotenv for the\r\n   port. No npm packages except dotenv."
      }
    ]
  },
  {
    "id": "3",
    "title": "Building APIs",
    "goal": "Build clean, production-grade REST APIs — your product's backbone.",
    "time": "5–6 weeks",
    "topics": [
      {
        "id": "3.1",
        "title": "Express.js",
        "tasks": [
          {
            "id": "3-1-1",
            "title": "Setting up an Express server",
            "bullets": [
              "Installing Express, creating app.js, app.listen()",
              "What app.use() does and the middleware chain concept",
              "express.json() and express.urlencoded() — parsing request bodies",
              "What req, res, next are and when to call next()"
            ]
          },
          {
            "id": "3-1-2",
            "title": "Routing",
            "bullets": [
              "Defining routes — app.get(), app.post(), app.put(), app.delete()",
              "Route parameters — /users/:id and req.params",
              "Query strings — /search?q=term and req.query",
              "express.Router() — splitting routes into separate files",
              "Grouping routes by resource (/api/v1/users, /api/v1/payments)"
            ]
          },
          {
            "id": "3-1-3",
            "title": "Middleware",
            "bullets": [
              "What middleware is — functions that run between request and response",
              "Writing a custom logger middleware",
              "Writing an auth middleware (check JWT before reaching route)",
              "Third-party middleware — morgan, helmet, cors",
              "Order of middleware matters — common mistakes"
            ]
          },
          {
            "id": "3-1-4",
            "title": "Request validation",
            "bullets": [
              "Why validating input is non-negotiable",
              "Zod — defining a schema, parsing req.body, handling errors",
              "Returning a proper 400 error when validation fails",
              "Validating route params and query strings too"
            ]
          },
          {
            "id": "3-1-5",
            "title": "Error handling middleware",
            "bullets": [
              "The special 4-argument signature — (err, req, res, next)",
              "Centralising all error responses in one place",
              "Creating an AppError class with statusCode and message",
              "Distinguishing operational errors from programmer errors"
            ]
          },
          {
            "id": "3-1-6",
            "title": "Project structure",
            "bullets": [
              "routes/ — only route definitions",
              "controllers/ — request/response logic",
              "services/ — business logic, no req/res here",
              "models/ — data layer",
              "middleware/ — reusable middleware",
              "Why this separation keeps large projects maintainable"
            ]
          },
          {
            "id": "3-1-7",
            "title": "REST API Design",
            "bullets": [
              "Statelessness — server stores no session, every request is self-contained",
              "Resource naming — /users not /getUsers, plural nouns",
              "Correct use of HTTP verbs for each action",
              "Consistent JSON response envelope — { success, data, error }",
              "API versioning — why /api/v1/ prefix saves you later"
            ]
          },
          {
            "id": "3-1-8",
            "title": "OpenAPI / Swagger",
            "bullets": [
              "What OpenAPI is — a standard format for describing APIs",
              "swagger-jsdoc + swagger-ui-express setup",
              "Documenting a route with JSDoc comments",
              "Why documentation from day one saves pain later"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 3.1:\r\n   Build a fully structured REST API for a simple resource — e.g. \"Notes\"\r\n   or \"Tasks\". Implement full CRUD. Use Zod for validation, a centralised\r\n   error handler, proper HTTP status codes, and Swagger docs. Data can be\r\n   in-memory (array) for now — no DB yet."
      },
      {
        "id": "3.2",
        "title": "Paid API Endpoints (Priority)",
        "tasks": [
          {
            "id": "3-2-1",
            "title": "API key generation and management",
            "bullets": [
              "Generating a secure random key with crypto.randomBytes()",
              "Hashing the key before storing in DB (never store plaintext)",
              "Sending the key to the user once — they must save it",
              "Middleware that reads Authorization header, hashes input, checks DB"
            ]
          },
          {
            "id": "3-2-2",
            "title": "Rate limiting per API key",
            "bullets": [
              "What rate limiting is and why every public API needs it",
              "express-rate-limit — setting windowMs and max",
              "Keying limits per API key not per IP",
              "Returning 429 Too Many Requests with a Retry-After header"
            ]
          },
          {
            "id": "3-2-3",
            "title": "Usage tracking",
            "bullets": [
              "Incrementing a usage counter per API key on every request",
              "Storing call count + timestamp in DB",
              "Returning current usage in response headers (X-RateLimit-Remaining)",
              "Blocking requests when quota is exceeded"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 3.2:\r\n   Extend your Notes API. Add API key auth — a script generates a key,\r\n   stores the hash in a JSON file (pretend DB). All routes require the key\r\n   in a header. Add rate limiting — max 10 requests per minute per key.\r\n   Log each request with timestamp and key ID."
      }
    ]
  },
  {
    "id": "4",
    "title": "Databases",
    "goal": "Store, query, and model data reliably for a multi-tenant SaaS.",
    "time": "5–6 weeks",
    "topics": [
      {
        "id": "4.1",
        "title": "PostgreSQL",
        "tasks": [
          {
            "id": "4-1-1",
            "title": "Relational model",
            "bullets": [
              "What a table, row, column, and schema are",
              "Primary keys — what they are and why every table needs one",
              "Foreign keys — linking tables together",
              "One-to-many and many-to-many relationships",
              "What NULL means and when to allow it"
            ]
          },
          {
            "id": "4-1-2",
            "title": "SQL fundamentals",
            "bullets": [
              "SELECT with WHERE, ORDER BY, LIMIT, OFFSET",
              "INSERT INTO, UPDATE, DELETE with WHERE clause",
              "JOINs — INNER, LEFT, RIGHT — when to use each",
              "GROUP BY and aggregate functions — COUNT, SUM, AVG, MAX",
              "Subqueries and when they are useful"
            ]
          },
          {
            "id": "4-1-3",
            "title": "Indexes",
            "bullets": [
              "What an index is and how it speeds up queries",
              "The cost of indexes on writes",
              "When to add an index — high-read, filter/sort columns",
              "Composite indexes — indexing multiple columns together",
              "EXPLAIN ANALYZE — reading a query plan in Postgres"
            ]
          },
          {
            "id": "4-1-4",
            "title": "Transactions and ACID",
            "bullets": [
              "What a transaction is — BEGIN, COMMIT, ROLLBACK",
              "Atomicity — all or nothing",
              "Consistency — DB constraints are always met",
              "Isolation — concurrent transactions don't corrupt each other",
              "Durability — committed data survives crashes",
              "Why this matters for payment records"
            ]
          },
          {
            "id": "4-1-5",
            "title": "Migrations",
            "bullets": [
              "What a migration is — a versioned script that changes schema",
              "Why you never manually ALTER TABLE in production",
              "Writing up and down migrations",
              "Running migrations safely in CI/CD"
            ]
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Prisma ORM",
        "tasks": [
          {
            "id": "4-2-1",
            "title": "Schema and models",
            "bullets": [
              "prisma/schema.prisma — defining models, fields, types",
              "Defining relations — @relation, one-to-many, many-to-many",
              "Running prisma migrate dev to apply changes",
              "prisma generate — regenerating the client after schema change"
            ]
          },
          {
            "id": "4-2-2",
            "title": "CRUD with Prisma Client",
            "bullets": [
              "findMany, findUnique, findFirst — querying records",
              "create, createMany — inserting records",
              "update, updateMany, upsert — modifying records",
              "delete, deleteMany — removing records",
              "Filtering with where, sorting with orderBy, paginating with skip/take"
            ]
          },
          {
            "id": "4-2-3",
            "title": "N+1 problem",
            "bullets": [
              "What N+1 is — fetching parent then looping to fetch children",
              "How it silently kills performance at scale",
              "Fixing it with Prisma's include and select"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.1 + 4.2:\r\n   Rebuild your Notes/Tasks API with a real Postgres database via Prisma.\r\n   Add a User model — each note belongs to a user. Write migrations. Add\r\n   pagination to the GET all endpoint. Use a transaction when deleting a\r\n   user to also delete their notes."
      },
      {
        "id": "4.3",
        "title": "Redis",
        "tasks": [
          {
            "id": "4-3-1",
            "title": "What Redis is",
            "bullets": [
              "In-memory key-value store — data lives in RAM, not disk",
              "Data types — strings, hashes, lists, sets, sorted sets",
              "TTL — setting expiry on keys",
              "When Redis is the right tool vs Postgres"
            ]
          },
          {
            "id": "4-3-2",
            "title": "Caching",
            "bullets": [
              "Cache-aside pattern — check Redis, fallback to DB, store in Redis",
              "What to cache — expensive queries, AI responses, static data",
              "Cache invalidation — when and how to clear stale data",
              "Cache stampede — what it is and how to prevent it"
            ]
          },
          {
            "id": "4-3-3",
            "title": "Session storage",
            "bullets": [
              "Storing user sessions in Redis instead of DB",
              "connect-redis with express-session",
              "Session TTL and renewal on activity"
            ]
          },
          {
            "id": "4-3-4",
            "title": "Rate limiting with Redis",
            "bullets": [
              "Using INCR + EXPIRE for a sliding window counter",
              "Why Redis-backed rate limiting works across multiple server instances"
            ]
          },
          {
            "id": "4-3-5",
            "title": "BullMQ (job queues)",
            "bullets": [
              "What a job queue is — offloading slow work from the request cycle",
              "Creating a queue, adding a job, writing a worker",
              "Job retries, backoff strategy, failed job handling",
              "Use cases — sending emails, processing webhooks, running AI tasks"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after 4.3:\r\n   Add Redis to your API. Cache the GET all notes response — invalidate\r\n   cache on create/update/delete. Add a background job with BullMQ that\r\n   sends a (fake, console.log) email when a note is created. Run the whole\r\n   thing locally with Docker Compose (app + postgres + redis)."
      }
    ]
  },
  {
    "id": "5",
    "title": "Authentication & User Management",
    "goal": "Secure, scalable auth for a SaaS with multiple user types.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "5.1",
        "title": "Core Auth Concepts",
        "tasks": [
          {
            "id": "5-1-1",
            "title": "Password hashing",
            "bullets": [
              "Why plaintext passwords are catastrophic",
              "What a hash function is vs encryption",
              "bcrypt — cost factor, salting, why it is slow by design",
              "bcrypt.hash() and bcrypt.compare() usage"
            ]
          },
          {
            "id": "5-1-2",
            "title": "JWT",
            "bullets": [
              "JWT structure — header.payload.signature",
              "What is signed vs encrypted — JWTs are signed, not secret",
              "Signing a token with a secret key using jsonwebtoken",
              "Verifying a token and extracting the payload",
              "Token expiry — why short-lived access tokens matter",
              "Refresh tokens — longer-lived, used to get new access tokens"
            ]
          },
          {
            "id": "5-1-3",
            "title": "Cookie vs token-based auth",
            "bullets": [
              "HTTP-only cookies — what they are, why they resist XSS",
              "Bearer token in Authorization header — how SPAs typically work",
              "Pros and cons of each approach",
              "When to combine both (access token in memory, refresh in cookie)"
            ]
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Implementation",
        "tasks": [
          {
            "id": "5-2-1",
            "title": "Email/password signup + login",
            "bullets": [
              "Signup flow — validate input, check duplicate email, hash password, save",
              "Login flow — find user, compare password, issue tokens",
              "Returning tokens securely in the response"
            ]
          },
          {
            "id": "5-2-2",
            "title": "Access + refresh token rotation",
            "bullets": [
              "Issuing a short-lived access token (15 min) and refresh token (7 days)",
              "Storing refresh token hash in DB",
              "/auth/refresh endpoint — validate refresh token, issue new pair",
              "Refresh token rotation — old token invalidated on each refresh",
              "/auth/logout — deleting the refresh token from DB"
            ]
          },
          {
            "id": "5-2-3",
            "title": "OAuth 2.0",
            "bullets": [
              "What OAuth 2.0 is — delegated auth, you don't handle the password",
              "Authorization code flow step by step",
              "Implementing Google login with Passport.js",
              "Linking OAuth accounts to existing email/password accounts"
            ]
          },
          {
            "id": "5-2-4",
            "title": "RBAC",
            "bullets": [
              "What roles are — admin, user, api-client",
              "Storing role on the user record",
              "Writing a requireRole('admin') middleware",
              "Principle of least privilege — default to lowest access"
            ]
          },
          {
            "id": "5-2-5",
            "title": "Email verification + password reset",
            "bullets": [
              "Generating a secure time-limited token for email verification",
              "Sending the verification link (use Resend or Nodemailer)",
              "Password reset flow — request link, verify token, update hash",
              "Invalidating the reset token after single use"
            ]
          },
          {
            "id": "5-2-6",
            "title": "Multi-tenancy",
            "bullets": [
              "What multi-tenancy means — multiple orgs sharing one app",
              "Row-level tenancy — every table has an org_id column",
              "Ensuring queries always filter by org_id",
              "Tenant context middleware — attaching org to req object",
              "Invitation flow — inviting a user to join an org"
            ]
          }
        ]
      },
      {
        "id": "5.3",
        "title": "Security Basics (OWASP)",
        "tasks": [
          {
            "id": "5-3-1",
            "title": "CORS",
            "bullets": [
              "What same-origin policy is and why it exists",
              "What CORS headers do — Access-Control-Allow-Origin",
              "Configuring the cors package — allowed origins, methods, headers",
              "Why wildcard (*) CORS is dangerous in production"
            ]
          },
          {
            "id": "5-3-2",
            "title": "Input sanitisation",
            "bullets": [
              "SQL injection — how it works, how parameterised queries prevent it",
              "XSS — injecting scripts via user input, how to prevent it",
              "Never trust req.body — validate and sanitise everything"
            ]
          },
          {
            "id": "5-3-3",
            "title": "Security headers",
            "bullets": [
              "helmet.js — what it sets and why",
              "CSP — restricting what scripts can run on your pages",
              "HSTS — forcing HTTPS"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 5:\r\n   Build a complete auth system as a standalone Express app. Signup, login,\r\n   JWT access + refresh tokens, logout, email verification (log the link,\r\n   no real email needed), Google OAuth, and two roles: user and admin. One\r\n   protected admin-only route. Multi-tenant: users belong to an org, all\r\n   data scoped by org_id."
      }
    ]
  },
  {
    "id": "6",
    "title": "Payments & Billing",
    "goal": "Charge users reliably. Get this wrong and it costs money and trust.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "6.1",
        "title": "Stripe Core",
        "tasks": [
          {
            "id": "6-1-1",
            "title": "Stripe data model",
            "bullets": [
              "Products — what you sell",
              "Prices — how much, what billing interval",
              "Customers — Stripe's representation of your user",
              "PaymentMethods — cards attached to a customer",
              "Subscriptions — customer + price + billing cycle"
            ]
          },
          {
            "id": "6-1-2",
            "title": "Subscription billing",
            "bullets": [
              "Creating a Stripe Customer when a user signs up",
              "Creating a Subscription and linking to your DB",
              "Handling plan upgrades and downgrades (proration)",
              "Cancelling a subscription — end of period vs immediate",
              "Trial periods — how to set them up"
            ]
          },
          {
            "id": "6-1-3",
            "title": "One-time payments",
            "bullets": [
              "Stripe Checkout Session — hosted payment page",
              "Payment Intents — custom payment UI with Stripe Elements",
              "Confirming payment and updating your DB on success"
            ]
          },
          {
            "id": "6-1-4",
            "title": "Webhooks",
            "bullets": [
              "What a webhook is — Stripe calls your server when things happen",
              "Verifying the Stripe-Signature header — mandatory, not optional",
              "Handling key events: invoice.paid, invoice.payment_failed,",
              "customer.subscription.deleted, checkout.session.completed",
              "Idempotency — your webhook handler must be safe to call twice"
            ]
          },
          {
            "id": "6-1-5",
            "title": "Idempotency keys",
            "bullets": [
              "What idempotency means — same input, same result, no duplicates",
              "Sending idempotency keys on Stripe API calls",
              "Storing Stripe event IDs and skipping already-processed events"
            ]
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Usage-Based Billing",
        "tasks": [
          {
            "id": "6-2-1",
            "title": "Metered billing in Stripe",
            "bullets": [
              "Creating a metered Price in Stripe",
              "Reporting usage to Stripe via the usage records API",
              "When to report — end of day batch vs real-time",
              "Stripe billing thresholds — charging when usage hits a limit"
            ]
          },
          {
            "id": "6-2-2",
            "title": "Internal usage tracking",
            "bullets": [
              "A usage_logs table — user_id, api_key_id, timestamp, endpoint",
              "Aggregating usage per billing period",
              "Syncing internal counts with Stripe reported usage"
            ]
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Fintech Considerations",
        "tasks": [
          {
            "id": "6-3-1",
            "title": "PCI compliance basics",
            "bullets": [
              "What PCI DSS is and why you must care",
              "Why you never touch raw card numbers — use Stripe Elements/Checkout",
              "SAQ-A compliance — the simplest level when Stripe handles everything"
            ]
          },
          {
            "id": "6-3-2",
            "title": "Audit logs",
            "bullets": [
              "Every financial action needs a log — who, what, when, result",
              "Append-only table — no UPDATEs or DELETEs on audit records",
              "What to log — payment initiated, succeeded, failed, refunded"
            ]
          },
          {
            "id": "6-3-3",
            "title": "Reconciliation",
            "bullets": [
              "Matching Stripe events to your internal payment records",
              "What to do when they disagree",
              "Running a nightly reconciliation job"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 6:\r\n   Build a billing service. Users can subscribe to a \"Pro\" plan. Implement\r\n   checkout with Stripe, a webhook handler for the key events, and update a\r\n   subscriptions table in your DB. Add a usage_logs table — log every API\r\n   call. Write a script that reads the logs and reports metered usage to\r\n   Stripe. Test fully in Stripe test mode."
      }
    ]
  },
  {
    "id": "7",
    "title": "Real-Time Features",
    "goal": "Live data, notifications, and event-driven UX.",
    "time": "3 weeks",
    "topics": [
      {
        "id": "7.1",
        "title": "Real-Time Features Core",
        "tasks": [
          {
            "id": "7-1-1",
            "title": "WebSockets",
            "bullets": [
              "What a WebSocket is — persistent TCP connection, unlike HTTP",
              "The handshake — starts as HTTP, upgrades to WS",
              "ws vs socket.io — raw vs abstracted",
              "When to use WebSockets vs polling vs SSE"
            ]
          },
          {
            "id": "7-1-2",
            "title": "Socket.io",
            "bullets": [
              "Setting up socket.io on Express server",
              "Emitting and listening to events — emit(), on()",
              "Rooms — grouping sockets (one room per user, per org, per chat)",
              "Namespaces — separating concerns (/notifications, /chat)",
              "Broadcasting — to a room, to everyone except sender",
              "Handling disconnects and reconnects",
              "Authenticating socket connections — verify JWT on handshake"
            ]
          },
          {
            "id": "7-1-3",
            "title": "Server-Sent Events (SSE)",
            "bullets": [
              "What SSE is — one-way stream from server to client over HTTP",
              "Why it is perfect for AI streaming responses",
              "Setting the right headers — text/event-stream",
              "Writing an SSE endpoint in Express",
              "Client-side EventSource API"
            ]
          },
          {
            "id": "7-1-4",
            "title": "Real-time notifications",
            "bullets": [
              "Architecture — events trigger notifications (payment succeeded, etc.)",
              "Storing notifications in DB + emitting to socket room",
              "Marking notifications as read"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 7:\r\n   Add two real-time features to your app. 1) A notification system — when\r\n   a payment succeeds (simulate it), the user gets a live notification via\r\n   socket.io. 2) An AI streaming endpoint — call OpenAI with streaming on,\r\n   pipe the response via SSE to a simple HTML page that renders it word by\r\n   word."
      }
    ]
  },
  {
    "id": "8",
    "title": "AI / ML API Integration",
    "goal": "Build and expose AI-powered endpoints at scale.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "8.1",
        "title": "AI / ML API Integration Core",
        "tasks": [
          {
            "id": "8-1-1",
            "title": "Consuming AI APIs",
            "bullets": [
              "OpenAI and Anthropic SDK setup — client, API key, first call",
              "Chat completions — messages array, roles (system/user/assistant)",
              "Streaming completions — what it is and why users expect it",
              "Token limits — context window, max_tokens, truncation strategies",
              "Temperature and other parameters — what they control"
            ]
          },
          {
            "id": "8-1-2",
            "title": "Handling streaming",
            "bullets": [
              "Stream vs non-stream response shape",
              "Iterating over chunks with for await...of",
              "Piping stream chunks to SSE response",
              "Handling stream errors and client disconnects mid-stream"
            ]
          },
          {
            "id": "8-1-3",
            "title": "Retry logic and resilience",
            "bullets": [
              "Exponential backoff — why you wait longer after each retry",
              "Which errors to retry — 429, 503 — and which not to — 400, 401",
              "Setting a max retry count and timeout",
              "Failing gracefully — returning a clean error to the user"
            ]
          },
          {
            "id": "8-1-4",
            "title": "Building your own AI endpoints",
            "bullets": [
              "Designing the input schema — what your endpoint accepts",
              "Designing the output schema — consistent response shape",
              "Prompt templating — building prompts from user input safely",
              "Prompt injection — what it is, basic defences"
            ]
          },
          {
            "id": "8-1-5",
            "title": "Queuing expensive AI jobs",
            "bullets": [
              "Why you must not await AI calls in the request thread for long tasks",
              "Adding AI jobs to BullMQ — jobId returned to client immediately",
              "Worker processes the job, stores result in DB",
              "Client polls or gets notified via WebSocket when done"
            ]
          },
          {
            "id": "8-1-6",
            "title": "Cost and token tracking",
            "bullets": [
              "Logging token usage per request — prompt tokens + completion tokens",
              "Storing cost per user per month",
              "Setting hard limits — reject requests when user exceeds quota",
              "Alerting when your own API cost spikes"
            ]
          },
          {
            "id": "8-1-7",
            "title": "Vector databases and RAG basics",
            "bullets": [
              "What a vector/embedding is — a number array representing meaning",
              "pgvector — Postgres extension for storing and querying embeddings",
              "Generating embeddings via OpenAI embeddings API",
              "Similarity search — finding the most relevant chunks for a prompt",
              "RAG pattern — retrieve relevant docs, inject into prompt, generate"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 8:\r\n   Build an AI API product. Users authenticate with an API key. They POST\r\n   a prompt, your server streams the OpenAI response back via SSE. Track\r\n   token usage per key. If a key exceeds 10k tokens in a day, return 429.\r\n   Add one RAG endpoint — user uploads a .txt doc, you chunk it, embed it\r\n   with pgvector, and answer questions about it."
      }
    ]
  },
  {
    "id": "9",
    "title": "Testing & CI/CD",
    "goal": "Ship confidently. Catch bugs before users do.",
    "time": "3 weeks",
    "topics": [
      {
        "id": "9.1",
        "title": "Testing & CI/CD Core",
        "tasks": [
          {
            "id": "9-1-1",
            "title": "Unit testing with Jest",
            "bullets": [
              "What a unit test is — testing one function in isolation",
              "Arrange, Act, Assert pattern",
              "Writing tests for pure utility functions and service logic",
              "Mocking — replacing dependencies with fakes using jest.fn()",
              "Code coverage — what it means, why 100% is not the goal"
            ]
          },
          {
            "id": "9-1-2",
            "title": "Integration testing",
            "bullets": [
              "What integration testing is — testing a full route with real DB",
              "Setting up a test database — separate from dev",
              "Seeding test data before each test, cleaning up after",
              "Supertest — making HTTP requests to your Express app in tests",
              "Testing auth flows — signup, login, protected route"
            ]
          },
          {
            "id": "9-1-3",
            "title": "Testing critical paths specifically",
            "bullets": [
              "Testing webhook handler with a fake Stripe event payload",
              "Testing rate limiting — fire requests, check 429",
              "Testing RBAC — user cannot hit admin routes"
            ]
          },
          {
            "id": "9-1-4",
            "title": "GitHub Actions",
            "bullets": [
              "What CI is — automated checks on every push",
              "Writing a .github/workflows/ci.yml file",
              "Steps — checkout, install, lint, test",
              "Failing the pipeline when tests fail",
              "Running tests against a Postgres + Redis service container in CI"
            ]
          },
          {
            "id": "9-1-5",
            "title": "Linting and formatting",
            "bullets": [
              "ESLint — catching code errors and enforcing style",
              "Prettier — consistent formatting, no debates",
              "Running both in CI so bad code never merges"
            ]
          },
          {
            "id": "9-1-6",
            "title": "Deployment pipeline",
            "bullets": [
              "What CD is — auto-deploy when CI passes on main",
              "Environment promotion — dev → staging → production",
              "Environment variables per environment — never share prod secrets"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 9:\r\n   Write tests for your existing app. At minimum: unit tests for service\r\n   functions, integration tests for auth routes (signup, login, refresh),\r\n   one webhook handler test, and one RBAC test. Set up GitHub Actions to\r\n   run the full suite on every push. Merge only if green."
      }
    ]
  },
  {
    "id": "10",
    "title": "Containerisation & Deployment",
    "goal": "Your app runs the same everywhere. Deploy with confidence.",
    "time": "3–4 weeks",
    "topics": [
      {
        "id": "10.1",
        "title": "Containerisation & Deployment Core",
        "tasks": [
          {
            "id": "10-1-1",
            "title": "Docker",
            "bullets": [
              "What a container is — isolated process with its own filesystem",
              "What an image is — the blueprint for a container",
              "Writing a Dockerfile for a Node.js app",
              ".dockerignore — exclude node_modules, .env, etc.",
              "docker build, docker run, docker ps, docker logs",
              "Multi-stage builds — smaller production images"
            ]
          },
          {
            "id": "10-1-2",
            "title": "Docker Compose",
            "bullets": [
              "What Docker Compose is — defining multi-container apps",
              "Writing a docker-compose.yml — app, postgres, redis services",
              "Volumes — persisting Postgres data across restarts",
              "Networks — how containers talk to each other",
              "Environment variable injection from .env file"
            ]
          },
          {
            "id": "10-1-3",
            "title": "Cloud deployment",
            "bullets": [
              "Railway or Render — deploying a Node.js app in under 10 minutes",
              "Connecting a managed Postgres and Redis on the platform",
              "Environment variables in the platform dashboard",
              "Deployment logs and basic debugging"
            ]
          },
          {
            "id": "10-1-4",
            "title": "Nginx",
            "bullets": [
              "What a reverse proxy is — sits in front of your Node.js app",
              "Basic Nginx config — proxy_pass to Node app",
              "SSL termination at Nginx — Let's Encrypt + Certbot",
              "Serving static files via Nginx"
            ]
          },
          {
            "id": "10-1-5",
            "title": "Domain and HTTPS",
            "bullets": [
              "Buying a domain and pointing it to your server IP",
              "A record setup",
              "Let's Encrypt — free SSL certificate, auto-renewal with Certbot"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 10:\r\n   Dockerise your full app. Write a docker-compose.yml that spins up app,\r\n   postgres, and redis with one command. Deploy it to Railway or Render.\r\n   Point a real domain at it. Everything must work over HTTPS. Share the\r\n   live URL."
      }
    ]
  },
  {
    "id": "11",
    "title": "Scalability & Architecture",
    "goal": "Build something that doesn't fall over when it gets traction.",
    "time": "4–8 weeks ongoing",
    "topics": [
      {
        "id": "11.1",
        "title": "Scalability & Architecture Core",
        "tasks": [
          {
            "id": "11-1-1",
            "title": "Architectural patterns",
            "bullets": [
              "Monolith first — why you should not start with microservices",
              "What a monolith is — everything in one deployable unit",
              "When to extract a service — clear domain boundary, independent scale",
              "Twelve-Factor App — 12 principles every SaaS backend should follow",
              "Event-driven architecture — services communicate via events, not calls"
            ]
          },
          {
            "id": "11-1-2",
            "title": "Scaling databases",
            "bullets": [
              "Read replicas — routing read queries to a replica to reduce primary load",
              "Connection pooling with PgBouncer — why Node.js + Postgres needs this",
              "What database sharding is — splitting data across multiple DBs",
              "Indexes revisited — EXPLAIN ANALYZE as a habit, not a last resort",
              "Slow query log — identifying and fixing the worst offenders"
            ]
          },
          {
            "id": "11-1-3",
            "title": "Message queues at scale",
            "bullets": [
              "BullMQ recap — Redis-backed, good to 10k jobs/day",
              "When to move to Kafka — high-throughput, event log, many consumers",
              "What a dead letter queue is — failed jobs that need human review",
              "At-least-once vs exactly-once delivery — the tradeoff"
            ]
          },
          {
            "id": "11-1-4",
            "title": "Observability",
            "bullets": [
              "Structured logging with Pino — JSON logs, request IDs, log levels",
              "What a correlation ID is — tracing one request across many log lines",
              "Sentry — capturing and grouping errors in production automatically",
              "Health check endpoints — /health (is app alive?) /ready (can it serve?)",
              "Key metrics to track — p99 latency, error rate, queue depth, DB pool size"
            ]
          },
          {
            "id": "11-1-5",
            "title": "CAP Theorem",
            "bullets": [
              "Consistency, Availability, Partition tolerance — pick two",
              "What this means for your database choices in practice"
            ]
          }
        ],
        "miniProject": ">> MINI PROJECT after Phase 11:\r\n   Add observability to your app. Set up Pino logging with a request ID on\r\n   every log line. Add a /health and /ready endpoint. Integrate Sentry —\r\n   deliberately throw an error and confirm it appears in Sentry. Write a\r\n   doc explaining what you would extract into a separate service first if\r\n   your app had 10x the users, and why."
      }
    ]
  },
  {
    "id": "12",
    "title": "Advanced Security (Fintech-specific)",
    "goal": "Not optional when handling money and user data.",
    "time": "2–3 weeks",
    "topics": [
      {
        "id": "12.1",
        "title": "Advanced Security (Fintech-specific) Core",
        "tasks": [
          {
            "id": "12-1-1",
            "title": "API security",
            "bullets": [
              "Auth on every endpoint — no unauthenticated routes except /health",
              "Principle of least privilege — tokens and API keys get minimum scope",
              "Never log sensitive data — no passwords, no card details, no JWTs"
            ]
          },
          {
            "id": "12-1-2",
            "title": "Rate limiting and abuse detection",
            "bullets": [
              "Layered rate limits — per IP, per user, per API key",
              "Detecting credential stuffing — many failed logins from one IP",
              "Locking accounts after N failed attempts with exponential backoff"
            ]
          },
          {
            "id": "12-1-3",
            "title": "Audit trail",
            "bullets": [
              "Append-only audit_log table — action, actor, target, timestamp, result",
              "Logging all auth events, all payment events, all admin actions",
              "Storing audit logs separately — should survive app data deletion"
            ]
          },
          {
            "id": "12-1-4",
            "title": "Encryption",
            "bullets": [
              "Encryption in transit — TLS everywhere, no HTTP in production",
              "Encryption at rest — enabling Postgres encryption at the DB level",
              "Field-level encryption for PII — encrypting sensitive columns in app",
              "Key management — where to store encryption keys safely"
            ]
          },
          {
            "id": "12-1-5",
            "title": "Dependency security",
            "bullets": [
              "npm audit — running it regularly, understanding the output",
              "Snyk or GitHub Dependabot — automated alerts for vulnerable packages",
              "Pinning dependency versions in production",
              "Supply chain basics — risks of installing random npm packages"
            ]
          },
          {
            "id": "12-1-6",
            "title": "Secrets rotation",
            "bullets": [
              "What secrets rotation is and why it is needed",
              "Rotating JWT secret without logging everyone out",
              "Using a secrets manager — AWS Secrets Manager, Doppler, Infisical"
            ]
          }
        ],
        "miniProject": ">> FINAL PROJECT — Capstone:\r\n   By this point you should have a near-complete SaaS backend. Do a\r\n   security review pass on your own codebase. Check: every route is\r\n   authed, rate limits are in place, no secrets in code, audit log covers\r\n   all financial actions, npm audit passes clean. Write a one-page threat\r\n   model — what are the top 5 ways someone could attack your app, and what\r\n   have you done about each."
      }
    ]
  }
];
