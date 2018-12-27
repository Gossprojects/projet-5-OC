class LinesManager extends GameComponent {

	constructor(app) {

		super(app);

		this.__attLines = [ // line level = array index + 1
			'Nobody reads your post.',
			'Your close ones read your post.',
			'Relatives and strangers read your post.',
			'A lot of people read your post.',
			'The whole country read your post.',
			'Your post makes worldwide news.',
			'Your post is the most popular thing.'
		];

		this.__itmLines = [
			{name: 'srch', lines: [
				// lv1
				['Votre mère n\'y comprend rien.',
				'Un ami vous félicite.'
				], 
				// lv2
				['Votre mère demande d\'où est-ce que vous sortez tout ça.',
				'Un inconnu vous critique violemment.',
				'Un ami poste un commentaire à côté de la plaque.'],
				// lv3
				['Un spécialiste proteste longuement.',
				'Un militant vous salue.',
				'Un ami vous remercie de l\'avoir fait changer d`\'avis.',
				'Votre post est repris par des communautés obscures.'],
				// lv4
				['Vous alimentez le discours d\'une nouvelle organisation.',
				'Des rassemblements s\'effectuent en votre nom.',
				'Plusieurs hommes politiques réfutent vos propos.',
				'Vous recevez une menace de mort.',
				'Une grande entreprise dément.'],
				// lv5
				['Le parti au pouvoir appelle à vous nuire.',
				'Le cours de Bourse d\'une grande entreprise s\'effondre.',
				'Violente altercation entre vos partisans et vos opposants.',
				'Rallié à votre cause, un homme meurt.',
				'Ralliée à votre cause, une femme meurt.',
				'Vos partisans envahissent un bâtiment institutionnel.',
				'Vos partisans se multiplient et s\'organisent.'],
				// lv6
				['Vos partisans affrontent une armée d\'Etat.',
				'Un vieil ami vous supplie de tout arrêter.',
				'Vos partisans exécutent un ancien dirigeant.',
				'Plusieurs voix s\'élèvent contre vous.',
				'Vos partisans annexent un nouveau territoire.',
				'Votre garde rapprochée déjoue une tentative d\'assassinat.'],
				// lv7
				['Un dirigeant vous prête allégeance.',
				'Votre famille vous craint plus que les autres.',
				'Un massacre est commis en votre nom.',
				'Vos partisans se désunissent, des conflits éclatent.',
				'Votre empire grandit dans la violence et la peur.']
			]},
			{name: 'frmt', lines: [
				['Votre mère vous félicite.',
				'Un ami commente avec un mème.'],
				['format lv 2 A',
				'format lv 2 B',
				'format lv 2 C'], 
				[],
				[],
				[],
				[],
				[]
			]},
			{name: 'intctn', lines: [
				[],
				[], 
				[],
				[],
				[],
				[],
				[]
			]}
		];
		
		this.__godLines = [
			{name: 'notEnoughEnergy', line: 'Il te faut d\'abord de l\'énergie. Patience.'}, 
			{name: 'notEnoughAttention', line: 'Apporte moi plus d\'attention.'}
		];

	}
	
	init() {
		//this.getLines();
	}

	getAttLineOf(lv) {
		var line = this.__attLines[lv - 1];

		return line;
	}

	getLines() {

		var attLines = this.getFromJson(att);
		// convert to js

		var itmLines = this.getFromJson(itm);
		// convert to js

		var godLines = this.getFromJson(god);

		this.__attLines = attLines;
		this.__itmLines = itmLines;
		this.__godLines = godLines;
	}

	getFromJson(lines) {
		// json
	}

	get attLines() {
		return this.__attLines;
	}
	get itmLines() {
		return this.__itmLines;
	}
	get godLines() {
		return this.__godLines;
	}
}