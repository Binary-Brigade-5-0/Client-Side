function newMessage(kind, message) {
  return JSON.stringify({
    kind,
    message,
    time: new Date(),
  });
}

const NilId = "00000000-0000-0000-0000-000000000000";
const register = {};

app.on("data", (dataIn) => {
  const data = dataIn.toString();
  const { kind, time, message } = JSON.parse(data);
  let uuid;
  switch (kind) {
    case "Request":
      const post = register(message);
      if (post) {
        registery_server.write(newMessage("Ok", post));
      } else {
        registery_server.write(newMessage("Err", "resource not found"));
      }
    case "Response": {
      const [uuid, msg] = message.split(":", 2);
      register[uuid] = msg;
    }
    case "Ok": {
      if (uuid == NilId) {
        const postlist = JSON.parse(message);
      } else {
        const post = message;
      }
    }
    case "Err": {
      if (message.startsWit("invalid message format")) {
        console.error(message);
      } else {
        console.log("Could not locate resource");
      }
    }
  }
});

function handlePost() {
  let contents;
  req.registery_server.write(newMessage("Post", contents));
}
