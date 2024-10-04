# Install modules

npm i

# Start server

npm run start


# Create db

createdb exampledb1


# Database connection

psql exampledb1


# Get database contents

\dt


# Exiting the database session

\q


# All databases

\l


# Info about db

\c exampledb1


# Create table

\i database.sql


# Create data:
INSERT INTO person (name, surname) VALUES ('Name 1', 'Surname 1');

INSERT INTO post (title, content, user_id) VALUES ('Title 1', 'Content 1', 1);


# Show person table with id=1:
SELECT * FROM person WHERE id = 1;
