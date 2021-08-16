import express from "express";
import morgan from "morgan";
import cors from "cors";
import store, { User } from "./store";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/users", (req, res) => {
  res.send(store.getUsers());
});

app.post("/users", (req, res) => {
  const user = req.body as User;
  res.send(store.createUser(user));
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  try {
    res.send(store.getUser(id));
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({ error: error.message });
    }
  }
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = req.body as User;
  try {
    res.send(store.updateUser(id, user));
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({ error: error.message });
    }
  }
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  try {
    store.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({ error: error.message });
    }
  }
});

export default app;
