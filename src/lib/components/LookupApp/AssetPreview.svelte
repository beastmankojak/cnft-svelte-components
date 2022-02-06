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
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>
