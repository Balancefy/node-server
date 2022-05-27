const app = require('./app');
const PORT = process.env.PORT || 8081

app.listen(PORT, () => console.log(`is running on port ${PORT}`));