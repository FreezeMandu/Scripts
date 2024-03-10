//Vars.content.blocks().each(b => b instanceof Blocks, b => b.targetable = false)

//Vars.content.blocks().each(b => b instanceof Core.atlas.find("Wall"), b => b.targetable = false)

/*
Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof BasicBulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
*/

Events.on(EventType.ClientLoadEvent, e=>{
Vars.world.wall().each(b => b instanceof Core.atlas.find("Wall"), b => b.targetable = false)
});
