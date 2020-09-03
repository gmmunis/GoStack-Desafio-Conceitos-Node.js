const express = require("express");
const cors = require("cors");

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // const { title } = request.query;

  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repositorie = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repositorie);

  return response.json(repositorie);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: 'Repositorie not found' });
  }

  repositories[repositorieIndex] = {
    id,
    title: title ? title : repositories[repositorieIndex].title,
    url: url ? url : repositories[repositorieIndex].url,
    techs: techs ? techs : repositories[repositorieIndex].techs,
    likes: repositories[repositorieIndex].likes
  };

  return response.json(repositories[repositorieIndex]);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositorieIndex < 0) {
    return response.status(400).json('Repositório não encontrado!');
  }

  repositories.splice(repositorieIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositorieIndex < 0) {
    return response.status(400).json('Repositório não encontrado!');
  }

  repositories[repositorieIndex].likes += 1;

  return response.json(repositories[repositorieIndex]);
});

module.exports = app;
