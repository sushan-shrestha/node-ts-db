import express from "express";
const app = express();
const port = process.env.PORT || 3010;
import db from "./models";
import routes from "./routes";
app.use(express.json());
app.use("/api", routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("App is listening on port:" + port);
  });
});
