<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Totals from './Totals.svelte';
</script>

<Meta
  title="RarityApp/Totals"
  component={Totals}
  argTypes={{
    totals: { control: 'object' },
    totalCount: { control: 'number' }
  }}
/>

<Template let:args>
  <Totals {...args} />
</Template>

<Story
  name="Example1"
  args={{
    totals: { totalCount: 333, lastUpdate: '2021-12-31T06:13:52.704Z' },
    totalCount: 1000
  }}
/>
