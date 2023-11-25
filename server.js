import { config } from "dotenv";
import { app } from "./app.js";
import { connect } from "./database/connect.js";

config();

connect();
app.listen(3000, () => {
  console.log(`Server running on port 3000 in ${process.env.NODE_ENV} mode`);
});
