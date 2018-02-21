const stickers = [
	{
		id: 1,
		title: 'JavaScript',
		description: 'JS Logo',
		rating: 10,
		url: 'http://devstickers.com/assets/img/pro/i4eg.png'
	},
	{
		id: 2,
		title: 'ReactiveX',
		description: 'ReactiveX Logo',
		rating: 9,
		url: 'http://devstickers.com/assets/img/pro/co6x.png'
	},
	{
		id: 3,
		title: 'TypeScript',
		description: 'TypeScript Logo',
		rating: 5,
		url: 'http://devstickers.com/assets/img/pro/tzgi.png'
	},
	{
		id: 4,
		title: 'Polymer',
		description: 'Polymer Logo',
		rating: 7,
		url: 'http://devstickers.com/assets/img/pro/u3af.png'
	},
	{
		id: 5,
		title: 'Yeoman',
		description: 'Yeoman Logo',
		rating: 8,
		url: 'http://devstickers.com/assets/img/pro/japv.png'
	},
	{
		id: 6,
		title: 'Android',
		description: 'Android Logo',
		rating: 5,
		url: 'http://devstickers.com/assets/img/pro/0jwf.png'
	},
	{
		id: 7,
		title: 'Ruby',
		description: 'Ruby Logo',
		rating: 6,
		url: 'http://devstickers.com/assets/img/pro/0q2i.png'
	},
	{
		id: 8,
		title: 'Vue',
		description: 'Vue Logo',
		rating: 10,
		url: 'http://devstickers.com/assets/img/pro/tyq3.png'
	}
];

const sticker = {
	title: 'React',
	description: 'React Logo',
	rating: 9,
	url: 'http://devstickers.com/assets/img/pro/z392.png'
};

const successMsg = {
	message: true
};

/* {
	"title": "React",
	"description": "React Logo",
	"rating": 9,
	"url": "http://devstickers.com/assets/img/pro/z392.png"
} */

/* {
	"title": "Socket.IO",
	"description": "Socket.IO Logo",
	"rating": 8,
	"url": "http://devstickers.com/assets/img/pro/m41d.png"
} */

// due to data return as obj, so wrap it as obj.
module.exports = { 
	stickers,
	sticker,
	successMsg
};
