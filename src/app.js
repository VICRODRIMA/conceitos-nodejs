const express = require("express");
const cors = require("cors");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  // TODO
  const { title, url, techs } = request.body;
  const repository = {
    id: uuid(),
    title: title,
    url: url,
    techs: techs,
    likes: 0,
  };

  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositorieIndex = repositories.findIndex(
    (repository) => repository.id == id
  );

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: "Repositorie not found" });
  }
  const repository = {
    id,
    title,
    url,
    techs,
    likes: 0,
  };

  repositories[repositorieIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  const repositorieIndex = repositories.findIndex(
    (repository) => repository.id == id
  );

  if (repositorieIndex < 0) {
    return response.status(400).json({ error: "Repositorie not found" });
  }
  projects.slice(repositorieIndex, 1);

  return response.status(500).send();
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
  const { id } = request.params;
  const repository = repositories.findIndex(
    (repository) => repository.id == id
  );

  repository.likes++;

  return response.json(repository);
});

module.exports = app;
