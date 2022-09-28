<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Modal from 'svelte-simple-modal';
  import AssetList from './AssetList.svelte';

  const imageUrl = (asset) => `https://beastmankojak.nyc3.cdn.digitaloceanspaces.com/bac/bacChristmas/ipfs/${asset.image.replace('ipfs://', '')}/200.png`
</script>

<Meta
  title="LookupApp/AssetList"
  component={AssetList}
  argTypes={{
    assets: { control: 'array' },
    allAttributes: { control: 'array' },
    page: { control: 'number' },
    traitList: { control: 'array' },
    project: { control: 'text' },
    alt: { control: 'text' },
    policyId: { control: 'text' },
    onUpdatePage: { action: 'onUpdatePage' }
  }}
/>

<Template let:args>
  <Modal>
    <AssetList {...args} on:updatePage={args.onUpdatePage} />
  </Modal>
</Template>

<Story
  name="Derpbirds"
  args={{
    assets: [
      {
        image: 'ipfs://QmVFidgyUqmqfsaXkAPRvp1a167ETMEeAnEFyDYbMzczKN',
        name: 'Perfect Common Derp Bird #01947',
        rarityScore: 100,
        rank: 1
      },
      {
        image: 'ipfs://QmULdgyVC9F2XLjmzxwRRkyYcwPSacUF1oV98tijnbUhce',
        name: 'Scare Derp Bird #04999',
        rarityScore: 99,
        rank: 2
      },
      {
        image: 'ipfs://QmVEVkJbfJj7YYQH28zQ6WNuEZ7aLFZopQSzwyU3pZZYn8',
        name: 'Scare Derp Bird #07547',
        rarityScore: 98,
        rank: 3
      }
    ],
    page: 1,
    allAttributes: {},
    traitList: [],
    project: '',
    alt: 'Derpbird',
    policyId: ''
  }}
/>

<Story
  name="BAC Christmas"
  args={{
    assets: [
      {
        image: 'ipfs://Qma6cXVfEg1xebhyztrEkCqbG78dyg4b4fJU9bqzCYg2La',
        name: 'BAC Christmas #####',
        rarityScore: 100,
        rank: 1
      },
      {
        image: 'ipfs://Qma6SQkub9gdCVvtE2FTXcjzzV4Sz1b7B8fEReL5qSuVXP',
        name: 'BAC Christmas #####',
        rarityScore: 99,
        rank: 2
      },
      {
        image: 'ipfs://QmawDdqXb18pExMQ6yznePvZxyXAuheXZJwXbhGoM9PdDV',
        name: 'BAC Christmas #####',
        rarityScore: 98,
        rank: 3
      }
    ],
    page: 1,
    allAttributes: {},
    traitList: [],
    project: '',
    alt: 'BAC Christmas',
    policyId: '',
    imageUrl,
  }}
/>
