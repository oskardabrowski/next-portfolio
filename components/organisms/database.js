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
		shortDescPL: `Jest to projekt mojej nowej strony portfolio który został zainspirowany abstrakcją. Poza programowaniem lubię bardzo grafikę komputerową w każdej postaci, posiadam zatem pewne umiejętności w tworzeniu grafiki rastrowej i wektorowej. Mam również mniejsze nieco umiejętności związane z grafiką 3D. Zdecydowałem się zatem na zaprojektowanie mojej nowej strony portfolio za pomocą grafiki wektorowej, a następnie przełożenie jej na kod. Strona, którą właśnie oglądasz została zaprojektowana za pomocą Affinity Designer i stworzona w NextJS jako mój drugi projekt.`,
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
		shortDescPL: `Jest to mój projekt magisterski, zacząłem go ponad pół roku temu i starałem rozwijać wraz z tokiem studiów. Największe zmiany nastąpiły stosunkowo niedawno, gdyż udało mi się z powodzeniem zaliczyć wszystkie zajęcia co przełożyło się na więcej wolnego czasu, który mogę w niego zainwestować. Buduję go za pomocą React oraz wielu świetnych bibliotek, które nadają dodatkowe funkcjonalności. Zdecydowałem się utworzyć go na bazie LeafletJS przez wzgląd, iż jest to najbardziej rozwinięta biblioteka mapowa posiadająca ogromną ilość pluginów. Analiza przestrzenna zamieszczona na mapie została przetworzona na kafelki za pomocą QTiles w QGIS.`,
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
		shortDescPL: `Jest to projekt stworzony w celu napisania pierwszych własnych testów za pomocą React Testing Library oraz Cypress. Aplikacja została zainspirowana Ancient Alien Ipsum którego
		aktualnie nie ma, zatem zdecydowałem się utworzyć mu Polski odpowiednik i przy okazji nauczyć się czegoś nowego.`,
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
		shortDescPL: `Projekt został oparty na PHP, stworzyłem go, aby przypomnieć i utrwalić wiedzę na temat PHP zdobytą z kursu. Zawiera on podłączenie od bazy danych oraz związane z nią funkcjonalności. Zawiera prostą symulację płatności, gdyż nie widziałem potrzeby po raz kolejny implementować wtyczki Stripe co robiłem w poprzednich projektach. Skupiłem się tutaj przede wszystkim na stworzeniu funkcjonalności w oparciu o PHP oraz realnego wpływu użytkownika na treść strony.`,
		desc: "EN description",
		descPL: "PL opis",
		selected: true,
	},
	{
		name: "GatsbyWeatherApp",
		namePL: "GatsbyWeatherApp",
		img: "Weather.png",
		responsive: "WeatherRWD.png",
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
		shortDescPL: `Mała aplikacja przedstawiająca prognozę pogody pobraną z OpenWeatherMap. Podobne projekty tworzone są na Bootcampach zatem postanowiłem zrobić ją w innej technologii oraz rozszerzyć nieco jej funkcjonalność. Stworzyłem tą aplikację w oparciu o GatsbyJS oraz prognozę co trzy godziny. Pobiera ona prognozę dla danego miejsca a następnie przyciski z widoczną pogodą dominującą danego dnia. Po kliknięciu jednego z nich można sprawdzić prognozę pogody co trzy godziny oraz zobaczyć wykres opisujący dany czynnik pogodowy w danym dniu.`,
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
		shortDescPL: `Moja druga aplikacja opracowana w React, mój własny projekt tworzony jeszcze w czasie Nauki tego frameworka, kiedy to nie rozumiałem do końca niektórych koncepcji i hooków. Opracowałem go w celu postawienia kolejnych kroków w trakcie nauki oraz poznania nieco bardziej Reacta i podstaw Expressa. Jest to ecommerce sprzedające kawę w internecie gdzie po raz drugi zaimplementowałem Stripe, lecz w innej technologii niż dotychczas.`,
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
		shortDescPL: `Jest to projekt stworzony w czystym JavaScript, opracowałem go w celu lepszego zrozumienia tego języka oraz asynchroniczności. Pobiera dane z TMDB oraz wyświetla w stworzonym przeze mnie sliderze. Użytkownik ma opcję dodania filmów do ulubionych oraz do listy do obejrzenia. Zapisuje je wtedy w przeglądarce za pomocą pamięci lokalnej.`,
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
		shortDescPL: `Większy projekt stworzony na bazie PHP dla jednej z miejscowych szwalni, ma opcję tworzenia grup i podgrup w katalogu z produktami oraz włączania lub wyłączania ich widoczności dla użytkownika. Administrator strony ma również pełną swobodę w dostosowywaniu jej do własnych potrzeb. Z powodów bezpieczeństwa nie udostępniono kodu strony do wglądu.`,
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
		shortDescPL: `Jest to mój pierwszy projekt z integracją wtyczki Stripe stworzony w celu lepszego zapoznania się z językiem PHP oraz publikacją na stronach z hostingiem. Posiada katalog produktów oparty na bazach danych oraz możliwość założenia konta która jest funkcjonalnością poboczną.`,
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
		shortDescPL: `Jeden z moich pierwszych projektów stworzonych przy pomocy jQuery. Jest to prosty przeglądarkowy kalkulator stworzony w celu rozwoju moich umiejętności
		programowania w JavaScript z wykorzystaniem biblioteki jQuery.`,
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
		shortDescPL: `Moja pierwsza aplikacja internetowa stworzona za pomocą czystego JavaScript. Prosta lista zakupowa do której dodaje lub kasuje się produkty.`,
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
		shortDescPL: `Jest to pierwsza stworzona przeze mnie strona internetowa dla której inspiracją była przestarzała strona jednej z lokalnych firm. Posiada podstawowe funkcjonalności w
		JavaScript.`,
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
	shortDescPL: `Jestem Oskar Dąbrowski, obecnie kończę studia na kierunku Geoinformacja II stopnia. Programowaniem interesuję się od końca drugiego roku studiów licencjackich. Początkowo uczyłem się Pythona, postanowiłem, jednakże rozejrzeć się wśród innych języków programowania, aby poszukać coś najbardziej odpowiedniego dla mnie. Ostatecznie zdecydowałem się wybrać JavaScript, gdyż posiada on wiele ciekawych bibliotek, frameworków i supersetów. Aktualnie uczę się TypeScript, wraz z nim chcę poznać również Angulara, gdyż jest frameworkiem który w mojej ocenie warto poznać. Aktualnie programuję aplikacje w React, znam również zbudowane na jego bazie generatory stron statycznych NextJS i Gatsby JS. Preferuję jednakże pierwszy z nich, lecz nie mam problemu w pracy z drugim. Dalej mam zamiar poznać React Native i Electron, aby również umieć tworzyć aplikacje crossplatformowe. Ucząc się programowania łatwo odnieść wrażenie, iż im dalej w las tym więcej drzew, dla mnie, jednakże nie jest to problemem, gdyż każde z nich jest ciekawe i niesie nowe świetne możliwości.`,
	longDesc: ``,
	longDescPL: [
		`Jestem Oskar Dąbrowski, programować zacząłem podczas studiów około dwa lata temu. Przez ten czas wraz uczyłem się programowania na studiach jak i na własną rękę. Jako iż byłem studentem Geoinformacji najwięcej uczyłem się języka Python, lecz miałem również zajęcia dotyczące budowy aplikacji internetowych. Interesowałem się Front-Endem jeszcze przed formalnymi kursami ze studiów, przez co łatwiej przez wszystko przeszedłem. Zainteresowałem się tymi zagadnieniami bardziej, co poskutkowało moim osobistym rozwojem w tym kierunku. Początkowo przechodziłem kursy na freeCodeCamp i czytałem książki. Lecz z czasem zacząłem czerpać wiedzę z różnych źródeł co znacznie poszerzyło moje horyzonty. Aktualnie porządkuję wiedzę za pomocą strony roadmap.sh udostępniającą świetną drogę, którą powinien przejść każdy Front-End Developer. Sam również poznaje inne zagadnienia, takie jak biblioteka Leaflet lub TURF będące Front-Endowymi bibliotekami geoinformacyjnymi.`,
		`Mieszkam w Golubiu-Dobrzyniu, małym mieście niedaleko Torunia w województwie Kujawsko-Pomorskim. Interesuje się książkami, filmami i sportem strzeleckim. Z kultury popularnej najbardziej interesuje mnie fantastyka. Lubię również wyjeżdżać i poznawać nowe miejsca. Interesuję się również grafiką komputerową w różnych wariantach. Aktualnie jestem posiadaczem Affinity Suite, czyli zestawu narzędzi stworzonych przez firmę Serif które zakupiłem w połowie poprzedniego roku. Wykorzystałem je, żeby zaprojektować moją stronę portfolio, oraz korzystam z nich do innych projektów.`,
		`Brałem udział w szkoleniach dla studentów w programie Legii Akademickiej, odbywałem praktyki w ośrodku geodezji i kartografii Urzędu Miasta Golubia-Dobrzynia. Oraz staż absolwencki jako asystent Geodety w jednej z Toruńskich firm.`,
	],
};
