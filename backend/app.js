require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const Question = require("./models/Question");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use(
  session({
    secret: "qwlfblfblfqlfqbdlfjhbl",
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session.currentUser;
  next();
});

const questions = [
  {
    category: "javascript/react",
    question: "What type of components allow you to initialize state?",
    answers: ["Functional components", "Class components", "Pure components", "Object components"],
    solution: "Class components"
  },
  {
    category: "javascript/react",
    question: "The only required method in a class component is:",
    answers: ["onClick()", "render()", "return()", "componentDidMount()"],
    solution: "render()"
  },
  {
    category: "javascript/react",
    question: "Can you define any stateless functional component as a class?",
    answers: ["Yes", "No"],
    solution: "Yes"
  },
  {
    category: "javascript/react",
    question: "What type of state is available to the entire app?",
    answers: ["setState()", "Application state", "prevState()", "Component state"],
    solution: "Application state"
  },
  {
    category: "javascript/react",
    question:
      "State may be updated asynchronously. Whenever you need to update state based on previous state, you shouldn't rely on _____ to calculate the next state.",
    answers: ["this.state", "onClick{}", "state = {}", ".bind()"],
    solution: "this.state"
  },
  {
    category: "javascript/react",
    question: "Data from state is distributed through the application via ___.",
    answers: ["functions", "events", "props", "setState()"],
    solution: "setState()"
  },
  {
    category: "javascript/react",
    question: "In React, state is never modified directly.",
    answers: [
      "True. The only way React allows you to update state is by using it's built in setState() method.",
      "False. State is a regular JavaScript object, so you can change its properties using dot notation"
    ],
    solution: "True. The only way React allows you to update state is by using it's built in setState() method."
  },
  {
    category: "javascript/general",
    question: "What does 'syntax' mean?",
    answers: [
      "Synthax is like the vocabulary and grammar of a programming language. It's a language's words and commands as well as the instructions for putting them together to create a program",
      "Synthax is another programming language that's becoming as popular as JavaScript",
      "Synthax is command in the JavaScript programming language"
    ],
    solution:
      "Synthax is like the vocabulary and grammar of a programming language. It's a language's words and commands as well as the instructions for putting them together to create a program"
  },
  {
    category: "javascript/general",
    question: "You can use JavaScript on a web server.",
    answers: ["True", "False"],
    solution: "True"
  },
  {
    category: "javascript/general",
    question: "Java and JavaScript are the same thing?",
    answers: ["True", "False"],
    solution: "False"
  },
  {
    category: "javascript/general",
    question: "JavaScript is used to build complex web applications, like Gmail, Google Docs, and Google Maps.",
    answers: ["True", "False"],
    solution: "True"
  },
  {
    category: "javascript/general",
    question: "What does this condition evaluate to: true or false?:(true && false)",
    answers: ["True", "False"],
    solution: "False"
  },
  {
    category: "javascript/general",
    question: "What does this condition evaluate to: true or false?:(true || false)",
    answers: ["True", "False"],
    solution: "True"
  },
  {
    category: "javascript/general",
    question: "What keyword do you use to create a function in JavaScript?",
    answers: ["function", "var", "makeFunction", "def"],
    solution: "function"
  },
  {
    category: "javascript/general",
    question: "Which of the following describes a function?",
    answers: [
      "A function is used to add decision making to your program, allowing your program to follow different paths depending on the conditions",
      "A function is used to hold multiple pieces of information similar to a database",
      "A function means the same thing as a JavaScript program",
      "A function lets you store a block of code that you can use over and over again"
    ],
    solution: "A function lets you store a block of code that you can use over and over again"
  }
];

app.post("/seed", async () => {
  console.log("starting to insert", Question);
  const foo = await Question.insertMany(questions);
  console.log("finished inserting", foo);
});

const UserRoutes = require("./routes/UserRoutes");
app.use("/api", UserRoutes);

const QuestionRoutes = require("./routes/QuestionRoutes");
app.use("/api", QuestionRoutes);

const index = require("./routes/index");
app.use("/api", index);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
