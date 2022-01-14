<script>
  import Modal from 'svelte-simple-modal';
  import AssetFilter from './AssetFilter.svelte';
  import AssetList from './AssetList.svelte';
  import { filter } from '$lib/stores/assetLookupStore';

  export let traitList = [];
  export let project;
  export let alt;
  export let baseUrl;
  export let assetTag;
  export let title;
  export let totalCount;
  export let policyId;
  export let verified;
  export let assetTransform;

  let assetsLoading = false;
  let assetsError = '';
  let assets = [];
  let sort = 'nameAsc';
  let name = '';
  let page = 1;
  let currentFilter;
  let allAttributes = {};

  $filter = traitList.reduce((acc, trait) => {
    acc[trait] = '';
    return acc;
  }, {});

  const doFetch = async (qs) => {
    try {
      assetsLoading = true;
      assetsError = '';
      const response = await fetch(qs.length ? `${baseUrl}/?${qs.join('&')}` : baseUrl);
      if (response.ok) {
        assets = await response.json();
      } else {
        assetsError = await response.text();
      }
    } catch (err) {
      console.log(err);
      assetsError = err.message;
    } finally {
      assetsLoading = false;
    }
  };

  const doFetchOne = async (name) => {
    try {
      assetsLoading = true;
      assetsError = '';
      const response = await fetch(`${baseUrl}/${name}`);
      if (response.ok) {
        const result = (await response.json()) || {};
        const asset = result[assetTag];
        if (asset) {
          assets = [asset];
        } else {
          assetsError = 'Asset not found';
        }
      } else {
        assetsError = await response.text();
      }
    } catch (err) {
      console.log(err);
      assetsError = err.message;
    } finally {
      assetsLoading = false;
    }
  };

  const fetchAssets = async () => {
    page = 1;
    currentFilter = [];

    if (name) {
      await doFetchOne(name);
    } else {
      for (const trait of traitList) {
        if ($filter[trait]) {
          currentFilter.push(`${trait}=${$filter[trait]}`);
        }
      }
      if (sort) {
        currentFilter.push(`sort=${sort}`);
      }
      await doFetch(currentFilter);
    }
  };

  const updatePage = async () => {
    await doFetch([...currentFilter, `page=${page}`]);
  };
</script>

<main>
  <h1>{title}</h1>
  <AssetFilter
    {baseUrl}
    {traitList}
    {totalCount}
    on:click={fetchAssets}
    bind:sort
    bind:allAttributes
    bind:name
  />
  {#if assetsLoading}
    <h2>Loading...</h2>
  {:else if assetsError}
    <p>Error: {assetsError}</p>
  {:else}
    <Modal>
      <AssetList
        {assets}
        {allAttributes}
        {traitList}
        {project}
        {alt}
        {policyId}
        {verified}
        {assetTransform}
        bind:page
        on:updatePage={updatePage}
      />
    </Modal>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
