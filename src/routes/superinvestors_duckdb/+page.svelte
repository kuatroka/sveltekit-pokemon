<script lang="ts">
    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    export let data : PageData;


    $: cusipId = $page.url.searchParams.get('cusipId') || '';
    $: cusip = data.entries_cusip.find((d) => d.cusip === cusipId);

    $: cusipId2 = $page.url.searchParams.get('cusipId2') || '';
    $: cusip2 = data.entries_cusip.find((d) => d.cusip === cusipId2);

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`);
        };


$: console.log('console.log for searchparams', $page.url.searchParams.get('cusipId2'))

</script>
<h1>{cusipId}</h1>
<h1>{cusip?.name_of_issuer}</h1>
<h1>{cusipId2}</h1>
<h1>{cusip2?.name_of_issuer}</h1>


<!-- {$page.url.searchParams.get('cusipId')} -->

<!-- {JSON.stringify(Object.keys(data), null, 2)} -->

<div class="ciks">
{#each data.entries_cik as entry (entry.cik)}
    <div class='cik'>{entry.cik}</div>
{/each}
</div>
  
<div class="cusips">
{#each data.entries_cusip as entry (entry.cusip)}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="cusip">
        <div on:click={() => updateSearchParams('cusipId', entry.cusip)}>
            <div class="cusip-content">
                {entry.name_of_issuer}<br>
            </div>
            <div class="cusip-id">
            {entry.cusip}
            </div>
          </div>
            <br>
            <div on:click={() => updateSearchParams('cusipId2', entry.cusip)}>
              Add as cusip 2
          </div>
        </div>
    {/each}
  </div>
    
    
    <style>
        .ciks {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    
        .cik {
            width: 100px;
            margin: 5px;
            /* margin: auto; */
            padding: 5px 10px;
            border: 1px solid black;
            background-color: #f9f9f9;
            color: #333;
            align-items: center;
            text-align: center;
        }
        .cik:hover {
            background-color: #eee;
        }
    
        .cusips {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    
.cusip {
  width: 100px;
  /* border: 1px solid black; */
  margin: 10px;
  padding: 10px;
  position: relative;
  background-color: #eee;
  overflow: hidden;
}

.cusip:hover {
  background-color: #ddd; 
}

.cusip-id {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 0.8em;
  color: #aaa;
}

.cusip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.cusip {
  width: 100px;
  /* border: 1px solid black; */
  margin: 10px;
  padding: 10px;
  position: relative;
  background-color: #eee;
  overflow: auto;
}

.cusip:hover {
  background-color: #ddd; 
}

.cusip-id {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 0.8em;
  color: #aaa;
}

.cusip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

</style>