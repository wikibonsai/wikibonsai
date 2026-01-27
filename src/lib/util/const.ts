// urls

////
// local routes
export const ROUTE_ROOT          : string = '/';
export const ROUTE_CONSULT       : string = '/consult';
export const ROUTE_TREE          : string = '/tree';
////
// external urls
// apps
export const URL_GERMINATOR      : string = 'https://germ-inator.netlify.app/';
export const URL_TREE_TRAINER    : string = 'https://tree-trainer.netlify.app/';
export const URL_TENDR_CLI       : string = 'https://www.npmjs.com/package/tendr-cli/';
export const URL_VSCODE_PLUGIN   : string = 'https://marketplace.visualstudio.com/items?itemName=manunamz.vscode-tendr';
// docs
export const URL_DOCS_CITE       : string = 'https://github.com/wikibonsai/wikibonsai/tree/main/docs/CITE.md';
export const URL_DOCS_DESIGN     : string = 'https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md';
export const URL_DOCS_PHIL       : string = 'https://github.com/wikibonsai/wikibonsai/tree/main/docs/PHILOSOPHY.md';
export const URL_DOCS_PHIL_GYM   : string = 'https://github.com/wikibonsai/wikibonsai/blob/main/docs/PHILOSOPHY.md#a-jungle-gym-for-thought';
export const URL_DOCS_USE        : string = 'https://github.com/wikibonsai/wikibonsai/tree/main/docs/USE.md';
export const URL_DOCS_STD_BED    : string = 'https://github.com/wikibonsai/wikibonsai/tree/main/docs/DESIGN.md#drilling-down-to-standardization-bedrock';
////
// repos
// app
export const URL_REPO_WIKIBONSAI : string = 'https://github.com/wikibonsai/wikibonsai';
export const URL_REPO_GERMINATOR : string = 'https://github.com/wikibonsai/germinator';
export const URL_REPO_VSCODE     : string = 'https://github.com/wikibonsai/vscode-tendr';
export const URL_REPO_TENDR      : string = 'https://github.com/wikibonsai/tendr-cli';
// ssg
export const URL_REPO_ASTRO      : string = 'https://github.com/wikibonsai/astro-wikibonsai';
export const URL_REPO_ELEVENTY   : string = 'https://github.com/wikibonsai/eleventy-wikibonsai';
export const URL_REPO_JEKYLL     : string = 'https://github.com/wikibonsai/jekyll-wikibonsai';
// base
export const URL_REPO_CAML       : string = 'https://github.com/wikibonsai/caml-mkdn';
export const URL_REPO_SEMTREE    : string = 'https://github.com/wikibonsai/semtree';
export const URL_REPO_TREEHOUZE  : string = 'https://github.com/wikibonsai/treehouze';
export const URL_REPO_WIKIREFS   : string = 'https://github.com/wikibonsai/wikirefs';
// social
export const URL_SOCIAL_GITHUB   : string = 'https://github.com/wikibonsai/';
export const URL_SOCIAL_X        : string = 'https://x.com/wibomd/';
// ssg
export const URL_SSG_ASTRO       : string = 'https://astro-bloomz.netlify.app';
export const URL_SSG_ELEVENTY    : string = 'https://eleventy-bloomz.netlify.app';
export const URL_SSG_JEKYLL      : string = 'https://jekyll-bloomz.netlify.app';
export const URL_SSG_JEKYLL_PLUS : string = 'https://jekyll-garden.netlify.app';
// refs
export const URL_REF_MAPPLE      : string = 'https://github.com/MaggieAppleton/digital-gardeners';
export const URL_REF_ICONS8      : string = 'https://icons8.com';
export const URL_REF_MARKDOWN    : string = 'https://www.markdownguide.org/basic-syntax/';
export const URL_REF_MARKMAP     : string = 'https://markmap.js.org/';
export const URL_REF_OPENAI      : string = 'https://beta.openai.com/';
export const URL_REF_GPT3        : string = 'https://beta.openai.com/docs/introduction';
export const URL_REF_WAITBUTWHY  : string = 'https://waitbutwhy.com/2017/04/neuralink.html';
export const URL_REF_R_MUSK_TREE : string = 'https://www.reddit.com/r/IAmA/comments/2rgsan/comment/cnfre0a/?utm_source=share&utm_medium=web2x&context=3&rdt=50009';

// landing page markmap input

export const DEMO_MERMD          : string = `
graph TB
  S[Sentence]
  
  %% Clause Structure
  MC[Main Clause]
  
  %% Main Constituents
  NP1[Noun Phrase: Subject]
  VP[Verb Phrase: Predicate]
  
  S --> MC
  MC --> NP1
  MC --> VP
  
  %% Subject NP Structure
  NP1 --> |determiner| DET1[A]
  NP1 --> |head| N1[jungle gym]
  NP1 --> PP1[Preposition Phrase: Modifier]
  
  %% PP1 Structure
  PP1 --> |head| P1[for]
  PP1 --> NP2[Noun Phrase: Complement]
  
  %% NP2 Structure
  NP2 --> |head| N2[thought]
  
  %% VP Structure
  VP --> |head| V[ellipsis]
  VP --> PP2[Preposition Phrase: Complement]
  
  %% PP2 Structure
  PP2 --> |head| P2[with]
  PP2 --> NP3[Noun Phrase: Complement]
  
  %% NP3 Structure
  NP3 --> |determiner| DET2[an]
  NP3 --> |head| N3[API]
  NP3 --> PP3[Preposition Phrase: Modifier]
  
  %% PP3 Structure
  PP3 --> |head| P3[for]
  PP3 --> NP4[Noun Phrase: Complement]
  
  %% NP4 Structure
  NP4 --> |determiner| DET3[the]
  NP4 --> |head| N4[mind]
  
  %% Force leaf nodes to same level
  subgraph LEAVES [ ]
      direction LR
      DET1
      N1
      P1
      N2
      V
      P2
      DET2
      N3
      P3
      DET3
      N4
  end
  
  %% Styling
  linkStyle default interpolate basis stroke:#333,stroke-width:2px
  classDef transparent fill:none,stroke:none
  classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#333
  classDef phrase fill:#f9f9f9,stroke:#8C6239,stroke-width:2px,color:#333
  classDef word fill:white,stroke:#31AF31,stroke-width:2px,color:#333
  
  class S,MC,NP1,VP,PP1,NP2,PP2,NP3,PP3,NP4 phrase
  class DET1,N1,P1,N2,V,P2,DET2,N3,P3,DET3,N4 word
  class LEAVES transparent
`;
export const DEMO_MKDN           : string = `
- WikiBonsai
  - markdown
    - \`[[wikirefs]]\`
    - \`- semantic trees\`
    - \`:semantic::attributes\`
  - xr
    - graphs
      - tree
      - web
  - ai
    - concept
      - analysis
      - synthesis
`;
