// index.js
import cors from "cors";
import express from "express";
import fs from 'fs';
import path from 'path';
const app = express();
const PORT = 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs")


app.get("/", (req, res) => {
  // const values = req.body
  // console.log(values)
  const values = {
    fullName: 'Nathan Morin',
    email: 'suqokibyp@mailinator.com',
    phone: '+1 (787) 905-6003',
    jobTitle: 'Et non vel et repudi',
    city: 'Totam facere laudant',
    summery: 'Fugiat itaque dolor',
    skills: [{ name: 'Emma Lowe', level: 'expert' }],
    experiences: [{
      jobTitle: 'asdasd', timePeriod: [{
        from: new Date(),
        to: new Date(),
      }], location: 'asdasd'
    }],
    languages: [{ name: 'Serena Adams', level: 'intermediate' }],
    links: [{ name: 'Tanek Keller', link: 'http://localhost:5173/' }],
    colors: {
      text: "#000",
      theme: "#33F"
    }
  }

  res.render("index.ejs", values);
});
app.post("/api/create-resume", async (req, res) => {
  const values = req.body
  const fileName = crypto.randomUUID()
  const filePath = path.join("./uploads/" + fileName)
  await fs.writeFileSync(filePath)

  console.log(values)
  res.json({ fileName })
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});