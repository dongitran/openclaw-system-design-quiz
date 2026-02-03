/** Database Quiz - 50 Questions */
const quizData = [
    {
        id: 1,
        category: "SQL",
        question: "What is the result of SELECT NULL = NULL?",
        options: [
            "TRUE",
            "FALSE",
            "NULL",
            "ERROR"
        ],
        correct: 2,
        explanation: "NULL represents an unknown value. NULL = NULL returns NULL (unknown), not TRUE. To compare NULL, use IS NULL or IS NOT NULL."
    },
    {
        id: 2,
        category: "SQL",
        question: "What is the difference between INNER JOIN and LEFT JOIN?",
        options: [
            "No difference",
            "INNER JOIN returns matching records from both tables, LEFT JOIN returns all from left table + matches from right table",
            "LEFT JOIN is faster than INNER JOIN",
            "INNER JOIN only works with 2 tables"
        ],
        correct: 1,
        explanation: "<strong>INNER JOIN</strong> only returns records that have matches in <em>both tables</em>. <strong>LEFT JOIN</strong> returns <em>all records from the left table</em>, along with matching records from the right table (if no match, values are NULL)."
    },
    {
        id: 3,
        category: "Transaction",
        question: "What is ACID in database transactions?",
        options: [
            "Advanced, Concurrent, Indexed, Distributed",
            "Atomicity, Consistency, Isolation, Durability",
            "Automatic, Consistent, Integrated, Data",
            "Application, Cache, Index, Database"
        ],
        correct: 1,
        explanation: "<strong>ACID</strong> stands for:<br>• <strong>A</strong>tomicity: All or nothing<br>• <strong>C</strong>onsistency: Data is always valid<br>• <strong>I</strong>solation: Transactions are independent<br>• <strong>D</strong>urability: Data is permanently saved"
    },
    {
        id: 4,
        category: "Normalization",
        question: "What does Third Normal Form (3NF) require?",
        options: [
            "Just need a primary key",
            "Satisfies 2NF and has no transitive dependency",
            "All columns must be VARCHAR",
            "No relationships between tables allowed"
        ],
        correct: 1,
        explanation: "<strong>3NF</strong> requires:<br>1. Satisfies 2NF<br>2. No <strong>transitive dependency</strong> - meaning non-key columns must not depend on each other, only directly on the primary key."
    },
    {
        id: 5,
        category: "Indexing",
        question: "What is an index used for in a database?",
        options: [
            "Temporary data storage",
            "Speed up SELECT queries",
            "Reduce database size",
            "Encrypt data"
        ],
        correct: 1,
        explanation: "<strong>Index</strong> helps speed up <em>reading data (SELECT)</em> by creating a data structure (usually B-tree) that allows faster searching. However, indexes <em>slow down</em> INSERT, UPDATE, and DELETE operations."
    },
    {
        id: 6,
        category: "SQL",
        question: "Which SQL finds duplicate records in a table?",
        options: [
            "SELECT * FROM table WHERE duplicate = true",
            "SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1",
            "SELECT DUPLICATE * FROM table",
            "FIND DUPLICATES IN table"
        ],
        correct: 1,
        explanation: "The statement <code>SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*) > 1</code> groups identical values and only returns groups with more than 1 record (i.e., duplicates)."
    },
    {
        id: 7,
        category: "NoSQL",
        question: "What type of NoSQL is MongoDB?",
        options: [
            "Key-Value store",
            "Document store",
            "Column-family store",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>MongoDB</strong> is a <strong>Document Store</strong> - stores data as JSON/BSON documents. Each document can have a different structure, very flexible compared to SQL."
    },
    {
        id: 8,
        category: "SQL",
        question: "What is the difference between WHERE and HAVING?",
        options: [
            "No difference",
            "WHERE filters before GROUP BY, HAVING filters after GROUP BY",
            "HAVING is faster than WHERE",
            "WHERE is only for numbers, HAVING is for strings"
        ],
        correct: 1,
        explanation: "<strong>WHERE</strong> filters <em>records</em> before grouping (GROUP BY). <strong>HAVING</strong> filters <em>results</em> after grouping, usually used with aggregate functions (COUNT, SUM, AVG...)."
    },
    {
        id: 9,
        category: "Transaction",
        question: "Which isolation level is the highest (safest)?",
        options: [
            "READ UNCOMMITTED",
            "READ COMMITTED",
            "REPEATABLE READ",
            "SERIALIZABLE"
        ],
        correct: 3,
        explanation: "<strong>SERIALIZABLE</strong> is the highest isolation level, ensuring transactions execute as if they were sequential (no phantom reads, non-repeatable reads, or dirty reads). However, it has the lowest performance."
    },
    {
        id: 10,
        category: "SQL",
        question: "How do Primary Key and Unique Key differ?",
        options: [
            "No difference",
            "Primary Key does not allow NULL, Unique Key allows 1 NULL",
            "Unique Key is mandatory, Primary Key is not",
            "Primary Key is only for integers"
        ],
        correct: 1,
        explanation: "<strong>Primary Key</strong>: Does not allow NULL, only one per table, used as the main key.<br><strong>Unique Key</strong>: Allows <em>1 NULL value</em>, a table can have multiple unique keys."
    },
    {
        id: 11,
        category: "SQL",
        question: "How do DELETE and TRUNCATE differ?",
        options: [
            "No difference",
            "DELETE deletes rows one by one and logs, TRUNCATE deletes entire pages and doesn't log",
            "TRUNCATE can use WHERE, DELETE cannot",
            "DELETE is faster than TRUNCATE"
        ],
        correct: 1,
        explanation: "<strong>DELETE</strong>: Deletes row by row, can use WHERE, logs fully, can be rolled back.<br><strong>TRUNCATE</strong>: Deletes all data (no WHERE), less logging, faster, resets auto-increment."
    },
    {
        id: 12,
        category: "NoSQL",
        question: "What type of database is Redis?",
        options: [
            "Document database",
            "Key-Value store",
            "Relational database",
            "Graph database"
        ],
        correct: 1,
        explanation: "<strong>Redis</strong> is a <strong>Key-Value Store</strong> - stores data as key-value pairs in memory. Very fast, commonly used as cache, session store, and rate limiting."
    },
    {
        id: 13,
        category: "SQL",
        question: "Which statement gets the first 5 records in MySQL?",
        options: [
            "SELECT TOP 5 * FROM table",
            "SELECT FIRST 5 * FROM table",
            "SELECT * FROM table LIMIT 5",
            "SELECT * FROM table FETCH 5"
        ],
        correct: 2,
        explanation: "In <strong>MySQL</strong>, use <code>LIMIT 5</code>. In SQL Server use <code>TOP 5</code>, in Oracle use <code>FETCH FIRST 5 ROWS ONLY</code>."
    },
    {
        id: 14,
        category: "Indexing",
        question: "When does a Composite Index (Multi-column index) work best?",
        options: [
            "When query only uses the last column of the index",
            "When query uses columns from left to right in index order",
            "When query uses OR instead of AND",
            "When table has fewer than 100 rows"
        ],
        correct: 1,
        explanation: "<strong>Composite Index</strong> (A, B, C) works best when queries use columns from <em>left to right</em>: A, or A+B, or A+B+C. Cannot be used if only querying B or C."
    },
    {
        id: 15,
        category: "Normalization",
        question: "What is Denormalization and when should it be used?",
        options: [
            "Delete database - never use",
            "Intentionally add redundant data to speed up reads",
            "Create index for all columns",
            "Convert from SQL to NoSQL"
        ],
        correct: 1,
        explanation: "<strong>Denormalization</strong> is intentionally adding redundant data (violating normal forms) to <em>reduce the number of JOINs</em> and speed up reads. Often used for read-heavy systems like data warehouses."
    },
    {
        id: 16,
        category: "SQL",
        question: "How do UNION and UNION ALL differ?",
        options: [
            "No difference",
            "UNION removes duplicates, UNION ALL keeps all",
            "UNION ALL only works for 2 tables",
            "UNION is faster than UNION ALL"
        ],
        correct: 1,
        explanation: "<strong>UNION</strong>: Combines results and <em>removes duplicate records</em> (slower).<br><strong>UNION ALL</strong>: Combines and <em>keeps all</em> records (faster)."
    },
    {
        id: 17,
        category: "SQL",
        question: "Which statement finds the 2nd highest value in the salary column?",
        options: [
            "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
            "SELECT SECOND_MAX(salary) FROM employees",
            "SELECT TOP 2 salary FROM employees ORDER BY salary DESC",
            "SELECT MAX(salary) - 1 FROM employees"
        ],
        correct: 0,
        explanation: "Common approach: <code>SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)</code>. Can also use window functions like ROW_NUMBER() in modern SQL."
    },
    {
        id: 18,
        category: "Database Design",
        question: "What is a Foreign Key used for?",
        options: [
            "Creates automatic index",
            "Ensures referential integrity between tables",
            "Speeds up queries",
            "Encrypts data"
        ],
        correct: 1,
        explanation: "<strong>Foreign Key</strong> ensures <strong>referential integrity</strong> - prevents creating records that reference non-existent data, and can configure actions when original data is deleted (CASCADE, SET NULL...)."
    },
    {
        id: 19,
        category: "NoSQL",
        question: "What are the strengths of NoSQL compared to SQL?",
        options: [
            "Always faster than SQL in all cases",
            "Easy to scale horizontally, flexible schema, good for unstructured data",
            "Better ACID transaction support",
            "Standardized query language"
        ],
        correct: 1,
        explanation: "<strong>NoSQL</strong> strengths:<br>• <strong>Horizontal scaling</strong> (easy distribution)<br>• <strong>Flexible schema</strong> (no predefined structure needed)<br>• Good for <strong>unstructured/semi-structured data</strong>"
    },
    {
        id: 20,
        category: "SQL",
        question: "Which is usually more efficient, Subquery or JOIN?",
        options: [
            "Subquery is always faster",
            "JOIN is usually more efficient because the database engine optimizes better",
            "No difference",
            "Cannot be compared"
        ],
        correct: 1,
        explanation: "<strong>JOIN</strong> is usually more efficient because the database engine can optimize the execution plan better. However, depending on the case, subqueries may be more readable and with modern optimizers, the difference is not significant."
    },
    {
        id: 21,
        category: "Transaction",
        question: "What is a Deadlock in a database?",
        options: [
            "Database crashes",
            "Two transactions waiting for each other to release locks",
            "Query takes too long",
            "Index is corrupted"
        ],
        correct: 1,
        explanation: "<strong>Deadlock</strong> occurs when Transaction A locks resource X and waits for resource Y, while Transaction B locks resource Y and waits for resource X. Both wait for each other forever. The database usually automatically detects and kills one transaction."
    },
    {
        id: 22,
        category: "SQL",
        question: "What is the COALESCE() function used for?",
        options: [
            "Combine multiple tables",
            "Returns the first non-NULL value in the list",
            "Sum of columns",
            "Compress data"
        ],
        correct: 1,
        explanation: "<strong>COALESCE(value1, value2, ...)</strong> returns the <em>first non-NULL value</em>. Often used to replace NULL with a default value: <code>COALESCE(phone, 'N/A')</code>"
    },
    {
        id: 23,
        category: "Indexing",
        question: "What is a Covering Index?",
        options: [
            "Index covering the entire database",
            "Index containing all columns needed for the query (no lookup to original table)",
            "Index for all tables",
            "Backup of index"
        ],
        correct: 1,
        explanation: "<strong>Covering Index</strong> is an index containing <em>all columns</em> needed for a query (in both WHERE and SELECT). The query only needs to read the index, no need to access the original table → very fast."
    },
    {
        id: 24,
        category: "SQL",
        question: "What is the ROW_NUMBER() window function used for?",
        options: [
            "Count total rows in table",
            "Assign unique sequential numbers to rows in a partition",
            "Calculate average",
            "Create primary key"
        ],
        correct: 1,
        explanation: "<strong>ROW_NUMBER()</strong> assigns unique sequential numbers (1, 2, 3...) to each row in a <em>partition</em>. Example: <code>ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)</code>"
    },
    {
        id: 25,
        category: "Database Design",
        question: "What is a Surrogate Key?",
        options: [
            "User's official key",
            "Auto-generated key with no business meaning (like AUTO_INCREMENT)",
            "Key for encrypting data",
            "Foreign Key"
        ],
        correct: 1,
        explanation: "<strong>Surrogate Key</strong> is an <em>auto-generated</em> key (ID, UUID...) with no business meaning, used only for unique identification. Opposite of <strong>Natural Key</strong> (like SSN, email) which has real-world meaning."
    },
    {
        id: 26,
        category: "SQL",
        question: "What is the difference between VARCHAR and CHAR?",
        options: [
            "No difference",
            "CHAR has fixed length, VARCHAR varies with data",
            "VARCHAR is faster than CHAR",
            "CHAR is only for special characters"
        ],
        correct: 1,
        explanation: "<strong>CHAR(n)</strong>: Fixed n characters, padded with spaces if shorter.<br><strong>VARCHAR(n)</strong>: Variable, only stores needed characters + 1-2 bytes for length. VARCHAR saves more space."
    },
    {
        id: 27,
        category: "Transaction",
        question: "How do Optimistic Locking and Pessimistic Locking differ?",
        options: [
            "No difference",
            "Optimistic: Check conflict when updating, Pessimistic: Lock when reading",
            "Optimistic is only for NoSQL",
            "Pessimistic is faster than Optimistic"
        ],
        correct: 1,
        explanation: "<strong>Optimistic</strong>: No locking, checks version/timestamp when updating. Good for read-heavy.<br><strong>Pessimistic</strong>: Locks immediately when reading. Good for write-heavy, avoids conflicts."
    },
    {
        id: 28,
        category: "SQL",
        question: "Which keyword starts a CTE (Common Table Expression)?",
        options: [
            "WITH",
            "USING",
            "AS",
            "TEMP"
        ],
        correct: 0,
        explanation: "<strong>CTE</strong> starts with <code>WITH</code>:<br><code>WITH cte_name AS (SELECT ...) SELECT * FROM cte_name</code>. Helps write complex queries more readably."
    },
    {
        id: 29,
        category: "NoSQL",
        question: "What does the CAP Theorem state?",
        options: [
            "How to optimize queries",
            "Can only guarantee 2/3: Consistency, Availability, Partition tolerance",
            "How to design indexes",
            "Types of joins in NoSQL"
        ],
        correct: 1,
        explanation: "<strong>CAP Theorem</strong>: In distributed systems, you can only guarantee at most <strong>2/3</strong> properties:<br>• <strong>C</strong>onsistency<br>• <strong>A</strong>vailability<br>• <strong>P</strong>artition tolerance (required in distributed systems)"
    },
    {
        id: 30,
        category: "SQL",
        question: "What is the difference between COUNT(*) and COUNT(column)?",
        options: [
            "No difference",
            "COUNT(*) counts all, COUNT(column) skips NULL",
            "COUNT(column) is faster",
            "COUNT(*) only counts unique values"
        ],
        correct: 1,
        explanation: "<strong>COUNT(*)</strong>: Counts <em>all</em> records (including NULL).<br><strong>COUNT(column)</strong>: Only counts <em>non-NULL</em> values in that column."
    },
    {
        id: 31,
        category: "Indexing",
        question: "What is a Clustered Index?",
        options: [
            "Index for multiple columns",
            "Index that determines the physical order of data in the table",
            "Backup index",
            "Index across multiple tables"
        ],
        correct: 1,
        explanation: "<strong>Clustered Index</strong> determines the <em>physical storage order</em> of data in the table. A table can only have 1 clustered index (usually the primary key). Non-clustered indexes point to the clustered index."
    },
    {
        id: 32,
        category: "SQL",
        question: "When to use EXISTS instead of IN?",
        options: [
            "Always use EXISTS",
            "When subquery returns many rows, EXISTS is usually more efficient",
            "When comparing numbers",
            "When using with NULL"
        ],
        correct: 1,
        explanation: "<strong>EXISTS</strong> is usually more efficient than <strong>IN</strong> when the subquery is large because EXISTS stops immediately when it finds the first match, while IN needs to materialize the entire subquery."
    },
    {
        id: 33,
        category: "Database Design",
        question: "What is an Entity-Relationship Diagram (ERD) used for?",
        options: [
            "Write SQL code",
            "Model database structure and relationships between entities",
            "Optimize performance",
            "Create backup"
        ],
        correct: 1,
        explanation: "<strong>ERD</strong> is used to <em>design and visualize</em> database structure, showing <strong>entities</strong> (tables), <strong>attributes</strong> (columns), and <strong>relationships</strong> between them."
    },
    {
        id: 34,
        category: "SQL",
        question: "What is a Self Join?",
        options: [
            "Join with the same table",
            "Automatic join",
            "Join without conditions",
            "Join between 2 databases"
        ],
        correct: 0,
        explanation: "<strong>Self Join</strong> is joining a table with <em>itself</em>. Use aliases to distinguish: <code>SELECT a.name, b.name FROM employees a JOIN employees b ON a.manager_id = b.id</code>"
    },
    {
        id: 35,
        category: "NoSQL",
        question: "What type of database is Neo4j?",
        options: [
            "Document database",
            "Graph database",
            "Key-value store",
            "Column-family store"
        ],
        correct: 1,
        explanation: "<strong>Neo4j</strong> is a <strong>Graph Database</strong> - optimized for data with many <em>complex relationships</em> (nodes and edges). Great for social networks, recommendation engines."
    },
    {
        id: 36,
        category: "SQL",
        question: "Which statement creates a table copy (structure only, no data)?",
        options: [
            "CLONE TABLE",
            "CREATE TABLE new_table LIKE old_table",
            "COPY TABLE",
            "DUPLICATE TABLE"
        ],
        correct: 1,
        explanation: "In MySQL: <code>CREATE TABLE new_table LIKE old_table</code> creates a new table with the same structure (no data). Or: <code>CREATE TABLE new_table AS SELECT * FROM old_table WHERE 1=0</code>"
    },
    {
        id: 37,
        category: "Transaction",
        question: "What is Two-Phase Commit (2PC) used for?",
        options: [
            "Optimize query",
            "Ensure atomicity for distributed transactions",
            "Create index faster",
            "Backup database"
        ],
        correct: 1,
        explanation: "<strong>Two-Phase Commit</strong> is a protocol that ensures <strong>atomicity</strong> for transactions spanning multiple databases/nodes: Phase 1 (prepare) and Phase 2 (commit/rollback)."
    },
    {
        id: 38,
        category: "SQL",
        question: "What is the CASE expression used for?",
        options: [
            "Create new table",
            "Conditional logic in SQL (IF-THEN-ELSE)",
            "Create index",
            "Connect database"
        ],
        correct: 1,
        explanation: "<strong>CASE</strong> is a conditional statement in SQL:<br><code>CASE WHEN condition THEN result ELSE other END</code>. Similar to IF-ELSE in programming languages."
    },
    {
        id: 39,
        category: "Indexing",
        question: "How does Index Fragmentation affect performance?",
        options: [
            "No effect",
            "Slows down queries because index data is not contiguous",
            "Speeds up writes",
            "Reduces database size"
        ],
        correct: 1,
        explanation: "<strong>Index Fragmentation</strong> occurs when index data becomes fragmented (due to many INSERT/DELETE operations). Increases I/O because data is not contiguous, need to <strong>REBUILD</strong> or <strong>REORGANIZE</strong> index to optimize."
    },
    {
        id: 40,
        category: "SQL",
        question: "Which statement deletes all data in a table but keeps the structure?",
        options: [
            "DROP TABLE",
            "DELETE FROM table (no WHERE)",
            "TRUNCATE TABLE",
            "Both B and C"
        ],
        correct: 3,
        explanation: "Both <strong>DELETE FROM table</strong> (no WHERE) and <strong>TRUNCATE TABLE</strong> delete data but keep the structure. TRUNCATE is faster, doesn't log row by row, resets auto-increment."
    },
    {
        id: 41,
        category: "Database Design",
        question: "How is a One-to-Many relationship represented?",
        options: [
            "Create intermediate table",
            "Foreign key on the 'many' side pointing to the 'one' side",
            "Merge into 1 table",
            "Use array"
        ],
        correct: 1,
        explanation: "<strong>One-to-Many</strong>: Place <strong>foreign key</strong> on the 'many' side (the many side) pointing to the primary key of the 'one' side (the one side). Example: 1 Department has many Employees."
    },
    {
        id: 42,
        category: "SQL",
        question: "How do RANK() and DENSE_RANK() differ?",
        options: [
            "No difference",
            "RANK() skips ranks after tie, DENSE_RANK() doesn't skip",
            "DENSE_RANK() is only for integers",
            "RANK() is faster"
        ],
        correct: 1,
        explanation: "With data [100, 100, 90]:<br>• <strong>RANK()</strong>: 1, 1, 3 (skips 2)<br>• <strong>DENSE_RANK()</strong>: 1, 1, 2 (doesn't skip)"
    },
    {
        id: 43,
        category: "NoSQL",
        question: "What type of database is Cassandra?",
        options: [
            "Document store",
            "Wide-column store (Column-family)",
            "Graph database",
            "Key-value store"
        ],
        correct: 1,
        explanation: "<strong>Cassandra</strong> is a <strong>Wide-Column Store</strong> (Column-Family). Each row can have different numbers of columns. Good for write-heavy, time-series data."
    },
    {
        id: 44,
        category: "SQL",
        question: "Which query finds employees with salary higher than average?",
        options: [
            "SELECT * FROM employees WHERE salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)",
            "SELECT * FROM employees HAVING salary > AVG(salary)",
            "SELECT * FROM employees WHERE salary > AVERAGE"
        ],
        correct: 1,
        explanation: "Need to use <strong>subquery</strong>: <code>SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees)</code>. Cannot use aggregate function directly in WHERE."
    },
    {
        id: 45,
        category: "Transaction",
        question: "What problem does Snapshot Isolation solve?",
        options: [
            "Deadlock",
            "Non-repeatable reads and Phantom reads",
            "Disk full",
            "Network latency"
        ],
        correct: 1,
        explanation: "<strong>Snapshot Isolation</strong> ensures a transaction sees a <em>snapshot</em> of the database at the start of the transaction, preventing <strong>non-repeatable reads</strong> and <strong>phantom reads</strong>."
    },
    {
        id: 46,
        category: "SQL",
        question: "What is the difference between VIEW and MATERIALIZED VIEW?",
        options: [
            "No difference",
            "VIEW is virtual, MATERIALIZED VIEW stores physical results",
            "MATERIALIZED VIEW is faster than VIEW",
            "Both B and C"
        ],
        correct: 3,
        explanation: "<strong>VIEW</strong>: Virtual table, re-queries each time called.<br><strong>MATERIALIZED VIEW</strong>: Stores physical results, needs refresh. Faster for complex queries but data may be stale."
    },
    {
        id: 47,
        category: "Database Design",
        question: "Why should SELECT * not be used in production?",
        options: [
            "Longer to write",
            "Fetches unnecessary columns, increases network traffic, breaks easily when schema changes",
            "Cannot be used with JOIN",
            "Slower when there is index"
        ],
        correct: 1,
        explanation: "<strong>SELECT *</strong> should be avoided because:<br>• Fetches unnecessary columns → increases I/O and network<br>• Breaks easily when columns are added/removed<br>• Cannot use covering index effectively"
    },
    {
        id: 48,
        category: "SQL",
        question: "What is the PIVOT operation used for?",
        options: [
            "Rotate table from row-based to column-based",
            "Create index",
            "Backup database",
            "Connect 2 tables"
        ],
        correct: 0,
        explanation: "<strong>PIVOT</strong> transforms data from <em>row-based</em> to <em>column-based</em>. Example: transform sales data by month (rows) into columns Jan, Feb, Mar..."
    },
    {
        id: 49,
        category: "NoSQL",
        question: "What is Sharding in a database?",
        options: [
            "Create index",
            "Split data into multiple parts stored on different servers",
            "Encrypt data",
            "Backup database"
        ],
        correct: 1,
        explanation: "<strong>Sharding</strong> is a technique to <em>split data</em> (by range, hash, or geo) across multiple servers to <strong>scale horizontally</strong> and distribute load."
    },
    {
        id: 50,
        category: "SQL",
        question: "What is a Query Execution Plan used for?",
        options: [
            "Create new table",
            "Analyze and optimize how the database executes queries",
            "Backup data",
            "Create new user"
        ],
        correct: 1,
        explanation: "<strong>Execution Plan</strong> shows how the database will <em>execute the query</em> (which index to use, join order...). Used to <strong>optimize performance</strong> and debug slow queries."
    },
    {
        id: 51,
        category: "Advanced SQL",
        question: "What does the LAG() window function do?",
        options: [
            "Creates a delay in query execution",
            "Returns the value from the previous row in the partition",
            "Sorts data in descending order",
            "Locks the table for reading"
        ],
        correct: 1,
        explanation: "<strong>LAG()</strong> lets you look at the <em>previous row</em> without joining. Example: Compare today's sales with yesterday's using <code>LAG(sales, 1) OVER (ORDER BY date)</code>."
    },
    {
        id: 52,
        category: "Advanced SQL",
        question: "What does LEAD() function do compared to LAG()?",
        options: [
            "LEAD looks at the next row, LAG looks at the previous row",
            "LEAD is faster than LAG",
            "LEAD works only on numbers, LAG works on all types",
            "No difference between them"
        ],
        correct: 0,
        explanation: "<strong>LEAD()</strong> looks at the <em>next row</em> (forward), while <strong>LAG()</strong> looks at the <em>previous row</em> (backward). Use LEAD to see what happens next, LAG to see what happened before."
    },
    {
        id: 53,
        category: "Advanced SQL",
        question: "What does NTILE(n) do?",
        options: [
            "Divides rows into n equal buckets/groups",
            "Creates n copies of the table",
            "Splits a string into n parts",
            "Allocates n bytes of memory"
        ],
        correct: 0,
        explanation: "<strong>NTILE(4)</strong> splits all rows into <em>4 equal groups</em> (quartiles). Great for finding top 25% performers or creating percentile rankings."
    },
    {
        id: 54,
        category: "Advanced SQL",
        question: "What is a Recursive CTE used for?",
        options: [
            "Repeating the same query multiple times",
            "Querying hierarchical/tree-structured data",
            "Creating infinite loops",
            "Backing up data recursively"
        ],
        correct: 1,
        explanation: "<strong>Recursive CTE</strong> is perfect for <em>hierarchical data</em> like org charts or folder structures. It keeps calling itself until it reaches the end of the tree."
    },
    {
        id: 55,
        category: "Advanced SQL",
        question: "What is a Correlated Subquery?",
        options: [
            "A subquery that depends on the outer query",
            "A subquery that runs faster than the main query",
            "A query that correlates two tables",
            "A backup query for failed main queries"
        ],
        correct: 0,
        explanation: "<strong>Correlated Subquery</strong> runs <em>once for each row</em> in the outer query. It references columns from the outer query, making it slower but powerful for row-by-row comparisons."
    },
    {
        id: 56,
        category: "Advanced SQL",
        question: "What is SQL Injection?",
        options: [
            "Injecting SQL code into a database engine",
            "A security attack where malicious SQL is inserted via user input",
            "Adding SQL functions to a programming language",
            "Optimizing SQL queries with hints"
        ],
        correct: 1,
        explanation: "<strong>SQL Injection</strong> is when attackers sneak <em>malicious SQL</em> through user inputs (like search boxes). Example: entering <code>'; DROP TABLE users; --</code> to delete data. Always use parameterized queries!"
    },
    {
        id: 57,
        category: "Advanced SQL",
        question: "What's the main difference between Stored Procedures and Functions?",
        options: [
            "Functions can return values, stored procedures cannot",
            "Stored procedures can have side effects (INSERT/UPDATE), functions should be pure",
            "Stored procedures are faster",
            "Functions can only do math"
        ],
        correct: 1,
        explanation: "<strong>Stored Procedures</strong> can modify data and don't have to return values. <strong>Functions</strong> should be pure (no side effects) and must return a value. Think: procedures 'do things', functions 'calculate things'."
    },
    {
        id: 58,
        category: "Advanced SQL",
        question: "What is a Database Trigger?",
        options: [
            "A button that starts a query",
            "Code that automatically runs when certain events happen (INSERT/UPDATE/DELETE)",
            "A tool for importing data",
            "A type of database index"
        ],
        correct: 1,
        explanation: "<strong>Triggers</strong> are like <em>automatic reactions</em>. When someone INSERTS a row, the trigger can automatically update an audit log or validate data. They fire without being called directly."
    },
    {
        id: 59,
        category: "Advanced SQL",
        question: "Which is better for preventing SQL Injection: string concatenation or parameterized queries?",
        options: [
            "String concatenation is faster",
            "Parameterized queries - they separate code from data",
            "Both are equally safe",
            "SQL injection cannot be prevented"
        ],
        correct: 1,
        explanation: "<strong>Parameterized queries</strong> treat user input as <em>data only</em>, never as SQL code. String concatenation lets attackers inject commands. Always use parameters: <code>SELECT * FROM users WHERE id = ?</code>"
    },
    {
        id: 60,
        category: "Advanced SQL",
        question: "When should you use a Recursive CTE vs a simple JOIN?",
        options: [
            "Always use Recursive CTE for better performance",
            "Use Recursive CTE for hierarchical/tree data with unknown depth",
            "JOIN is always better",
            "Recursive CTE is only for MySQL"
        ],
        correct: 1,
        explanation: "Use <strong>Recursive CTE</strong> when you don't know how many levels deep the data goes (like an org chart where managers have managers). Regular JOINs need to know the depth in advance."
    },
    {
        id: 61,
        category: "Performance",
        question: "What is Query Plan Analysis used for?",
        options: [
            "Creating database diagrams",
            "Understanding how the database executes your query and finding bottlenecks",
            "Planning database backups",
            "Designing table schemas"
        ],
        correct: 1,
        explanation: "<strong>Query Plan Analysis</strong> shows you the <em>step-by-step</em> of how your query runs. It reveals if the database is doing expensive full table scans instead of using indexes."
    },
    {
        id: 62,
        category: "Performance",
        question: "What is Connection Pooling?",
        options: [
            "A swimming pool for database administrators",
            "Reusing database connections instead of creating new ones each time",
            "Pooling query results in memory",
            "Connecting multiple databases together"
        ],
        correct: 1,
        explanation: "<strong>Connection Pooling</strong> keeps a <em>pool of ready connections</em> open. Instead of the expensive 'handshake' every time, apps grab an existing connection. Like keeping a taxi waiting instead of calling a new one."
    },
    {
        id: 63,
        category: "Performance",
        question: "What are Read Replicas?",
        options: [
            "Copies of data for backup only",
            "Read-only copies of the database to distribute read traffic",
            "Duplicate tables in the same database",
            "Cached query results"
        ],
        correct: 1,
        explanation: "<strong>Read Replicas</strong> are <em>copies</em> of your main database that only handle SELECT queries. They spread read traffic across multiple servers, like having multiple checkout lanes at a store."
    },
    {
        id: 64,
        category: "Performance",
        question: "What is Database Caching?",
        options: [
            "Storing data in hidden folders",
            "Storing frequently accessed data in fast memory (Redis/Memcached) to reduce database load",
            "Compressing database files",
            "Creating database backups"
        ],
        correct: 1,
        explanation: "<strong>Caching</strong> stores popular data in <em>super-fast memory</em> (like Redis). Instead of querying the database every time, apps check the cache first - like keeping frequently used tools on your desk instead of the storage room."
    },
    {
        id: 65,
        category: "Performance",
        question: "What is Table Partitioning?",
        options: [
            "Dividing a table into smaller physical pieces based on a column value",
            "Splitting data across different databases",
            "Creating backup copies of tables",
            "Encrypting table data"
        ],
        correct: 0,
        explanation: "<strong>Partitioning</strong> splits a huge table into <em>smaller chunks</em> (like by date or region). Queries only scan relevant partitions, not the entire table. Like organizing a filing cabinet by year instead of one big pile."
    },
    {
        id: 66,
        category: "Performance",
        question: "Which type of database cache invalidation is safest but slowest?",
        options: [
            "Write-through (update cache and DB together)",
            "Cache-aside (lazy loading)",
            "Write-behind (async updates)",
            "No invalidation"
        ],
        correct: 0,
        explanation: "<strong>Write-through</strong> updates both cache and database together. It's <em>slower</em> because every write does double work, but data is always consistent. Like updating both your notebook and the shared document simultaneously."
    },
    {
        id: 67,
        category: "Performance",
        question: "What is the N+1 Query Problem?",
        options: [
            "Running N queries plus 1 backup query",
            "Running one query to get N items, then N more queries to get related data",
            "A mathematical problem in databases",
            "Adding N+1 indexes to a table"
        ],
        correct: 1,
        explanation: "<strong>N+1 Problem</strong>: You fetch 100 users (1 query), then loop through and fetch each user's orders (100 queries) = 101 total! Fix with <strong>JOIN</strong> or <strong>eager loading</strong>."
    },
    {
        id: 68,
        category: "Performance",
        question: "What is the benefit of Range Partitioning by date?",
        options: [
            "It makes dates look prettier",
            "Old partitions can be archived/deleted without affecting recent data",
            "It automatically sorts data",
            "It encrypts old data"
        ],
        correct: 1,
        explanation: "<strong>Range Partitioning</strong> by date lets you <em>drop old partitions</em> (like data from 2020) instantly without DELETE statements. Queries for recent data only scan recent partitions."
    },
    {
        id: 69,
        category: "Security",
        question: "What is Encryption at Rest?",
        options: [
            "Encrypting data when it's being sent over the network",
            "Encrypting data stored on disk",
            "Encrypting data in RAM",
            "Encrypting backup tapes only"
        ],
        correct: 1,
        explanation: "<strong>Encryption at Rest</strong> scrambles data on the <em>hard drive</em>. If someone steals the physical disk, they can't read it. Different from Encryption in Transit (network)."
    },
    {
        id: 70,
        category: "Security",
        question: "What is Encryption in Transit?",
        options: [
            "Encrypting data on the hard disk",
            "Encrypting data while traveling over the network (TLS/SSL)",
            "Encrypting data in backups",
            "Encrypting data before deletion"
        ],
        correct: 1,
        explanation: "<strong>Encryption in Transit</strong> protects data as it travels between your app and database (like HTTPS). Prevents eavesdroppers from reading data on the wire."
    },
    {
        id: 71,
        category: "Security",
        question: "What is RBAC in database security?",
        options: [
            "Random Based Access Control",
            "Role-Based Access Control - permissions assigned to roles, not individual users",
            "Read-Backup-Access-Create",
            "Row-Based Access Control"
        ],
        correct: 1,
        explanation: "<strong>RBAC</strong> (Role-Based Access Control) gives permissions to <em>roles</em> (like 'analyst', 'admin'), then assigns users to roles. Easier than managing permissions for each person individually."
    },
    {
        id: 72,
        category: "Security",
        question: "How can prepared statements prevent SQL Injection?",
        options: [
            "They make queries run faster",
            "They separate SQL code from user data, treating input as values only",
            "They encrypt the query",
            "They check user passwords"
        ],
        correct: 1,
        explanation: "<strong>Prepared statements</strong> send the SQL <em>structure</em> first, then data separately. The database knows input is <strong>never</strong> code, so malicious input can't execute commands."
    },
    {
        id: 73,
        category: "Security",
        question: "What is Row-Level Security (RLS)?",
        options: [
            "Security that only applies to certain rows in the office",
            "Restricting which rows a user can see based on their permissions",
            "Encrypting individual rows differently",
            "A backup strategy for important rows"
        ],
        correct: 1,
        explanation: "<strong>Row-Level Security</strong> automatically filters rows based on <em>who's asking</em>. A sales rep sees only their customers' data, even though the table contains all customers."
    },
    {
        id: 74,
        category: "Security",
        question: "What is Database Audit Logging?",
        options: [
            "Counting the number of tables",
            "Recording who did what and when in the database",
            "Checking database disk space",
            "Testing database performance"
        ],
        correct: 1,
        explanation: "<strong>Audit Logging</strong> keeps a <em>trail of all actions</em> - who accessed what data, when they did it, and what changed. Essential for compliance (SOX, HIPAA) and detecting breaches."
    },
    {
        id: 75,
        category: "Backup & Recovery",
        question: "What is a Full Backup?",
        options: [
            "Backing up only changed data",
            "A complete copy of all database data",
            "Backing up just the indexes",
            "Backing up user passwords only"
        ],
        correct: 1,
        explanation: "<strong>Full Backup</strong> copies <em>everything</em>. It's the slowest but most complete. Like photocopying an entire book instead of just the changed pages."
    },
    {
        id: 76,
        category: "Backup & Recovery",
        question: "What is a Differential Backup?",
        options: [
            "Backing up data that changed since the LAST full backup",
            "Backing up differences between two databases",
            "Backing up only text columns",
            "A backup that checks for errors"
        ],
        correct: 0,
        explanation: "<strong>Differential Backup</strong> captures only data that changed since the <em>last full backup</em>. Faster than full backup, but grows larger each day until the next full backup."
    },
    {
        id: 77,
        category: "Backup & Recovery",
        question: "What is Transaction Log Backup?",
        options: [
            "Backing up the error log file",
            "Backing up all transactions since the last log backup for point-in-time recovery",
            "Backing up login attempts",
            "Backing up table names only"
        ],
        correct: 1,
        explanation: "<strong>Log Backup</strong> captures every transaction since the last backup. Combined with full backups, it enables <strong>point-in-time recovery</strong> - restore to any second, not just backup times."
    },
    {
        id: 78,
        category: "Backup & Recovery",
        question: "What is Point-in-Time Recovery (PITR)?",
        options: [
            "Recovering data from a specific moment in time",
            "Recovering only the current time's data",
            "Scheduling backups at specific times",
            "Backing up every hour"
        ],
        correct: 0,
        explanation: "<strong>PITR</strong> lets you restore to <em>any exact moment</em> (like '2:34 PM yesterday'). Essential for recovering from mistakes - like if someone accidentally deleted data at 3 PM but you don't discover it until 5 PM."
    },
    {
        id: 79,
        category: "Backup & Recovery",
        question: "In Master-Slave Replication, what can the Slave do?",
        options: [
            "Handle both reads and writes",
            "Handle read queries only (replicates from Master)",
            "Delete data from the Master",
            "Create new tables independently"
        ],
        correct: 1,
        explanation: "<strong>Master-Slave Replication</strong>: Master handles all writes, Slaves copy changes and handle <em>read queries</em>. Spreads read load. If Master dies, you can promote a Slave."
    },
    {
        id: 80,
        category: "Backup & Recovery",
        question: "What is Master-Master Replication?",
        options: [
            "Two databases where both can accept writes",
            "One master controlling two slaves",
            "A master database with double backup",
            "Replication that only works on weekends"
        ],
        correct: 0,
        explanation: "<strong>Master-Master</strong> lets <em>both servers accept writes</em>. Changes sync between them. Good for high availability but complex - conflicts can occur if both edit the same row."
    },
    {
        id: 81,
        category: "Backup & Recovery",
        question: "What is WAL (Write-Ahead Logging)?",
        options: [
            "Logging that happens after writing to disk",
            "Writing changes to a log BEFORE updating actual data files",
            "A type of backup storage",
            "Logging out database users"
        ],
        correct: 1,
        explanation: "<strong>WAL</strong> writes changes to a <em>log file first</em>, then to the actual database. If the system crashes mid-write, the log can replay and complete the operation. Like writing in a draft before finalizing."
    },
    {
        id: 82,
        category: "Cloud Databases",
        question: "What is the main difference between Amazon RDS and Aurora?",
        options: [
            "RDS is free, Aurora is paid",
            "Aurora is AWS-optimized, up to 5x faster than standard MySQL/PostgreSQL on RDS",
            "RDS only supports MySQL",
            "Aurora cannot be used with AWS"
        ],
        correct: 1,
        explanation: "<strong>Amazon Aurora</strong> is AWS's <em>custom-built</em> database engine, compatible with MySQL/PostgreSQL but much faster. <strong>RDS</strong> hosts standard database engines on managed instances."
    },
    {
        id: 83,
        category: "Cloud Databases",
        question: "What type of database is DynamoDB?",
        options: [
            "Relational database",
            "Fully managed NoSQL key-value and document database",
            "Graph database only",
            "In-memory cache only"
        ],
        correct: 1,
        explanation: "<strong>DynamoDB</strong> is AWS's <em>serverless NoSQL</em> database. Scales automatically, super fast (single-digit millisecond latency), and you only pay for what you use."
    },
    {
        id: 84,
        category: "Cloud Databases",
        question: "What is Google BigQuery used for?",
        options: [
            "Running small transactional queries",
            "Analyzing massive datasets (data warehouse) with SQL",
            "Storing user session data",
            "Real-time chat applications"
        ],
        correct: 1,
        explanation: "<strong>BigQuery</strong> is Google's <em>data warehouse</em> for analyzing petabytes of data. Not for fast OLTP (transactions), but amazing for OLAP (analytics) - running reports on huge datasets."
    },
    {
        id: 85,
        category: "Cloud Databases",
        question: "What is a Serverless Database?",
        options: [
            "A database without any servers",
            "Database that automatically scales and you pay per use (no server management)",
            "A database that only runs on weekends",
            "A database with no security"
        ],
        correct: 1,
        explanation: "<strong>Serverless databases</strong> (like DynamoDB, Aurora Serverless) <em>scale automatically</em> based on demand. You don't provision servers or worry about capacity - just pay for actual usage."
    },
    {
        id: 86,
        category: "Cloud Databases",
        question: "What is Multi-Region Database Deployment?",
        options: [
            "Deploying to multiple data centers in the same city",
            "Replicating data across different geographic regions for low latency and disaster recovery",
            "Running multiple database versions",
            "Deploying databases on multiple cloud providers"
        ],
        correct: 1,
        explanation: "<strong>Multi-Region</strong> puts copies of your database in <em>different parts of the world</em>. Users in Asia query the Asia copy for speed. If one region fails, others keep running."
    },
    {
        id: 87,
        category: "Cloud Databases",
        question: "Which AWS database service is best for real-time applications requiring microsecond latency?",
        options: [
            "RDS",
            "ElastiCache (Redis/Memcached)",
            "DynamoDB",
            "Redshift"
        ],
        correct: 1,
        explanation: "<strong>ElastiCache</strong> (managed Redis/Memcached) provides <em>microsecond</em> latency by keeping data in memory. Perfect for caching, session stores, and real-time leaderboards."
    },
    {
        id: 88,
        category: "Data Warehousing",
        question: "What is the main difference between OLAP and OLTP?",
        options: [
            "OLAP is for transactions, OLTP is for analytics",
            "OLTP handles daily transactions, OLAP handles analytical queries on large data",
            "OLAP is faster than OLTP",
            "OLTP is only for NoSQL"
        ],
        correct: 1,
        explanation: "<strong>OLTP</strong> (Online Transaction Processing): Fast inserts/updates for daily operations (shopping cart). <strong>OLAP</strong> (Online Analytical Processing): Complex queries on huge datasets (sales reports)."
    },
    {
        id: 89,
        category: "Data Warehousing",
        question: "What is a Star Schema?",
        options: [
            "A database shaped like a star",
            "One central fact table surrounded by dimension tables",
            "A schema with only 5 tables",
            "A backup strategy"
        ],
        correct: 1,
        explanation: "<strong>Star Schema</strong> has a <em>central fact table</em> (sales, orders) with foreign keys to surrounding <em>dimension tables</em> (customers, products, dates). Looks like a star diagram."
    },
    {
        id: 90,
        category: "Data Warehousing",
        question: "What is a Snowflake Schema?",
        options: [
            "A schema that only works in winter",
            "Star schema with normalized dimension tables (dimensions have sub-dimensions)",
            "A database schema for storing images",
            "A backup of the star schema"
        ],
        correct: 1,
        explanation: "<strong>Snowflake Schema</strong> is like a Star Schema but <em>dimensions are further normalized</em>. A 'Product' dimension might link to 'Category' and 'Brand' tables, creating a snowflake pattern."
    },
    {
        id: 91,
        category: "Data Warehousing",
        question: "What is the difference between ETL and ELT?",
        options: [
            "ETL is faster than ELT",
            "ETL transforms before loading, ELT loads raw data then transforms in the warehouse",
            "ELT is only for small data",
            "They are the same thing"
        ],
        correct: 1,
        explanation: "<strong>ETL</strong>: Extract → Transform → Load (transform on a separate server). <strong>ELT</strong>: Extract → Load → Transform (load raw data, then use warehouse power to transform). Cloud warehouses prefer ELT."
    },
    {
        id: 92,
        category: "Data Warehousing",
        question: "Why do Data Warehouses use Columnar Storage?",
        options: [
            "It looks better in diagrams",
            "Analytical queries read specific columns faster (don't need to load entire rows)",
            "It's required by law",
            "Columnar storage is cheaper"
        ],
        correct: 1,
        explanation: "<strong>Columnar Storage</strong> stores data by <em>columns</em> instead of rows. When analyzing 'sum of sales', it only reads the sales column, not every column of every row. Much faster for analytics!"
    },
    {
        id: 93,
        category: "MongoDB",
        question: "What is the MongoDB Aggregation Pipeline?",
        options: [
            "A physical pipeline for data",
            "A framework for processing data through stages (filter, group, sort) like an assembly line",
            "A backup process",
            "A way to import data"
        ],
        correct: 1,
        explanation: "<strong>Aggregation Pipeline</strong> processes data through <em>stages</em> in sequence: $match (filter) → $group (aggregate) → $sort. Like an assembly line where each stage transforms the data."
    },
    {
        id: 94,
        category: "MongoDB",
        question: "What is MongoDB Sharding?",
        options: [
            "Breaking data into pieces using a shard key to distribute across servers",
            "Encrypting MongoDB data",
            "Creating backup shards",
            "A type of MongoDB index"
        ],
        correct: 0,
        explanation: "<strong>Sharding</strong> splits MongoDB data across <em>multiple servers</em> using a <strong>shard key</strong> (like user_id). Each shard holds a portion, allowing horizontal scaling beyond one server's capacity."
    },
    {
        id: 95,
        category: "MongoDB",
        question: "What is a MongoDB Replica Set?",
        options: [
            "A set of duplicate documents",
            "A group of MongoDB servers maintaining the same data for redundancy and failover",
            "A backup file format",
            "A type of query"
        ],
        correct: 1,
        explanation: "<strong>Replica Set</strong> is <em>3+ MongoDB servers</em> that keep copies of the same data. One Primary handles writes, others replicate. If Primary dies, a Secondary automatically becomes Primary."
    },
    {
        id: 96,
        category: "MongoDB",
        question: "What is a Compound Index in MongoDB?",
        options: [
            "An index on a single field",
            "An index on multiple fields (like {lastName: 1, firstName: 1})",
            "A combination of text and number indexes",
            "An index that expires"
        ],
        correct: 1,
        explanation: "<strong>Compound Index</strong> indexes <em>multiple fields together</em>. Like a phone book sorted by last name, then first name. Queries must use fields from left to right to benefit."
    },
    {
        id: 97,
        category: "MongoDB",
        question: "What is the Schema Design Pattern 'Embedding' in MongoDB?",
        options: [
            "Putting documents inside other documents (denormalization)",
            "Creating database schemas",
            "Encrypting documents",
            "Linking documents with foreign keys"
        ],
        correct: 0,
        explanation: "<strong>Embedding</strong> stores related data <em>inside the same document</em> (like putting all comments inside a blog post document). Fast reads but duplication. Good for 1:few relationships."
    },
    {
        id: 98,
        category: "PostgreSQL",
        question: "What is JSONB in PostgreSQL?",
        options: [
            "Just a string storing JSON text",
            "Binary JSON storage that is parsed, indexable, and queryable",
            "A backup format for JSON",
            "JavaScript for PostgreSQL"
        ],
        correct: 1,
        explanation: "<strong>JSONB</strong> stores JSON in a <em>binary, parsed format</em>. You can index it, query inside it (<code>data->>'name'</code>), and it's faster than storing JSON as text."
    },
    {
        id: 99,
        category: "PostgreSQL",
        question: "How does PostgreSQL handle Array types?",
        options: [
            "PostgreSQL does not support arrays",
            "PostgreSQL supports arrays as a native column type with array operators and indexes",
            "Arrays must be stored as comma-separated strings",
            "Arrays are only for numbers"
        ],
        correct: 1,
        explanation: "<strong>PostgreSQL Arrays</strong> are <em>first-class citizens</em>. You can have <code>INTEGER[]</code> columns, query with <code>ANY</code>, use <code>unnest()</code> to expand them, and even create GiST indexes on arrays."
    },
    {
        id: 100,
        category: "PostgreSQL",
        question: "What is PostgreSQL Full-Text Search?",
        options: [
            "Searching only in text files",
            "Built-in text search with stemming, ranking, and relevance scoring",
            "A third-party plugin only",
            "Searching only full words, not partial matches"
        ],
        correct: 1,
        explanation: "<strong>PostgreSQL Full-Text Search</strong> is <em>built-in</em>! It handles stemming (run/runs/running), stop words, ranking results by relevance, and special indexes (GIN) for speed. No Elasticsearch needed for many use cases!"
    },
    // 50 Scenario-Based Questions for Senior Fullstack Developers
    {
        id: 101,
        category: "System Design",
        type: "open",
        question: "Scenario: You're designing a database for a ride-sharing app like Uber. The system needs to handle 1 million daily rides, real-time driver location updates, and complex pricing calculations. Users frequently search for nearby drivers. How would you design the schema and what database(s) would you choose?",
        answer: "1. Use PostgreSQL for transactional data (rides, users, payments) with proper indexing on location columns using PostGIS extension. 2. Use Redis for real-time driver locations with geospatial queries and TTL on location updates. 3. Use a separate read replica for heavy analytics queries. 4. Partition ride history table by date for performance. 5. Consider using a separate OLAP database (like ClickHouse) for pricing analytics and ML model training.",
        explanation: "This is a polyglot persistence scenario. PostgreSQL provides ACID guarantees for financial transactions. Redis handles high-write real-time location data efficiently. Separating read and write workloads prevents analytical queries from impacting user experience. Partitioning manages data growth over time."
    },
    {
        id: 102,
        category: "Performance",
        type: "open",
        question: "Scenario: Your MySQL database table reached 10 million rows and simple SELECT queries started taking 5+ seconds. The table has a primary key and a few foreign keys. Users report the app feels slow. What's your systematic approach to diagnose and fix this?",
        answer: "1. Run EXPLAIN on slow queries to identify missing indexes or full table scans. 2. Check if the query uses proper WHERE clause filtering. 3. Add composite indexes for frequently queried column combinations. 4. Consider query rewriting to avoid SELECT *. 5. Implement pagination for large result sets. 6. If queries are still slow, consider horizontal partitioning (sharding) by user_id or date. 7. Enable query cache if read-heavy. 8. Monitor slow query log continuously.",
        explanation: "Most performance issues stem from missing indexes or inefficient queries. EXPLAIN is your best friend. Adding indexes is usually the first fix, but be careful - too many indexes slow down writes. Sometimes the query logic itself needs optimization (e.g., avoiding N+1 queries)."
    },
    {
        id: 103,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to migrate a 1TB PostgreSQL table to a new schema without downtime. The table is actively written to 24/7 by multiple services. The migration requires adding a new NOT NULL column with calculated values from existing data. How do you approach this?",
        answer: "1. Add the new column as NULL first (no table rewrite needed). 2. Create a background job to populate the column in batches to avoid locking. 3. Use a trigger to keep new column updated for incoming writes during migration. 4. Once all rows are populated, add a CHECK constraint with NOT VALID to avoid full table scan. 5. Run VALIDATE CONSTRAINT in background. 6. Finally, alter column to NOT NULL. 7. Use pglogical or similar for zero-downtime cutover if needed.",
        explanation: "PostgreSQL's ALTER TABLE acquires exclusive locks. Breaking the migration into steps prevents long locks. The NOT VALID + VALIDATE pattern allows adding constraints without locking. Triggers ensure consistency during the transition period."
    },
    {
        id: 104,
        category: "Scaling",
        type: "open",
        question: "Scenario: Your e-commerce database is hitting 90% CPU during Black Friday sales. You have 1 primary and 2 read replicas, but writes are becoming the bottleneck. The product catalog, user sessions, and order data are all in one PostgreSQL database. What strategies would you consider?",
        answer: "1. Separate write-heavy and read-heavy data - move sessions to Redis. 2. Implement CQRS: use Elasticsearch for product search, keep PostgreSQL for transactions. 3. Use connection pooling (PgBouncer) to reduce connection overhead. 4. Implement write-behind caching for non-critical updates. 5. Consider sharding orders by region or time. 6. Use async processing (message queue) for non-real-time operations like sending emails. 7. Pre-compute and cache popular product listings.",
        explanation: "When a monolithic database hits write limits, you need to split responsibilities. Redis for sessions offloads ephemeral data. CQRS separates read and write models. Sharding distributes write load. Async processing decouples critical and non-critical operations."
    },
    {
        id: 105,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: At 3 AM, your database replica lag suddenly jumps from 1 second to 15 minutes. The primary database shows high CPU but normal query patterns. The replica is running on identical hardware. What diagnostic steps would you take?",
        answer: "1. Check replica's pg_stat_replication for lag details. 2. Look for long-running queries on replica blocking replication. 3. Check if vacuum or analyze is running, blocking replication slot. 4. Monitor WAL generation rate on primary - sudden spike indicates bulk operation. 5. Check network between primary and replica. 6. Look for lock conflicts on replica. 7. Consider if large DDL was executed (like CREATE INDEX CONCURRENTLY). 8. Check disk I/O on replica - saturation causes lag.",
        explanation: "Replication lag usually comes from: replica blocking (locks, vacuum), WAL spike (bulk load), network issues, or resource saturation. Long-running queries on replicas can block replication if they hold locks. DDL operations can generate massive WAL."
    },
    {
        id: 106,
        category: "Data Consistency",
        type: "open",
        question: "Scenario: You're building a bank transfer feature. Two users transfer money to each other simultaneously. How do you ensure no money is lost or created, even if the application crashes mid-transfer?",
        answer: "1. Use database transactions with proper isolation level (SERIALIZABLE or READ COMMITTED with row locking). 2. Always acquire locks in consistent order (by account_id) to prevent deadlocks. 3. Use pessimistic locking (SELECT FOR UPDATE) on both accounts before modifying. 4. Implement idempotency keys to prevent duplicate transfers on retry. 5. Store transfer state and use two-phase commit pattern. 6. Maintain an audit log table for all balance changes. 7. Run reconciliation jobs to detect and fix inconsistencies.",
        explanation: "Financial operations require ACID guarantees. Consistent lock ordering prevents deadlocks. Pessimistic locking ensures no other transaction interferes. Idempotency prevents double-spending on retries. Audit logs provide traceability and enable reconciliation."
    },
    {
        id: 107,
        category: "Architecture",
        type: "open",
        question: "Scenario: Your startup's single PostgreSQL database is becoming a bottleneck. You have 500k daily active users and expect 10x growth in 6 months. The app has social features (feeds, likes, comments) and user-generated content. Design a database strategy for this growth.",
        answer: "1. Keep user profiles and auth in PostgreSQL (ACID needed). 2. Move social feeds to Cassandra or ScyllaDB (write-heavy, time-series). 3. Use S3 for media storage with CDN. 4. Implement Elasticsearch for content search. 5. Use Redis for counters (likes, views) with periodic flush to DB. 6. Partition data by user_id or region. 7. Implement event sourcing for social actions. 8. Use read replicas for analytics. 9. Plan for CQRS - separate read and write models.",
        explanation: "Different data has different needs. Relational data (users) stays in PostgreSQL. Social feeds need high write throughput (Cassandra). Search needs Elasticsearch. Media goes to object storage. This polyglot approach scales each component appropriately."
    },
    {
        id: 108,
        category: "Optimization",
        type: "open",
        question: "Scenario: Your analytics dashboard queries take 30+ seconds to load, timing out frequently. The queries aggregate data from 6 months of user activity (50M rows). Users need near real-time data. How would you optimize this?",
        answer: "1. Create materialized views for common aggregations, refresh periodically. 2. Use columnar storage (Amazon Redshift, ClickHouse) for analytics. 3. Implement pre-aggregated summary tables updated by triggers or batch jobs. 4. Use approximate queries (HLL, HyperLogLog) for large counts. 5. Partition data by date, query only recent partitions. 6. Implement result caching (Redis) with TTL. 7. Use stream processing (Kafka + Flink) for real-time aggregations. 8. Consider data warehousing ETL pipeline.",
        explanation: "Real-time analytics on large datasets requires different strategies than OLTP. Materialized views trade freshness for speed. Columnar storage is 10-100x faster for aggregations. Pre-aggregation eliminates expensive calculations at query time. Approximate algorithms provide fast estimates with minimal error."
    },
    {
        id: 109,
        category: "Security",
        type: "open",
        question: "Scenario: A security audit revealed your application has SQL injection vulnerabilities in legacy code. The codebase has 200+ raw SQL queries. How do you systematically fix this while minimizing risk of breaking functionality?",
        answer: "1. Immediately implement WAF rules to block common SQL injection patterns. 2. Use automated tools (sqlmap, Semgrep) to identify vulnerable queries. 3. Migrate to parameterized queries/prepared statements - never concatenate user input. 4. Implement input validation layer (whitelist approach). 5. Use ORM for new code, gradually refactor legacy. 6. Add database-level protections: least privilege principles, query timeouts. 7. Enable query logging and set up alerts for suspicious patterns. 8. Run penetration testing after fixes. 9. Document secure coding practices for the team.",
        explanation: "SQL injection is preventable with parameterized queries. Defense in depth: WAF for immediate protection, code fixes for long-term, database permissions as last resort. Automated tools help identify vulnerabilities at scale. Gradual migration reduces regression risk."
    },
    {
        id: 110,
        category: "Backup & Recovery",
        type: "open",
        question: "Scenario: Your production database suffered corruption and the last 6 hours of WAL files are missing. The last full backup was from yesterday. You have transaction logs in the application layer. How do you recover with minimal data loss?",
        answer: "1. Restore from last night's full backup to new instance. 2. Apply available WAL files to recover to last known good state. 3. Use application transaction logs to replay missing transactions. 4. For critical missing data, check if any read replicas have more recent data. 5. Consider point-in-time recovery from cloud provider snapshots if available. 6. Document data loss window and identify affected users. 7. Implement automated WAL archiving (S3) to prevent future loss. 8. Set up real-time replication to minimize RPO.",
        explanation: "Recovery requires multiple strategies. WAL is primary but application logs can fill gaps. Replicas might have more recent data. The goal is minimizing RPO (Recovery Point Objective). After recovery, fix backup strategy to prevent recurrence - automated WAL archiving is essential."
    },
    {
        id: 111,
        category: "System Design",
        type: "open",
        question: "Scenario: You're designing a real-time chat system for 10 million concurrent users. Messages need to be delivered within 100ms, and users expect message history to load instantly. How would you architect the database layer?",
        answer: "1. Use Redis Cluster for real-time message routing and presence tracking. 2. Store recent messages (last 7 days) in Cassandra for fast writes and time-series queries. 3. Archive older messages to S3 with Parquet format for cost-effective storage. 4. Implement message fan-out on write for popular channels, on read for DMs. 5. Use Elasticsearch for full-text search across message history. 6. Implement connection pooling with WebSocket gateway tier. 7. Use CQRS pattern to separate read/write workloads. 8. Geo-distribute Redis and Cassandra clusters for low latency.",
        explanation: "Chat systems need extremely low latency. Redis handles real-time routing with pub/sub. Cassandra's LSM-tree structure excels at high-write workloads. Message fan-out strategy depends on channel size - popular channels pre-compute recipient lists, DMs query on read. Archiving old data keeps hot storage fast."
    },
    {
        id: 112,
        category: "Performance",
        type: "open",
        question: "Scenario: Your API response time for a user dashboard increased from 200ms to 5 seconds. The query joins 8 tables to build the dashboard. You've already added indexes. What advanced techniques can you apply?",
        answer: "1. Implement query result caching with Redis (cache-aside pattern). 2. Use materialized views for expensive aggregations, refresh asynchronously. 3. Decompose the monolithic query into smaller parallel queries (application-side join). 4. Implement data denormalization - store pre-computed dashboard data in a separate table. 5. Use read replicas to offload SELECT queries. 6. Implement GraphQL DataLoader pattern to batch and deduplicate queries. 7. Use database-specific optimizations like PostgreSQL's LATERAL joins. 8. Consider using a dedicated OLAP database for dashboard analytics.",
        explanation: "Complex joins don't scale linearly. Caching eliminates repeated identical queries. Materialized views pre-compute expensive operations. Parallel queries can be faster than one complex query due to lock contention and query planner limitations. Denormalization trades write complexity for read speed."
    },
    {
        id: 113,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to migrate from MySQL to PostgreSQL for a 500GB database with zero downtime. The app uses complex stored procedures that need rewriting. How do you plan this migration?",
        answer: "1. Set up logical replication (pg_chameleon or Debezium) to sync MySQL to PostgreSQL in real-time. 2. Rewrite and test stored procedures incrementally in PostgreSQL. 3. Implement dual-write pattern: write to both databases during transition. 4. Use feature flags to gradually redirect read traffic to PostgreSQL. 5. Run shadow traffic - send production queries to PostgreSQL without affecting users. 6. Verify data consistency with checksums on both databases. 7. Plan rollback strategy with quick DNS cutover back to MySQL. 8. Monitor replication lag and consistency continuously.",
        explanation: "Database migrations require a dual-running period. Logical replication keeps databases in sync. Dual-write ensures no data loss during transition. Feature flags allow gradual traffic shifting. Shadow testing validates PostgreSQL performance before cutover. Always have a rollback plan ready."
    },
    {
        id: 114,
        category: "Scaling",
        type: "open",
        question: "Scenario: Your PostgreSQL database has a single table that receives 50,000 writes per second - a logging/events table that's 2TB and growing. Queries are slowing down. How do you handle this scale?",
        answer: "1. Implement time-based table partitioning (monthly or daily partitions). 2. Use declarative partitioning in PostgreSQL 12+ for automatic partition management. 3. Archive old partitions to cold storage (S3) and detach from main table. 4. Consider using TimescaleDB extension for time-series optimization. 5. Implement async batch inserts using COPY command or queue-based ingestion. 6. Use separate tablespaces for recent vs. old partitions. 7. Set up partition-wise joins for queries spanning multiple time periods. 8. Consider specialized time-series database (InfluxDB, ClickHouse) for pure event storage.",
        explanation: "Time-series data at scale requires partitioning. PostgreSQL's native partitioning allows efficient partition pruning - queries only scan relevant partitions. Archiving old data keeps the working set small. TimescaleDB provides automatic chunking and compression. For extreme scale, specialized time-series databases outperform general-purpose SQL."
    },
    {
        id: 115,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Your application suddenly shows 'too many connections' errors. The database max_connections is set to 500, but you're seeing intermittent failures. The connection pool is configured for 100 connections. What could be wrong and how do you diagnose it?",
        answer: "1. Check pg_stat_activity for idle connections not being released properly. 2. Look for connection leaks - unclosed connections in application code. 3. Verify connection pool configuration - ensure max connections < database limit. 4. Check for long-running transactions holding connections. 5. Look for N+1 query patterns that exhaust pool during request spikes. 6. Implement connection pool monitoring (pgbouncer stats). 7. Check for connection storms during deployment or error scenarios. 8. Set appropriate connection timeouts and idle connection recycling.",
        explanation: "Connection issues often stem from leaks or misconfiguration. Idle connections accumulate from exceptions without proper cleanup. Connection pool sizing must account for all application instances. Long transactions hold connections unnecessarily. Monitoring pg_stat_activity reveals connection patterns. PgBouncer helps manage connection multiplexing."
    },
    {
        id: 116,
        category: "Data Consistency",
        type: "open",
        question: "Scenario: You're building a distributed e-commerce system. A user places an order and payment succeeds, but inventory reservation fails due to network partition. How do you ensure data consistency across services?",
        answer: "1. Implement Saga pattern with compensating transactions. 2. Use outbox pattern: write events to database table first, then publish via CDC. 3. Implement idempotency keys for all operations to prevent duplicates. 4. Use two-phase commit for critical financial transactions. 5. Design for eventual consistency with clear consistency boundaries. 6. Implement retry mechanisms with exponential backoff. 7. Use distributed tracing to track transaction flow. 8. Maintain audit log for all state changes with correlation IDs.",
        explanation: "Distributed systems can't rely on ACID across services. Saga pattern sequences local transactions with compensating actions on failure. Outbox pattern ensures atomic 'database write + event publish'. Idempotency prevents double-charging or double-reserving. Accepting eventual consistency is necessary for distributed architectures."
    },
    {
        id: 117,
        category: "Architecture",
        type: "open",
        question: "Scenario: You need to design a multi-tenant SaaS application supporting 10,000 tenants with varying data sizes (100MB to 100GB per tenant). Data isolation and performance isolation are critical. What database architecture do you choose?",
        answer: "1. Use schema-per-tenant approach for strong isolation with shared database cluster. 2. Implement row-level security (RLS) as additional safety layer. 3. Use connection pooling per schema to prevent cross-tenant resource contention. 4. Implement resource quotas and query timeouts per tenant. 5. Consider hybrid: small tenants share schemas, large tenants get dedicated schemas. 6. Use tenant-aware caching with namespace isolation. 7. Implement cross-tenant analytics via separate read-only replicas. 8. Automate tenant provisioning with schema templates.",
        explanation: "Schema-per-tenant provides the best balance of isolation and operational simplicity. RLS adds defense-in-depth against application bugs. Resource quotas prevent noisy neighbor problems. Hybrid approaches optimize cost - shared infrastructure for small tenants, dedicated for enterprise. Automation is essential for managing thousands of schemas."
    },
    {
        id: 118,
        category: "Optimization",
        type: "open",
        question: "Scenario: Your reporting queries are scanning billions of rows and taking hours to complete. The same aggregations run repeatedly. Users need near real-time insights. What's your optimization strategy?",
        answer: "1. Implement pre-aggregated summary tables updated by triggers or batch jobs. 2. Use columnar storage (Redshift, ClickHouse, BigQuery) for analytical workloads. 3. Create materialized views with incremental refresh strategies. 4. Implement result caching with Redis for frequently accessed reports. 5. Use approximate algorithms (HyperLogLog, Count-Min Sketch) for large cardinality counts. 6. Partition data and implement partition pruning for query optimization. 7. Use stream processing (Kafka + Flink) for real-time aggregations. 8. Move historical data to data warehouse, keep recent data in OLTP.",
        explanation: "OLTP databases aren't designed for analytical workloads. Pre-aggregation eliminates repeated expensive calculations. Columnar storage is 10-100x faster for scans. Approximate algorithms trade tiny accuracy loss for massive speed gains. Stream processing enables real-time insights instead of batch. Separation of OLTP and OLAP is essential at scale."
    },
    {
        id: 119,
        category: "Trade-off Analysis",
        type: "open",
        question: "Scenario: You must choose between strong consistency and eventual consistency for a global user profile service. Users can update profiles from any region and expect immediate visibility. What factors influence your decision?",
        answer: "1. Analyze consistency requirements: financial data needs strong consistency, profile pictures can be eventually consistent. 2. Consider user expectations: profile name changes should be immediate, avatar updates can have seconds delay. 3. Evaluate latency impact: strong consistency requires cross-region coordination (100-300ms). 4. Use CRDTs (Conflict-free Replicated Data Types) for mergeable data types. 5. Implement session consistency - users see their own writes immediately. 6. Use conflict resolution strategies: last-write-wins, vector clocks, or application-specific merge. 7. Consider hybrid: local cache for reads, synchronous write to nearest region, async replication. 8. Implement read-your-writes consistency as minimum guarantee.",
        explanation: "Consistency is a spectrum, not binary. Different data elements have different consistency needs. CRDTs enable automatic conflict resolution for counters, sets, and certain text types. Session consistency maintains user trust while allowing replication lag. The choice depends on business requirements, not technical purity."
    },
    {
        id: 120,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Database CPU suddenly spikes to 100% during normal business hours. Slow query log shows many queries that normally run in 10ms now taking 10+ seconds. No deployments happened recently. What's your investigation approach?",
        answer: "1. Check pg_stat_statements for query plan changes (plan regression). 2. Analyze table statistics - outdated stats cause bad query plans. 3. Check for lock contention - long-running transactions blocking others. 4. Look for missing indexes due to recent data growth. 5. Verify connection pool isn't exhausted causing request queuing. 6. Check for vacuum/autovacuum blocking queries. 7. Analyze if statistics sampling needs increase for large tables. 8. Look for implicit type conversions causing index scans to become sequential scans.",
        explanation: "Sudden performance degradation without code changes usually indicates plan regression or resource contention. PostgreSQL's query planner relies on statistics - outdated stats lead to suboptimal plans. Locks and vacuum operations can block queries. Data volume growth can invalidate previously optimal plans. pg_stat_statements reveals plan changes over time."
    },
    {
        id: 121,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to add a JSONB column to a 500M row table and create a GIN index on it. The ALTER TABLE statement would lock the table for hours. How do you do this online with minimal impact?",
        answer: "1. Add column as NULL without default (instant operation in PostgreSQL 11+). 2. Populate column in batches using background jobs with small commits. 3. Use CREATE INDEX CONCURRENTLY to build GIN index without locking. 4. Once index is ready, add any constraints with NOT VALID flag. 5. Run VALIDATE CONSTRAINT to verify existing data in background. 6. For default values, use trigger to populate new rows during migration. 7. Consider using pg_repack or logical replication for complex migrations. 8. Monitor progress and replication lag throughout the process.",
        explanation: "PostgreSQL's ALTER TABLE acquires exclusive locks. Adding nullable columns is instant, but defaults require table rewrite. CREATE INDEX CONCURRENTLY builds indexes without blocking reads/writes but takes longer. The NOT VALID + VALIDATE pattern allows constraint checking without long locks. Batching updates prevents transaction log bloat and replication lag."
    },
    {
        id: 122,
        category: "System Design",
        type: "open",
        question: "Scenario: You're designing a recommendation engine that needs to serve personalized content to 100M users within 50ms. User behavior data is massive (TBs). How do you architect this?",
        answer: "1. Use Redis Cluster for user preference caching with TTL-based eviction. 2. Pre-compute recommendations in batch (Spark/Flink) and store in key-value store. 3. Use approximate nearest neighbor (ANN) libraries (Faiss, Annoy) for similarity search. 4. Implement multi-level caching: edge CDN, application cache, database cache. 5. Use feature stores (Feast, Tecton) for ML feature consistency. 6. Separate cold-start users (popular content) from active users (personalized). 7. Use Redis Streams for real-time behavior ingestion. 8. Implement A/B testing infrastructure for recommendation algorithms.",
        explanation: "Real-time personalization at scale requires pre-computation. You can't run ML inference per request at 50ms SLA. ANN libraries enable sub-millisecond similarity search across billions of items. Feature stores separate ML feature computation from serving. Cold-start strategies handle new users gracefully. Multi-level caching minimizes latency."
    },
    {
        id: 123,
        category: "Scaling",
        type: "open",
        question: "Scenario: Your read replica lag is consistently 30+ seconds, causing stale data issues. The replica has identical hardware to primary. Replication appears healthy. What's causing this and how do you fix it?",
        answer: "1. Check for long-running queries on replica blocking replication (pg_stat_activity). 2. Look for heavy analytical queries on replica - consider dedicated analytics replica. 3. Check if hot_standby_feedback is enabled to prevent vacuum removing needed rows. 4. Analyze WAL generation rate - bulk operations create replication lag. 5. Check network latency between primary and replica. 6. Verify max_wal_size and checkpoint settings on primary. 7. Consider using logical replication for selective table replication. 8. Implement streaming replication monitoring with lag alerts.",
        explanation: "Replication lag often comes from replica-side issues, not primary. Long-running queries on replicas can conflict with vacuum and block replication. Hot_standby_feedback prevents vacuum from removing rows that active queries need. Bulk operations generate massive WAL that takes time to replay. Separate OLAP workloads to prevent impacting OLTP replication."
    },
    {
        id: 124,
        category: "Data Consistency",
        type: "open",
        question: "Scenario: You have a microservices architecture. Service A updates data, publishes event, but crashes before transaction commits. Service B consumes the event and updates its data. How do you prevent this inconsistency?",
        answer: "1. Implement Transactional Outbox pattern - write events to database table atomically with business data. 2. Use Change Data Capture (Debezium) to publish events from WAL. 3. Implement idempotency in consumers to handle duplicate events. 4. Use two-phase commit (Saga) for critical cross-service operations. 5. Implement at-least-once delivery semantics with consumer deduplication. 6. Use event sourcing for auditability and state reconstruction. 7. Implement compensating transactions for rollback scenarios. 8. Add distributed tracing to track transaction flow across services.",
        explanation: "The dual-write problem (database + message broker) can't be solved atomically without patterns. Outbox pattern ensures events are persisted in the same transaction as data. CDC guarantees event delivery from committed transactions only. Idempotency handles the inevitable duplicate deliveries. Event sourcing provides ultimate auditability and replay capability."
    },
    {
        id: 125,
        category: "Architecture",
        type: "open",
        question: "Scenario: You're building a real-time collaborative document editing system like Google Docs. Multiple users edit simultaneously with sub-second synchronization. How do you handle concurrent edits and conflict resolution?",
        answer: "1. Use Operational Transformation (OT) or CRDTs for conflict-free concurrent editing. 2. Implement WebSocket connections for real-time synchronization. 3. Use Redis Pub/Sub for real-time event broadcasting. 4. Store document history as operation log (event sourcing pattern). 5. Implement presence awareness with heartbeat mechanisms. 6. Use operational transform server to serialize and transform operations. 7. Implement cursor position synchronization separately from content. 8. Use database for persistent storage, in-memory for active sessions.",
        explanation: "Collaborative editing requires specialized algorithms. OT transforms operations to maintain consistency after concurrent edits. CRDTs provide mathematically guaranteed convergence without coordination. Event sourcing enables undo/redo and audit history. Presence requires separate optimization from document content. The challenge is balancing consistency with real-time performance."
    },
    {
        id: 126,
        category: "Performance",
        type: "open",
        question: "Scenario: Your database has 20 indexes on a critical table. Write operations are slow (500ms+), but reads are fast. You're hesitant to drop indexes that might be used. How do you optimize this?",
        answer: "1. Use pg_stat_user_indexes to identify unused indexes (idx_scan = 0). 2. Analyze index correlation and remove redundant indexes. 3. Check for duplicate indexes (same columns, different names). 4. Consider partial indexes for conditional queries instead of full indexes. 5. Evaluate covering indexes to replace multiple single-column indexes. 6. Use BRIN indexes instead of B-tree for large, naturally ordered data. 7. Implement index-only scans by adding INCLUDE columns. 8. Drop unused indexes in staging first, monitor query performance, then production.",
        explanation: "Too many indexes kill write performance. Each INSERT/UPDATE must maintain all indexes. Unused indexes consume space and slow writes without benefit. Redundant indexes waste resources. Partial indexes are smaller and faster for filtered queries. BRIN indexes are tiny and effective for time-series data. Regular index maintenance is essential for write-heavy tables."
    },
    {
        id: 127,
        category: "Trade-off Analysis",
        type: "open",
        question: "Scenario: Your team debates between normalized and denormalized schema for a read-heavy analytics dashboard. Normalized saves storage, denormalized is faster. How do you decide?",
        answer: "1. Measure actual query patterns - 80% of queries might hit 20% of data. 2. Consider storage is cheap, developer time and user experience are expensive. 3. Implement hybrid: normalized for writes, materialized views for reads. 4. Evaluate data change frequency - rarely changed data is safe to denormalize. 5. Use columnar storage for analytics where denormalization has less impact. 6. Consider incremental materialized views for near-real-time updates. 7. Benchmark both approaches with production-like data volumes. 8. Start normalized, denormalize specific queries when performance requires it.",
        explanation: "Schema design is about trade-offs, not absolutes. Storage cost is negligible compared to query performance impact. Hybrid approaches provide flexibility. Materialized views offer the best of both worlds. Benchmark with realistic data volumes - small datasets hide performance problems. Start simple, optimize based on measured pain points."
    },
    {
        id: 128,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Your application experiences intermittent 'connection timeout' errors. Database metrics look normal. The issue correlates with application deployments. What's your debugging strategy?",
        answer: "1. Check if connection pool is properly sized for deployment scenarios. 2. Look for connection leaks during application shutdown/startup. 3. Verify graceful shutdown handling - connections should drain before restart. 4. Check if new application version has different query patterns. 5. Monitor connection establishment time during deployment windows. 6. Look for thundering herd problem - all instances reconnecting simultaneously. 7. Verify health check queries aren't overwhelming database during startup. 8. Implement connection pool warmup and staggered deployment strategies.",
        explanation: "Deployment-related issues often stem from connection management. Graceful shutdown ensures connections close properly. Startup connection storms overwhelm databases. Connection pool sizing must account for rolling deployments where old and new versions run simultaneously. Health checks can accidentally become DoS attacks during mass restarts. Staggered deployments prevent thundering herds."
    },
    {
        id: 129,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to shard an existing 2TB PostgreSQL database by user_id. The application has complex queries with joins across multiple tables. How do you approach this migration?",
        answer: "1. Analyze query patterns to identify shard keys that minimize cross-shard queries. 2. Use Citus extension for PostgreSQL sharding with minimal code changes. 3. Implement application-level sharding logic with shard routing layer. 4. Migrate tables incrementally - start with largest, most isolated tables. 5. Use foreign data wrappers (FDW) for cross-shard queries during transition. 6. Implement shard rebalancing strategy for uneven data distribution. 7. Set up cross-shard transaction handling for atomic operations. 8. Plan for shard splitting when individual shards grow too large.",
        explanation: "Sharding is complex and should be last resort after partitioning and read replicas. Citus provides transparent sharding for PostgreSQL. Shard key selection is critical - poor choice causes cross-shard joins that defeat the purpose. Incremental migration reduces risk. FDW allows gradual transition with some performance cost. Rebalancing handles hotspot shards."
    },
    {
        id: 130,
        category: "System Design",
        type: "open",
        question: "Scenario: You're building a healthcare application storing patient records. HIPAA compliance requires audit trails, encryption, and access controls. Data must be retained for 7 years. How do you design this?",
        answer: "1. Implement row-level security (RLS) to enforce patient data access controls. 2. Use column-level encryption for PHI (Protected Health Information). 3. Create comprehensive audit log table tracking all data access. 4. Implement automatic data retention policies with secure deletion. 5. Use separate schemas or databases for different data sensitivity levels. 6. Enable database-level encryption at rest (TDE). 7. Implement session timeouts and automatic locking. 8. Set up automated backups with encryption and offsite storage. 9. Use dedicated read replicas for analytics to isolate reporting from transactional access.",
        explanation: "Healthcare data requires defense in depth. RLS ensures users only see authorized records. Audit trails are mandatory for compliance - who accessed what when. Encryption at rest and in transit is essential. Data retention policies must be automated to prevent human error. Separate environments reduce blast radius of breaches. Regular security audits verify compliance."
    },
    {
        id: 131,
        category: "Performance",
        type: "open",
        question: "Scenario: Your batch ETL job loads 50M rows nightly and takes 8 hours. The job uses individual INSERT statements. Business wants near real-time data. How do you optimize the data pipeline?",
        answer: "1. Replace individual INSERTs with COPY command for bulk loading. 2. Disable indexes during load, re-enable after (for non-unique indexes). 3. Use unlogged tables for intermediate staging, then insert to main table. 4. Implement parallel loading with multiple workers. 5. Use stream processing (Kafka Connect, Debezium) for CDC instead of batch. 6. Partition target table and load partitions in parallel. 7. Increase maintenance_work_mem for faster index creation. 8. Consider using external tables (foreign data wrappers) for direct querying without loading.",
        explanation: "Bulk loading is orders of magnitude faster than individual inserts. COPY is optimized for large data movement. Disabling non-unique indexes during load eliminates per-row index maintenance. Unlogged tables skip WAL writing for staging data. Stream processing enables real-time vs batch. Parallel loading uses all available CPU. Partition-wise loading enables horizontal scaling."
    },
    {
        id: 132,
        category: "Scaling",
        type: "open",
        question: "Scenario: You have a global application with users in US, EU, and Asia. Database is in us-east-1 with 200ms latency for Asian users. How do you improve global performance while maintaining consistency?",
        answer: "1. Deploy read replicas in each region for local read access. 2. Implement global load balancing with geo-DNS routing. 3. Use Aurora Global Database or CockroachDB for multi-region writes. 4. Implement data residency compliance for EU data (GDPR). 5. Use conflict-free replicated data types (CRDTs) for mergeable data. 6. Implement application-level routing - reads local, writes to primary. 7. Use caching (ElastiCache Global) for frequently accessed data. 8. Consider multi-master replication for region-local writes with conflict resolution.",
        explanation: "Global applications face the latency-speed of light problem. Read replicas localize read traffic. Aurora Global Database provides 1-second cross-region replication. GDPR requires EU data stays in EU. CRDTs enable conflict-free local writes. Application routing logic must be region-aware. Caching is essential for global performance. Trade-offs exist between consistency and latency."
    },
    {
        id: 133,
        category: "Data Consistency",
        type: "open",
        question: "Scenario: You have a product inventory system. Two customers simultaneously try to buy the last item. How do you prevent overselling while maintaining performance?",
        answer: "1. Use SELECT FOR UPDATE to lock inventory row during purchase. 2. Implement atomic decrement operations (UPDATE inventory SET count = count - 1 WHERE count > 0). 3. Use optimistic locking with version numbers for read-heavy scenarios. 4. Implement reservation pattern - reserve item for 10 minutes during checkout. 5. Use database constraints to prevent negative inventory. 6. Consider using Redis for high-speed inventory tracking with Lua scripts for atomicity. 7. Implement idempotency keys to prevent duplicate purchases on retries. 8. Use queue-based processing for inventory updates to serialize access.",
        explanation: "Inventory management requires careful concurrency control. Pessimistic locking (FOR UPDATE) ensures accuracy but reduces throughput. Atomic operations are fastest for simple counters. Reservation pattern improves UX by holding items during checkout. Optimistic locking suits read-heavy, low-contention scenarios. Redis with Lua scripts provides microsecond-level inventory operations. Queue-based processing serializes naturally."
    },
    {
        id: 134,
        category: "Architecture",
        type: "open",
        question: "Scenario: You need to support both OLTP (fast transactions) and OLAP (complex analytics) on the same data. Queries conflict - analytics slow down transactions. How do you architect this?",
        answer: "1. Implement CQRS (Command Query Responsibility Segregation) pattern. 2. Use read replicas dedicated to analytics workloads. 3. Set up ETL pipeline to data warehouse (Redshift, BigQuery, Snowflake). 4. Use change data capture (Debezium) for real-time data synchronization. 5. Implement materialized views for common analytics queries. 6. Use columnar storage for analytics, row storage for transactions. 7. Schedule analytics queries during low-traffic hours. 8. Consider HTAP databases (TiDB, SingleStore) that optimize for both workloads.",
        explanation: "OLTP and OLAP have fundamentally different access patterns. CQRS separates read and write models completely. Read replicas isolate analytics from transactions. Data warehouses are optimized for analytical queries. CDC enables near real-time analytics without impacting OLTP. HTAP databases attempt to bridge the gap but have trade-offs. Scheduling separates workloads temporally."
    },
    {
        id: 135,
        category: "Optimization",
        type: "open",
        question: "Scenario: Your PostgreSQL vacuum process is constantly running and still can't keep up. Table bloat is 50% and growing. Queries are slowing down. What do you do?",
        answer: "1. Increase autovacuum_max_workers for parallel vacuum operations. 2. Tune autovacuum_vacuum_scale_factor to trigger vacuum more aggressively. 3. Consider partitioning large tables to vacuum smaller chunks. 4. Use pg_repack or pg_squeeze to rebuild bloated tables online. 5. Increase maintenance_work_mem for faster vacuum operations. 6. Schedule manual VACUUM FULL during maintenance windows for critical tables. 7. Check for long-running transactions blocking vacuum progress. 8. Analyze update/delete patterns - consider HOT (Heap-Only Tuple) updates.",
        explanation: "PostgreSQL's MVCC creates row versions on updates, requiring vacuum to reclaim space. Table bloat occurs when vacuum can't keep up. More workers and memory help vacuum process faster. Partitioning reduces vacuum scope. pg_repack rebuilds tables without downtime. Long transactions prevent vacuum from cleaning old row versions. HOT updates avoid index updates for non-indexed columns."
    },
    {
        id: 136,
        category: "Trade-off Analysis",
        type: "open",
        question: "Scenario: You must choose between adding a new feature that requires database schema changes vs. using a JSONB column for flexibility. The feature requirements may change frequently. How do you decide?",
        answer: "1. Consider data query patterns - will you search/filter on this data? 2. Evaluate data integrity needs - referential constraints require structured schema. 3. Assess query performance requirements - JSONB is slower for complex queries. 4. Consider team expertise - JSONB requires different querying skills. 5. Use hybrid: core fields as columns, variable attributes as JSONB. 6. Evaluate migration complexity - schema changes are harder at scale. 7. Consider indexing needs - GIN indexes on JSONB vs standard B-tree. 8. Plan for future: JSONB for rapid iteration, migrate to schema when stabilized.",
        explanation: "JSONB vs structured schema is about trade-offs. JSONB offers flexibility and rapid iteration. Structured schema provides type safety, constraints, and performance. Hybrid approaches capture benefits of both. Frequent schema changes favor JSONB temporarily. Complex queries and joins favor structured columns. JSONB is great for evolving requirements, but consider migration path to schema when requirements stabilize."
    },
    {
        id: 137,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Your database disk I/O is at 100% and queries are timing out. iostat shows high await times. The database server is on cloud EBS volumes. How do you diagnose and fix this?",
        answer: "1. Check if you've hit IOPS or throughput limits on EBS volumes. 2. Analyze query plans for sequential scans that should use indexes. 3. Look for checkpoint spikes - tune checkpoint_completion_target. 4. Consider provisioned IOPS (io1/io2) instead of gp2/gp3 for consistent performance. 5. Enable and analyze pg_stat_statements for I/O heavy queries. 6. Increase shared_buffers to reduce disk reads. 7. Check for write amplification from small, frequent updates. 8. Consider using NVMe SSD instance storage for WAL or temporary tables.",
        explanation: "Cloud storage has limits that physical disks don't. EBS has IOPS and throughput limits that cause queueing. Burst credits on gp2 can deplete, causing sudden slowdowns. Sequential scans generate massive I/O. Checkpoint spikes occur when checkpoint_segments fill too quickly. pg_stat_statements identifies I/O-heavy queries. Properly sized buffer cache reduces physical reads. Instance store provides local NVMe performance."
    },
    {
        id: 138,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to migrate a monolithic database to microservices, each with its own database. The monolith has 200 tables with complex foreign key relationships. How do you approach this?",
        answer: "1. Identify bounded contexts and group related tables into services. 2. Start with least critical domains to learn and minimize risk. 3. Implement strangler fig pattern - gradually replace functionality. 4. Use data synchronization (CDC) to keep monolith and microservices in sync during transition. 5. Break foreign key constraints into application-level validation. 6. Implement sagas for cross-service transactions. 7. Create API layers that abstract data access during migration. 8. Plan for data ownership transfer - each service eventually owns its data exclusively.",
        explanation: "Database decomposition is gradual, not big-bang. Bounded contexts define natural service boundaries. Strangler fig pattern allows incremental migration. CDC keeps data synchronized during transition. Foreign keys can't cross service boundaries - move to application validation. Sagas replace ACID transactions across services. APIs provide abstraction during transition. Data ownership clarity prevents coupling."
    },
    {
        id: 139,
        category: "System Design",
        type: "open",
        question: "Scenario: You're building a rate limiting system for an API gateway handling 100k requests/second per region. Rate limits are per-user, per-endpoint, and can change dynamically. How do you design this?",
        answer: "1. Use Redis Cluster with sliding window rate limiting algorithm. 2. Implement token bucket algorithm for burst handling with smooth limiting. 3. Store rate limit configs in Redis for dynamic updates. 4. Use Redis Lua scripts for atomic rate limit checks. 5. Implement local in-memory caching for hot rate limit keys. 6. Use different Redis databases for different limit tiers (free, pro, enterprise). 7. Implement circuit breaker pattern for Redis failures (fail open). 8. Use Redis Streams for rate limit audit logging.",
        explanation: "Rate limiting at scale requires distributed counters. Redis provides sub-millisecond counter operations. Sliding window is more accurate than fixed window but more complex. Token bucket allows bursts while maintaining average rate. Lua scripts ensure atomic check-and-increment. Local caching reduces Redis load for popular keys. Circuit breakers prevent Redis failure from cascading. Different tiers need isolation."
    },
    {
        id: 140,
        category: "Performance",
        type: "open",
        question: "Scenario: Your PostgreSQL database has tables with TEXT columns storing large JSON documents (1MB+). Queries filtering on JSON fields are slow. Table is 500GB. What's your optimization strategy?",
        answer: "1. Create GIN indexes on frequently queried JSON paths. 2. Extract frequently queried fields into separate columns with indexes. 3. Use JSONB instead of TEXT for binary storage and indexing support. 4. Implement table partitioning by date or tenant to reduce scan scope. 5. Use TOAST storage settings to compress large values. 6. Consider external storage (S3) for large documents with metadata in PostgreSQL. 7. Use partial indexes for common query patterns. 8. Implement result pagination to avoid loading full documents.",
        explanation: "Large JSON in PostgreSQL has trade-offs. GIN indexes enable fast JSON path queries but have overhead. Extracting hot fields to columns enables standard indexing. JSONB is more efficient than TEXT for structured data. TOAST compresses large values automatically. External storage separates document content from query metadata. Partial indexes are smaller and faster for filtered queries."
    },
    {
        id: 141,
        category: "Scaling",
        type: "open",
        question: "Scenario: Your write-heavy application needs to scale beyond single PostgreSQL instance limits. You've optimized indexes and queries. Read replicas exist but writes are the bottleneck. What are your options?",
        answer: "1. Implement application-level sharding by tenant or geography. 2. Use Citus extension for transparent PostgreSQL sharding. 3. Move to cloud-native PostgreSQL (Aurora, AlloyDB) with better write scaling. 4. Separate write types - use message queues for async writes. 5. Use batch inserts to reduce transaction overhead. 6. Consider write-optimized databases (CockroachDB, YugabyteDB) for horizontal write scaling. 7. Implement CQRS to separate read and write models with different databases. 8. Use hot_standby_feedback and offloading reads to maximize primary for writes.",
        explanation: "Single-node PostgreSQL has write throughput limits. Sharding distributes writes across nodes. Citus provides transparent sharding. Cloud-native solutions optimize storage layer. Async processing via queues smooths write spikes. NewSQL databases offer native horizontal write scaling. CQRS completely separates read and write concerns. Maximizing primary for writes requires aggressive read offloading."
    },
    {
        id: 142,
        category: "Data Consistency",
        type: "open",
        question: "Scenario: You have a job queue system. A worker picks up a job, processes it, but crashes before acknowledging completion. Another worker picks up the same job. How do you ensure exactly-once processing?",
        answer: "1. Implement idempotent job processing - same job can run multiple times safely. 2. Use two-phase commit: reserve job, process, then confirm completion. 3. Implement visibility timeout - job is hidden from other workers during processing. 4. Use optimistic locking with version numbers on job status. 5. Implement deduplication based on job unique identifiers. 6. Store processed job IDs in idempotent-key store (Redis with TTL). 7. Use database transactions to ensure atomic status update. 8. Implement dead letter queues for jobs that fail repeatedly.",
        explanation: "Exactly-once processing is theoretically impossible in distributed systems. Idempotency is the practical solution - make operations safe to repeat. Visibility timeouts prevent immediate duplicate processing. Deduplication stores track completed work. Two-phase commit patterns ensure state consistency. Dead letter queues handle poison messages. The goal is at-least-once delivery with idempotent processing."
    },
    {
        id: 143,
        category: "Architecture",
        type: "open",
        question: "Scenario: You're designing a system that needs to support both SQL queries for power users and full-text search for casual users. Data is relational but users need flexible querying. How do you architect this?",
        answer: "1. Use PostgreSQL with powerful full-text search (tsvector, tsquery) for simpler needs. 2. Implement Elasticsearch for advanced search features (faceting, autocomplete, fuzzy matching). 3. Use Change Data Capture to sync PostgreSQL to Elasticsearch. 4. Route queries based on complexity - SQL for relational, ES for text search. 5. Implement GraphQL layer that federates between SQL and search results. 6. Use materialized views in PostgreSQL for common search combinations. 7. Consider hybrid search - PostgreSQL for structured filters, ES for text matching. 8. Implement caching for popular search queries.",
        explanation: "Different query needs require different tools. PostgreSQL's full-text search handles basic needs without added complexity. Elasticsearch excels at relevance ranking and text analysis. CDC keeps search index synchronized. Query routing directs to appropriate engine. GraphQL can federate results from multiple sources. Hybrid approaches leverage strengths of each system."
    },
    {
        id: 144,
        category: "Optimization",
        type: "open",
        question: "Scenario: Your application has 1000+ database queries per page load due to N+1 problems in ORM. The codebase is large. How do you systematically fix this?",
        answer: "1. Enable SQL logging and identify N+1 patterns using ORM profiling tools. 2. Implement eager loading (joins) for known relationship traversals. 3. Use DataLoader pattern for batching and deduplicating queries. 4. Implement SELECT DISTINCT to avoid duplicate parent records in joins. 5. Use database views to pre-join commonly accessed data. 6. Add query result caching for repeated lookups. 7. Implement field-level resolvers in GraphQL to batch field fetching. 8. Use lazy loading carefully - only when data is actually needed.",
        explanation: "N+1 queries kill performance at scale. ORM profiling tools (Django Debug Toolbar, Rails Bullet) detect patterns. Eager loading fetches related data in one query. DataLoader batches multiple requests into single query. GraphQL field resolvers can be optimized to batch. Views provide pre-joined data. Caching eliminates repeated queries. Systematic detection and fixing is required for large codebases."
    },
    {
        id: 145,
        category: "Trade-off Analysis",
        type: "open",
        question: "Scenario: Your team must decide between using an ORM (Django ORM, Hibernate) vs. raw SQL. The ORM is slower for complex queries but faster to develop. How do you decide?",
        answer: "1. Use ORM for 80% of standard CRUD operations - it accelerates development. 2. Use raw SQL for the 20% of complex queries where ORM generates inefficient SQL. 3. Implement repository pattern to abstract data access - swap implementation easily. 4. Use ORM's raw SQL escape hatches for specific optimized queries. 5. Consider query builders (Knex, jOOQ) as middle ground. 6. Benchmark critical paths - optimize only where needed. 7. Use database views for complex queries, map ORM to views. 8. Train team on ORM best practices to avoid common performance pitfalls.",
        explanation: "ORM vs SQL is a false dichotomy. Both have valid use cases. ORM accelerates development and reduces boilerplate. Raw SQL provides full control for optimization. Repository pattern enables hybrid approaches. Most ORMs allow raw SQL for specific cases. Query builders offer type safety without full ORM overhead. Views bridge the gap - complex SQL with ORM convenience."
    },
    {
        id: 146,
        category: "Troubleshooting",
        type: "open",
        question: "Scenario: Your PostgreSQL database has dead tuples accumulating despite autovacuum running. The table keeps growing even though row count is stable. What's happening and how do you fix it?",
        answer: "1. Check for long-running transactions preventing vacuum from removing dead tuples. 2. Look for orphaned prepared transactions (pg_prepared_xacts). 3. Check if replication slots are holding back vacuum (pg_replication_slots). 4. Verify autovacuum is actually processing the table (pg_stat_user_tables). 5. Check for lock conflicts preventing vacuum from running. 6. Look for hot_standby_feedback causing tuple retention on replicas. 7. Consider manual VACUUM (not FULL) during low traffic. 8. Tune vacuum_freeze_min_age if transaction ID wraparound is occurring.",
        explanation: "Dead tuple accumulation usually means something blocks vacuum. Long transactions keep old row versions alive. Replication slots hold WAL and prevent cleanup. Prepared transactions can orphan resources. Autovacuum might not be triggering due to scale factor settings. Lock conflicts delay vacuum operations. Understanding MVCC and vacuum is essential for PostgreSQL administration."
    },
    {
        id: 147,
        category: "Migration",
        type: "open",
        question: "Scenario: You need to rename a column that's used by 50+ stored procedures, views, and application queries. How do you do this safely without breaking everything?",
        answer: "1. Create new column with desired name, populate with data from old column. 2. Create triggers to keep both columns synchronized during transition. 3. Update views and stored procedures to use new column name. 4. Deploy application code changes to use new column (feature flags help). 5. Monitor for any missed references in error logs. 6. Once all references updated, drop triggers. 7. Remove old column after sufficient validation period. 8. Document the change for team knowledge.",
        explanation: "Column renames in production require careful coordination. You can't simply ALTER TABLE RENAME - it breaks existing code. Dual-write pattern maintains compatibility during transition. Triggers ensure data consistency between old and new columns. Gradual rollout with feature flags reduces risk. Error monitoring catches missed references. The transition period depends on deployment frequency and cache invalidation."
    },
    {
        id: 148,
        category: "System Design",
        type: "open",
        question: "Scenario: You're building a time-series database for IoT sensor data - 1 million devices sending data every minute. Queries need to aggregate by time ranges and device groups. How do you design this?",
        answer: "1. Use TimescaleDB extension on PostgreSQL for time-series optimization. 2. Implement automatic data retention with continuous aggregates. 3. Use compression for older data chunks. 4. Partition data by time (chunks) and optionally by device_id. 5. Implement downsampling - keep raw data for 7 days, aggregates for years. 6. Use inverted indexes for tag-based filtering. 7. Consider specialized time-series DB (InfluxDB, TimescaleDB) over general-purpose SQL. 8. Implement retention policies to move cold data to S3.",
        explanation: "Time-series data has unique patterns - high write volume, time-based queries, data aging. TimescaleDB provides automatic partitioning (chunking) and compression. Continuous aggregates pre-compute rollups. Downsampling manages storage growth. Specialized databases optimize for these patterns. Retention policies automate data lifecycle. The key is matching data access patterns to storage strategies."
    },
    {
        id: 149,
        category: "Performance",
        type: "open",
        question: "Scenario: Your database backup window is 6 hours and growing. Business needs shorter maintenance windows. The database is 5TB. How do you optimize backups?",
        answer: "1. Implement incremental backups (pg_basebackup with WAL archiving). 2. Use parallel backup tools (pgBackRest, Barman) with multiple workers. 3. Enable compression during backup to reduce I/O. 4. Use storage snapshots (EBS, ZFS) for near-instant backups. 5. Implement continuous archiving to S3 for point-in-time recovery. 6. Separate backup of large, less critical tables (logs, analytics). 7. Use differential backups between full backups. 8. Consider logical replication to standby for zero-downtime backups.",
        explanation: "Large database backups require strategy changes. Incremental backups only capture changes. Parallel processing uses multiple cores. Storage snapshots are instant but need consistent snapshots. Continuous archiving provides ongoing protection without large backup windows. Separating critical and non-critical data optimizes backup priorities. The goal is balancing RTO/RPO with operational constraints."
    },
    {
        id: 150,
        category: "Scaling",
        type: "open",
        question: "Scenario: You have a database with 10,000 tables due to multi-tenant design (one schema per tenant). Connection pooling, vacuum, and DDL operations are becoming problematic. How do you handle this scale?",
        answer: "1. Consolidate small tenants into shared schemas to reduce table count. 2. Use connection pooling with schema search_path for efficient multi-tenancy. 3. Implement automated partition management for tenant data growth. 4. Use pg_partman or similar for automated partition maintenance. 5. Consider row-level security (RLS) instead of schema separation for smaller tenants. 6. Implement schema templates for rapid tenant provisioning. 7. Use parallel vacuum for multiple tables simultaneously. 8. Consider database-per-tenant for enterprise customers with large data.",
        explanation: "Too many tables strain PostgreSQL's catalog and resource management. Schema consolidation reduces overhead for small tenants. RLS provides isolation without schema multiplication. Connection pooling with search_path efficiently routes to correct schema. Automated maintenance is essential at scale. Hybrid approaches (schema for large, RLS for small) optimize resource usage. Enterprise tenants may warrant dedicated databases."
    }
];

// Quiz State
let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let shuffledQuizData = []; // Store shuffled questions

// Fisher-Yates Shuffle Algorithm
function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Shuffle questions and options
function shuffleQuiz() {
    // Shuffle the order of questions
    const shuffledQuestions = fisherYatesShuffle(quizData);
    
    // For each question, shuffle the options and update correct index (only for MCQ)
    shuffledQuizData = shuffledQuestions.map(q => {
        // Open-ended questions don't have options to shuffle
        if (q.type === 'open') {
            return q;
        }
        
        // Create array of [option, originalIndex] pairs
        const optionsWithIndex = q.options.map((opt, idx) => ({
            text: opt,
            originalIndex: idx
        }));
        
        // Shuffle the options
        const shuffledOptions = fisherYatesShuffle(optionsWithIndex);
        
        // Find the new position of the correct answer
        const newCorrectIndex = shuffledOptions.findIndex(
            opt => opt.originalIndex === q.correct
        );
        
        // Return shuffled question with updated correct index
        return {
            ...q,
            options: shuffledOptions.map(opt => opt.text),
            correct: newCorrectIndex
        };
    });
}

// Category Emojis Mapping
const categoryEmojis = {
    'SQL': '📝',
    'NoSQL': '📦',
    'Transaction': '⚡',
    'Indexing': '🎯',
    'Normalization': '📊',
    'Database Design': '🏗️',
    'Advanced SQL': '🔮',
    'Performance': '🚀',
    'Security': '🔒',
    'Backup & Recovery': '💾',
    'Cloud Databases': '☁️',
    'Data Warehousing': '🏭',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'System Design': '🏛️',
    'Migration': '🚚',
    'Scaling': '📈',
    'Troubleshooting': '🔧',
    'Data Consistency': '🔄',
    'Architecture': '🏛️',
    'Optimization': '⚡',
    'Trade-off Analysis': '⚖️'
};

// DOM Elements
const questionCounter = document.getElementById('questionCounter');
const categoryBadge = document.getElementById('categoryBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const quizComplete = document.getElementById('quizComplete');
const quizCard = document.querySelector('.quiz-card');
const body = document.body;

// Modal Elements
const answerModal = document.getElementById('answerModal');
const correctAnswer = document.getElementById('correctAnswer');
const explanation = document.getElementById('explanation');

// Update background gradient based on current question
function updateBackgroundGradient() {
    const totalQuestions = shuffledQuizData.length || 100;
    const progress = currentQuestion / (totalQuestions - 1);

    // Calculate hue: Start at 220 (blue), go through 280 (purple), 320 (pink), 160 (green), back to 200
    // This creates a smooth transition: blue -> purple -> pink -> green -> teal
    const startHue = 220;
    const endHue = 380; // 220 + 160 = 380 (which wraps to 20)
    const hue = startHue + (progress * (endHue - startHue));
    const normalizedHue = hue % 360;

    // Second color is offset by 40 degrees for a complementary look
    const secondHue = (normalizedHue + 40) % 360;

    // Use pastel/light colors with high lightness (85-92%) and low saturation (50-60%)
    const color1 = `hsl(${normalizedHue}, 55%, 88%)`;
    const color2 = `hsl(${secondHue}, 60%, 85%)`;

    body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
}

// Initialize
function init() {
    console.log('Initializing quiz...');
    
    // Re-query DOM elements to ensure they're available
    const questionTextEl = document.getElementById('questionText');
    const questionCounterEl = document.getElementById('questionCounter');
    const categoryBadgeEl = document.getElementById('categoryBadge');
    const optionsContainerEl = document.getElementById('optionsContainer');
    
    console.log('DOM Elements:', {
        questionText: !!questionTextEl,
        questionCounter: !!questionCounterEl,
        categoryBadge: !!categoryBadgeEl,
        optionsContainer: !!optionsContainerEl
    });
    
    // Ensure quiz data exists
    if (!quizData || quizData.length === 0) {
        console.error('Quiz data is empty!');
        if (questionTextEl) questionTextEl.textContent = 'Error: Quiz data not found';
        return;
    }
    
    console.log('Quiz data loaded:', quizData.length, 'questions');
    
    shuffleQuiz();
    console.log('Shuffled quiz:', shuffledQuizData.length, 'questions');
    
    userAnswers = new Array(shuffledQuizData.length).fill(null);
    renderQuestion();
    updateNavigation();
    updateBackgroundGradient();
}

// Render current question
function renderQuestion() {
    // Re-query DOM elements to ensure they're available
    const questionTextEl = document.getElementById('questionText');
    const questionCounterEl = document.getElementById('questionCounter');
    const categoryBadgeEl = document.getElementById('categoryBadge');
    const optionsContainerEl = document.getElementById('optionsContainer');
    
    // Ensure data is loaded
    if (!shuffledQuizData || shuffledQuizData.length === 0) {
        console.error('Quiz data not loaded yet');
        return;
    }
    
    const q = shuffledQuizData[currentQuestion];
    
    if (!q) {
        console.error('Question not found at index', currentQuestion);
        return;
    }

    console.log('Rendering question', currentQuestion, ':', q.question.substring(0, 50));

    // Update header
    if (questionCounterEl) {
        questionCounterEl.textContent = `Question ${currentQuestion + 1}/${shuffledQuizData.length}`;
    }
    
    // Update category badge with emoji and color
    const emoji = categoryEmojis[q.category] || '💡';
    if (categoryBadgeEl) {
        categoryBadgeEl.textContent = `${emoji} ${q.category}`;
        categoryBadgeEl.className = 'category-badge';
        categoryBadgeEl.setAttribute('data-category', q.category);
    }
    
    if (questionTextEl) {
        questionTextEl.textContent = q.question;
    }
    
    // Render options based on question type
    if (optionsContainerEl) {
        optionsContainerEl.innerHTML = '';
        
        if (q.type === 'open') {
            // Open-ended question: show hint or expected answer outline
            const hintEl = document.createElement('div');
            hintEl.className = 'open-question-hint';
            hintEl.innerHTML = `
                <div style="padding: 16px; background: rgba(255,255,255,0.1); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.3); margin-bottom: 12px;">
                    <p style="color: rgba(255,255,255,0.7); font-style: italic; margin: 0;">💡 This is a scenario-based question. Think about your approach, then click "Show Answer" to see the detailed solution.</p>
                </div>
            `;
            optionsContainerEl.appendChild(hintEl);
        } else {
            // Multiple choice question
            const labels = ['A', 'B', 'C', 'D'];
            
            q.options.forEach((option, index) => {
                const optionEl = document.createElement('div');
                optionEl.className = 'option';
                
                optionEl.innerHTML = `
                    <span class="option-letter">${labels[index]}</span>
                    <span class="option-text">${option}</span>
                `;
                
                optionEl.onclick = () => selectOption(index);
                optionsContainerEl.appendChild(optionEl);
            });
        }
    }
}

// Select an option - immediate feedback (only for multiple choice)
function selectOption(index) {
    const q = shuffledQuizData[currentQuestion];
    
    // Only works for multiple choice questions
    if (q.type === 'open') return;
    
    userAnswers[currentQuestion] = index;
    
    // Get all option elements
    const optionsContainerEl = document.getElementById('optionsContainer');
    const optionEls = optionsContainerEl ? optionsContainerEl.querySelectorAll('.option') : [];
    
    optionEls.forEach((el, i) => {
        el.classList.remove('selected');
        
        if (i === q.correct) {
            // Always highlight correct answer in green
            el.classList.add('correct');
        } else if (i === index && i !== q.correct) {
            // Highlight wrong answer in red only if user selected it
            el.classList.add('wrong');
        }
        
        // Disable further clicks
        el.onclick = null;
        el.style.cursor = 'default';
    });
}

// Show answer in modal
function showAnswer() {
    const q = shuffledQuizData[currentQuestion];
    const labels = ['A', 'B', 'C', 'D'];
    const correctAnswerEl = document.getElementById('correctAnswer');
    const explanationEl = document.getElementById('explanation');
    
    // Mark open-ended questions as "viewed" when showing answer
    if (q.type === 'open' && userAnswers[currentQuestion] === null) {
        userAnswers[currentQuestion] = -1; // -1 indicates "viewed but no selection"
    }
    
    if (q.type === 'open') {
        // Open-ended question: show the answer field
        if (correctAnswerEl) {
            correctAnswerEl.innerHTML = `
                <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); padding: 16px; border-radius: 12px; border-left: 4px solid #667eea; margin-bottom: 16px;">
                    <strong style="color: #1e40af; display: block; margin-bottom: 8px;">📝 Sample Answer:</strong>
                    <div style="color: #1e293b; line-height: 1.6;">${q.answer || 'See detailed explanation below'}</div>
                </div>
            `;
        }
        if (explanationEl) {
            explanationEl.innerHTML = `<strong>Detailed Explanation:</strong><br><br>${q.explanation}`;
        }
    } else {
        // Multiple choice question
        if (correctAnswerEl) {
            correctAnswerEl.textContent = `Correct answer: ${labels[q.correct]}`;
        }
        if (explanationEl) {
            explanationEl.innerHTML = q.explanation;
        }
    }
    
    answerModal.classList.add('active');
}

// Close modal
function closeModal(event) {
    // Close if clicking overlay or close button, or if event is null (manual call)
    if (!event || event.target === answerModal) {
        answerModal.classList.remove('active');
    }
}

// Navigation
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateNavigation();
        updateBackgroundGradient();
    }
}

function nextQuestion() {
    console.log('Next clicked, current:', currentQuestion);
    if (currentQuestion < shuffledQuizData.length - 1) {
        currentQuestion++;
        console.log('Moving to question:', currentQuestion);
        renderQuestion();
        updateNavigation();
        updateBackgroundGradient();
    } else {
        // Show completion
        showCompletion();
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === shuffledQuizData.length - 1 ? 'Finish →' : 'Next →';
}

function showCompletion() {
    // Calculate results
    let correctCount = 0;
    let viewedCount = 0;
    let mcqCount = 0;
    let openCount = 0;
    
    for (let i = 0; i < shuffledQuizData.length; i++) {
        const q = shuffledQuizData[i];
        if (q.type === 'open') {
            openCount++;
            // For open questions, count if user viewed the answer
            if (userAnswers[i] !== null) {
                viewedCount++;
            }
        } else {
            mcqCount++;
            // For MCQ, count correct answers
            if (userAnswers[i] === q.correct) {
                correctCount++;
            }
        }
    }
    
    // Update result display - show MCQ correct + Open viewed
    const totalAnswered = correctCount + viewedCount;
    document.getElementById('correctCount').textContent = totalAnswered;
    document.getElementById('totalCount').textContent = shuffledQuizData.length;
    
    // Update result message based on score
    const percentage = (correctCount / shuffledQuizData.length) * 100;
    const messageEl = document.getElementById('resultMessage');
    
    if (percentage === 100) {
        messageEl.textContent = '🌟 Perfect score! You\'re a database master!';
    } else if (percentage >= 80) {
        messageEl.textContent = '🎉 Excellent! You really know your databases!';
    } else if (percentage >= 60) {
        messageEl.textContent = '👍 Good job! Keep practicing to improve!';
    } else {
        messageEl.textContent = '💪 Keep learning! You\'ll get better with practice!';
    }
    
    quizCard.style.display = 'none';
    quizComplete.style.display = 'block';
}

function restartQuiz() {
    shuffleQuiz();
    currentQuestion = 0;
    userAnswers = new Array(shuffledQuizData.length).fill(null);
    quizCard.style.display = 'flex';
    quizCard.style.flexDirection = 'column';
    quizComplete.style.display = 'none';
    renderQuestion();
    updateNavigation();
    updateBackgroundGradient();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (quizComplete.style.display === 'block') return;
    
    // Close modal on Escape
    if (e.key === 'Escape' && answerModal.classList.contains('active')) {
        closeModal();
        return;
    }
    
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        selectOption(parseInt(e.key) - 1);
    } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        showAnswer();
    }
});

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    try {
        init();
    } catch (error) {
        console.error('Failed to initialize quiz:', error);
        questionText.textContent = 'Failed to load quiz. Please refresh the page.';
    }
});