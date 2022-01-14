<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import AssetFilter from './AssetFilter.svelte';
</script>

<Meta
  title="LookupApp/AssetFilter"
  component={AssetFilter}
  argTypes={{
    baseUrl: { control: 'text' },
    totalCount: { control: 'number' }
  }}
/>

<Template let:args>
  <AssetFilter {...args} />
</Template>

<Story
  name="BAC Christmas"
  args={{
    baseUrl: 'http://localhost:3000/bac-christmas',
    totalCount: 300
  }}
/>
