/**
 * @fileoverview 文件上传队列列表显示和处理
 * @author 索丘 <zengyue.yezy@alibaba-inc.com>
 **/
define('bui/uploader/queue', ['bui/list'], function (require) {

  var SimpleList = require('bui/list/simplelist');

  var CLS_QUEUE = BUI.prefix + 'queue',
    CLS_QUEUE_ITEM = CLS_QUEUE + '-item';
  
  var Queue = SimpleList.extend({
    bindUI: function () {
      var _self = this,
        el = _self.get('el');
      el.delegate('.del', 'click', function (ev) {
        var itemContainer = $(ev.target).parent();
        _self.removeItem(_self.getItemByElement(itemContainer));
        console.log(_self.getItems());
      });
    },
    /**
     * 移除所有的状态
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    clearItemStatus: function(item){
      var _self = this,
        itemStatusFields = _self.get('itemStatusFields');
        
      BUI.each(itemStatusFields, function(v, k){
        _self.setItemStatus(item, k, false);
      });
    },
    progressItem: function (item) {
      Queue.superclass.updateItem.call(this, item);
    }
    //,
    /**
     * 设置item的状态
     * @return {[type]} [description]
     */
    // setItemStatus : function(item, status, value, element){
    //   var _self = this;
    //   _self.clearItemStatus(item);
    //   Queue.superclass.setItemStatus.call(_self, item, status, value, element);
    // }
  }, {
    ATTRS: {
      itemCls: {
        value: CLS_QUEUE
      },
      itemTpl: {
        value: '<li><span data-url="{url}">{name}</span><div class="progress"><div class="bar" style="width:{loadedPercent}%"></div></div><div class="del">删除</div></li>'
      },
      itemCls: {
        value: CLS_QUEUE_ITEM
      },
      itemStatusFields: {
        value: {
          waiting: 'waiting',
          start: 'start',
          progress: 'progress',
          success: 'success',
          cancel: 'cancel',
          error: 'error'
        }
      }
    }
  }, { 
    xclass: 'queue'
  });

  return Queue;

});