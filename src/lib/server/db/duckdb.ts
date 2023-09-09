import DuckDB, { OPEN_READONLY } from 'duckdb'
import { DUCKDB_PATH } from '$env/static/private';
import type { Cik, Cusip } from "./types";


// Instantiate DuckDB
const db = new DuckDB.Database(DUCKDB_PATH, OPEN_READONLY);
const conn = db.connect();
// Create connection
// const conn = new Connection(db);

export async function getCik(limit=60): Promise<Cik[]> {
        const query = (query: string) => {
        return new Promise<Cik[]>((resolve, reject) => {
            conn.all(query, (err, res: any) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    };
    const sql = `select cik, quarter from main LIMIT ${limit}`; // Use template literals correctly
    const entries: Cik[] = await query(sql);
    return entries as Cik[] ; // Return an object with entries property
};


export async function getCusip(limit=60): Promise<Cusip[]> {
    const query = (query: string) => {
    return new Promise<Cusip[]>((resolve, reject) => {
        conn.all(query, (err, res: any) => {
            if (err) reject(err);
            resolve(res);
        })
    })
};
const sql = `select     
                cusip,
                name_of_issuer,
                cusip_ticker,
                quarter
            from main 
            LIMIT ${limit}`; // Use template literals correctly
const entries: Cusip[] = await query(sql);
return entries as Cusip[] ; // Return an object with entries property
};
