// /** @type {import('./$types').PageServerLoad} */
import { Database, type RowData } from "duckdb-async";
const conso_duckdb_file = './data/sec.duckdb';


export async function load() {
    const db = await Database.create(conso_duckdb_file);
    let query_duckdb = `
    SELECT 
        cik,
        cusip,
        name_of_issuer AS name,
        value_usd AS value,
        cusip_ticker,
        quarter,
        pct_pct
    FROM main.all_cik_quarter_cusip
    LIMIT 151`;
    console.time(query_duckdb);
    const response = await db.all(query_duckdb);

    const entries = response.map((entry: RowData) => {
        return {
            cusip: entry.cusip,
            name: entry.name,
            value: entry.value,
            cusip_ticker: entry.cusip_ticker,
            quarter: entry.quarter,
            pct_pct: entry.pct_pct
        } 
    });
    console.timeEnd(query_duckdb); 
    
    let query_duckdb2 = `
    SELECT 
        DISTINCT(cik) AS cik
    FROM main.all_cik_quarter_cusip
    ORDER BY cik DESC
    LIMIT 10`;
    console.time(query_duckdb2);
    const response2 = await db.all(query_duckdb2);

    const entries2 = response2.map((entry: RowData) => {
        return {
            cik: entry.cik
        } 
    });
    console.timeEnd(query_duckdb2); 

    await db.close();
    console.log(entries.slice(0, 1));
    console.log(entries2.slice(0, 1));
    return { entries, entries2 };
} 











