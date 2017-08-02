cc.Class({
    extends: cc.Component,

    properties: {
        speed : 0,
    },

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.KEY.left:
                this._dir = -1;
                this._isMove = true;
                break;
            case cc.KEY.right:
                this._dir = 1;
                this._isMove = true;
        }
    },

    onKeyUp: function (event) {
       this._isMove = false;
   },

    update : function () {
        if (this._isMove) {
            if (this._dir > 0 && this.node.x < 480 - this.node.width /2) {
                this.node.x += this.speed;
            }else if(this._dir < 0 && this.node.x > -480 + this.node.width /2){
                this.node.x -= this.speed;
            }
        }
    }
});
