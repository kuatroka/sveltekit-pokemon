import DuckDB, { OPEN_READONLY } from 'duckdb'
import { DUCKDB_PATH } from '$env/static/private';
import type { Cik, Cusip } from "./types";

import { Database } from "duckdb-async";

// Instantiate DuckDB
const db = await Database.create(DUCKDB_PATH);
// const conn = db.connect();


export async function getCusip(limit=60): Promise<Cusip[]> {
    
    const sql = `
    SELECT         
        cusip,
        name_of_issuer,
        cusip_ticker,
        quarter,
        SUM(value) AS value,
    FROM main.main
    GROUP BY all
    LIMIT ${limit}`; // Use template literals correctly

    const cik = await db.all(sql);
    await db.close();
    return cik as Cusip[] ; // Return an object with entries property
    
};



