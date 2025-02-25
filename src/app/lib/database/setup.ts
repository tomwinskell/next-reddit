import sql from './db';

async function initDB() {
  try {
    // Create a "posts" table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        text TEXT NOT NULL,
        username TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // // Create a "users" table if it doesn't exist
    // await sql`
    //   CREATE TABLE IF NOT EXISTS users (
    //     id SERIAL PRIMARY KEY,
    //     name TEXT NOT NULL,
    //     email TEXT UNIQUE NOT NULL
    //   )
    // `;

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    sql.end(); // Close the connection
  }
}

initDB();
