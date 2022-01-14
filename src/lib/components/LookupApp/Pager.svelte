<script>
  import { createEventDispatcher } from 'svelte';
  export let page = 1;
  export let length = 0;

  const dispatch = createEventDispatcher();
  const pageSize = 50;

  const previous = () => {
    page--;
    dispatch('change');
  };

  const next = () => {
    page++;
    dispatch('change');
  };
</script>

<div>
  <button on:click={previous} disabled={page === 1}>⏪</button>
  <span>Page {page}</span>
  <button on:click={next} disabled={length < pageSize}>⏩</button>
</div>
