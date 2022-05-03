<script>
  export let id;
  export let label;
  export let value;
  export let handleKeypress;
</script>

<label for={id}>{label}</label>
<input bind:value {id} on:keypress={handleKeypress} />

<style>
  label {
    display: block;
  }

  input {
    min-width: 300px;
    width: 10vw;
  }
</style>
