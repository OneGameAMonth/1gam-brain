ig.module( 'game.levels.11' )
.requires( 'impact.image','game.entities.levelchanger','game.entities.player','game.entities.coin' )
.defines(function(){
Level11=/*JSON[*/{"entities":[{"type":"EntityLevelchanger","x":0,"y":16,"settings":{"size":{"x":8,"y":48},"level":1,"to_x":137,"to_y":26}},{"type":"EntityPlayer","x":9,"y":50},{"type":"EntityCoin","x":48,"y":40,"settings":{"coin_id":94}},{"type":"EntityCoin","x":56,"y":32,"settings":{"coin_id":95}},{"type":"EntityCoin","x":104,"y":32,"settings":{"coin_id":99}},{"type":"EntityCoin","x":80,"y":40,"settings":{"coin_id":97}},{"type":"EntityCoin","x":72,"y":32,"settings":{"coin_id":96}},{"type":"EntityCoin","x":112,"y":40,"settings":{"coin_id":100}},{"type":"EntityCoin","x":88,"y":32,"settings":{"coin_id":98}}],"layer":[{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles.png","repeat":true,"preRender":true,"distance":"2","tilesize":8,"foreground":false,"data":[[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17]]},{"name":"level","width":20,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles.png","repeat":false,"preRender":true,"distance":"1","tilesize":8,"foreground":false,"data":[[3,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3,3,3,3,3],[3,3,10,2,6,3,10,2,3,3,10,2,3,3,10,2,3,3,3,3],[2,2,2,2,21,2,2,2,21,2,2,2,21,2,2,2,21,2,3,3],[2,2,0,2,20,2,0,2,20,2,0,2,20,2,0,2,20,2,3,3],[2,2,0,2,20,2,0,2,20,2,0,2,20,2,0,2,20,2,3,3],[2,2,2,2,20,2,2,2,20,2,2,2,20,2,2,2,20,2,3,3],[2,2,2,2,20,2,2,2,20,2,2,2,20,2,2,2,20,2,6,3],[9,9,9,9,19,9,9,9,19,9,9,9,19,9,9,9,19,9,3,3],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,3],[6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,3,3]]},{"name":"collision","width":20,"height":10,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":8,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
Level11Resources=[new ig.Image('media/tiles.png'), new ig.Image('media/tiles.png')];
});