const app = require('./app');
require('./db');
require('dotenv').config(); 

const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
