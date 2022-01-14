<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Modal from 'svelte-simple-modal';
  import AssetList from './AssetList.svelte';
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
