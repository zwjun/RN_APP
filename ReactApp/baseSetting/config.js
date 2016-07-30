/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

//import Dimensions from 'Dimensions';
import {Dimensions} from 'react-native';

/* Setup ==================================================================== */
exports.title = 'GlobalConfig';

/* Default Styles ==================================================================== */
// Window Dimensions
var window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

// Grid
exports.windowWidthHalf = window.width / 2;
exports.windowWidthYhird = window.width / 3;
exports.windowWidthYwoThirds = window.width * (2/3);
exports.windowWidthQuarter = window.width / 4;
exports.windowWidthThreeQuarters = window.width * (3/4);

// General Element Dimensions
var navbarHeight = 64;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 22;//最顶端的状态栏

// Fonts
exports.baseFont = 'Avenir';
exports.baseFontSize = 14;

// Colors
exports.primaryColor = "#4099FF";
exports.secondaryColor = "#FFE229";
exports.textColor = "#555";
exports.borderColor = "#E7E7E7";
