/** System Design & Architecture Quiz - 100 Questions for Senior Fullstack Developers */
const quizData = [
    // ==================== MICROSERVICES PATTERNS (1-12) ====================
    {
        id: 1,
        category: "Microservices",
        question: "What is the primary purpose of the Circuit Breaker pattern?",
        options: [
            "To encrypt data in transit between services",
            "To prevent cascading failures in distributed systems",
            "To balance traffic across multiple servers",
            "To cache frequently accessed data"
        ],
        correct: 1,
        explanation: "<strong>Circuit Breaker</strong> stops cascading failures by failing fast when a service is unhealthy. It monitors failures and temporarily blocks requests to failing services, giving them time to recover while protecting the overall system stability."
    },
    {
        id: 2,
        category: "Microservices",
        question: "What problem does the Saga pattern solve in microservices?",
        options: [
            "Service discovery and registration",
            "Maintaining data consistency across distributed transactions",
            "Load balancing between services",
            "API versioning and backward compatibility"
        ],
        correct: 1,
        explanation: "<strong>Saga pattern</strong> manages distributed transactions by breaking them into a sequence of local transactions. Each service updates its data and publishes events/changes, with compensating transactions handling failures to ensure eventual consistency."
    },
    {
        id: 3,
        category: "Microservices",
        question: "What is the main difference between Orchestration and Choreography in Saga pattern?",
        options: [
            "Orchestration uses a central coordinator, Choreography uses event-driven communication",
            "Orchestration is synchronous, Choreography is asynchronous",
            "Orchestration is for small systems, Choreography for large systems",
            "There is no difference; they are the same pattern"
        ],
        correct: 0,
        explanation: "<strong>Orchestration</strong> uses a central coordinator (saga orchestrator) that directs each step. <strong>Choreography</strong> has each service listen to events and independently decide actions. Orchestration is easier to understand, Choreography is more loosely coupled."
    },
    {
        id: 4,
        category: "Microservices",
        question: "What does CQRS (Command Query Responsibility Segregation) pattern achieve?",
        options: [
            "Combines read and write operations for consistency",
            "Separates read and write operations to optimize each independently",
            "Encrypts data at rest and in transit",
            "Provides automatic service discovery"
        ],
        correct: 1,
        explanation: "<strong>CQRS</strong> separates read models (optimized for queries, can be denormalized) from write models (optimized for commands/business logic). This allows independent scaling and optimization but increases complexity."
    },
    {
        id: 5,
        category: "Microservices",
        question: "What is Event Sourcing and what is its key benefit?",
        options: [
            "Storing only current state; benefit is smaller storage",
            "Storing state changes as events; benefit is complete audit trail and temporal queries",
            "Publishing events to a message bus; benefit is loose coupling",
            "Encrypting events before storage; benefit is security"
        ],
        correct: 1,
        explanation: "<strong>Event Sourcing</strong> stores state as a sequence of events rather than current state. Benefits: complete audit history, ability to replay events, temporal queries (what was state at time X), but requires more storage and complexity."
    },
    {
        id: 6,
        category: "Microservices",
        question: "What is the BFF (Backend for Frontend) pattern?",
        options: [
            "A pattern where backend developers are friends with frontend developers",
            "Creating separate backend services tailored to specific frontend needs",
            "Using the same API for all clients (web, mobile, desktop)",
            "Caching frontend assets on the backend"
        ],
        correct: 1,
        explanation: "<strong>BFF</strong> creates dedicated backend services for each frontend type (web, iOS, Android). This allows optimization for each client's specific needs rather than forcing a one-size-fits-all general-purpose API."
    },
    {
        id: 7,
        category: "Microservices",
        question: "What are the three states of a Circuit Breaker?",
        options: [
            "Open, Closed, Locked",
            "Open, Closed, Half-Open",
            "Active, Passive, Standby",
            "Running, Stopped, Paused"
        ],
        correct: 1,
        explanation: "<strong>Circuit Breaker states:</strong><br>• <strong>Closed</strong>: Normal operation, requests pass through<br>• <strong>Open</strong>: Failure threshold reached, requests fail fast<br>• <strong>Half-Open</strong>: Testing if service recovered, limited requests allowed"
    },
    {
        id: 8,
        category: "Microservices",
        question: "What is the main trade-off when using CQRS?",
        options: [
            "Simpler code vs. better performance",
            "Eventual consistency between read and write models",
            "Security vs. usability",
            "Storage cost vs. query speed"
        ],
        correct: 1,
        explanation: "<strong>CQRS trade-off:</strong> Read and write models may be temporarily inconsistent (eventual consistency). Updates to write model must propagate to read model, creating a window where data differs."
    },
    {
        id: 9,
        category: "Microservices",
        question: "In Event Sourcing, how do you rebuild current state?",
        options: [
            "Query the latest snapshot from database",
            "Replay all events from the beginning",
            "Read from a materialized view",
            "Call a REST API to get current state"
        ],
        correct: 1,
        explanation: "<strong>Rebuilding state:</strong> Replay all events in order, applying each to recreate current state. Snapshots can optimize this by storing intermediate states, reducing events to replay."
    },
    {
        id: 10,
        category: "Microservices",
        question: "When is compensating transaction used in Saga pattern?",
        options: [
            "When a step completes successfully",
            "When a step fails, to undo previous successful steps",
            "At the beginning of every saga",
            "Only for read operations"
        ],
        correct: 1,
        explanation: "<strong>Compensating transactions</strong> undo the effects of previously completed steps when a later step fails. Unlike ACID rollback, they apply business logic to reverse operations (e.g., issue refund for completed charge)."
    },
    {
        id: 11,
        category: "Microservices",
        question: "What is a Sidecar pattern in microservices?",
        options: [
            "Deploying services on the same physical server",
            "Deploying helper components in separate containers alongside main service",
            "Using a secondary database for backups",
            "Running services in standby mode"
        ],
        correct: 1,
        explanation: "<strong>Sidecar pattern</strong> deploys supporting components (logging, monitoring, proxy) in separate containers that share the same lifecycle and resources as the main application container."
    },
    {
        id: 12,
        category: "Microservices",
        question: "What is the Strangler Fig pattern used for?",
        options: [
            "Optimizing database queries",
            "Gradually migrating monolith to microservices",
            "Implementing caching strategies",
            "Load balancing requests"
        ],
        correct: 1,
        explanation: "<strong>Strangler Fig pattern</strong> incrementally replaces monolith functionality with microservices. New features go to microservices, old features are gradually migrated, with a facade routing between them."
    },

    // ==================== API GATEWAY, LOAD BALANCING, RATE LIMITING (13-22) ====================
    {
        id: 13,
        category: "API Gateway",
        question: "What are the primary responsibilities of an API Gateway?",
        options: [
            "Only routing requests to backend services",
            "Request routing, authentication, rate limiting, request/response transformation",
            "Only serving static files and assets",
            "Only handling database connections"
        ],
        correct: 1,
        explanation: "<strong>API Gateway</strong> acts as a single entry point handling: request routing, authentication/authorization, rate limiting, SSL termination, request/response transformation, caching, and protocol translation."
    },
    {
        id: 14,
        category: "Load Balancing",
        question: "What is the difference between Layer 4 (L4) and Layer 7 (L7) load balancing?",
        options: [
            "L4 is hardware, L7 is software",
            "L4 uses TCP/UDP info, L7 uses HTTP/HTTPS content for routing decisions",
            "L4 is faster but L7 is cheaper",
            "There is no difference"
        ],
        correct: 1,
        explanation: "<strong>L4 load balancing</strong> routes based on IP address and TCP/UDP ports (transport layer). <strong>L7 load balancing</strong> inspects HTTP headers, cookies, URL paths (application layer) for intelligent routing."
    },
    {
        id: 15,
        category: "Rate Limiting",
        question: "What is the Token Bucket algorithm used for?",
        options: [
            "Authentication and authorization",
            "Rate limiting with ability to handle traffic bursts",
            "Load balancing across servers",
            "Database connection pooling"
        ],
        correct: 1,
        explanation: "<strong>Token Bucket</strong> allows bursts of traffic up to bucket capacity while maintaining average rate. Tokens are added at constant rate; requests consume tokens. If bucket empty, requests are rejected."
    },
    {
        id: 16,
        category: "Rate Limiting",
        question: "How does the Sliding Window algorithm differ from Fixed Window for rate limiting?",
        options: [
            "Sliding window uses less memory",
            "Sliding window prevents burst attacks at window boundaries",
            "Fixed window is more accurate",
            "They are identical algorithms"
        ],
        correct: 1,
        explanation: "<strong>Fixed Window</strong> can allow 2x rate at window boundaries (end of one + start of next). <strong>Sliding Window</strong> tracks exact timestamps, preventing boundary attacks but requiring more memory."
    },
    {
        id: 17,
        category: "Load Balancing",
        question: "Which load balancing algorithm considers server capacity/health?",
        options: [
            "Round Robin",
            "Least Connections",
            "Random",
            "IP Hash"
        ],
        correct: 1,
        explanation: "<strong>Least Connections</strong> routes to the server with fewest active connections, considering current load. <strong>Round Robin</strong> ignores server state; <strong>IP Hash</strong> uses client IP for consistency."
    },
    {
        id: 18,
        category: "API Gateway",
        question: "What is the purpose of request aggregation in API Gateway?",
        options: [
            "To compress request bodies",
            "To combine multiple backend calls into single client request",
            "To encrypt request data",
            "To validate request schemas only"
        ],
        correct: 1,
        explanation: "<strong>Request aggregation</strong> (or backend for frontend) combines multiple microservice calls into one. Client makes single request, Gateway fans out to services, aggregates responses, reducing client complexity."
    },
    {
        id: 19,
        category: "Rate Limiting",
        question: "What is the difference between rate limiting and throttling?",
        options: [
            "They are the same thing",
            "Rate limiting rejects requests, throttling slows down processing",
            "Rate limiting is for APIs, throttling is for databases only",
            "Throttling is always stricter than rate limiting"
        ],
        correct: 1,
        explanation: "<strong>Rate limiting</strong> rejects excess requests (returns 429). <strong>Throttling</strong> delays/slows processing of requests to match capacity (queues or slows responses rather than rejecting)."
    },
    {
        id: 20,
        category: "Load Balancing",
        question: "What is session affinity (sticky sessions) in load balancing?",
        options: [
            "Encrypting session data",
            "Routing same client to same backend server",
            "Storing sessions in a database",
            "Validating session tokens"
        ],
        correct: 1,
        explanation: "<strong>Session affinity</strong> ensures requests from the same client always go to the same backend server. Important when session state is stored locally on servers rather than shared storage."
    },
    {
        id: 21,
        category: "API Gateway",
        question: "What is the purpose of SSL/TLS termination at the API Gateway?",
        options: [
            "To increase encryption strength",
            "To offload encryption/decryption work from backend services",
            "To disable HTTPS for internal traffic",
            "To prevent man-in-the-middle attacks only"
        ],
        correct: 1,
        explanation: "<strong>SSL termination</strong> at Gateway means Gateway handles HTTPS with clients, then uses HTTP internally. Offloads CPU-intensive encryption from backends and simplifies certificate management."
    },
    {
        id: 22,
        category: "Rate Limiting",
        question: "Which rate limiting strategy allows different limits for different users?",
        options: [
            "Global rate limiting",
            "Per-client/IP rate limiting",
            "Static rate limiting",
            "Single bucket rate limiting"
        ],
        correct: 1,
        explanation: "<strong>Per-client/IP rate limiting</strong> maintains separate counters/buckets for each client. Premium users can get higher limits than free users, and abuse from one client doesn't affect others."
    },

    // ==================== DISTRIBUTED SYSTEMS (23-32) ====================
    {
        id: 23,
        category: "Distributed Systems",
        question: "What does the CAP theorem state?",
        options: [
            "A distributed system must choose 2 of 3: Consistency, Availability, Partition tolerance",
            "A distributed system can achieve all three: Consistency, Availability, Partition tolerance",
            "A distributed system only needs Consistency and Availability",
            "CAP stands for Cache, API, and Proxy"
        ],
        correct: 0,
        explanation: "<strong>CAP Theorem:</strong> In presence of network partition, you must choose between <strong>C</strong>onsistency (all nodes see same data) or <strong>A</strong>vailability (all requests get response). Partition tolerance is mandatory in distributed systems."
    },
    {
        id: 24,
        category: "Distributed Systems",
        question: "What is the difference between Strong Consistency and Eventual Consistency?",
        options: [
            "Strong consistency is faster than eventual consistency",
            "Strong consistency guarantees immediate consistency; eventual consistency allows temporary divergence",
            "Eventual consistency is only for databases",
            "There is no practical difference"
        ],
        correct: 1,
        explanation: "<strong>Strong Consistency:</strong> All reads see latest write immediately (slower, less available). <strong>Eventual Consistency:</strong> Reads may see stale data temporarily, but will converge (faster, more available)."
    },
    {
        id: 25,
        category: "Distributed Systems",
        question: "What problem does consensus algorithm (like Raft or Paxos) solve?",
        options: [
            "Encrypting data between nodes",
            "Agreeing on a value among distributed nodes despite failures",
            "Balancing network traffic",
            "Compressing data storage"
        ],
        correct: 1,
        explanation: "<strong>Consensus algorithms</strong> ensure distributed nodes agree on a value or state despite network partitions and node failures. Used for leader election, distributed transactions, and configuration management."
    },
    {
        id: 26,
        category: "Distributed Systems",
        question: "What is Leader Election and when is it needed?",
        options: [
            "Electing a team lead for a project; needed for all distributed systems",
            "Choosing a coordinator node to manage writes/operations; needed for consistency",
            "Selecting the fastest server; needed for load balancing",
            "Choosing a backup server; needed for disaster recovery"
        ],
        correct: 1,
        explanation: "<strong>Leader Election</strong> selects one node as coordinator to handle writes or coordination tasks. Needed when you need single source of truth or coordination (e.g., Apache Kafka controllers, database primaries)."
    },
    {
        id: 27,
        category: "Distributed Systems",
        question: "What is the Byzantine Generals Problem?",
        options: [
            "A military strategy game",
            "Achieving consensus when some nodes may be malicious or fail arbitrarily",
            "A network routing algorithm",
            "A database sharding technique"
        ],
        correct: 1,
        explanation: "<strong>Byzantine Generals Problem</strong> is the challenge of reaching consensus when some participants may be malicious or send false information. Byzantine Fault Tolerance (BFT) algorithms handle this."
    },
    {
        id: 28,
        category: "Distributed Systems",
        question: "What is a Quorum in distributed systems?",
        options: [
            "A type of database index",
            "Minimum number of nodes that must agree for an operation to proceed",
            "A backup strategy",
            "A network protocol"
        ],
        correct: 1,
        explanation: "<strong>Quorum</strong> is the minimum number of nodes that must participate/vote for an operation. Common formula: W + R > N (write quorum + read quorum > total replicas) ensures strong consistency."
    },
    {
        id: 29,
        category: "Distributed Systems",
        question: "What is the Two-Generals Problem?",
        options: [
            "A consensus problem where reliable communication cannot be guaranteed",
            "A load balancing algorithm",
            "A database replication strategy",
            "A caching technique"
        ],
        correct: 0,
        explanation: "<strong>Two-Generals Problem</strong> demonstrates that reliable communication over unreliable channels is theoretically impossible to guarantee. No acknowledgment scheme can ensure both parties agree with certainty."
    },
    {
        id: 30,
        category: "Distributed Systems",
        question: "What is a vector clock used for?",
        options: [
            "Synchronizing physical time across servers",
            "Tracking causality between events in distributed systems",
            "Measuring CPU performance",
            "Encrypting messages"
        ],
        correct: 1,
        explanation: "<strong>Vector clocks</strong> track partial ordering of events across distributed nodes. Each node maintains a counter; timestamps are compared to determine if events are concurrent or causally related."
    },
    {
        id: 31,
        category: "Distributed Systems",
        question: "What is the difference between a distributed lock and a local lock?",
        options: [
            "No difference; both work the same way",
            "Distributed lock coordinates across multiple servers; local lock is within single process",
            "Distributed lock is faster than local lock",
            "Local lock is only for databases"
        ],
        correct: 1,
        explanation: "<strong>Distributed lock</strong> (e.g., Redis Redlock, ZooKeeper) coordinates exclusive access across multiple servers/processes. <strong>Local lock</strong> (mutex) only works within a single process/machine."
    },
    {
        id: 32,
        category: "Distributed Systems",
        question: "What is the Gossip protocol used for?",
        options: [
            "Securing communications between nodes",
            "Propagating state information in a decentralized manner",
            "Compressing data transfers",
            "Load balancing requests"
        ],
        correct: 1,
        explanation: "<strong>Gossip protocol</strong> spreads information like epidemics - nodes randomly exchange state with peers. Eventually all nodes receive updates. Used in Cassandra, Redis Cluster, and failure detection."
    },

    // ==================== CACHING STRATEGIES (33-42) ====================
    {
        id: 33,
        category: "Caching",
        question: "What is the difference between Cache-Aside (Lazy Loading) and Write-Through caching?",
        options: [
            "No difference; both update cache at same time",
            "Cache-Aside loads on demand; Write-Through updates cache synchronously with database",
            "Cache-Aside is for Redis only; Write-Through is for CDN only",
            "Write-Through is faster than Cache-Aside"
        ],
        correct: 1,
        explanation: "<strong>Cache-Aside:</strong> App checks cache first, loads from DB on miss. <strong>Write-Through:</strong> Write goes to cache and DB simultaneously. Cache-Aside may have stale data; Write-Through is always consistent but slower."
    },
    {
        id: 34,
        category: "Caching",
        question: "What is a Cache Stampede (Thundering Herd) and how do you prevent it?",
        options: [
            "Too many cache hits; prevent by rate limiting",
            "Many requests hit DB simultaneously when cache expires; prevent by per-key locking or probabilistic early expiration",
            "Cache server overload; prevent by adding more servers",
            "Cache corruption; prevent by encryption"
        ],
        correct: 1,
        explanation: "<strong>Cache Stampede</strong> occurs when cache expires and many concurrent requests simultaneously hit the database. Solutions: per-key locking (only one process rebuilds), probabilistic early expiration, or background refresh."
    },
    {
        id: 35,
        category: "Caching",
        question: "What is the purpose of a CDN (Content Delivery Network)?",
        options: [
            "To encrypt user data",
            "To distribute static content geographically close to users for lower latency",
            "To replace the need for databases",
            "To handle database transactions"
        ],
        correct: 1,
        explanation: "<strong>CDN</strong> caches static content (images, JS, CSS, videos) at edge locations worldwide. Users get content from nearest edge server, reducing latency and origin server load."
    },
    {
        id: 36,
        category: "Caching",
        question: "What is the difference between LRU and LFU cache eviction policies?",
        options: [
            "LRU is for databases, LFU is for APIs",
            "LRU evicts least recently used; LFU evicts least frequently used",
            "LRU is faster than LFU",
            "They are identical"
        ],
        correct: 1,
        explanation: "<strong>LRU (Least Recently Used):</strong> Evicts items not accessed for longest time. <strong>LFU (Least Frequently Used):</strong> Evicts items with fewest accesses overall. LRU handles bursty access better; LFU favors popular items."
    },
    {
        id: 37,
        category: "Caching",
        question: "What is Write-Behind (Write-Back) caching?",
        options: [
            "Writing to cache and database synchronously",
            "Writing to cache first, then asynchronously to database",
            "Writing only to database, never to cache",
            "Writing to multiple caches simultaneously"
        ],
        correct: 1,
        explanation: "<strong>Write-Behind</strong> writes to cache immediately and queues database writes for async processing. Fastest for writes but risks data loss if cache fails before DB is updated."
    },
    {
        id: 38,
        category: "Caching",
        question: "What is cache warming and when should you use it?",
        options: [
            "Heating up cache servers physically; use in cold climates",
            "Pre-populating cache before traffic hits; use before high-traffic events",
            "Clearing the cache; use when data is stale",
            "Compressing cache data; use for large objects"
        ],
        correct: 1,
        explanation: "<strong>Cache warming</strong> pre-loads frequently accessed data into cache before expected traffic (e.g., before Black Friday). Prevents cold start and cache stampedes when traffic arrives."
    },
    {
        id: 39,
        category: "Caching",
        question: "What is the difference between a local cache and a distributed cache?",
        options: [
            "Local cache is faster but not shared; distributed cache is shared but has network overhead",
            "Local cache is larger than distributed cache",
            "Distributed cache is only for databases",
            "There is no difference in functionality"
        ],
        correct: 0,
        explanation: "<strong>Local cache</strong> (in-memory, e.g., Caffeine) is ultra-fast but per-instance, risking inconsistency. <strong>Distributed cache</strong> (Redis, Memcached) is shared across instances but has network latency."
    },
    {
        id: 40,
        category: "Caching",
        question: "What is a cache key design best practice?",
        options: [
            "Use random UUIDs for all keys",
            "Include version, identifiers, and parameters that affect the data",
            "Always use single character keys for efficiency",
            "Never expire cache keys"
        ],
        correct: 1,
        explanation: "<strong>Good cache keys</strong> include: entity type, version (for invalidation), identifiers, and query parameters that affect output. Example: <code>user:v2:12345:profile</code> enables targeted invalidation."
    },
    {
        id: 41,
        category: "Caching",
        question: "What is the purpose of cache versioning?",
        options: [
            "To track how many times cache was accessed",
            "To invalidate cache without waiting for TTL by changing version prefix",
            "To compress cache entries",
            "To encrypt cache data"
        ],
        correct: 1,
        explanation: "<strong>Cache versioning</strong> embeds version in key (e.g., <code>v1:user:123</code>). When data schema or logic changes, increment version (<code>v2:user:123</code>) - old keys naturally expire, instant global invalidation."
    },
    {
        id: 42,
        category: "Caching",
        question: "In a multi-layer caching strategy, what typically goes in each layer?",
        options: [
            "L1: Browser, L2: CDN, L3: Application cache, L4: Database cache",
            "L1: Database, L2: Browser, L3: CDN",
            "Only one layer is recommended",
            "L1: Hard disk, L2: RAM, L3: Network"
        ],
        correct: 0,
        explanation: "<strong>Multi-layer caching:</strong><br>• L1: Browser cache (private, fastest)<br>• L2: CDN edge cache (geographic)<br>• L3: Application cache (Redis/Memcached)<br>• L4: Database cache (query cache, buffer pool)"
    },

    // ==================== MESSAGE QUEUES (43-50) ====================
    {
        id: 43,
        category: "Message Queues",
        question: "What is the difference between point-to-point and publish-subscribe messaging?",
        options: [
            "No difference; both deliver to one consumer",
            "Point-to-point: one consumer per message; Pub-Sub: multiple subscribers receive copy",
            "Point-to-point is faster than Pub-Sub",
            "Pub-Sub is only for Kafka"
        ],
        correct: 1,
        explanation: "<strong>Point-to-Point:</strong> Queue delivers to exactly one consumer (load balancing). <strong>Pub-Sub:</strong> Topic broadcasts to all subscribers (fan-out). Different use cases, different guarantees."
    },
    {
        id: 44,
        category: "Message Queues",
        question: "What is the key difference between Kafka and traditional message queues (RabbitMQ/ActiveMQ)?",
        options: [
            "Kafka is slower than traditional queues",
            "Kafka is a log-based stream; traditional queues delete messages after consumption",
            "Kafka only supports point-to-point",
            "Traditional queues don't support persistence"
        ],
        correct: 1,
        explanation: "<strong>Kafka</strong> is a distributed log - messages persist and can be replayed. Consumers track their offset. <strong>Traditional queues</strong> delete messages after acknowledgment. Kafka excels at event sourcing and stream processing."
    },
    {
        id: 45,
        category: "Message Queues",
        question: "What are message acknowledgments (acks) used for?",
        options: [
            "To encrypt messages",
            "To confirm successful processing and prevent message loss",
            "To compress message size",
            "To route messages to specific queues"
        ],
        correct: 1,
        explanation: "<strong>Acknowledgments</strong> ensure at-least-once delivery. Consumer processes message, then acknowledges. If no ack received (crash/timeout), message is redelivered to another consumer."
    },
    {
        id: 46,
        category: "Message Queues",
        question: "What is a Dead Letter Queue (DLQ)?",
        options: [
            "A queue for expired messages only",
            "A queue for messages that failed processing after max retry attempts",
            "A queue for priority messages",
            "A backup queue for the main queue"
        ],
        correct: 1,
        explanation: "<strong>Dead Letter Queue</strong> receives messages that failed processing after maximum retry attempts. Prevents blocking the main queue and allows manual inspection/reprocessing of poison messages."
    },
    {
        id: 47,
        category: "Message Queues",
        question: "What is message ordering guarantee in Kafka?",
        options: [
            "No ordering guarantee in any situation",
            "Ordering guaranteed within a partition, not across partitions",
            "Global ordering across all partitions and topics",
            "Ordering only for the first 1000 messages"
        ],
        correct: 1,
        explanation: "<strong>Kafka ordering:</strong> Messages are ordered within a partition. If ordering matters for related messages, use same partition key - they'll go to same partition. No ordering guarantee across partitions."
    },
    {
        id: 48,
        category: "Message Queues",
        question: "What is the purpose of consumer groups in Kafka?",
        options: [
            "To organize consumers by company department",
            "To share message processing load - each partition consumed by one member",
            "To encrypt messages between consumers",
            "To prioritize certain consumers"
        ],
        correct: 1,
        explanation: "<strong>Consumer groups</strong> enable horizontal scaling. Each partition is consumed by exactly one group member. Adding consumers to group redistributes partitions (rebalancing). Multiple groups can independently consume same topic."
    },
    {
        id: 49,
        category: "Message Queues",
        question: "What is the difference between at-most-once, at-least-once, and exactly-once delivery?",
        options: [
            "They are all the same guarantee",
            "At-most-once: may lose messages; At-least-once: may duplicate; Exactly-once: neither",
            "Exactly-once is the default for all queues",
            "At-most-once is the most reliable"
        ],
        correct: 1,
        explanation: "<strong>At-most-once:</strong> Fire and forget, may lose messages.<br><strong>At-least-once:</strong> Retry until ack, may duplicate.<br><strong>Exactly-once:</strong> No loss, no duplicates (hardest to implement, requires idempotency)."
    },
    {
        id: 50,
        category: "Message Queues",
        question: "What is backpressure in message queue systems?",
        options: [
            "Water pressure in cooling systems",
            "Mechanism to handle when producers outpace consumers",
            "Network bandwidth optimization",
            "Message compression technique"
        ],
        correct: 1,
        explanation: "<strong>Backpressure</strong> handles scenarios where message production exceeds consumption capacity. Solutions: blocking producers, dropping messages, increasing consumers, or using buffering to prevent system overload."
    },

    // ==================== CONTAINER ORCHESTRATION (51-58) ====================
    {
        id: 51,
        category: "Containers",
        question: "What is the difference between a Docker image and a Docker container?",
        options: [
            "They are the same thing",
            "Image is a template; container is a running instance of that template",
            "Image is larger than container",
            "Container is persistent, image is temporary"
        ],
        correct: 1,
        explanation: "<strong>Docker Image:</strong> Read-only template with application code + dependencies.<br><strong>Docker Container:</strong> Runnable instance of an image with writable layer. Multiple containers can run from one image."
    },
    {
        id: 52,
        category: "Kubernetes",
        question: "What is a Kubernetes Pod?",
        options: [
            "A single container",
            "The smallest deployable unit that can contain one or more containers",
            "A type of service discovery",
            "A persistent storage volume"
        ],
        correct: 1,
        explanation: "<strong>Pod</strong> is the smallest deployable unit in Kubernetes, containing one or more tightly coupled containers that share network namespace and storage. Containers in a pod are always co-located."
    },
    {
        id: 53,
        category: "Kubernetes",
        question: "What is the purpose of a Kubernetes Deployment?",
        options: [
            "To store application secrets",
            "To declare desired state for pods and manage rolling updates",
            "To provide external access to services",
            "To monitor application metrics"
        ],
        correct: 1,
        explanation: "<strong>Deployment</strong> manages ReplicaSets, which manage Pods. It enables declarative updates: specify desired state (replicas, image version), and Kubernetes handles rolling updates, rollbacks, and self-healing."
    },
    {
        id: 54,
        category: "Kubernetes",
        question: "What is the difference between a Kubernetes Service and an Ingress?",
        options: [
            "They are the same",
            "Service exposes pods internally/externally; Ingress routes HTTP/HTTPS traffic with rules",
            "Service is only for databases; Ingress is for applications",
            "Ingress is faster than Service"
        ],
        correct: 1,
        explanation: "<strong>Service:</strong> Exposes pods (ClusterIP, NodePort, LoadBalancer).<br><strong>Ingress:</strong> Layer 7 HTTP/HTTPS router with rules (host, path-based routing). Ingress typically sits in front of Services."
    },
    {
        id: 55,
        category: "Kubernetes",
        question: "What is a Kubernetes ConfigMap used for?",
        options: [
            "Storing sensitive data like passwords",
            "Storing non-sensitive configuration data as key-value pairs",
            "Mapping network ports",
            "Creating database connections"
        ],
        correct: 1,
        explanation: "<strong>ConfigMap</strong> stores non-sensitive configuration (environment variables, config files). For secrets (passwords, tokens), use <strong>Secret</strong> objects which are base64-encoded and can be encrypted at rest."
    },
    {
        id: 56,
        category: "Kubernetes",
        question: "What is a Kubernetes Horizontal Pod Autoscaler (HPA)?",
        options: [
            "A tool for vertical scaling of pod resources",
            "Automatically scales number of pod replicas based on CPU/memory/custom metrics",
            "A network load balancer",
            "A storage provisioning tool"
        ],
        correct: 1,
        explanation: "<strong>HPA</strong> automatically adjusts number of pod replicas based on observed metrics (CPU, memory, or custom metrics like queue depth). Scales up when load increases, scales down when load decreases."
    },
    {
        id: 57,
        category: "Kubernetes",
        question: "What is the purpose of liveness and readiness probes?",
        options: [
            "Both are for the same purpose - checking if pod exists",
            "Liveness: restart unhealthy pods; Readiness: determine if pod can receive traffic",
            "Liveness is for metrics; Readiness is for logging",
            "They are deprecated features"
        ],
        correct: 1,
        explanation: "<strong>Liveness probe:</strong> Detects deadlocked/infinite-looping containers; Kubernetes restarts them.<br><strong>Readiness probe:</strong> Determines if container is ready to serve requests; removes from Service endpoints if not ready."
    },
    {
        id: 58,
        category: "Containers",
        question: "What is a multi-stage Docker build and what is its benefit?",
        options: [
            "Building for multiple architectures; benefit is broader compatibility",
            "Using multiple FROM statements to separate build and runtime environments; smaller images",
            "Building multiple images in parallel; faster builds",
            "Using multiple Dockerfiles; better organization"
        ],
        correct: 1,
        explanation: "<strong>Multi-stage builds</strong> use multiple FROM statements. Build stage has all compilers/tools; final stage copies only artifacts. Result: smaller, more secure production images without build dependencies."
    },

    // ==================== DATABASE SCALING (59-66) ====================
    {
        id: 59,
        category: "Database Scaling",
        question: "What is database sharding and what problem does it solve?",
        options: [
            "Encrypting database; solves security",
            "Splitting data across multiple servers; solves horizontal scaling",
            "Backing up database; solves disaster recovery",
            "Indexing all columns; solves query speed"
        ],
        correct: 1,
        explanation: "<strong>Sharding</strong> partitions data across multiple servers (shards). Each shard holds a subset of data. Solves horizontal scaling when single server can't handle data size or query load."
    },
    {
        id: 60,
        category: "Database Scaling",
        question: "What is the difference between vertical and horizontal database scaling?",
        options: [
            "Vertical adds more servers; horizontal upgrades existing server",
            "Vertical upgrades server resources (CPU/RAM); horizontal adds more servers",
            "They are the same thing",
            "Vertical is only for NoSQL; horizontal is only for SQL"
        ],
        correct: 1,
        explanation: "<strong>Vertical scaling (scale up):</strong> Bigger server (more CPU, RAM). Has limits.<br><strong>Horizontal scaling (scale out):</strong> More servers (sharding, replicas). More complex but virtually unlimited."
    },
    {
        id: 61,
        category: "Database Scaling",
        question: "What are common database sharding strategies?",
        options: [
            "Only hash-based sharding",
            "Hash-based, range-based, and directory-based sharding",
            "Only random sharding",
            "Only alphabetical sharding"
        ],
        correct: 1,
        explanation: "<strong>Sharding strategies:</strong><br>• <strong>Hash-based:</strong> Shard = hash(key) % N (good distribution)<br>• <strong>Range-based:</strong> By key range (A-M, N-Z) (easy range queries)<br>• <strong>Directory-based:</strong> Lookup service maps key to shard (flexibility)"
    },
    {
        id: 62,
        category: "Database Scaling",
        question: "What is database replication and what are the common types?",
        options: [
            "Duplicating code; types: full and partial",
            "Copying data to multiple servers; types: master-slave and master-master",
            "Backing up data; types: daily and weekly",
            "Compressing data; types: lossy and lossless"
        ],
        correct: 1,
        explanation: "<strong>Replication</strong> copies data across servers for availability and read scaling.<br>• <strong>Master-Slave:</strong> Master writes, slaves read (asynchronous)<br>• <strong>Master-Master:</strong> Both accept writes (complex conflict resolution)"
    },
    {
        id: 63,
        category: "Database Scaling",
        question: "What is read/write splitting in database architecture?",
        options: [
            "Splitting tables into smaller tables",
            "Routing write queries to master and read queries to replicas",
            "Dividing database connections between apps",
            "Separating schema from data"
        ],
        correct: 1,
        explanation: "<strong>Read/Write Splitting</strong> directs write operations (INSERT, UPDATE, DELETE) to the master/primary and read operations (SELECT) to replicas. Scales read capacity while maintaining consistency for writes."
    },
    {
        id: 64,
        category: "Database Scaling",
        question: "What is a potential problem with consistent hashing in sharding?",
        options: [
            "It doesn't distribute data evenly",
            "Adding/removing nodes requires minimal data movement but may cause temporary hotspots",
            "It only works with string keys",
            "It is slower than modulo hashing"
        ],
        correct: 1,
        explanation: "<strong>Consistent hashing</strong> minimizes data movement when adding/removing nodes (only K/n keys move). However, adding one node only takes keys from adjacent nodes, potentially causing uneven load (solved with virtual nodes)."
    },
    {
        id: 65,
        category: "Database Scaling",
        question: "What is the challenge of cross-shard queries (scatter-gather)?",
        options: [
            "They are faster than single-shard queries",
            "They require querying multiple shards and aggregating results, which is slower and complex",
            "They are not possible in sharded databases",
            "They require special hardware"
        ],
        correct: 1,
        explanation: "<strong>Cross-shard queries</strong> must query all (or many) shards and aggregate results. Slow and resource-intensive. Design sharding key to minimize cross-shard operations (keep related data together)."
    },
    {
        id: 66,
        category: "Database Scaling",
        question: "What is a replica lag and why does it matter?",
        options: [
            "Network delay between data centers; doesn't matter much",
            "Delay between master write and replica visibility; can cause stale reads",
            "Time to create a replica; affects deployment speed",
            "Time to backup database; affects recovery time"
        ],
        correct: 1,
        explanation: "<strong>Replica lag</strong> is the delay between write on master and visibility on replica. Applications reading from replicas may see stale data. Monitor lag; if too high, consider reading from master or using synchronous replication."
    },

    // ==================== CDN & EDGE COMPUTING (67-70) ====================
    {
        id: 67,
        category: "CDN & Edge",
        question: "What is edge computing and how does it differ from cloud computing?",
        options: [
            "They are the same thing",
            "Edge computing processes data closer to the source/user; cloud is centralized",
            "Edge computing is only for mobile apps",
            "Cloud computing is faster than edge computing"
        ],
        correct: 1,
        explanation: "<strong>Edge computing</strong> processes data at the network edge (close to users/devices), reducing latency and bandwidth. <strong>Cloud computing</strong> is centralized in data centers. Often used together."
    },
    {
        id: 68,
        category: "CDN & Edge",
        question: "What is cache invalidation and what are the common strategies?",
        options: [
            "Deleting the cache server; strategy: immediate deletion",
            "Removing stale content from cache; strategies: TTL expiration, active purge, versioning",
            "Encrypting cached data; strategy: SSL only",
            "Moving cache to different region; strategy: geo-migration"
        ],
        correct: 1,
        explanation: "<strong>Cache invalidation:</strong><br>• <strong>TTL:</strong> Auto-expire after time<br>• <strong>Active purge:</strong> API call to remove specific content<br>• <strong>Versioning:</strong> Change URL to bypass cache<br>Hard problem: 'There are only two hard things in CS...'"
    },
    {
        id: 69,
        category: "CDN & Edge",
        question: "What is the difference between push and pull CDN strategies?",
        options: [
            "Push: origin sends to CDN; Pull: CDN fetches on demand",
            "Push is for small files; Pull is for large files",
            "Push is faster than Pull always",
            "They are the same approach"
        ],
        correct: 0,
        explanation: "<strong>Push CDN:</strong> You upload content to CDN directly (good for large files, predictable content).<br><strong>Pull CDN:</strong> CDN fetches from origin on first request (automatic, good for websites)."
    },
    {
        id: 70,
        category: "CDN & Edge",
        question: "What is an origin shield in CDN architecture?",
        options: [
            "A firewall protecting the origin server",
            "A secondary cache layer between edge servers and origin to reduce origin load",
            "An SSL certificate for origin server",
            "A backup origin server"
        ],
        correct: 1,
        explanation: "<strong>Origin Shield</strong> is an additional caching layer. All CDN edge servers fetch from the shield rather than directly from origin. Reduces origin load when many edge servers request same uncached content."
    },

    // ==================== SERVICE DISCOVERY & SERVICE MESH (71-78) ====================
    {
        id: 71,
        category: "Service Discovery",
        type: "open",
        question: "Scenario: You have 50 microservices running in Kubernetes. Services need to discover and communicate with each other dynamically as pods are created and destroyed. How would you implement service discovery?",
        answer: "1. Use Kubernetes DNS-based service discovery (Services get DNS entries like service-name.namespace.svc.cluster.local)<br>2. Use Headless Services for direct pod-to-pod communication<br>3. Implement a service mesh (Istio/Linkerd) for advanced traffic management<br>4. Use a service registry like Consul or Eureka for multi-cluster scenarios<br>5. Implement client-side load balancing with service mesh sidecars",
        explanation: "Kubernetes provides built-in DNS service discovery. For advanced scenarios, service meshes add features like traffic splitting, mTLS, and observability without changing application code."
    },
    {
        id: 72,
        category: "Service Mesh",
        type: "open",
        question: "Scenario: Your microservices communicate over HTTP, but you need to add mutual TLS (mTLS) encryption between all services without modifying application code. How would you achieve this?",
        answer: "1. Deploy a service mesh (Istio, Linkerd, or Consul Connect)<br>2. Inject sidecar proxies alongside each service<br>3. Configure mesh-wide mTLS policy (PERMISSIVE → STRICT mode)<br>4. The sidecars automatically encrypt/decrypt traffic<br>5. Applications continue using plain HTTP; sidecars handle TLS transparently",
        explanation: "Service mesh uses sidecar pattern to add capabilities (mTLS, auth, observability) without application changes. Istio's Citadel manages certificates automatically."
    },
    {
        id: 73,
        category: "Service Mesh",
        type: "open",
        question: "Scenario: You want to implement canary deployments where 5% of traffic goes to the new version of a service. How can you achieve this with a service mesh?",
        answer: "1. Deploy both versions of the service<br>2. Configure VirtualService with weight-based routing<br>3. Set weights: 95% to v1, 5% to v2<br>4. Monitor error rates and latency<br>5. Gradually shift traffic using automated canary analysis or manual promotion<br>6. Rollback immediately if errors exceed threshold",
        explanation: "Service meshes provide fine-grained traffic control without application changes. Istio's VirtualService and DestinationRule enable sophisticated deployment strategies."
    },
    {
        id: 74,
        category: "Service Discovery",
        type: "open",
        question: "Scenario: Your services run across multiple cloud providers (AWS, GCP) and on-premise. You need a unified service discovery mechanism. What's your approach?",
        answer: "1. Deploy HashiCorp Consul as a centralized service registry<br>2. Use Consul agents on each node to register services<br>3. Implement health checks for automatic deregistration of unhealthy instances<br>4. Use Consul DNS or HTTP API for service lookup<br>5. Consider Consul Connect for cross-platform service mesh<br>6. Alternatively, use Kubernetes with Federation or Google Anthos/Istio multi-cluster",
        explanation: "Consul works across platforms and clouds, providing a unified service registry. Kubernetes Federation or managed mesh solutions are alternatives for K8s-heavy environments."
    },
    {
        id: 75,
        category: "Service Mesh",
        type: "open",
        question: "Scenario: You're experiencing intermittent failures in service-to-service communication with unclear root cause. How would you use a service mesh to improve observability?",
        answer: "1. Deploy Istio/Linkerd with automatic metrics collection<br>2. View service dependency graph (Kiali for Istio)<br>3. Analyze request success rates, latencies, and error codes per service<br>4. Use distributed tracing (Jaeger/Zipkin) to follow requests across services<br>5. Check proxy access logs for detailed request/response info<br>6. Set up alerts based on golden signals (traffic, errors, latency, saturation)",
        explanation: "Service meshes automatically collect detailed telemetry. They provide visibility into service dependencies, performance metrics, and distributed tracing without code changes."
    },
    {
        id: 76,
        category: "Service Mesh",
        type: "open",
        question: "Scenario: A service in your mesh needs to communicate with an external third-party API. How do you configure this securely in Istio?",
        answer: "1. Create a ServiceEntry to register the external service in the mesh<br>2. Configure egress gateway to control and monitor outbound traffic<br>3. Set up DestinationRule for TLS origination if needed<br>4. Apply authorization policies to restrict which services can access the external API<br>5. Monitor external calls through mesh metrics<br>6. Consider caching responses to reduce external dependencies",
        explanation: "Service meshes control both internal and external traffic. ServiceEntries bring external services into the mesh for consistent policy application and observability."
    },
    {
        id: 77,
        category: "Service Discovery",
        type: "open",
        question: "Scenario: Your services use different programming languages and frameworks. You want consistent retry logic across all services. How can you achieve this?",
        answer: "1. Implement a service mesh (Istio/Linkerd)<br>2. Configure retry policies in VirtualService resources<br>3. Set retry attempts, timeout per try, and retry conditions (5xx, gateway-errors)<br>4. Add circuit breaker settings in DestinationRule<br>5. The sidecar proxy handles retries uniformly regardless of application language<br>6. Remove retry logic from application code to avoid conflicts",
        explanation: "Service mesh provides language-agnostic reliability patterns. Centralized configuration ensures consistent behavior across polyglot microservices."
    },
    {
        id: 78,
        category: "Service Mesh",
        type: "open",
        question: "Scenario: You need to implement rate limiting per user across all microservices. The services use different tech stacks. What's your solution?",
        answer: "1. Deploy a service mesh with global rate limiting<br>2. Configure local rate limits per service instance<br>3. Use Redis or similar for global rate limit counters<br>4. Implement Envoy rate limit service with descriptors (user ID, path, method)<br>5. Apply RateLimit resources in Istio<br>6. Alternatively, use API Gateway (Kong, Ambassador) with rate limiting plugins",
        explanation: "Service meshes support both local and global rate limiting. For user-specific limits across services, global rate limiting with a shared store is required."
    },

    // ==================== AUTHENTICATION & AUTHORIZATION (79-84) ====================
    {
        id: 79,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: You have 20 microservices and want users to authenticate once and access all services. Describe your SSO architecture.",
        answer: "1. Implement an Identity Provider (IdP) - Auth0, Keycloak, or AWS Cognito<br>2. Use OAuth 2.0 + OpenID Connect (OIDC) for authentication<br>3. Client obtains JWT access token from IdP<br>4. Services validate JWT signature using JWKS endpoint<br>5. Pass JWT in Authorization header between services<br>6. Implement token refresh mechanism<br>7. Use short-lived access tokens (15 min) with refresh tokens",
        explanation: "OAuth 2.0 + OIDC is the industry standard for SSO. JWTs allow stateless validation without calling the IdP for each request, improving performance and availability."
    },
    {
        id: 80,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: Your microservices need fine-grained authorization (e.g., 'can user X edit resource Y'). Design your authorization system.",
        answer: "1. Implement RBAC (Role-Based Access Control) for coarse permissions<br>2. Add ABAC (Attribute-Based Access Control) for fine-grained decisions<br>3. Use Policy Decision Point (PDP) like OPA (Open Policy Agent)<br>4. Deploy OPA as sidecar or centralized service<br>5. Define policies in Rego language<br>6. Cache authorization decisions to reduce latency<br>7. Log all authorization decisions for audit",
        explanation: "OPA provides decoupled, fine-grained authorization. Policies can be written as code, versioned, and evaluated consistently across services without embedding logic in each service."
    },
    {
        id: 81,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: Service A needs to call Service B on behalf of a user. How do you securely pass the user's identity?",
        answer: "1. User authenticates and receives JWT access token<br>2. Service A includes JWT in request to Service B<br>3. Service B validates JWT (signature, expiration, issuer)<br>4. For service-to-service without user context, use client credentials flow<br>5. Consider token exchange (JWT exchange) for delegation chains<br>6. Include only necessary claims; avoid sensitive data in JWT<br>7. Use mTLS between services as additional security layer",
        explanation: "Passing the user's JWT maintains user context through the call chain. Client credentials flow is for service authentication without user context. Token exchange enables delegation scenarios."
    },
    {
        id: 82,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: You need to revoke a user's access immediately across all microservices. How do you handle this with JWTs?",
        answer: "1. Keep JWT expiration short (5-15 minutes)<br>2. Maintain a token blocklist (Redis) for revoked tokens<br>3. Check blocklist on each request (trade-off: adds latency)<br>4. Use refresh tokens that can be revoked at IdP<br>5. For immediate revocation: revoke refresh token + add access token to blocklist<br>6. Consider using reference tokens (opaque) instead of self-contained JWTs<br>7. Implement session management service for critical applications",
        explanation: "JWTs are stateless and can't be revoked instantly. Short expiration, blocklists, or reference tokens (stored in DB) are solutions. Reference tokens sacrifice statelessness for instant revocation."
    },
    {
        id: 83,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: You want to implement API key authentication for machine-to-machine communication. Design a secure API key system.",
        answer: "1. Generate cryptographically secure random API keys (256-bit minimum)<br>2. Store only hashed keys (SHA-256) in database, not plaintext<br>3. Display full key only once at creation to user<br>4. Implement key prefixes for identification (e.g., 'live_123abc')<br>5. Support multiple keys per client for rotation<br>6. Implement key expiration and automatic rotation<br>7. Scope keys to specific resources/operations<br>8. Rate limit per API key, not just IP",
        explanation: "API keys should be treated like passwords - hashed storage, secure generation, and rotation support. Scoping and rate limiting per key limit blast radius if a key is compromised."
    },
    {
        id: 84,
        category: "Auth Patterns",
        type: "open",
        question: "Scenario: You need to support social login (Google, GitHub) alongside email/password. Design your authentication flow.",
        answer: "1. Implement OAuth 2.0/OIDC flow with social providers<br>2. User clicks 'Login with Google' → redirect to Google<br>3. Google returns authorization code<br>4. Backend exchanges code for ID token and access token<br>5. Verify ID token signature and claims<br>6. Create/link local user account based on provider's user ID<br>7. Issue your own JWT for internal service communication<br>8. Support account linking (connect multiple providers to one account)",
        explanation: "Social login delegates authentication to trusted providers. Your system receives verified identity claims and maintains a consistent internal identity across different login methods."
    },

    // ==================== EVENT-DRIVEN ARCHITECTURE (85-88) ====================
    {
        id: 85,
        category: "Event-Driven",
        type: "open",
        question: "Scenario: You need to redesign a monolithic order processing system to be event-driven. Describe your architecture.",
        answer: "1. Identify domain events: OrderCreated, PaymentProcessed, InventoryReserved, OrderShipped<br>2. Deploy event broker (Kafka, RabbitMQ, or AWS EventBridge)<br>3. Order service publishes OrderCreated event<br>4. Payment service subscribes and processes payment<br>5. PaymentProcessed triggers Inventory service<br>6. Use Saga pattern for distributed transaction management<br>7. Implement event schema registry (Confluent Schema Registry)<br>8. Add idempotency checks to handle duplicate events",
        explanation: "Event-driven architecture decouples services through asynchronous events. Each service reacts to events independently. Saga pattern ensures consistency across the distributed flow."
    },
    {
        id: 86,
        category: "Event-Driven",
        type: "open",
        question: "Scenario: Your event-driven system experiences events being processed out of order, causing data inconsistency. How do you handle this?",
        answer: "1. Include timestamp and sequence number in events<br>2. Implement event sourcing to rebuild state from event log<br>3. Use Kafka partitions with ordering key (e.g., order_id)<br>4. Implement optimistic concurrency control with version numbers<br>5. Detect out-of-order events and queue until missing events arrive<br>6. Design for idempotency so out-of-order processing is safe<br>7. Consider CQRS: separate read models built from ordered event stream",
        explanation: "Ordering guarantees in distributed systems are challenging. Partition keys ensure related events are ordered. Idempotency and event sourcing make out-of-order handling safer."
    },
    {
        id: 87,
        category: "Event-Driven",
        type: "open",
        question: "Scenario: You need to ensure exactly-once processing for financial transactions in an event-driven system. How do you achieve this?",
        answer: "1. Use idempotent consumers (same event produces same result)<br>2. Implement deduplication using event ID in database<br>3. Use transactional outbox pattern for event publishing<br>4. Configure Kafka transactions (producer idempotency + transactions)<br>5. Store consumer offsets and processing results atomically<br>6. Use database unique constraints on processed event IDs<br>7. Design compensating transactions for rollback scenarios",
        explanation: "Exactly-once requires idempotency at the consumer level. Transactional outbox ensures events aren't lost. Database-level deduplication prevents double processing."
    },
    {
        id: 88,
        category: "Event-Driven",
        type: "open",
        question: "Scenario: You need to add a new service to an existing event-driven system without disrupting current producers. How do you evolve the event schema?",
        answer: "1. Follow schema evolution best practices (backward/forward compatibility)<br>2. Use Confluent Schema Registry with Avro/Protobuf/JSON Schema<br>3. Add new fields as optional with default values<br>4. Never rename or delete existing fields<br>5. Use schema versioning<br>6. Deploy new consumer first, then update producers<br>7. Implement consumer logic to handle both old and new schema<br>8. Monitor for deserialization errors",
        explanation: "Schema evolution enables safe changes to events. Optional fields with defaults maintain compatibility. Schema registry enforces compatibility rules and prevents breaking changes."
    },

    // ==================== WEBSOCKET & REAL-TIME SYSTEMS (89-92) ====================
    {
        id: 89,
        category: "Real-Time",
        type: "open",
        question: "Scenario: You need to build a real-time chat application supporting 100,000 concurrent connections. Design your architecture.",
        answer: "1. Use WebSocket servers (Socket.io, WS library) behind load balancer<br>2. Deploy multiple WebSocket server instances (horizontal scaling)<br>3. Use Redis Pub/Sub or NATS for message broadcasting across instances<br>4. Implement sticky sessions or shared connection state<br>5. Use CDN for static assets<br>6. Implement heartbeat/ping to detect disconnections<br>7. Add reconnection logic with exponential backoff on client<br>8. Monitor connection count, message throughput, and latency",
        explanation: "WebSocket servers are stateful; load balancing requires session affinity or shared state. Redis Pub/Sub enables broadcasting messages to users connected to different server instances."
    },
    {
        id: 90,
        category: "Real-Time",
        type: "open",
        question: "Scenario: Your WebSocket servers need to push updates to specific users when data changes in your database. Design the data flow.",
        answer: "1. Implement Change Data Capture (CDC) on database (Debezium)<br>2. Database changes are published to Kafka<br>3. WebSocket service subscribes to Kafka topics<br>4. Service maintains user_id → connection_id mapping in Redis<br>5. On relevant change, lookup target connections<br>6. Push update to specific WebSocket connections<br>7. Alternative: Use database triggers + message queue for simpler cases<br>8. Implement fan-out for users with multiple connections",
        explanation: "CDC captures database changes as events. The WebSocket service routes events to appropriate connections based on user subscriptions. Redis maintains the user-to-connection mapping."
    },
    {
        id: 91,
        category: "Real-Time",
        type: "open",
        question: "Scenario: You need to support both WebSocket and fallback for environments where WebSockets are blocked. What options do you have?",
        answer: "1. Use Socket.io which auto-falls back: WebSocket → SSE → Long Polling<br>2. Implement Server-Sent Events (SSE) for server-to-client only<br>3. Long polling as last resort (HTTP request held open)<br>4. Detect transport capability at connection time<br>5. For mobile apps, implement custom reconnection logic<br>6. Consider using a managed service like Pusher or Ably<br>7. Document supported browsers and network requirements",
        explanation: "WebSocket fallbacks ensure connectivity in restricted environments. Socket.io handles fallback automatically. SSE works for unidirectional updates; long polling works everywhere but is less efficient."
    },
    {
        id: 92,
        category: "Real-Time",
        type: "open",
        question: "Scenario: You need to scale WebSocket horizontally while maintaining user session state. How do you handle this?",
        answer: "1. Store session state in external cache (Redis) instead of memory<br>2. Use sticky sessions (IP hash or cookie) to route user to same server<br>3. Implement shared connection registry (Redis)<br>4. When server needs to send message, lookup which server hosts the connection<br>5. Use message broker for cross-server communication<br>6. Implement graceful shutdown: migrate connections or wait for natural disconnect<br>7. Consider serverless WebSocket solutions (API Gateway, Cloudflare Durable Objects)",
        explanation: "Horizontal scaling of stateful WebSocket servers requires externalizing state or connection routing. Shared registries enable finding which server hosts a specific connection."
    },

    // ==================== IDEMPOTENCY & EXACTLY-ONCE (93-94) ====================
    {
        id: 93,
        category: "Idempotency",
        type: "open",
        question: "Scenario: Your payment API is being retried by clients due to network timeouts, causing duplicate charges. How do you make it idempotent?",
        answer: "1. Require clients to send idempotency key (UUID) in header<br>2. Store idempotency key + request fingerprint on first attempt<br>3. Return cached response for duplicate keys within timeout window (24h)<br>4. Use database unique constraint on idempotency key<br>5. Process payment and store result atomically (transaction)<br>6. Clear idempotency keys after appropriate retention period<br>7. Document idempotency guarantee in API contract",
        explanation: "Idempotency keys allow safe retries. The server recognizes duplicate requests and returns the original response without reprocessing. Atomic storage prevents race conditions."
    },
    {
        id: 94,
        category: "Idempotency",
        type: "open",
        question: "Scenario: You're processing messages from a queue and need exactly-once semantics. The processing involves database writes and external API calls. Design your solution.",
        answer: "1. Make the operation idempotent (same message → same result)<br>2. Store processed message IDs in database with unique constraint<br>3. Check message ID before processing<br>4. Use database transaction: insert message ID + perform business logic<br>5. For external APIs, use their idempotency keys if available<br>6. Acknowledge message only after successful processing<br>7. Implement dead letter queue for permanently failing messages<br>8. Consider using Kafka transactions for atomic produce-consume",
        explanation: "Exactly-once processing requires idempotent operations and tracking processed messages. Transactions ensure atomicity between message tracking and business logic."
    },

    // ==================== BACKPRESSURE & THROTTLING (95-97) ====================
    {
        id: 95,
        category: "Backpressure",
        type: "open",
        question: "Scenario: Your API is being overwhelmed by client requests, causing cascading failures. Implement backpressure mechanisms.",
        answer: "1. Implement rate limiting (token bucket/leaky bucket) per client<br>2. Return 429 Too Many Requests when limit exceeded<br>3. Use connection pooling with max connections limit<br>4. Implement queue-based load leveling (message queue)<br>5. Add circuit breaker for downstream services<br>6. Use adaptive concurrency limits (CoDel, Vegas algorithm)<br>7. Implement graceful degradation (serve cached/stale data)<br>8. Add Retry-After header for rate limit responses",
        explanation: "Backpressure prevents overload by slowing down or rejecting requests. Multiple mechanisms work together: rate limiting, queueing, circuit breakers, and graceful degradation."
    },
    {
        id: 96,
        category: "Backpressure",
        type: "open",
        question: "Scenario: A Kafka consumer is processing messages slower than they are being produced. How do you handle this backpressure?",
        answer: "1. Scale consumers by adding more instances to consumer group<br>2. Increase partition count to allow more parallelism<br>3. Optimize consumer processing logic (batch processing, async)<br>4. Implement pause/resume based on processing lag<br>5. Increase max.poll.records if processing is fast per record<br>6. Use separate queue for slow operations (decouple processing)<br>7. Monitor consumer lag and alert when growing<br>8. Consider increasing retention time to prevent data loss",
        explanation: "Kafka backpressure is handled by scaling consumers and optimizing processing. Consumer lag metrics indicate when processing can't keep up with production."
    },
    {
        id: 97,
        category: "Throttling",
        type: "open",
        question: "Scenario: You need to implement different rate limits for different user tiers (Free: 100/hr, Pro: 10,000/hr, Enterprise: unlimited). Design your throttling system.",
        answer: "1. Use Redis with sliding window or token bucket implementation<br>2. Store rate limit config per user tier<br>3. Identify user and tier from JWT or API key<br>4. Check/Decrement counter atomically (Redis Lua script or Redlock)<br>5. Return X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset headers<br>6. Implement different limits per endpoint if needed<br>7. Use separate counters for burst vs sustained rates<br>8. Log rate limit violations for security monitoring",
        explanation: "Tiered rate limiting uses different thresholds per user class. Redis provides the fast, atomic operations needed for distributed rate limiting. Headers inform clients of their current limits."
    },

    // ==================== OBSERVABILITY (98-100) ====================
    {
        id: 98,
        category: "Observability",
        type: "open",
        question: "Scenario: You need to implement observability for a microservices architecture. Design your logging, metrics, and tracing strategy.",
        answer: "1. Logging: Structured JSON logs with correlation IDs; aggregate with ELK/Loki<br>2. Metrics: Use Prometheus for collection, Grafana for visualization; track RED (Rate, Errors, Duration)<br>3. Tracing: Implement distributed tracing with OpenTelemetry/Jaeger; propagate trace context<br>4. Centralize logs from all services in single searchable platform<br>5. Define SLIs/SLOs and create alerts based on error budgets<br>6. Use service mesh for automatic metrics and tracing injection<br>7. Create dashboards showing service dependencies and health<br>8. Implement log sampling for high-volume services",
        explanation: "Observability requires three pillars: logs (events), metrics (aggregated data), and traces (request flow). Together they provide visibility into distributed system behavior."
    },
    {
        id: 99,
        category: "Observability",
        type: "open",
        question: "Scenario: Users report intermittent slow requests, but your average latency metrics look fine. How do you investigate?",
        answer: "1. Look at latency percentiles (p95, p99) not just averages<br>2. Use distributed tracing to identify slow path segments<br>3. Correlate slow requests with specific services or databases<br>4. Check for GC pauses or resource contention<br>5. Analyze logs for timeout or retry patterns<br>6. Use heatmaps to visualize latency distribution<br>7. Implement user-specific tracing for affected users<br>8. Look for patterns: specific times, specific users, specific operations",
        explanation: "Averages hide tail latency. Percentiles show worst-case experience. Distributed tracing identifies which component causes slowness in specific requests."
    },
    {
        id: 100,
        category: "Observability",
        type: "open",
        question: "Scenario: You need to set up alerting for your production services. What principles guide your alert design?",
        answer: "1. Alert on symptoms (user-facing issues) not causes (disk full)<br>2. Use multi-level severity: page for critical, ticket for warnings<br>3. Avoid alert fatigue - ensure alerts require human action<br>4. Include runbook links in alert notifications<br>5. Set up alert aggregation - group related alerts<br>6. Use error budgets to balance reliability and velocity<br>7. Test alerts regularly (chaos engineering)<br>8. Alert on SLO violations, not just metric thresholds<br>9. Include context: links to dashboards, logs, recent deployments",
        explanation: "Good alerting focuses on user-impacting issues, provides actionable context, and avoids noise. Error budgets tie alerts to business impact rather than arbitrary thresholds."
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
}
