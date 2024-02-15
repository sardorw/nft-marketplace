import Description from './description/description'
import ArtistNFTs from './artist-nfts/artist-nfts'
import styles from './nft.module.scss'

function NFT() {
  return (
    <main>
      <img src="/images/nft.png" alt="Image" className={styles.thumbnail} />
      <Description />
      <ArtistNFTs />
    </main>
  )
}

export default NFT
