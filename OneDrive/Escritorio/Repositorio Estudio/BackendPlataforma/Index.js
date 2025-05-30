const app = require('./src/server');
const connectDB = require('./src/config/dbcon');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
        .then(() => console.log("Database connected successfully"))
        .catch(err => console.error("Database connection error:", err));
});