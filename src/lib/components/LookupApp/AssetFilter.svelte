<script>
  import TraitDropdown from './TraitDropdown.svelte';
  import { formatDate, titleCase } from '$lib/utils';
  import { filter } from '$lib/stores/assetLookupStore';

  export let baseUrl;
  export let allAttributes;
  export let traitList;
  export let totalCount;
  export let sort;
  export let name;
  export let disclaimer;

  const fetchAttributes = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    allAttributes = await response.json();
    return allAttributes;
  };

  const reset = () => {
    for (const key of Object.keys($filter)) {
      $filter[key] = '';
    }
    name = '';
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById('lfg').click();
    }
  };
</script>

{#await fetchAttributes()}
  <h2>Loading...</h2>
{:then attrs}
  <div>
    <p>
      Total assets minted: {attrs.stats.totalCount} / {totalCount}, last updated at {formatDate(
        attrs.stats.lastUpdate
      )}
    </p>
    <p><a href="rarity.html">Trait rarity chart</a></p>
    <ul>
      {#each traitList as trait}
        <TraitDropdown
          bind:value={$filter[trait]}
          id={`${trait}Dropdown`}
          label={titleCase(trait)}
          attributes={attrs.attributes[trait]}
        />
      {/each}
      <li>
        <label for="sortDropdown">Sort</label>
        <select bind:value={sort} id="sortDropdown">
          <option value="nameAsc">Name ⬆️</option>
          <option value="nameDesc">Name ⬇️</option>
          <option value="rankAsc">Rank ⬆️</option>
          <option value="rankDesc">Rank ⬇️</option>
        </select>
      </li>
      <li>
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={name} on:keypress={handleKeypress} />
      </li>
    </ul>
    {#if disclaimer}
      <div class="warning">{disclaimer}</div>
    {/if}
    <button on:click id="lfg">LFG</button>
    <button on:click={reset}>Reset</button>
  </div>
{:catch err}
  <p>Error: {err}</p>
{/await}

<style>
  button {
    font-style: italic;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 0px;
  }
  li {
    list-style-type: none;
  }
  label {
    display: inline;
  }
  .warning {
    font-weight: bold;
    color: darkred;
    margin-bottom: 1em;
  }
</style>
