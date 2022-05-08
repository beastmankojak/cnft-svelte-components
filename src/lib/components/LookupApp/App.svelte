<script>
  import Modal from 'svelte-simple-modal';
  import AssetFilter from './AssetFilter.svelte';
  import AssetList from './AssetList.svelte';
  import { filter } from '$lib/stores/assetLookupStore';

  export let traitList = [];
  export let numericTraitList = [];
  let combinedTraitList = [...traitList, ...numericTraitList]
  export let displayTraitList = combinedTraitList;
  export let project;
  export let alt;
  export let baseUrl;
  export let assetTag;
  export let title;
  export let totalCount;
  export let policyId;
  export let verified;
  export let assetTransform = null;
  export let marketplaceSearchParam = 'name';
  export let disclaimer;
  export let rarityUrl = 'rarity.html';
  export let placeholder = '';
  export let customSort = {};

  const { defaultSort } = customSort;
  
  let assetsLoading = false;
  let assetsError = '';
  let assets = [];
  let sort = defaultSort || 'nameAsc';
  let name = '';
  let page = 1;
  let currentFilter;
  let allAttributes = {};

  $filter = combinedTraitList.reduce((acc, trait) => {
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
      for (const trait of combinedTraitList) {
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
    {numericTraitList}
    {totalCount}
    {disclaimer}
    {rarityUrl}
    {customSort}
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
        traitList={displayTraitList}
        {project}
        {alt}
        {policyId}
        {verified}
        {assetTransform}
        {marketplaceSearchParam}
        {placeholder}
        bind:page
        on:updatePage={updatePage}
      />
    </Modal>
    <script>
      (async () => {
        const pause = (timeout) => {
          const p = new Promise((resolve, reject) => {
            setTimeout(resolve, timeout);
          });
          return p;
        }

        const loaded = (image, resolve) => {
          const fn = () => {
            image.removeEventListener('load', fn);
            image.removeEventListener('error', fn);
            resolve();
          }

          return fn;
        }

        const updateImage = (image) => 
          new Promise((resolve, reject) => {
            const src = image.getAttribute('data-src');
            image.removeAttribute('data-src');
            image.setAttribute('src', src);
            image.addEventListener('load', loaded(image, resolve));
            image.addEventListener('error', loaded(image, resolve));
          });

        const images = document.querySelectorAll('img[data-src]');
        let i = 0;
        const next = () => {
          if (i < images.length) {
            const p = updateImage(images[i]);
            i++;
            return p.then(() => pause(10)).then(next);
          }
        }

        for (let j = 0; j < 10; j++) {
          next();
        }
      })()
    </script>
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
      max-width: 1440px;
    }
  }
</style>
