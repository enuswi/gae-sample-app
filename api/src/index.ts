import express from 'express';
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify({
    oya: 2000,
    ko: 1000
  }))
});

const PORT = process.env.PORT;
app.listen(PORT || 8080, () => {
  console.log(`Server listening on port ${PORT}...`);
});