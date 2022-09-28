<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import AssetDetails from './AssetDetails.svelte';

  const imageUrl = (asset) => `https://beastmankojak.nyc3.cdn.digitaloceanspaces.com/bac/bacChristmas/ipfs/${asset.image.replace('ipfs://', '')}/200.png`
</script>

<Meta
  title="LookupApp/AssetDetails"
  component={AssetDetails}
  argTypes={{
    asset: { control: 'object' },
    alt: { control: 'text' },
    allAttributes: { control: 'array' },
    traitList: { control: 'array' },
    project: { control: 'text' },
    policyId: { control: 'text' }
  }}
/>

<Template let:args>
  <AssetDetails {...args} />
</Template>

<Story
  name="Derpbirds"
  args={{
    asset: {
      image: 'ipfs://QmVFidgyUqmqfsaXkAPRvp1a167ETMEeAnEFyDYbMzczKN',
      name: 'Perfect Common Derp Bird #01947',
      rarityScore: 100,
      rank: 1
    },
    alt: 'Derpbird',
    allAttributes: {},
    traitList: [],
    project: '',
    policyId: ''
  }}
/>

<Story
  name="BAC Christmas"
  args={{
    asset: {
      image: 'ipfs://Qma4Bm4jxBL1Cyn3ATyNVLGfkrRET1qszsik4Qm3cadYKN',
      name: 'BAC Christmas ####',
      rarityScore: 100,
      rank: 1
    },
    alt: 'BAC Christmas',
    allAttributes: {},
    traitList: [],
    project: '',
    policyId: '',
    imageUrl
  }}
/>