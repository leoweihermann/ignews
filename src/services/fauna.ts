import { Client } from "faunadb";

export const dauna = new Client({
  secret: process.env.FAUNADB_KEY,
});
