<script>
  export let caption;
  export let attributes;
</script>

<table>
  <caption><h2>{caption}</h2></caption>
  <tr>
    <th>Attribute name</th>
    <th>Count</th>
    <th>Percent</th>
  </tr>
  {#each attributes as attr}
    <tr>
      <td>{attr.name}</td>
      <td>{attr.count}</td>
      <td>{attr.pct}</td>
    </tr>
  {/each}
</table>

<style>
  tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.25);
  }
  tr:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.7);
  }
  th {
    background-color: rgba(0, 0, 0, 0.1);
  }
  table {
    background-color: lightblue;
    border-collapse: collapse;
    width: 100%;
    max-width: 400px;
    margin: 1em auto;
  }

  th,
  td {
    text-align: right;
    padding: 0.3em;
  }
  th:nth-of-type(1),
  td:nth-of-type(1) {
    text-align: left;
  }
</style>
