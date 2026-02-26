export interface Project {
  id: string;
  name: string;
  description: string;
  problemStatement: string;
  projectSolution: string;
  techStack: string[];
  grantsReceived: {
    amount: string;
    partners: string[];
  };
  links: {
    website?: string;
    github?: string;
    telegram?: string;
    twitter?: string;
    youtube?: string;
    pitchDeck?: string;
    techStackDetails?: string;
    openhouse2024?: string;
  };
  team?: string[];
  color: string;
  shortName: string;
}

export const projects: Project[] = [
  {
    id: 'tempwallets',
    name: 'TempWallets',
    description: 'Temporary wallet solution for secure crypto transactions and disposable addresses',
    problemStatement: 'Users need a secure, temporary way to interact with dApps without exposing their main wallets to potential risks or tracking.',
    projectSolution: 'A platform that generates disposable, temporary crypto wallets for single-use or short-term transactions, enhancing privacy and security.',
    techStack: ['React', 'Node.js', 'Ethers.js', 'Solidity'],
    grantsReceived: {
      amount: '$10,000',
      partners: ['iEXEC', 'Yellow']
    },
    links: {
      github: 'https://github.com/MXmaster2s/Tempwallets.com',
      telegram: 'https://t.me/tempwallets',
      twitter: 'https://x.com/tempwallets',
      pitchDeck: 'bit.ly/pitchdeck-tempwallets'
    },
    color: 'from-orange-500 to-red-500',
    shortName: 'TW'
  },
  {
    id: 'walletx',
    name: 'WalletX',
    description: 'Next-generation wallet infrastructure with gasless transactions and multi-chain support',
    problemStatement: 'High gas fees and complex onboarding processes deter new users from adopting Web3 technologies.',
    projectSolution: 'A seamless wallet infrastructure that abstracts away gas fees and network switching, providing a Web2-like experience for Web3 applications.',
    techStack: ['React Native', 'TypeScript', 'Web3.js', 'Account Abstraction (ERC-4337)'],
    grantsReceived: {
      amount: '$20,000',
      partners: ['iEXEC', 'Arbitrum', 'AppLayer', '0xGasless']
    },
    links: {
      github: 'https://github.com/getwalletx',
      telegram: 'https://t.me/getwalletx',
      twitter: 'https://x.com/getwalletx',
      youtube: 'https://www.youtube.com/@getwalletx',
      pitchDeck: 'https://www.canva.com/design/DAGR2KEIrRA/b589HAO5kv08xrk4vds3Vw/edit'
    },
    color: 'from-blue-500 to-purple-500',
    shortName: 'WX'
  },
  {
    id: 'openhouse',
    name: 'OpenHouse',
    description: 'Decentralized event management and community gathering platform for Web3 natives',
    problemStatement: 'Web3 communities lack dedicated, decentralized tools for organizing events, managing ticketing, and fostering in-person connections.',
    projectSolution: 'A comprehensive platform for creating, managing, and monetizing Web3 events with token-gated access and verifiable attendance.',
    techStack: ['Next.js', 'Tailwind CSS', 'Polygon', 'IPFS'],
    grantsReceived: {
      amount: 'N/A',
      partners: []
    },
    links: {
      website: 'www.openhouse.ink',
      youtube: 'https://www.youtube.com/watch?v=u8qElwW8I7U&list=PLwaTleaX31WnjblcJtWbQ4JBCqfGQ1quU&index=7',
      openhouse2024: 'https://www.youtube.com/watch?v=3d-Dwkbf7ZI&list=PLwaTleaX31WnjblcJtWbQ4JBCqfGQ1quU'
    },
    color: 'from-pink-500 to-rose-500',
    shortName: 'OH'
  },
  {
    id: 'esgai',
    name: 'ESGai',
    description: 'AI-powered ESG compliance and sustainability reporting platform for enterprises',
    problemStatement: 'Companies struggle to accurately track, measure, and report their Environmental, Social, and Governance (ESG) metrics due to fragmented data.',
    projectSolution: 'An AI-driven platform that automates data collection, analysis, and reporting for ESG compliance, helping enterprises meet regulatory standards.',
    techStack: ['Python', 'TensorFlow', 'React', 'Azure', 'PostgreSQL'],
    grantsReceived: {
      amount: '$5,000',
      partners: ['Microsoft Azure']
    },
    links: {
      website: 'www.esgai.space',
      github: 'https://github.com/AdityasArsenal/deploy-dana',
      pitchDeck: 'https://bit.ly/pitch-deck-esgai',
      techStackDetails: 'https://docs.google.com/document/d/14EzWVCIucXFCYU0Oc3thTGfzUUX4379urMLQlhrc8hY/edit?tab=t.0'
    },
    color: 'from-green-500 to-emerald-500',
    shortName: 'ES'
  },
  {
    id: 'studio',
    name: 'YouTube Studio',
    description: 'Content creation infrastructure',
    problemStatement: 'Creators lack access to professional-grade recording equipment and dedicated spaces for high-quality content production.',
    projectSolution: 'A fully equipped recording studio with teleprompters, professional lighting, greenscreens, and high-end audio gear available to residents.',
    techStack: ['OBS Studio', 'Adobe Premiere Pro', 'DaVinci Resolve'],
    grantsReceived: {
      amount: 'N/A',
      partners: []
    },
    links: {},
    color: 'from-red-500 to-pink-500',
    shortName: 'YS'
  },
  {
    id: 'bulkweb3merch',
    name: 'BulkWeb3Merch',
    description: 'Merchandise management system',
    problemStatement: 'Web3 communities and DAOs face logistical challenges when designing, producing, and distributing branded merchandise globally.',
    projectSolution: 'An end-to-end merchandise management system that handles design, printing (including DTG), and fulfillment for Web3 projects.',
    techStack: ['Shopify API', 'Node.js', 'React', 'Printful Integration'],
    grantsReceived: {
      amount: 'N/A',
      partners: []
    },
    links: {},
    color: 'from-purple-500 to-indigo-500',
    shortName: 'BM'
  },
  {
    id: 'web3codesimulator',
    name: 'Web3CodeSimulator',
    description: 'Smart contract testing environment',
    problemStatement: 'Developers need safe, isolated environments to test complex smart contract interactions before deploying to testnets or mainnets.',
    projectSolution: 'A robust, browser-based simulation environment for writing, testing, and debugging smart contracts with visual execution flows.',
    techStack: ['Hardhat', 'React', 'Monaco Editor', 'Ethers.js'],
    grantsReceived: {
      amount: 'N/A',
      partners: []
    },
    links: {},
    color: 'from-cyan-500 to-blue-500',
    shortName: 'WS'
  }
];
