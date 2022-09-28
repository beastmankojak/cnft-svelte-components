<script>
  import { display, ipfs, searchForSale, titleCase } from '$lib/utils';
  import _get from 'lodash/get';

  export let asset;
  export let allAttributes;
  export let traitList;
  export let project;
  export let alt;
  export let policyId;
  export let verified;
  export let assetTransform = null;
  export let marketplaceSearchParam = 'name';
  export let imageUrl = (asset) => `https://ipfs.blockfrost.dev/ipfs/${ipfs(asset)}`
</script>

<div>
  <h2>{asset.name}</h2>
  <img src="{imageUrl(asset)}" {alt} />
  <ul>
    {#each traitList as trait}
      <li>
        <span>&nbsp;{titleCase(trait)}</span>
        {display(allAttributes, trait, _get(asset, trait))}
      </li>
    {/each}
    <li><span>&nbsp;Rank:</span> {asset.rank}</li>
    <li><span>&nbsp;Rarity score:</span> {asset.rarityScore.toFixed(2)}</li>
    <li>
      <span>&nbsp;For sale:</span>
      {#if asset.listing && asset.listing.price }
        <a href={asset.listing.url} target="_blank">{asset.listing.price} ₳</a>
      {:else}
        {#await searchForSale({ project, name: asset[marketplaceSearchParam], verified, policyId, assetTransform })}
          Loading...
        {:then listing}
          {#if listing.forSale}
            <a href={listing.href} target="_blank">{listing.price} ₳</a>
          {:else}
            Not for sale
          {/if}
        {:catch err}
          Error: {err}
        {/await}
      {/if}
    </li>
  </ul>
</div>

<style>
  div {
    text-align: left;
  }
  img {
    height: 200px;
    width: 200px;
    float: left;
  }
  li {
    list-style-type: none;
  }
  ul {
    padding: 0px;
  }
  span {
    display: inline-block;
    width: 7em;
    font-weight: bold;
  }
</style>
