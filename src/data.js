player={playtime:0,
	lastTick:0,
	rank:1,
	currentStone:{hp:new Decimal(10),maxHp:new Decimal(10),ore:'Stone'},
	totalDamage:new Decimal(0),
	stone:new Decimal(0),
	totalStone:new Decimal(0),
	ores:{},
	totalOres:new Decimal(0),
	coins:new Decimal(0),
	totalCoins:new Decimal(0),
	upgrades:[],
	depth:0,
	options:{notation:0,
		updateRate:20},
	version:0.1,
	beta:2}
const timeframes={year:31556952,
	month:2629746,
	day:86400,
	hour:3600,
	minute:60,
	second:1}
const notationArray=['Scientific','Engineering','Standard','Logarithm']
const haListU=['','U','D','T','Q','Qi','S','Sp','O','N']
const haListT=['','D','V','T','Q','Qi','S','Sp','O','N']
const haListH=['','C','Dn','Tn','Qn','Qin','Sn','Spn','On','Nn']
const haListT2=['','MI','MC','NA','PC','FM']

tickSpeed=0
tickDone=true
maxMillisPerTick=50
gameLoopInterval=null
lastSave=0
currentTab='quarry'
oldTab='quarry'

const rankRequirements=[{stone:new Decimal(10)}]
ores={Stone:{mult:1},Iron:{mult:1.2},Bronze:{mult:1.5},Silver:{mult:1.7},Gold:{mult:2}}
nextRankText='(Next rank requires 10 stone)'
coinGain=new Decimal(0)
const costs={upgrades:[100,1e3]}
pickaxePower=new Decimal(1)