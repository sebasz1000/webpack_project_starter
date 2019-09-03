import { run } from "./app/app";
import "./main.scss"; //thanks to csss-loader

const messages = [
  "Hola! Todo bien?",
  "He Aparecido!",
  "Usando Webpack?",
  "Y si le colocamos React?",
  "Y si le colocamos Vue?",
  "Qué tal usar AngularJS"
];

run(messages);
