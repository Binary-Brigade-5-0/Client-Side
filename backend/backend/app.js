const { default: mongoose } = require("mongoose");
const handler = require("./handler");
const net = require("node:net");

mongoose
  .connect(
    "mongodb+srv://yashvrdhn18:<Yash@123>@cluster0.vurefdj.mongodb.net/?retryWrites=true&w=majority",
    {
      urlNewParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongo DB Connected!");
  })
  .catch((err) => {
    console.log("Mongo DB Connection Error", err);
  });

mongoose.connection.on("reconnect", () => {
  console.log("Reconnected to DB");
});
mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});

module.exports = registery_server;
