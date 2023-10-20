<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import type { IndexMonster } from "./+page";

    export let monster: IndexMonster;
    export let updateSearchParams: (key: string, value: string) => void;
    export let isInteractive: boolean = false;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="monster">
    <div on:click={() => isInteractive ? updateSearchParams('monsterId', monster.id): () => {}}>
        <div class="monster-content">
            <img src={monster.image} alt={monster.name} />
            {monster.name}
        </div>
        <div class="monster-id">
            {monster.id} 
        </div>
        </div>
        {#if isInteractive}
        <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
            Add Monster 2
        </div> 
        {/if}
    </div>

<style>

.monster {
        width: 100px;
        /* border: 1px solid black; */
        margin: 10px;
        padding: 10px;
        position: relative;
        background-color: #eee;
    }
    .monster:hover {
        background-color: #ddd;
    }
    .monster-id {
        position: absolute;
        top: 8px;
        left: 8px;
        font-size: 0.8em;
        color: #aaa;

    }

    .monster-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>