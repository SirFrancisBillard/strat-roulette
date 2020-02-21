
const FurryFaces = [
	"^-^",
	"UwU",
	"w_w",
	">w<",
	">_<",
	"T_T",
	"u_u"
];

function getStrat()
{
	let formObj = document.getElementById("sr_form");
	let formValues = {};
	for (let i = 0; i < formObj.elements.length; i++)
	{
		let elem = formObj.elements[i];
		formValues[elem.value] = elem.checked;
		// console.log(elem.value + " -> " + elem.checked)
	}
	let team = formValues["atk"] ? 0 : 1
	let arr = strats_bomb[team];
	if (formValues["hostage"])
	{
		arr = strats_hostage[team];
	}
	if (formValues["include_generic"])
	{
		arr = arr.concat(strats_generic[team]).concat(strats_generic[2]);
	}
	let strat = arr[Math.floor(Math.random() * arr.length)];
	if (formValues["furry_faces"])
	{
		document.getElementById("strat_title").innerHTML = strat[0] + " " + FurryFaces[Math.floor(Math.random() * FurryFaces.length)];
	}
	else
	{
		document.getElementById("strat_title").innerHTML = strat[0];
	}
	document.getElementById("strat_desc").innerHTML = strat[1];
}

window.onload = getStrat;

var strats_generic = [
	[
		["Mr. President, get down!", "All pick FBI recruits. Four with shields in front and the bottom fragger, who you must call \"Mr. President\", with defuser in back. If the president dies, the remaining recruits must kill themselves with grenades."],
		["Hot breach", "All pick Spetsnaz recruits with LMG and breach charges. Use all five breaches at once, and enter the objective spraying wildly."],
		["The Gauntlet", "Send one guy to the objective at a time, after the last one dies."],
		["Firing squad", "All pick GIGN recruits with 417 and revoler."],
		["Pure destruction", "Use destructive operators (Sledge, Thermite, Ash, etc.) and blow your way into the objective. Using doors or windows is not allowed."],
		["Suicide bombing", "Pull the pin on a grenade and enter the objective yelling \"allahu akbar!\"."],
		["Rabid dogs", "All pick GSG9 recruit with M870. When an enemy is marked by a drone, hunt him down like a pack of rabid dogs."],
		["Covering fire", "You can only move when a teammate is shooting."],
		["FBI, open up!", "Two players pick Ash and Thermite, the rest pick FBI recruits with shields."],
		["Fire drill", "Smoke out the objective and enter while prone to avoid smoke inhalation."],
		["Fortnite", "Pick Sledge with four SAS recruits. Use shotguns and SMG-11."],
	],
	[
		["Southern Border", "All pick FBI recruits with deployable shields and razor wire. Build a great, great wall with the shields and wire."],
		["GG me afk", "Appear AFK until the round starts, then rush like hell."],
		["Red herring", "Fortify and defend the room NEXT to the objective."],
		["Defender Olympics", "Build an obstacle course throughout the objective, with deployable shield hurdles and holes in walls to crawl through."],
		["Conga line", "Form a conga line with your team, leaning back and forth repeatedly."],
		["The objective is lava", "Don't touch the floor in the objective room."],
		["Swiss cheese", "All pick recruits with auto shotguns, and use all your ammo blowing huge holes all over the objective."],
		["Apex predators", "All pick fast operators (or recruits) and roam together in a pack."],
		["Counter-Strike", "Destroy all barricades and don't use any gadgets or make any peep holes."],
		["Bear trap", "Place an armor pack outside for the offenders, but rig the entire surrounding area to blow with nitro cells. When the Rook sees the armor being taken, detonate."],
		["The best defense is a good offense", "All pick GSG9 recruits with M870 or MP7. As soon as the round starts, rush outside and start killing."],
		["Roman formation", "Place five deployable shields in a circle near the objective. Stay within the shield at all times."],
		["Jihadi's last stand", "Rig the objective(s) with C4 and wire. When the objective is being completed, detonate."],
		["Security guards", "Fill the objective room with cameras. You can only exit cams to shoot at marked enemies."],
		["Foot", "All pick recruit with shotguns. Stick together in the objective and move as a group."],
		["Tower defense", "Once the round starts, do not move."],
		["Tower defense v2", "Pick Tachanka with four Spetsnaz recruits. Use only the turret to kill enemies."],
	],
	[
		["First day on the job", "It's your first day on the job as a recruit, and you can't wait to get started! Let your teammates know how cool it is to fight baddies on your very first assignment."],
		["Strength in diversity", "Pick operators from foreign countries and speak with an over-exaggerated accent. Bonus points for saying phrases in their native language."],
		["Spitting fire", "Rap all callouts."],
		["Stenographer", "Instead of referring to operators or map callouts by name, describe them in extreme detail."],
		["Skeet shooting", "Use pump shotguns and yell \"Pull!\" into voice chat before shooting."],
		["Wild West", "All pick GIGN recruits with revolvers and dynamite. Yeee-haw!"],
		["Drunk mode", "Wear your headset backwards."],
		["Dick heads", "Every time your team gets a kill, spam the chat with \"AHAHAHAHAHAHAH SOOO EZ\"."],
		["Attack of the worm people", "Everyone must stay prone for the entire round."],
		["Thicc boi convention", "All pick three-armor operators."],
	]
];

var strats_bomb = [
	[
		["Chosen one", "Only the player carrying the defuser can shoot."],
	],
	[
		["Defend the Lord", "Four players pick Spetsnaz recruits, one goes Tachanka. If Tachanka dies, the recruits must kill themselves with C4."],
	]
];

var strats_hostage = [
	[
		["D-O-Double G", "Smoke out the hostage room completely and attempt a passive rescue."],
		["Ducklings", "Montagne is the mother duck. All others are shield recruits. The recruits must follow Montagne in a single file line like ducklings. Now go get the missing duck (the hostage)."],
	],
	[
		["Actually good strategy", "Sit your entire team on the hostage."],
	]
];
