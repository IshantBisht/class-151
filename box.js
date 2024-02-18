AFRAME.registerComponent("box",{
    schema:{
        moveX:{type:"number",default:0.5}
    },
    tick:function(){
    this.data.moveX=this.data.moveX+0.01
    var pos=this.el.getAttribute("position")
    var pos1=this.el.getAttribute("rotation")
    pos.x=this.data.moveX
    console.log(pos)
    this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
