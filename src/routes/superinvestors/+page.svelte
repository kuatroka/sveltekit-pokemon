<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    $: console.log(typeof data.entries)
</script>

<!-- {JSON.stringify(Object.keys(data), null, 2)} -->



{#each data.entries as entry }
    <p>{entry.name}:{entry.value}: {entry.pct_pct}%</p>
{/each}