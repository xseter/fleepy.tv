import type { FastifyInstance } from "fastify";

export const subtitles = [
  "this page is badly coded.",
  "yeah i make music, but is it good?",
  "bad coding practices all around",
  "i like synthesizers",
  "i want a Mother 32 and a DFAM, but i have no money",
  "i love chen :3",
  "i absolutely adore chen",
  "chen is very cute!",
  "<a href='https://twitter.com/htfcirno2000'>htfcirno2000</a> is very awesome :3",
  "<a href='https://twitter.com/sysdotini'>Espi</a> is very cool, talented, and awesome c:",
  "I love my <a href='https://twitter.com/euphoriaenby'>partner</a> so much <3",
  "cheeeeeeeeeeeeeeeeen",
  "CHEN!",
  "wish i could downloadmoreram.com",
  "do you ever just feel like afdlkajshdfkajwefiueafhiew woefhawefijw",
  "sleep schedule? what's that",
  "uwu?",
  "owo",
  "òwó",
  "I spend my time not watching anime, but writing bad code",
  "my music is the definition of hot garbage",
  "my music is the hottest garbage",
  "hot garbage",
  "did you know, if you stop thinking, you wont be able to think?",
  "i love yuri",
  "cute and stupid.",
  "i may be stupid",
  "i may have the stupid",
  "h",
  "dance the pain away",
  "when you when when you you when you when",
  "chen, you're broke, stop asking for free things"
];

export const randomSubtitle = () => subtitles[Math.floor(Math.random() * subtitles.length)];

export default (app: FastifyInstance) => {
  app.get("/api/subtitles", (req, res) => {
    res.send({
      subtitles,
    });
  });
};
