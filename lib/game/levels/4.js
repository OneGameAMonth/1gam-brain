ig.module( 'game.levels.4' )
.requires( 'impact.image','game.entities.levelchanger','game.entities.spikes','game.entities.ladder','game.entities.checkpoint','game.entities.cannon','game.entities.button','game.entities.handle','game.entities.alien1','game.entities.player','game.entities.coin','game.entities.gate','game.entities.gate2' )
.defines(function(){
Level4=/*JSON[*/{"entities":[{"type":"EntityLevelchanger","x":152,"y":8,"settings":{"size":{"x":8,"y":40},"level":2,"to_x":1,"to_y":106}},{"type":"EntitySpikes","x":106,"y":121},{"type":"EntitySpikes","x":18,"y":105},{"type":"EntitySpikes","x":26,"y":105},{"type":"EntitySpikes","x":42,"y":105},{"type":"EntitySpikes","x":114,"y":121},{"type":"EntitySpikes","x":34,"y":105},{"type":"EntityLadder","x":48,"y":48},{"type":"EntityLadder","x":96,"y":296},{"type":"EntityLadder","x":72,"y":312},{"type":"EntityLadder","x":48,"y":32},{"type":"EntityLadder","x":48,"y":56},{"type":"EntityLadder","x":104,"y":256},{"type":"EntityLadder","x":48,"y":72},{"type":"EntityLadder","x":104,"y":104},{"type":"EntityLadder","x":136,"y":88},{"type":"EntityLadder","x":24,"y":80},{"type":"EntityLadder","x":48,"y":24},{"type":"EntityLadder","x":144,"y":128},{"type":"EntityLadder","x":48,"y":40},{"type":"EntityLadder","x":96,"y":208},{"type":"EntityLadder","x":32,"y":280},{"type":"EntityLadder","x":48,"y":64},{"type":"EntityLadder","x":144,"y":72},{"type":"EntityLadder","x":40,"y":208},{"type":"EntityLadder","x":104,"y":272},{"type":"EntityCheckpoint","x":120,"y":80},{"type":"EntityCannon","x":144,"y":176,"settings":{"dir":-1}},{"type":"EntityCannon","x":144,"y":56,"settings":{"dir":-1}},{"type":"EntityCannon","x":40,"y":144,"settings":{"dir":1}},{"type":"EntityButton","x":96,"y":44,"settings":{"target":{"1":"gate2"}}},{"type":"EntityButton","x":120,"y":124,"settings":{"target":{"1":"gate2"}}},{"type":"EntityHandle","x":16,"y":56,"settings":{"target":{"1":"gate3"}}},{"type":"EntityHandle","x":32,"y":152,"settings":{"target":{"1":"gate1"}}},{"type":"EntityAlien1","x":128,"y":200},{"type":"EntityAlien1","x":16,"y":32},{"type":"EntityAlien1","x":80,"y":96},{"type":"EntityAlien1","x":144,"y":40},{"type":"EntityPlayer","x":145,"y":242,"settings":{"dir":-1}},{"type":"EntityCoin","x":96,"y":64,"settings":{"coin_id":23}},{"type":"EntityCoin","x":144,"y":192,"settings":{"coin_id":92}},{"type":"EntityCoin","x":72,"y":280,"settings":{"coin_id":91}},{"type":"EntityCoin","x":96,"y":88,"settings":{"coin_id":85}},{"type":"EntityCoin","x":72,"y":64,"settings":{"coin_id":22}},{"type":"EntityCoin","x":0,"y":280,"settings":{"coin_id":21}},{"type":"EntityCoin","x":72,"y":88,"settings":{"coin_id":84}},{"type":"EntityGate","x":133,"y":56,"settings":{"name":"gate1"}},{"type":"EntityGate","x":157,"y":240},{"type":"EntityGate2","x":104,"y":16,"settings":{"name":"gate3"}},{"type":"EntityGate2","x":72,"y":24,"settings":{"name":"gate2"}}],"layer":[{"name":"bg","width":10,"height":10,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles.png","repeat":true,"preRender":true,"distance":"2","tilesize":8,"foreground":false,"data":[[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17],[17,17,17,17,17,17,17,17,17,17]]},{"name":"level","width":20,"height":40,"linkWithCollision":false,"visible":1,"tilesetName":"media/tiles.png","repeat":false,"preRender":true,"distance":"1","tilesize":8,"foreground":false,"data":[[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,7,3,3],[3,13,2,6,13,2,3,13,2,3,13,21,2,3,10,2,2,2,2,2],[3,13,2,3,10,2,3,10,2,3,10,20,2,2,2,2,2,2,2,2],[3,13,2,2,2,2,2,2,2,2,2,20,2,2,2,2,2,2,2,2],[3,12,9,9,16,2,2,2,2,2,2,20,2,14,9,9,16,2,2,2],[3,4,4,4,13,2,2,2,14,9,9,19,9,4,4,4,12,9,9,9],[3,3,3,3,10,2,2,2,4,4,4,4,4,3,3,7,4,4,4,4],[3,3,13,2,2,2,2,2,2,2,2,21,2,2,2,2,2,2,2,3],[7,3,13,2,2,2,2,2,2,2,2,20,2,2,2,2,14,16,2,6],[3,3,13,2,2,14,9,16,2,14,16,20,14,16,2,2,4,13,2,3],[3,3,13,2,2,5,4,13,2,5,15,20,5,15,2,2,3,13,2,3],[3,3,13,2,2,2,3,13,2,2,2,20,2,2,2,14,3,13,14,7],[3,3,13,2,2,2,6,12,9,9,9,19,9,16,2,5,3,13,4,3],[3,3,12,9,9,9,3,4,4,4,4,4,4,13,2,2,3,13,2,6],[3,3,4,4,4,4,3,7,3,3,3,3,3,13,2,2,6,13,2,3],[3,7,3,3,3,3,3,3,3,3,3,3,7,12,9,9,3,13,14,3],[3,3,13,2,6,3,13,2,3,3,10,0,3,4,5,5,3,10,5,3],[3,3,10,2,3,3,10,2,0,2,2,0,0,0,2,2,2,2,2,3],[2,2,2,2,3,10,2,2,2,0,0,2,0,0,2,0,2,2,2,3],[2,2,2,2,2,2,2,0,2,0,2,2,14,16,2,2,2,2,2,6],[2,2,2,2,2,0,0,2,14,16,2,2,5,15,2,2,14,16,2,3],[2,0,2,2,2,2,2,2,5,15,2,0,0,2,2,2,5,15,2,3],[0,0,2,2,0,14,16,2,0,0,2,2,0,2,2,2,2,2,2,3],[0,0,0,2,2,5,15,2,2,14,16,2,2,14,16,2,0,2,2,3],[0,2,0,2,2,2,2,0,2,5,15,0,2,5,15,2,2,2,2,3],[0,0,0,2,2,2,0,0,0,2,0,0,2,2,2,14,9,9,9,3],[0,0,0,0,2,0,0,2,0,0,0,2,2,2,2,4,4,4,4,3],[0,0,0,0,0,0,0,0,0,2,0,2,2,2,2,2,2,21,2,6],[0,0,0,0,0,0,0,0,0,0,2,2,0,2,2,2,2,20,2,3],[0,0,0,0,0,0,0,0,2,0,2,0,2,2,2,2,2,20,2,3],[0,0,0,0,0,2,0,0,0,2,2,14,16,2,2,2,2,20,2,2],[0,0,0,0,0,0,0,2,2,2,2,5,15,2,14,9,9,19,9,9],[0,0,0,0,0,0,0,2,0,2,2,2,2,2,4,4,4,4,4,4],[0,0,0,0,0,0,0,2,2,2,2,2,2,2,6,3,3,3,7,3],[0,0,0,0,2,0,0,0,2,2,0,2,2,2,3,3,3,3,3,3],[0,0,2,0,0,2,0,0,2,2,2,2,2,2,3,10,2,6,3,3],[14,16,2,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,3,3],[5,15,0,0,0,0,0,0,0,2,2,0,2,2,2,0,2,3,3,3],[0,0,0,0,0,0,0,0,0,2,0,0,2,0,2,2,2,6,3,3],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,3,7]]},{"name":"collision","width":20,"height":40,"linkWithCollision":false,"visible":0,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":8,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0],[1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,1,0,0,0,12,1,0,0,12,0,0,12,0,0,0,1,0,0,1],[1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,12,1,0,1,1],[1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1],[1,1,0,0,1,1,0,0,1,1,0,0,1,1,12,12,1,0,12,1],[1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,12,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,12,0,0,0,12,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]]}]}/*]JSON*/;
Level4Resources=[new ig.Image('media/tiles.png'), new ig.Image('media/tiles.png')];
});