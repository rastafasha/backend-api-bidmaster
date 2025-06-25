import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import projectRoutes from './routes/project.routes.js';
import projectTypeRoutes from './routes/projectType.routes.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    // origin: '*',
    credentials: true
}));
app.use(morgan(('dev')));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);
app.use('/api', projectTypeRoutes);
app.use('/api', userRoutes);

export default app;