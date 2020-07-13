export default {
	name: "Eric Robertson",
	title: "Software Engineer",
	resume: "https://drive.google.com/file/d/1ztOSG3NalnVH2-pR-PM647ePsFM8JINZ/view?usp=sharing",
	email: "e.robertson.js@gmail.com",
	status: "Looking For Work",
	profile: "/images/profile.jpg",
	profilePills : ['web-development', 'machine-learning','internships'],
	aboutMe: `
		Passionate computer science major with a love for diving into new and exciting projects!
		Expierience of more than 2+ years with modern web development frameworks.
		Have worked on data at scale with massive industry code bases.
		Expierienced in basic machine learning and up to date with modern languages.
		Looking to make an impact where I can and would be interested in joining projects! Email me!
	`,
	projects: [
		{
			name : "Website Portfolio",
			text: "The very website you are viewing right now, writen so I could have a unified place to point people to logging all my projects. Github doesnt have the exact features I wanted.",
			fullText: "Specificily I wanted the feature to filter projects by tags, which github does not allow you do. In addion, there are projects I have worked on that are not visable on my github profile, so this website will hopefuly be a good spot for a more whole view of my portfolio.",
			tags: ["react", "aws", "web-development" ] ,
			img: "/images/portfolio.png",
			date: "2020-07-12",
			link: "https://github.com/eric-robertson/portfolio-me"

		},
		{
			name : "Mastercard Internship",
			text: "Software Development Intern at the Data & Services Section of Mastercard working with SQL and .Net for backend development",
			fullText: "Worked on a large project compleate with continius integration and deployment aswell as full testing sweet. Project taps into millions of data records and provides analitics for internal reporting.",
			tags: [".net", "sql", "backend", "internships", "C#"] ,
			img: "/images/mastercard.png",
			date: "2020-05 Summer",
			link: ""

		},
		{
			name : "Open Sourcery UMD",
			text: "UMD Computer Science organization that I co-founded my freshman year. Promotes engagement with the commuinity and spreads workshops given by members.",
			fullText: "UMD has such an amazing computer science talent pool and such a lack of real world expierience expecialy for beginning students. Everyone looks for internships but the surrounding comminity to the school is relatively CS-Starved. Its our goal to spread computer science knowledge and promoite oppertunities so that students can help out the surrounding communties.",
			tags: ["organization-envolvement"] ,
			img: "/images/opensourcery.png",
			date: "2019 to present",
			link: "https://www.opensourceryumd.com/"

		},
		{
			name : "Data Science Workshop Employment",
			text: "Workshop created and presented to opensourcery-umd to introduce people to the idea of data science and concepts. Given live to 20 + members in guided workshop.",
			fullText: "The worksop iteself dives into some statistical analysis on pay and job opertunities for computer science majors.",
			tags: ["organization-envolvement", "machine-learning", "python", "jupyter"] ,
			img: "/images/workshop.png",
			date: "2020-02",
			link: "https://github.com/eric-robertson/data-science-employment/blob/master/DataWorkshop%20(3).ipynb"

		},
		{
			name : "Web Scraping Workshop Faculty",
			text: "Workshop created and presented to opensourcery-umd to introduce people to the idea of data science and concepts. Given live to 20 + members in guided workshop.",
			fullText: "The worksop iteself dives into some statistical analysis on pay and relationships between UMD faculty and reviews on different reviewing sites",
			tags: ["organization-envolvement", "web-scraping", "python", "jupyter", "beautiful-soup"] ,
			img: "/images/workshop.png",
			date: "2020-02",
			link: "https://github.com/eric-robertson/web-scraping-faculty-info/blob/master/WebScraping.ipynb"

		},
		{
			name : "LSTM Stock Market Model",
			text: "Python project running an LSTM ( long short term memory ) machine learning model to predict stock prices in python.",
			fullText: "Though its not very accurate, it uses historic data fed into a LSTM model to predict some changes in stock price with the hope of being an auto-trading bot. Gets data through APIs and displays output in charts for predictions.",
			tags: [ "python", "jupyter", "machine-learning", "ecconomics"] ,
			img: "/images/stocks.png",
			date: "2019-09",
			link: "https://github.com/opensourceryclub/LSTM-Stock-Predictor"

		},
		{
			name : "Open Combat Engine",
			text: "First version of a working 3D fighting game engine written in Typescript for real time browser online networking play.",
			fullText: "Still far from being deployed, but has been a passion project for a while for a fighting game I am making. Uses socket.io and Three.js and a custom physics engine to do 3D-first person multiplayer fighting sandbox-style game.",
			tags: [ "typescript", "socket.io", "three.js", "web-development"] ,
			img: "/images/sword.png",
			date: "2020-03",
			link: "https://github.com/erobertson-open-combat/game-engine"

		},
		{
			name : "Thoth Language Generation APP",
			text: "Worked with a team to develop the Thoth app for custom language generation. A xamarin-basted cross platform application that allows seeding of custom language styles.",
			fullText: "Still unreleased, developed the front end design and some back end functionality linking with C++ libraries.",
			tags: [ "xamarin", "C#", "cross-platform", "C++"] ,
			img: "/images/thoth.png",
			date: "2020-05",
			link: ""

		},
		{
			name : "Easy Shopping Flutter APP",
			text: "Application ment to make shopping easier for family. Allows saving a shared list across multiple devices and sorting items by location in the store and in the house.",
			fullText: "Makes shopping easier by giving you an ordered list of items by their location. Each item is gotten on the first try without need for backtracking, items are not forgotten or mis-remembered. List is saved to the cloud and app is available on the play store! Uses AWS lambda, cognito, and dynamodb for a true scaleable serverless application.",
			tags: [ "digital-ocean", "flutter", "serverless", "dynamodb"] ,
			img: "/images/grocery.jpg",
			date: "2020-07-01",
			link: "https://github.com/erobertson-misc/grocery-app"

		},
		{
			name : "Dynamic Marketplace Minecraft Plugin",
			text: "Plugin that adds dynamic pricing support to the minecraft plugin marketplace. Item prices float dynamicly on the server basted on the laws of supply and demand.",
			fullText: "In minecraft, items are crafted from different materials. This plugin takes a new aproch to item shops by making it so that items prices are purely basted on raw costs and the scaricity of those resources. Its dynamic pricing algorithm allows items to change in price from eveyr sale and allow a market to automaricly ballence itself.",
			tags: [ "java", "minecraft-plugin", "ecconomics"] ,
			img: "/images/spigot-og.png",
			date: "2020-03-01",
			link: "https://github.com/erobertson-misc/dynamic-marketplace"

		},
		{
			name : "Omni Parser",
			text: "Javascript library that allow you to define custom languages easily with a reference file and then a compiler is created that interprits it as Javascript",
			fullText: "Concepts here are basted of a introductory parsing class I took. The algorithm is inefficient and is more of a proof of concept, but the structure is highly expandable and can be used to quickly prototype a language.",
			tags: [ "javascript", "parsing"] ,
			img: "/images/parser.png",
			date: "2019-10-01",
			link: "https://github.com/erobertson-misc/omni-parser"

		}

		

		

		
		
	],
	acomplishments : [
		{
			name: 'University Of Maryland',
			id: 'college',
			text: 'Computer Science Major with concentration in Ecconomics. Pursuing research into Machine learning',
			img: '/images/maryland.jpg',
			graduation: '2022 graduation'
		}
	],
	social : [
		{
			name : "Up-Work",
			link: "https://www.upwork.com/freelancers/~01867a5e961c88ac8c",
			icon: "/images/upwork.png"
		}
	]
}