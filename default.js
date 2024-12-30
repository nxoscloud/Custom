const addOutput = require('../NextLanguage-Source/modules/functions/addOutput.js');
const debugOutput = require('../NextLanguage-Source/modules/functions/debugOutput.js');
    
const { getVariables, setVariable } = require('../NextLanguage-Source/modules/functions/temp/Variables.js');
const { getFunctions, setFunction } = require('../NextLanguage-Source/modules/functions/temp/Functions.js');

const createPreload = require("../NextLanguage-Source/patches/v1.9/modules/nodejs/pre/createPreload.js");
const runPreload = require("../NextLanguage-Source/patches/v1.9/modules/nodejs/pre/runPreload.js");

const createPostload = require("../NextLanguage-Source/patches/v1.9/modules/nodejs/post/createPostload.js");
const runPostload = require("../NextLanguage-Source/patches/v1.9/modules/nodejs/post/runPostload.js");

addOutput("Custom package is running.");