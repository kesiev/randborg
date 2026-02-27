DATABASE = (window.DATABASE || []).concat([
{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "biome-type-1",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"megacities",
					"megalopolies",
					"metropolies"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"polluted",
					"crowded",
					"packed"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "biome-type-2",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"elevated cities",
					"floating cities",
					"suspended cities"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"corporative",
					"unruled",
					"neutral"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "biome-type-3",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"tunnels",
					"networks",
					"metro"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"intricate",
					"twisted",
					"tidy"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "biome-type-4",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"arcologies",
					"vertical districts",
					"eco shells"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"clean",
					"green",
					"parallel"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-cyberpunk" ] ],
	id: "biome-type-5",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"factories",
					"plants",
					"workshops"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"clattering",
					"stroboscopic",
					"oily"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "biome-type-6",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"rice fields",
					"paddy fields",
					"paddies"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"golden",
					"terraced",
					"stagnant"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "biome-type-7",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"bamboo forest",
					"bamboo wilds",
					"bamboo plantations"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"shadowy",
					"moist",
					"overgrown"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "biome-type-8",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"cherry blossom valley",
					"sakura valley",
					"blossom forest"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"pink",
					"scented",
					"florid"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "biome-type-9",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"spirit forests",
					"whispering forests",
					"watching forests"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"spectral",
					"murmuring",
					"primal"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-japan" ] ],
	id: "biome-type-10",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"springs"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"tepid",
					"steaming",
					"bubbling",
					"sanctified"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "biome-type-11",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"canyons",
					"gorges",
					"valleys"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"sinuous",
					"echoing",
					"shadowed"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "biome-type-12",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"badlands",
					"wastelands"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"arid",
					"cracked",
					"crumbling",
					"dusty"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "biome-type-13",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"mines"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"cavernous",
					"echoing",
					"oppressive"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "biome-type-14",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"settlements",
					"colonies"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"sprawling",
					"desolate",
					"fortified"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-wildwest" ] ],
	id: "biome-type-15",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"rapids",
					"waterfalls",
					"cascades"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"tumbling",
					"torrential",
					"crystalline",
					"resonant"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-16",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"quarries",
					"caves",
					"excavations"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"subterranean",
					"underground",
					"mining"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-17",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"labyrinths",
					"secrets",
					"dungeons"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"labyrinthine",
					"hidden",
					"mysterious"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-18",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"forests",
					"woods",
					"thickets"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"wooded",
					"forestry",
					"sylvan"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-19",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"mountains",
					"heights",
					"reliefs"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"mountainous",
					"raised",
					"high"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-20",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"lakes",
					"ponds"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"lacustrine"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-fantasy" ] ],
	id: "biome-type-21",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"glaciers"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"frozen",
					"arctic",
					"cold"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "biome-type-22",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"rituals"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"mystical",
					"sacrificial",
					"ritual"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "biome-type-23",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"ruins"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"ruined",
					"abandoned",
					"destroyed",
					"collapsed"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "biome-type-24",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"tombs",
					"cemeteries",
					"sepulchres"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"burial",
					"funeral",
					"grave"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "biome-type-25",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"swamps",
					"marshes",
					"mires"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"swampy",
					"stagnant",
					"muddy"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-grim" ] ],
	id: "biome-type-26",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"volcanoes",
					"craters",
					"forges"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"volcanic"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-27",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"camps",
					"colonies",
					"settlements"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"inhabited",
					"colonized"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-28",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"jungles",
					"savannahs",
					"foliages"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"tropical",
					"lush",
					"rainy"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-29",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"cliffs",
					"overhangs",
					"crevasses"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"rocky",
					"craggy",
					"steep"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-30",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"deserts",
					"sands"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"desertic",
					"hot",
					"arid"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-31",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"flats",
					"lowlands",
					"planes"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"flat",
					"plane"
				]
			}
		}
	}
},{
	ifAnyFlag: [ [ "setting-investigation" ] ],
	id: "biome-type-32",
	tags: [ "map", "biome" ],
	methods: {
		getNames: {
			EN: {
				oneOf: [
					"rivers",
					"courses",
					"torrents"
				]
			}
		},
		getAdjective: {
			EN: {
				oneOf: [
					"river",
					"aquatic",
					"torrential"
				]
			}
		}
	}
}
]);