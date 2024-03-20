// index.js
import cors from "cors";
import express from "express";
import { jsPDF } from 'jspdf';

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.send("Hello from 'Resume Builder' Web App");
});

app.get("/api/preview/template/:templateId", async (req, res) => {
  const values = req.query
  const templateId = req.params.templateId

  res.render(`templates/${templateId}`, values)
});




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
