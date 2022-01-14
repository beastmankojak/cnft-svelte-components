<script>
  import { formatDate } from '$lib/utils';
  export let totals;
  export let totalCount;
</script>

<div>
  <p>Total number of assets: <span>{totals.totalCount} / {totalCount}</span></p>
  <p>Last updated: <span>{formatDate(totals.lastUpdate)}</span></p>
</div>

<style>
  span {
    font-weight: bold;
  }
</style>
