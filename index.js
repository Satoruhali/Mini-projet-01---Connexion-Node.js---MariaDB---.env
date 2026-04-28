// apprenant: WASSIM_HALITTIM
// equipe: A|B|C|solo
// seed-w14: 2026-04-21

// TODO Étape 4 — importe getPool depuis ./db.js, récupère un pool,
// exécute une requête qui retourne toutes les colonnes de la table utilisateurs, affiche rows, puis pool.end()

import { getPool } from "./db.js";

const pool = getPool();
const[rows,fields] = await pool.query("Select * from utilisateurs ");
console.log("rows est un tableau :", Array.isArray(rows));
console.log("Nombre d'utilisateurs :",rows.length);
console.log("fields décrit les colonnes (optionnel) :", fields?.map((f) => f.name));
console.log(rows);

await pool.end();

