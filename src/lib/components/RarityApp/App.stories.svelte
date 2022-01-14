<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import App from './App.svelte';
</script>

<Meta
  title="RarityApp/App"
  component={App}
  argTypes={{
    baseUrl: { control: 'string' },
    title: { control: 'string' },
    description: { control: 'string' },
    traitList: { control: 'array' },
    totalCount: { control: 'number' }
  }}
/>

<Template let:args>
  <App {...args} />
</Template>

<Story
  name="BAC Christmas"
  args={{
    baseUrl: 'http://localhost:3000/bac-christmas',
    title: 'Unofficial BAC Christmas rarity chart',
    description: 'This is the unofficial, community-driven BAC Christmas rarity chart.',
    traitList: ['hat', 'body', 'eyes', 'face', 'clothes', 'texture', 'accessory', 'background'],
    totalCount: 300
  }}
/>
