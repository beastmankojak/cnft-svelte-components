<script>
  import AssetPreview from './AssetPreview.svelte';
  import AssetDetails from './AssetDetails.svelte';
  import Pager from './Pager.svelte';
  import { getContext } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  export let assets;
  export let allAttributes;
  export let page;
  export let traitList;
  export let project;
  export let alt;
  export let policyId;
  export let verified;
  export let assetTransform = null;
  export let marketplaceSearchParam = 'name';
  export let placeholder;
  export let imageUrl = null;

  if (imageUrl === null) {
    imageUrl = undefined;
  }

  const dispatch = createEventDispatcher();
  const { open } = getContext('simple-modal');

  const showAsset = (asset) => {
    open(AssetDetails, {
      asset,
      allAttributes,
      traitList,
      project,
      alt,
      policyId,
      verified,
      assetTransform,
      marketplaceSearchParam,
      imageUrl
    });
  };

  const updatePage = () => {
    dispatch('updatePage');
  };
</script>

{#if assets.length > 0}
  <Pager on:change={updatePage} bind:page length={assets.length} />
  <ul>
    {#each assets as asset}
      <li on:click={() => showAsset(asset)}><AssetPreview {asset} {alt} {placeholder} {imageUrl}/></li>
    {/each}
  </ul>
  <Pager on:change={updatePage} bind:page length={assets.length} />
{:else}
  <p>No assets found.</p>
{/if}

<style>
  li {
    list-style-type: none;
    border: solid 1px black;
    margin: 5px;
    padding: 5px;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 0px;
  }
</style>
