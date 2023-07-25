const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

const bodyParser = require("body-parser");
var cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "2000mb",
    parameterLimit: 10000000000,
  })
);
app.use(bodyParser.json({ limit: "2000mb" }));
app.use(cors());

app.use("/", require("./controllers"));

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
