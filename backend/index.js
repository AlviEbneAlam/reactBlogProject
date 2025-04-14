const express = require('express');
const cors=require('cors')
require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3002;


// app.get(
//     '/db-test', async(req, res)=>{
//         try {
//             const result = await pool.query('SELECT NOW()');
//             res.send(`Database connected! Server time: ${result.rows[0].now}`);
//           } catch (err) {
//             console.error('Database connection error:', err);
//             res.status(500).send('Database connection failed');
//           }
//     }

// )

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

