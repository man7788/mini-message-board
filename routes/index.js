const express = require("express");
const router = express.Router();
const findDoc = require("../connect");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getDoc = async () => {
  const data = await findDoc().catch(console.dir);
  messages.push(data);
};

getDoc();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    appTitle: "Mini Message Board",
    title: "Messages",
    messages: messages,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.fmessage,
    user: req.body.fname,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
