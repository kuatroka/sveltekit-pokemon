<script lang="ts">
  export let data;
//   import type { RowData } from "duckdb-async";
//     import type { PageData } from "../superinvestors copy/$types";
//     import { page } from "$app/stores";
//   import { goto } from "$app/navigation";
//     export let data : PageData;
//     // $: console.log(typeof data.entries)

//     let cusipId: string;
//     $: cusip = data.entries.find((d) => d.cusip === cusipId);

//     const cusipClick = (entry: RowData) => {
//         cusipId = entry.cusip; 
//         // console.log(cusipId)  
//         goto(`?cusipId=${cusipId}`);
// }
// $: console.log('console.log for searchparams', $page.url.searchParams.get('cusipId'))

</script>

{#each data.cik as cik, i}
<tr> {i + 1} -- {cik.cik} -- {cik.quarter} </tr>
  <!-- <td>{i + 1} <br></td>
  <td>{cik.cik} </td>
  <td>{cik.cik_name} </td> -->
<!-- </tr> -->
{/each}

{#each data.cusip as cusip, i}
<tr> {i + 1} -- {cusip.cusip} -- {cusip.cusip_ticker} </tr>
  <!-- <td>{i + 1} <br></td>
  <td>{cik.cik} </td>
  <td>{cik.cik_name} </td> -->
<!-- </tr> -->
{/each}

<!-- <h1>{cusipId}</h1>
<h1>{cusip?.name}</h1> -->

<!-- {JSON.stringify(Object.keys(data), null, 2)} -->

<!-- <div class="ciks">
{#each data.entries2 as entry (entry.cik)}
    <div class='cik'>{entry.cik}</div>
{/each}
</div> -->
  
<!-- <div class="cusips">
{#each data.entries as entry (entry.cusip)} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- <div class="cusip" on:click={() => cusipClick(entry)}>
            <div class="cusip-content">
                {entry.name}<br>
                {entry.value}$
            </div>
            <div class="cusip-id">
            {entry.cusip}
            </div>
        </div>
    {/each}
    </div> -->
    
<!--     
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

    </style> -->