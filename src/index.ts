import path from 'path';
import express from 'express';
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello from App Engine!');
});

app.get('/submit', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../views/form.html'));
});

app.post('/submit', (req: express.Request, res: express.Response) => {
  console.log({
    name: req.body.name,
    message: req.body.message,
  });
  res.send('Thanks for your message!');
});

const PORT = process.env.PORT;
app.listen(PORT || 8080, () => {
  console.log(`Server listening on port ${PORT}...`);
});