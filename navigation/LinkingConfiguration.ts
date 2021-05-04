/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },

          Home:{
            screens:{
              Home:'Home'
            },
          },

          Carrinho:{
            screens:{
              Carrinho:'Carrinho'
            },
          },

          Cadastro:{
            screens:{
              Cadastro:'Cadastro'
            },
          },

          Perfil:{
            screens:{
              Perfil:'Perfil'
            },
          },

          Login:{
            screens:{
              Login:'login'
            },
          },


        },
      },
      NotFound: '*',
    },
  },
};
