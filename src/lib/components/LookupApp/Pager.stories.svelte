<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Pager from './Pager.svelte';
</script>

<Meta
  title="LookupApp/Pager"
  component={Pager}
  argTypes={{
    page: { control: 'number' },
    length: { control: 'number' },
    onChange: { action: 'onChange' }
  }}
/>

<Template let:args>
  <Pager {...args} on:change={args.onChange} />
</Template>

<Story
  name="One page"
  args={{
    page: 1,
    length: 10
  }}
/>

<Story
  name="Two pages"
  args={{
    page: 1,
    length: 75
  }}
/>
