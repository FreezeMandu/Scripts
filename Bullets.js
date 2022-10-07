nBullet = new BasicBulletType(4, 30);

backSprite = Core.atlas.find("bullet-back");
nBullet.frontRegion = Core.atlas.find("bullet");
nBullet.backRegion = Core.atlas.find(backSprite == null ? (sprite + "-back") : backSprite);

Blocks.duo.ammo(Items.lead, nBullet);
nBullet.lifetime = 70;
nBullet.pierce = true
nBullet.pierceCap = 5

//듀오 성능
Blocks.duo.reload = 10

//유닛 무기
uBullet = new BasicBulletType(4, 30);

backSprite = Core.atlas.find("bullet-back");
uBullet.frontRegion = Core.atlas.find("bullet");
uBullet.backRegion = Core.atlas.find(backSprite == null ? (sprite + "-back") : backSprite);

UnitTypes.alpha.weapons
