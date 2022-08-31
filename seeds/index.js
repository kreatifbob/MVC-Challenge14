const sequelizeConnection = require("../config/sequelizeConnection");

const { User, Post, Comment } = require("../models");

const users = [
  {
    username: "Tanel",
    password: "Sydney123",
  },

  {
    username: "Bryan",
    password: "Instructor",
  },

  {
    username: "Aditya",
    password: "developer",
  },

  {
    username: "Matt",
    password: "justdoit",
  },
];

const posts = [
  {
    title: "Learn JAVA",
    content: "All things JAVA",
    user_id: 2,
  },

  {
    title: "Learn PYTHON",
    content: "Beginner Level PYTHON Skills",
    user_id: 1,
  },

  {
    title: "Node.JS",
    content: "An introductory to Node Server Js",
    user_id: 3,
  },
];

const comments = [
  {
    content: "Instructor was quite slow, content is very nice and explanatory",
    user_id: 2,
    post_id: 1,
  },

  {
    content: "I am glad I bumped into this",
    user_id: 3,
    post_id: 1,
  },
];

const plantSeeds = async () => {
  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
};

plantSeeds();
