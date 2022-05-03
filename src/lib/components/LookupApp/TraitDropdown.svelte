<script>
  export let id;
  export let label;
  export let value;
  export let attributes;
</script>

<label for={id}>{label}</label>
<select bind:value {id}>
  <option value="">Any</option>
  {#each attributes as attr}
    <option value={encodeURIComponent(attr.value)}>{attr.label}</option>
  {/each}
</select>

<style>
  label {
    display: block;
  }

  select {
    min-width: 300px;
    width: 10vw;
  }
</style>
