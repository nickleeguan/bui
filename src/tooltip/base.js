/**
 * @fileOverview 提示的入口文件
 * @ignore
 */

define('bui/tooltip',function (require) {
  var BUI = require('bui/common'),
    Tooltip = BUI.namespace('Tooltip'),
    Tip = require('bui/tooltip/tip'),
    Tips = require('bui/tooltip/tips');

  BUI.mix(Tooltip,{
    Tip : Tip,
    Tips : Tips
  });
  return Tooltip;
});