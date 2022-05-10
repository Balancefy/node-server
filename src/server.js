const app = require('./app');

app.listen(process.env.PORT || 8081, () => console.log(`Server is running on port 8081`));