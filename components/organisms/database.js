import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
	SiJavascript,
	SiPhp,
	SiSass,
	SiGit,
	SiWebpack,
	SiReact,
	SiStyledcomponents,
	SiRedux,
	SiTestinglibrary,
	SiGatsby,
	SiNextdotjs,
	SiTypescript,
	SiAffinity,
	SiQgis,
	SiElectron,
	SiAngular,
	SiLeaflet,
	SiHtml5,
	SiCss3,
	SiJquery,
	SiCypress,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";

export const projects = [
	{
		name: "Portfolio",
		namePL: "Portfolio",
		img: "PortfolioImg.png",
		responsive: "PortfolioRWD.png",
		technologies: "NextJS, Styled Components",
		techStack: [
			{
				ico: <SiNextdotjs />,
				name: "NextJS",
			},
			{
				ico: <SiStyledcomponents />,
				name: "Styled Components",
			},
		],
		github: "https://github.com/oskardabrowski/next-portfolio",
		demo: "https://next-portfolio-nu-eight.vercel.app/",
		id: 12,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "Solar Map of Toruń",
		namePL: "Mapa Solarna Torunia",
		img: "SolarMap.png",
		responsive: "SolarMapRWD.png",
		technologies: "React, Redux, Styled Components, Leaflet",
		techStack: [
			{
				ico: <SiReact />,
				name: "React",
			},
			{
				ico: <SiRedux />,
				name: "Redux",
			},
			{
				ico: <SiStyledcomponents />,
				name: "Styled Components",
			},
			{
				ico: <SiLeaflet />,
				name: "Leaflet",
			},
		],
		github: "https://github.com/oskardabrowski/solar-map",
		demo: "http://solar-map.epizy.com/",
		id: 11,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "Flat Earth Ipsum",
		namePL: "Flat Earth Ipsum",
		img: "FlatEarth.png",
		responsive: "FEIRWD.png",
		technologies: "React, Styled Components, React Testing Library, Cypress",
		techStack: [
			{
				ico: <SiReact />,
				name: "React",
			},
			{
				ico: <SiStyledcomponents />,
				name: "Styled Components",
			},
			{
				ico: <SiTestinglibrary />,
				name: "Testing Library",
			},
			{
				ico: <SiCypress />,
				name: "Cypress",
			},
		],
		github: "https://github.com/oskardabrowski/flat-earth-ipsum",
		demo: "https://musical-manatee-d6436a.netlify.app/",
		id: 10,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "Blue Flower",
		namePL: "Blue Flower",
		img: "BlueFlowerImg.png",
		responsive: "BlueFlowerRWD.png",
		technologies: "HTML, Sass, JavaScript, PHP",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiCss3 />,
				name: "CSS",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
			{
				ico: <SiPhp />,
				name: "PHP",
			},
		],
		github: "https://github.com/oskardabrowski/BlueFlower",
		demo: "http://testsite.epizy.com/",
		id: 9,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "GatsbyWeatherApp",
		namePL: "GatsbyWeatherApp",
		img: "Weather.png",
		responsive: "CaffeResponsive.png",
		technologies: "GatsbyJS, StyledComponents",
		techStack: [
			{
				ico: <SiGatsby />,
				name: "Gatsby",
			},
			{
				ico: <SiStyledcomponents />,
				name: "Styled Components",
			},
		],
		github: "https://github.com/oskardabrowski/GatsbyWeatherApp",
		demo: "http://weatherapiapp.epizy.com/",
		id: 8,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "Caffe",
		namePL: "Caffe",
		img: "CaffeAppImg.png",
		responsive: "CaffeResponsive.png",
		technologies: "React, Styled Components, NodeJS",
		techStack: [
			{
				ico: <SiReact />,
				name: "React",
			},
			{
				ico: <SiStyledcomponents />,
				name: "Styled Components",
			},
			{
				ico: <IoLogoNodejs />,
				name: "NodeJS",
			},
		],
		github: "https://github.com/oskardabrowski/caffe-app",
		demo: "https://clinquant-fenglisu-3c11fc.netlify.app/",
		id: 7,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "MovieFinder",
		namePL: "MovieFinder",
		img: "movie.png",
		responsive: "MovieRWD.png",
		technologies: "HTML, Sass, JavaScript",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiSass />,
				name: "Sass",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
		],
		github: "https://github.com/oskardabrowski/MovieFinder",
		demo: "https://thirsty-lumiere-60886a.netlify.app/",
		id: 6,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "corpio.pl",
		namePL: "corpio.pl",
		img: "Corpio.png",
		responsive: "CorpioRWD.png",
		technologies: "HTML, CSS, JavaScript, PHP, jQuery",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiCss3 />,
				name: "CSS",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
			{
				ico: <SiPhp />,
				name: "PHP",
			},
			{
				ico: <SiJquery />,
				name: "jQuery",
			},
		],
		github: "",
		demo: "http://corpio.pl/corpio/",
		id: 5,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "Flowers Online",
		namePL: "Flowers Online",
		img: "Shop.png",
		responsive: "FORWD.png",
		technologies: "HTML, CSS, JavaScript, PHP, jQuery",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiCss3 />,
				name: "CSS",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
			{
				ico: <SiPhp />,
				name: "PHP",
			},
			{
				ico: <SiJquery />,
				name: "jQuery",
			},
		],
		github: "https://github.com/oskardabrowski/flowersonline",
		demo: "http://flowers-fakeecommerce.epizy.com/",
		id: 4,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "Calculator",
		namePL: "Calculator",
		img: "Calculator.png",
		responsive: "CalculatorRWD.png",
		technologies: "HTML, CSS, JavaScript, jQuery",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiCss3 />,
				name: "CSS",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
			{
				ico: <SiJquery />,
				name: "jQuery",
			},
		],
		github: "https://github.com/oskardabrowski/calculator-project",
		demo: "https://sweet-capybara-64bcba.netlify.app/",
		id: 3,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "ShoppingApp",
		namePL: "ShoppingApp",
		img: "ShopApp.png",
		responsive: "ShopAppRWD.png",
		technologies: "HTML, CSS, JavaScript",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiCss3 />,
				name: "CSS",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
		],
		github: "https://github.com/oskardabrowski/ShoppingList",
		demo: "https://roaring-malasada-2f310d.netlify.app/",
		id: 2,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
	{
		name: "Fake Domplast Website",
		namePL: "Fake Domplast Website",
		img: "Domplast.png",
		responsive: "DomplastRWD.png",
		technologies: "HTML, Sass, JavaScript",
		techStack: [
			{
				ico: <SiHtml5 />,
				name: "HTML",
			},
			{
				ico: <SiSass />,
				name: "Sass",
			},
			{
				ico: <SiJavascript />,
				name: "JavaScript",
			},
		],
		github: "https://github.com/oskardabrowski/fakeweb-domplast",
		demo: "https://statuesque-genie-47600b.netlify.app/",
		id: 1,
		shortDesc: `Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and cheese.
					Lancashire squirty cheese halloumi. Roquefort cheese and
					biscuits brie who moved my cheese pepper jack chalk and cheese
					mascarpone roquefort. Port-salut boursin pecorino st. agur
					blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi. Roquefort cheese
					and biscuits brie who moved my cheese pepper jack chalk and
					cheese mascarpone roquefort. Port-salut boursin pecorino st.
					agur blue cheese cheese strings cheese triangles st. agur blue
					cheese monterey jack. Danish fontina chalk and
					cheese.Lancashire squirty cheese halloumi.`,
		shortDescPL: `NASA kłamie... Satelity. Sat pochodzi od saturna i od satanizmu, sataniści są wyznawcami saturna, elity to władza. Rządzą nami satanistyczne elity. Niby skąd to wiedzą. Twarz Boga jest wyrysowana na płaskiej ziemi! Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą. Ziemia jest dyskiem z kopułą! Jesteśmy w centrum wszechświata. Słońce jest w środku kopuły i porusza się siłą magii. Antarktydy pilnuje wojsko. Wsyzstkie dowody są na jutuba. Arktyka jest w środku dysku bo tak pasuje. Jak polecisz za wysoko to uderzysz kopułę. Ziemia jest płaska lemingu. To tylko teoria.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: false,
	},
];

export const skills = [
	{
		name: "HTML",
		colors: "#FF1200, #990B00",
		ico: <AiFillHtml5 className="ico" />,
		inprogress: false,
	},
	{
		name: "CSS",
		colors: "#0000FF, #000099",
		ico: <DiCss3 className="ico" />,
		inprogress: false,
	},
	{
		name: "JavaScript",
		colors: "#FFCE00, #997C00",
		ico: <SiJavascript className="ico" />,
		inprogress: false,
	},
	{
		name: "PHP",
		colors: "#005FFF, #003999",
		ico: <SiPhp className="ico" />,
		inprogress: false,
	},
	{
		name: "Bootstrap",
		colors: "#6C439F, #3C166C",
		ico: <BsFillBootstrapFill className="ico" />,
		inprogress: false,
	},
	{
		name: "Sass",
		colors: "#CC6699, #AA1861",
		ico: <SiSass className="ico" />,
		inprogress: false,
	},
	{
		name: "GIT",
		colors: "#FF2700, #991700",
		ico: <SiGit className="ico" />,
		inprogress: false,
	},
	{
		name: "NodeJS",
		colors: "#037000, #025400",
		ico: <IoLogoNodejs className="ico" />,
		inprogress: false,
	},
	{
		name: "Webpack",
		colors: "#1C78C0, #00467D",
		ico: <SiWebpack className="ico" />,
		inprogress: false,
	},
	{
		name: "React",
		colors: "#61DBFB, #00B4E3",
		ico: <SiReact className="ico" />,
		inprogress: false,
	},
	{
		name: `Styled Components`,
		colors: "#CE65A6, #AC1773",
		ico: <SiStyledcomponents className="ico" />,
		inprogress: false,
	},
	{
		name: `Leaflet`,
		colors: "#8EAF1F, #566F03",
		ico: <SiLeaflet className="ico" />,
		inprogress: false,
	},
	{
		name: `Redux`,
		colors: "#764ABC, #421788",
		ico: <SiRedux className="ico" />,
		inprogress: false,
	},
	{
		name: `Testing`,
		colors: "#F1719E, #E80052",
		ico: <SiTestinglibrary className="ico" />,
		inprogress: false,
	},
	{
		name: `Gatsby`,
		colors: "#66339D, #380E66",
		ico: <SiGatsby className="ico" />,
		inprogress: false,
	},
	{
		name: `Next`,
		colors: "#000000, #4D4D4D",
		ico: <SiNextdotjs className="ico" />,
		inprogress: false,
	},
	{
		name: `TypeScript`,
		colors: "#007AFF, #004999",
		ico: <SiTypescript className="ico" />,
		inprogress: true,
	},
	{
		name: `React Native`,
		colors: "#61DBFB, #00B4E3",
		ico: <TbBrandReactNative className="ico" />,
		inprogress: true,
	},
	{
		name: `Electron`,
		colors: "#74B1BE, #26879C",
		ico: <SiElectron className="ico" />,
		inprogress: true,
	},
	{
		name: `Angular`,
		colors: "#FF1200, #990B00",
		ico: <SiAngular className="ico" />,
		inprogress: true,
	},
	{
		name: `Affinity Suite`,
		colors: "#46C9FA, #0095CD",
		ico: <SiAffinity className="ico" />,
		inprogress: false,
	},
	{
		name: `QGIS`,
		colors: "#8EAF1F, #566F03",
		ico: <SiQgis className="ico" />,
		inprogress: false,
	},
];

export const aboutMe = {
	contactOptions: ["email@email.pl", "linkedin@linekdin.pl"],
	shortDesc:
		"Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese. Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi.",
	shortDescPL:
		"Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą.",
	longDesc:
		"Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese. Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi.Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese. Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi.",
	longDescPL:
		"Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą.Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą.",
	interests:
		"Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese. Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Roquefort cheese and biscuits brie who moved my cheese pepper jack chalk and cheese mascarpone roquefort. Port-salut boursin pecorino st. agur blue cheese cheese strings cheese triangles st. agur blue cheese monterey jack. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina chalk and cheese.Lancashire squirty cheese halloumi.",
	interestsPL:
		"Gwiazda polarna jest widoczna na drugiej półkuli, ale czasami nie poniważ perspektywa. Nie pojedziemy na antarktydę bo nam nie wolno. Wszystkie gwiazdy, planety i księżyce to zjawiska bliskie i lokalne. Istnieje zorganizowana sieć blokad które nie pozwalają nam pójść na antarktydę. Fikcja, grafika komputerowa, jesteśmy okłamywani, ziemia jest płaska. Mierzenie lotu poziomicą.",
};
