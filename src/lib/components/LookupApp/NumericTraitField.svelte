<script>
  export let id;
  export let label;
  export let value;
</script>

<label for={id}>{label}</label>
<input bind:value {id} />

<style>
  label {
    display: inline;
  }
</style>
