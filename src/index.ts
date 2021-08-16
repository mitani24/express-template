import app from "./server";

const port = 3000;
app.listen(port, () => {
  console.info(`🚀 Express application started on http://localhost:${port}`);
});
