<script language="ts">
  import { ipfs } from '$lib/utils';
  export let asset;
  export let alt;
  export let placeholder;

  const ipfsUrl = `https://ipfs.blockfrost.dev/ipfs/${ipfs(asset)}`;
</script>

<div>
  {#if placeholder}
    <img src={placeholder} data-src={ipfsUrl} {alt} />
  {:else}
    <img src={ipfsUrl} {alt} />
  {/if}
  <h3>{asset.name}</h3>
  {#if asset.listing}
  <h4>
    {#if asset.listing.price}
      <a href={asset.listing.url} target="_blank">{asset.listing.price} ₳</a>
    {:else}
      <span class="not-for-sale">Not for sale</span>
    {/if}
  </h4>
  {/if}
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }

  .not-for-sale {
    color: lightgray;
  }
</style>
