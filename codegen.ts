import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
  documents: 'src/gql/queries/*.ts',
  generates: {
    'src/gql/types/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
