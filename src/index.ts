import app from "./app";
import { connectToDatabase } from "./db/connection";

//connections and listeners

const PORT = process.env.PORT || 5000

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("Server Open and Connected To Database"));
  })
  .catch((err) => console.log(err));
