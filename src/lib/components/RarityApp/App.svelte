<script>
  import Totals from './Totals.svelte';
  import TraitTable from './TraitTable.svelte';
  import { titleCase } from '$lib/utils';

  export let baseUrl;
  export let title;
  export let description;
  export let traitList;
  export let totalCount;

  const fetchRarity = async () => {
    const response = await fetch(`${baseUrl}/attributes/`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
    }
    return await response.json();
  };

  const getAttributes = (attrs) =>
    attrs.map(({ label }) => {
      const [, name, count, pct] = label.match(/(.*)\s+\((\d+)\s+\/\s+([\d\.%]+)\)/);
      return { name, count, pct };
    });
</script>

<h1>{title}</h1>
<div>
  <p>{description}</p>
</div>
{#await fetchRarity()}
  <h2>Loading...</h2>
{:then rarity}
  <Totals totals={rarity.stats} {totalCount} />
  {#each traitList as trait}
    <TraitTable caption={titleCase(trait)} attributes={getAttributes(rarity.attributes[trait])} />
  {/each}
{:catch err}
  <p>Error: {err}</p>
{/await}
