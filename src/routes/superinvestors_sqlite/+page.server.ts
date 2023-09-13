import { getCik, getCusip } from "$lib/server/db/sqlite";
import { error} from '@sveltejs/kit';

console.time("total")
export function load() {
    const cik = getCik();
    if (!cik) {
		throw error(404, 'Album not found');
	}

    const cusip = getCusip();
    if (!cusip) {
		throw error(404, 'Album not found');
	}

    return  { cik, cusip } ;
	};

console.timeEnd("total")










