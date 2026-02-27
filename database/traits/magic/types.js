DATABASE = (window.DATABASE || []).concat([
{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "magic-type-1",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Dark {$.magicName.mean()}"
		},
		section: {
			EN: "Dark {$.magicName.means()}"
		}
	},
	render: {
		EN: "Dark"
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "magic-type-2",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Light {$.magicName.mean()}"
		},
		section: {
			EN: "Light {$.magicName.means()}"
		}
	},
	render: {
		EN: "Light"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "magic-type-3",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "an Unclean {$.magicName.mean()}"
		},
		section: {
			EN: "Unclean {$.magicName.means()}"
		}
	},
	render: {
		EN: "Unclean"
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "magic-type-4",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Sacred {$.magicName.mean()}"
		},
		section: {
			EN: "Sacred {$.magicName.means()}"
		}
	},
	render: {
		EN: "Sacred"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "magic-type-5",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Negative {$.magicName.mean()}"
		},
		section: {
			EN: "Negative {$.magicName.means()}"
		}
	},
	render: {
		EN: "Negative"
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "magic-type-6",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Positive {$.magicName.mean()}"
		},
		section: {
			EN: "Positive {$.magicName.means()}"
		}
	},
	render: {
		EN: "Positive"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "magic-type-7",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Corrupting {$.magicName.mean()}"
		},
		section: {
			EN: "Corrupting {$.magicName.means()}"
		}
	},
	render: {
		EN: "Corrupting"
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "magic-type-8",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Restoring {$.magicName.mean()}"
		},
		section: {
			EN: "Restoring {$.magicName.means()}"
		}
	},
	render: {
		EN: "Restoring"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "magic-type-9",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Shadow {$.magicName.mean()}"
		},
		section: {
			EN: "Shadow {$.magicName.means()}"
		}
	},
	render: {
		EN: "Shadow"
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "magic-type-10",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Golden {$.magicName.mean()}"
		},
		section: {
			EN: "Golden {$.magicName.means()}"
		}
	},
	render: {
		EN: "Golden"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "magic-type-11",
	tags: [ "darkmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Deadly {$.magicName.mean()}"
		},
		section: {
			EN: "Deadly {$.magicName.means()}"
		}
	},
	render: {
		EN: "Deadly"
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "magic-type-12",
	tags: [ "lightmagic", "magictype", "type" ],
	methods: {
		mean: {
			EN: "a Godsent {$.magicName.mean()}"
		},
		section: {
			EN: "Godsent {$.magicName.means()}"
		}
	},
	render: {
		EN: "Godsent"
	}
}
]);
