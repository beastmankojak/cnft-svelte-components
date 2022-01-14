const ipfs = (asset: { image: string }) => asset.image.replace('ipfs://', '');
export default ipfs;
