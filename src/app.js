import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import path from 'path';

const app = express();

// Middleware
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS) depuis le répertoire 'views'
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'src/views')));

// Routes
app.use('/', routes);

// Serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;