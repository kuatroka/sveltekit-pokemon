import { getCik } from "$lib/server/db/sqlite";
import { error} from '@sveltejs/kit';

console.time("getCik")
export function load({ params}) {
    const cik = getCik(300);
    if (!cik) {
		throw error(404, 'Album not found');
	}

    return  { cik  } ;
	};

    console.timeEnd("getCik")










