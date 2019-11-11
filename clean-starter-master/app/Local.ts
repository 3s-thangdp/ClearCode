import * as mongoose from "mongoose";
import { server } from "./lib/infrastructure/webserver/Server";

const appPort = 8080;
const MONGO_URI = "mongodb://localhost/Boss";

server.listen(appPort, async () => {
  console.log(`Service is running on ${appPort}`);
  try {
    mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    mongoose.connection.on("open", () => {
      console.log(
        "----------------** Connected to Mongodb ** ----------------------\n"
      );
    });
  } catch (err) {
    console.log(err);
  }
});
