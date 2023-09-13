import { getCik, getCusip } from "$lib/server/db/duckdb";
import { error} from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


console.time("total")
export const load: PageServerLoad = async ({ params }) => {
    // const cik = await getCik();
    // if (!cik) {
    //     throw new Error('Album not found');
    // };
    // const cusip = await getCusip();
    // if (!cik) {
    //     throw new Error('Album not found');
    // };

    // return  { cik, cusip } ;
    return  {   cik: await getCik() ,
                cusip: await getCusip() }  ;    
};
console.timeEnd("total")




// export async function load({ params}) {
//     const cik = await getCik();
//     if (!cik) {
//         throw new Error('Album not found');
//     };
//     const cusip = await getCusip();
//     if (!cusip) {
//         throw new Error('Album not found');
//     };

//     return  { cik, cusip } ;
// 	};












