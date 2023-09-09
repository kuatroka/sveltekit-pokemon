// /** @type {import('./$types').PageServerLoad} */
import { Database, type RowData } from "duckdb-async";
const conso_duckdb_file = './data/sec.duckdb';



export async function load() {
    const db = await Database.create(conso_duckdb_file);

    let query_duckdb = `
    SELECT         
        cusip,
        name_of_issuer AS name,
        quarter,
        SUM(value) AS value,
    FROM main.main
    GROUP BY cusip, name, quarter
    LIMIT 10`;

    let query_duckdb2 = `
    SELECT 
    cik
    FROM main.main
    ORDER BY cik DESC
    LIMIT 10`;

    console.time('query_duckdb');
    console.time('query_duckdb2');

    const [entries, entries2] = await Promise.all([
        db.all(query_duckdb),
        db.all(query_duckdb2)
    ]);

    console.timeEnd('query_duckdb');
    console.timeEnd('query_duckdb2');

    // const entries = response.map((entry: RowData) => {
    //     return {
    //         cusip: entry.cusip,
    //         name: entry.name,
    //         value: entry.value,
    //         cusip_ticker: entry.cusip_ticker,
    //         quarter: entry.quarter,
    //         pct_pct: entry.pct_pct
    //     } 
    // });

    // const entries2 = response2.map((entry: RowData) => {
    //     return {
    //         quarter: entry.quarter
    //     } 
    // });

    await db.close();
    console.log(entries.slice(0, 1));
    console.log(entries2.slice(0, 1));
    return { entries, entries2 };
} 














