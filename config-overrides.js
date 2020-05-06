/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 15:29:07
 */
/* config-overrides.js */
/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);
   config = rewireLess.withLoaderOptions({
     modifyVars: { "@primary-color": "#999" },
   })(config, env);
   
    return config;
};