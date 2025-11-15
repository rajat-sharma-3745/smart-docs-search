import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js';
import documentRoutes from './routes/documentRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import { errorMiddleware } from './middlewares/errorMiddleware.js';

dotenv.config({
    path: './.env'
})
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Internal Search')
})

app.use('/api/document', documentRoutes)
app.use('/api/category', categoryRoutes)


app.use(errorMiddleware)

connectDb().then(() => {
    app.listen(PORT, () => console.log('Server running'))
})