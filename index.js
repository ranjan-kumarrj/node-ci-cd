const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! CI/CD with Docker is working Ranjith!as");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on portsssdc ${PORT}`));
