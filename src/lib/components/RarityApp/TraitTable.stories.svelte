<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import TraitTable from './TraitTable.svelte';
</script>

<Meta
  title="RarityApp/TraitTable"
  component={TraitTable}
  argTypes={{
    caption: { control: 'string' },
    attributes: { control: 'array' }
  }}
/>

<Template let:args>
  <TraitTable {...args} />
</Template>

<Story
  name="Derpling Aura"
  args={{
    caption: 'Aura',
    attributes: [
      { name: "Diety's Lightning", count: 74, pct: '0.99' },
      { name: 'PRED', count: 84, pct: '1.12' },
      { name: 'Derp Feathers', count: 149, pct: '1.99' },
      { name: 'Derpnado', count: 163, pct: '2.17' },
      { name: 'Diaper Flies', count: 169, pct: '2.25' },
      { name: 'Hotboxed', count: 217, pct: '2.89' },
      { name: 'Cyborg HUD', count: 225, pct: '3.00' },
      { name: 'Bubbles', count: 235, pct: '3.14' },
      { name: 'Bullets', count: 236, pct: '3.15' },
      { name: 'None', count: 5944, pct: '79.30' }
    ]
  }}
/>
