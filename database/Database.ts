const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Benn7445:VentigrateGroepA@cluster0.vb8ri.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected"))
  .catch((err: any) => console.log(err));
