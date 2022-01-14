<script language="ts">
  import { ipfs } from '$lib/utils';
  export let asset;
  export let alt;
</script>

<div>
  <img src="https://ipfs.blockfrost.dev/ipfs/{ipfs(asset)}" {alt} />
  <h3>{asset.name}</h3>
</div>

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>
