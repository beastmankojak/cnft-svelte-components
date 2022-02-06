<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import AssetPreview from './AssetPreview.svelte';
</script>

<Meta
  title="LookupApp/AssetPreview"
  component={AssetPreview}
  argTypes={{
    asset: { control: 'object' },
    alt: { control: 'text' }
  }}
/>

<Template let:args>
  <AssetPreview {...args} />
</Template>

<Story
  name="Derpbirds"
  args={{
    asset: {
      image: 'ipfs://QmVFidgyUqmqfsaXkAPRvp1a167ETMEeAnEFyDYbMzczKN',
      name: 'Perfect Common Derp Bird #01947'
    },
    alt: 'Derpbird'
  }}
/>

<Story
  name="Drapes"
  args={{
    asset: {
      image: 'ipfs://QmVooep1z5jjGoizD46W2cV7qGqUFrbgGwEZ9MY9TjbTKA',
      name: 'Derp Ape #00175'
    },
    alt: 'Drape',
    placeholder: 'https://ipfs.blockfrost.dev/ipfs/QmNWrVBGXteHD7MdFipH4Jpn95XayQ8i2fHt7u6SLcMqKs'
  }}
/>