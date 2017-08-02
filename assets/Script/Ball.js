cc.Class({
    extends: cc.Component,

    properties: {
       speedX : 0,
       speedY : 0
    },

    // use this for initialization
    onLoad: function () {
        this._isCollision = false;
        cc.director.getCollisionManager().enabled = true;
    },

    update: function (dt) {
        if (!this._isCollision) {
            this.node.x += this.speedX;
            this.node.y += this.speedY;
        }
    },

    onCollisionEnter: function (other, self) {
        console.log('on collision enter');
        this._isCollision = true;
        switch (other.tag) {
            case 1:
                this.speedY = this.speedY * -1;
                break;
            case 2:
                this.speedX = this.speedX * -1;
        }
        console.log(this.speedX,this.speedY);
    },

    onCollisionStay: function (other, self) {
        this.node.x += this.speedX;
        this.node.y += this.speedY;
    },

    onCollisionExit: function (other, self) {
       this._isCollision = false;
    }

});
