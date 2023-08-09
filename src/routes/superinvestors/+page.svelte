<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    $: console.log(typeof data.entries)
</script>

<!-- {JSON.stringify(Object.keys(data), null, 2)} -->


<div class="ciks">
{#each data.entries2 as entry (entry.cik)}
    <div class='cik'>{entry.cik}</div>
{/each}
</div>


    
    <div class="cusips">
    {#each data.entries as entry (entry.cusip)}
        <div class="cusip">
            <div class="cusip-content">
                {entry.name}<br>
                {entry.value}$
            </div>
            <div class="cusip-id">
            {entry.cusip}
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