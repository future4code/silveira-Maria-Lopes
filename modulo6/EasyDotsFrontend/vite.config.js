import path from 'path';



import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';



// https://vitejs.dev/config/

export default defineConfig({

  resolve: {

    alias: {

      '@components': path.resolve('.', './src', 'components'),

    },

  },

  plugins: [react()],

});

