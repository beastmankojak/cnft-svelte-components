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
