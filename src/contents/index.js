import {
  BasketballIcon,
  CameraIcon,
  MagicWandIcon,
  MusicNotesIcon,
  PaintBrushIcon,
  PlanetIcon,
  SwatchesIcon,
  VideoCameraIcon,
} from '@/icons'

export const collectionData = [
  {
    id: 1,
    imgs: [
      '/images/nfts/psycho-dog.png',
      '/images/nfts/cat-from-future.png',
      '/images/nfts/designer-bear.png',
    ],
    title: 'DSGN Animals',
    creator: {
      name: 'MrFox',
      avatar: '/images/creators/mr-fox.png',
    },
  },
  {
    id: 2,
    imgs: [
      '/images/nfts/magic-mushroom-0324.png',
      '/images/nfts/magic-mushroom-0325.png',
      '/images/nfts/magic-mushroom-0326.png',
    ],
    title: 'Magic Mushrooms',
    creator: {
      name: 'Shroomie',
      avatar: '/images/creators/shroomie.png',
    },
  },
  {
    id: 3,
    imgs: [
      '/images/nfts/dancing-robot-0512.png',
      '/images/nfts/dancing-robot-0321.png',
      '/images/nfts/dancing-robot-0356.png',
    ],
    title: 'Disco Machines',
    creator: {
      name: 'BeKind2Robots',
      avatar: '/images/creators/bekind2robots.png',
    },
  },
]

export const creatorsData = [
  {
    id: 1,
    img: '/images/creators/keepitreal.png',
    name: 'Keepitreal',
    totalSales: '34.53 ETH',
  },
  {
    id: 2,
    img: '/images/creators/digilab.png',
    name: 'DigiLab',
    totalSales: '34.53 ETH',
  },
  {
    id: 3,
    img: '/images/creators/gravityone.png',
    name: 'GravityOne',
    totalSales: '34.53 ETH',
  },
  {
    id: 4,
    img: '/images/creators/juanie.png',
    name: 'Juanie',
    totalSales: '34.53 ETH',
  },
  {
    id: 5,
    img: '/images/creators/bluewhale.png',
    name: 'BlueWhale',
    totalSales: '34.53 ETH',
  },
  {
    id: 6,
    img: '/images/creators/mr-fox.png',
    name: 'Mr Fox',
    totalSales: '34.53 ETH',
  },
  {
    id: 7,
    img: '/images/creators/shroomie.png',
    name: 'Shroomie',
    totalSales: '34.53 ETH',
  },
  {
    id: 8,
    img: '/images/creators/robotica.png',
    name: 'Robotica',
    totalSales: '34.53 ETH',
  },
  {
    id: 9,
    img: '/images/creators/rustyrobot.png',
    name: 'RustyRobot',
    totalSales: '34.53 ETH',
  },
  {
    id: 10,
    img: '/images/creators/animakid.png',
    name: 'Animakid',
    totalSales: '34.53 ETH',
  },
  {
    id: 11,
    img: '/images/creators/dotgu.png',
    name: 'Dotgu',
    totalSales: '34.53 ETH',
  },
  {
    id: 12,
    img: '/images/creators/ghiblier.png',
    name: 'Ghiblier',
    totalSales: '34.53 ETH',
  },
]

export const categoriesData = [
  {
    id: 1,
    img: '/images/categories/art.png',
    icon: PaintBrushIcon,
    title: 'Art',
  },
  {
    id: 2,
    img: '/images/categories/collectibles.png',
    icon: SwatchesIcon,
    title: 'Collectibles',
  },
  {
    id: 3,
    img: '/images/categories/music.png',
    icon: MusicNotesIcon,
    title: 'Music',
  },
  {
    id: 4,
    img: '/images/categories/photography.png',
    icon: CameraIcon,
    title: 'Photography',
  },
  {
    id: 5,
    img: '/images/categories/video.png',
    icon: VideoCameraIcon,
    title: 'Video',
  },
  {
    id: 6,
    img: '/images/categories/utility.png',
    icon: MagicWandIcon,
    title: 'Utility',
  },
  {
    id: 7,
    img: '/images/categories/sport.png',
    icon: BasketballIcon,
    title: 'Sport',
  },
  {
    id: 8,
    img: '/images/categories/virtual-worlds.png',
    icon: PlanetIcon,
    title: 'Virtual Worlds',
  },
]

export const moreNFTsData = [
  {
    id: 1,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'MoonDancer',
      avatar: '/images/creators/moondancer.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 2,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'NebulaKid',
      avatar: '/images/creators/nebulakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 3,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Spaceone',
      avatar: '/images/creators/spaceone.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
]

export const howItWorksData = [
  {
    id: 1,
    img: '/images/how-it-works/setup-your-wallet.png',
    title: 'Setup Your wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  },
  {
    id: 2,
    img: '/images/how-it-works/create-collection.png',
    title: 'Create Collection',
    description:
      'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    id: 3,
    img: '/images/how-it-works/start-earning.png',
    title: 'Start Earning',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  },
]

export const walletsData = [
  {
    id: 1,
    img: '/images/wallets/metamask.png',
    name: 'Metamask',
  },
  {
    id: 2,
    img: '/images/wallets/wallet-connect.png',
    name: 'Wallet Connect',
  },
  {
    id: 3,
    img: '/images/wallets/coinbase.png',
    name: 'Coinbase',
  },
]

export const artistCardsData = [
  {
    id: 1,
    img: '/images/nfts/distant-galaxy.png',
    name: 'Distant Galaxy',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 2,
    img: '/images/nfts/life-on-edena.png',
    name: 'Life On Edena',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 3,
    img: '/images/nfts/astrofiction.png',
    name: 'AstroFiction',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 4,
    img: '/images/nfts/crypto-city.png',
    name: 'CryptoCity',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 5,
    img: '/images/nfts/colorfuldog-0524.png',
    name: 'ColorfulDog 0524',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 6,
    img: '/images/nfts/space-tales.png',
    name: 'Space Tales',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 7,
    img: '/images/nfts/cherry-blossom-girl-037.png',
    name: 'Cherry Blossom Girl 037',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 8,
    img: '/images/nfts/dancing-robot-0356.png',
    name: 'Dancing Robots 0987',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
  {
    id: 9,
    img: '/images/nfts/icecream-ape.png',
    name: 'IceCream Ape',
    creator: {
      name: 'Animakid',
      avatar: '/images/creators/animakid.png',
    },
    price: '1.63 ETH',
    bid: '0.33 wETH',
  },
]

export const topCreatorsData = [
  {
    id: 1,
    avatar: '/images/creators/keepitreal.png',
    name: 'Marcus Saris',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 2,
    avatar: '/images/creators/digilab.png',
    name: 'Ruben Carder',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 3,
    avatar: '/images/creators/gravityone.png',
    name: 'Alfredo Septimus',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 4,
    avatar: '/images/creators/juanie.png',
    name: 'Davis Franci',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 5,
    avatar: '/images/creators/bluewhale.png',
    name: 'Livia Rosser',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 6,
    avatar: '/images/creators/mr-fox.png',
    name: 'Kianna Donin',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 7,
    avatar: '/images/creators/shroomie.png',
    name: 'Phillip Lipshutz',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 8,
    avatar: '/images/creators/robotica.png',
    name: 'Maria Rosser',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 9,
    avatar: '/images/creators/rustyrobot.png',
    name: 'Kianna Stanton',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 10,
    avatar: '/images/creators/nebulakid.png',
    name: 'Angel Lubin',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 11,
    avatar: '/images/creators/robotica.png',
    name: 'Allison Torff',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 12,
    avatar: '/images/creators/bekind2robots.png',
    name: 'Davis Workman',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 13,
    avatar: '/images/creators/bluewhale.png',
    name: 'Lindsey Lipshutz',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 14,
    avatar: '/images/creators/animakid.png',
    name: 'Randy Carder',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 15,
    avatar: '/images/creators/dotgu.png',
    name: 'Lydia Culhane',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 16,
    avatar: '/images/creators/juanie.png',
    name: 'Rayna Bator',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 17,
    avatar: '/images/creators/ghiblier.png',
    name: 'Jocelyn Westervelt',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 18,
    avatar: '/images/creators/keepitreal.png',
    name: 'Marilyn Torff',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 19,
    avatar: '/images/creators/nebulakid.png',
    name: 'Skylar Levin',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
  {
    id: 20,
    avatar: '/images/creators/gravityone.png',
    name: 'Terry Dorwart',
    change: '+1.41%',
    sold: '602',
    volume: '12.4 ETH',
  },
]
