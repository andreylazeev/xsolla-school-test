import { createGlobalStyle } from 'styled-components'

import AvenirMediumTTF from './avenirnextcyr-medium.ttf'
import AvenirMediumEot from './avenirnextcyr-medium.eot'
import AvenirMediumWoff from './avenirnextcyr-medium.woff'
import AvenirMediumWoff2 from './avenirnextcyr-medium.woff2'

import AvenirBoldTTF from './avenirnextcyr-bold.ttf'
import AvenirBoldEot from './avenirnextcyr-bold.eot'
import AvenirBoldWoff from './avenirnextcyr-bold.woff'
import AvenirBoldWoff2 from './avenirnextcyr-bold.woff2'

import AvenirBlackTTF from './avenirnextcyr-black.ttf'
import AvenirBlackEot from './avenirnextcyr-black.eot'
import AvenirBlackWoff from './avenirnextcyr-black.woff'
import AvenirBlackWoff2 from './avenirnextcyr-black.woff2'

import AvenirRegularTTF from './avenirnextcyr-regular.ttf'
import AvenirRegularEot from './avenirnextcyr-regular.eot'
import AvenirRegularWoff from './avenirnextcyr-regular.woff'
import AvenirRegularWoff2 from './avenirnextcyr-regular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Avenir Medium';
        src: local('Avenir Medium'),
          url(${AvenirMediumTTF}) format('ttf'),
          url(${AvenirMediumEot}) format('eot'),
          url(${AvenirMediumWoff}) format('woff'),
          url(${AvenirMediumWoff2}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Avenir Bold';
        src: local('Avenir Bold'),
          url(${AvenirBoldTTF}) format('ttf'),
          url(${AvenirBoldEot}) format('eot'),
          url(${AvenirBoldWoff}) format('woff'),
          url(${AvenirBoldWoff2}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Avenir Black';
        src: local('Avenir Black'),
          url(${AvenirBlackTTF}) format('ttf'),
          url(${AvenirBlackEot}) format('eot'),
          url(${AvenirBlackWoff}) format('woff'),
          url(${AvenirBlackWoff2}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'Avenir Regular';
        src: local('Avenir Regular'),
          url(${AvenirRegularTTF}) format('ttf'),
          url(${AvenirRegularEot}) format('eot'),
          url(${AvenirRegularWoff}) format('woff'),
          url(${AvenirRegularWoff2}) format('woff2');
        font-style: normal;
    }

    body {
      font-family: 'Avenir Regular';
      background: #F0F3FF;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`
