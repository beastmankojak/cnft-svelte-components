<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import App from './App.svelte';

  const imageUrl = (asset) => `https://beastmankojak.nyc3.cdn.digitaloceanspaces.com/bac/bacChristmas/ipfs/${asset.image.replace('ipfs://', '')}/200.png`
</script>

<Meta
  title="LookupApp/LookupApp"
  component={App}
  argTypes={{
    traitList: { control: 'array' },
    project: { control: 'text' },
    alt: { control: 'text' },
    baseUrl: { control: 'text' },
    assetTag: { control: 'text' },
    title: { control: 'text' },
    totalCount: { control: 'number' },
    policyId: { control: 'text' },
    verified: { control: 'boolean' },
    disclaimer: { control: 'text' },
    rarityUrl: { control: 'text' }
  }}
/>

<Template let:args>
  <App {...args} />
</Template>

<Story
  name="BAC Christmas"
  args={{
    traitList: ['hat', 'body', 'eyes', 'face', 'clothes', 'texture', 'accessory', 'background'],
    project: 'BabyAlienChristmas',
    alt: 'BAC Christmas',
    baseUrl: 'http://localhost:3000/bac-christmas',
    assetTag: 'bacChristmas',
    title: 'BAC Christmas Lookup',
    totalCount: 300,
    policyId: '2f641f799b2a8fde7a4d3659765f5bbee2f853db32b86668917e3c77',
    imageUrl
  }}
/>

<Story
  name="Muggos"
  args={{
    traitList: [
      'Muggo Back',
      'Muggo Head',
      'Muggo Rank',
      'Muggo Color',
      'Muggo Accessory',
      'Muggo Background',
      'Muggo Foreground',
      'Muggo Gameplay Proficiency',
      'Sidekick',
      'Sidekick Gem',
      'Sidekick Ears',
      'Sidekick Horn',
      'Sidekick Nose',
      'Sidekick Teeth',
      'Sidekick Tummy',
      'Sidekick Wings'
    ],
    project: 'Muggos',
    alt: 'Muggos',
    baseUrl: 'http://localhost:3000/muggos',
    assetTag: 'muggo',
    title: 'Muggo Lookup',
    totalCount: 1200,
    policyId: 'c263bfde10889d62d63b158bed9906795226c044138ee490f1b785d4',
    verified: true,
    assetTransform: (n) => n.replace(' #', ''),
    disclaimer:
      'Rarity shown here is not final.  The Muggos are currently in the early stages and rarity tables will not be final until all Muggos are minted!  This is for entertainment purposes only!',
    rarityUrl: '/rarity'
  }}
/>

<Story
  name="Horses"
  args={{
    traitList: ['Back Left Leg', 'Back Right Leg', 'Body', 'Color', 'Front Left Leg', 'Front Right Leg', 'Gender', 'Head'],
    numericTraitList: ['Age', 'acceleration', 'agility', 'endurance', 'speed', 'stamina', 'total'],
    project: 'EquineNFT Pioneer Horses',
    alt: 'Equine Horse',
    baseUrl: 'http://localhost:3000/horses',
    assetTag: 'horses',
    title: 'Equine horses lookup',
    totalCount: 14125,
    policyId: '30ed3d95db1d6bb2c12fc5228a2986eab4553f192a12a4607780e15b',
    verified: true
  }}
/>
