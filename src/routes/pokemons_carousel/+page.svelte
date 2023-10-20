<script lang="ts">
    import Carousel from 'svelte-carousel'
    import type { PageData } from './$types';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import type { IndexMonster } from "./+page";
    import { generations } from "./generations";    
    import Monster from "./Monster.svelte";
    import { browser } from '$app/environment';
    export let data: PageData;

    let quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    $: selectedQuarter = $page.url.searchParams.get('quarter') || 'Q4';

    let form = {
        searchString: ''
    };
    let searchString = '';
    $: selectedMonsters = data.monsters.filter((monster) =>  { 
        return monster.name.toLowerCase().includes(searchString.toLowerCase())});

    $: monsterId = $page.url.searchParams.get('monsterId') || '';
    $: monster = data.monsters.find((entry) => entry.id === monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || '';
    $: monster2 = data.monsters.find((entry) => entry.id === monsterId2);

    $: selectedGenerationId = $page.url.searchParams.get('generation_id') || '';

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`);
        };

    const submitSearch = (e: Event) => {
        searchString = form.searchString
    };


    // $: console.log($page.url.searchParams.get('monsterId'))
</script>

<!-- {#if monster}
<Monster monster={monster}
        updateSearchParams={updateSearchParams}
        isInteractive={false} />

{/if}

{#if monster2}
<Monster monster={monster2}
        updateSearchParams={updateSearchParams}
        isInteractive={false}  />
{/if} -->


<div class="generations">
{#each generations as generation (generation.id)}
    <button 
        class='generation active'
        class:active={selectedGenerationId === generation.id.toString()}
        on:click={() => updateSearchParams('generation_id', generation.id.toString())}
        >
        {generation.main_region}
    </button>
{/each}
</div>

<div class="quarters">
    {#each quarters as quarter }
        <button 
            class='generation active'
            class:active={selectedQuarter === quarter}
            on:click={() => updateSearchParams('quarter', quarter)}
            >
            {quarter}
        </button>
    {/each}
    </div>

<!-- particlesToShow={3} -->
{#if browser}
<div class='carousel'>
<Carousel 
    particlesToShow={8}
    particlesToScroll={2}
    >
        {#each quarters as quarter, index (index)}
        <button 
        class='quarters active'
        class:active={selectedQuarter === quarter}
        on:click={() => updateSearchParams('quarter', quarter)}
        >
        {quarter}
    </button>
        {/each}
        <span slot="left-control">Left</span>
        <span slot="right-control">Right</span>
</Carousel>
</div>
{/if}

<form class="search-form" on:change={submitSearch}>
<input class="search-field" type="text" bind:value={form.searchString} placeholder="Pokemon Name"/>
<input type="submit" value="Search">
</form>

<div class="monsters">
{#each selectedMonsters as monster (monster.id)}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
    <Monster monster={monster}
    updateSearchParams={updateSearchParams}
        isInteractive={true}  />
{/each}
</div>


<style>
    .generations {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .generation {
        margin: 10px;
        padding: 5px 10px;
        border: 1px solid black;
        background-color: #f9f9f9;
        color: #333;
        cursor: pointer;
    }
    .generation.active {
        background-color: #333;     
        color: #fff
    }
    .generation:hover {
        background-color: #eee;
    }

    .generation.active:hover {
        background-color: #444;
    }
    .monsters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

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



    .search-form {
        display: flex;
        justify-content: center;
        margin: 20px 0;

    }

    .search-form input[type='text'] {
        padding: 5px 10px;
        border: 1px solid #333;
        border-radius: 5px;
        width: 200px;
    }

    .search-form input[type='submit'] {
        padding: 5px 10px;
        border: 1px solid #333;
        border-radius: 5px;
        background-color: #333;
        color: #fff;
        margin-left: 10px;
    }

    .quarters {
    display: flex;
    justify-content: center;
}

.carousel {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel .quarters {
        margin: 5px;
        padding: 2px 5px; /* Updated padding to make buttons smaller */
        border: 1px solid black;
        background-color: #f9f9f9;
        color: #333;
        cursor: pointer;
        font-size: 12px;
    }

    .carousel .quarters.active {
        background-color: #333;     
        color: #fff;
    }

    .carousel .quarters:hover {
        background-color: #eee;
    }

    .carousel .quarters.active:hover {
        background-color: #444;
    }


</style>





