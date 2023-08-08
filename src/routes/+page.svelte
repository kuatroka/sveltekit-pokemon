<script lang="ts">
    import type { PageData } from "./$types";
    import { generations } from "./generations";
    export let data: PageData;


// fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
// .then(response => response.json())
// .then(data => {monsters = data.results})    
// .catch(err => console.log(err));


</script>

{#each data.monsters as monster (monster.id)}
    <h1>{monster.id}:{monster.name}</h1>
{/each}

# loop through each generation
{#each generations as generation (generation.id)}
    <h1>{generation.name}</h1>
    <p>Main region: {generation.main_region}</p>
    <p>Games: {generation.games.join(', ')}</p>
{/each}





