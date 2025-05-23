import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import propertyRoutes from './routes/properties.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});