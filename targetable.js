/*
Events.on(EventType.ClientLoadEvent, e=>{
    Vars.content.bullets().each(b => b instanceof BasicBulletType, b => b.frontRegion = Core.atlas.find("router"));
    });
주석은 삭제하고 복사할것*/

Vars.content.blocks().each(a => a instanceof BaseTurret, a => a.targetable = false)
Vars.content.blocks().each(a => a instanceof Wall, a => a.targetable = false)
