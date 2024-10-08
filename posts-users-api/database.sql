CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE order_table(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    user_id INTEGER,
    status VARCHAR(50) DEFAULT 'pending',
    total DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES person(id) ON DELETE CASCADE
);
