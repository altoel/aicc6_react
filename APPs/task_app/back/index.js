const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get("/", (request, response) => {
   response.send("Hello Node, This is Root Page!!");
});
