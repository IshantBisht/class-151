AFRAME.registerComponet("rotatebox",{
    schema:{
        moveX:{type:"number",default:1}
    },
    tick:function(){
        this.data.moveX=this.data.moveX+10;
        var pos=this.el.getAttribute("rotation")
        pos.x=this.data.moveX
        this.el.setAttribute("rotation",{x:pos.x,y:pos.y,z:pos.z})

    }
})