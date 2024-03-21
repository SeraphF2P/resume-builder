// index.js
import cors from "cors";
import express from "express";

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

  const query = req.query
  const convertToObjectOfArrays = (values) => {
    const result = {};

    for (const key in values) {
      if (!key.includes(".")) {
        result[key] = values[key];
        continue
      }
      const keys = key.split('.');
      const value = values[key];

      let currentObj = result;

      for (let i = 0; i < keys.length - 1; i++) {
        const currentKey = keys[i];
        const nextKey = keys[i + 1];

        if (!currentObj[currentKey]) {
          if (/^\d+$/.test(nextKey)) {
            currentObj[currentKey] = [];
          } else {
            currentObj[currentKey] = {};
          }
        }

        currentObj = currentObj[currentKey];
      }

      const lastKey = keys[keys.length - 1];
      if (Array.isArray(currentObj[lastKey])) {
        currentObj[lastKey].push(value);
      } else {
        currentObj[lastKey] = value;
      }
    }

    return result;
  };


  const templateId = req.params.templateId
  const values = convertToObjectOfArrays(query)
  res.render(`templates/${templateId}/index.ejs`, values)
});





app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
