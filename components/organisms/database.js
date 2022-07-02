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
	SiBootstrap,
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
		shortDesc: `My new portfolio project inspired by abstract graphic. Graphical project was created in Affinity Designer, program for vector graphic. Code was created with NextJS, this is my second project with that framework.`,
		shortDescPL: `Jest to projekt mojej nowej strony portfolio który został zainspirowany abstrakcją. Poza programowaniem lubię bardzo grafikę komputerową w każdej postaci, posiadam zatem pewne umiejętności w tworzeniu grafiki rastrowej i wektorowej. Mam również mniejsze nieco umiejętności związane z grafiką 3D. Zdecydowałem się zatem na zaprojektowanie mojej nowej strony portfolio za pomocą grafiki wektorowej, a następnie przełożenie jej na kod. Strona, którą właśnie oglądasz została zaprojektowana za pomocą Affinity Designer i stworzona w NextJS jako mój drugi projekt.`,
		desc: `I created this project using NextJS because it can pre-render web pages and I wanted to learn new technology. Firstly, I created graphic design of my new portfolio website then I started coding. The NextJS configuration file is interesting for me, because it’s similar to the webpack configuration but requires only configuration of selected plugins or loaders to work. I really understand NextJS, it’s very useful and I decided to use it in my future projects. In this project the most difficult thing to create was optimal location of elements and containers in the first view animation. Although NextJS offer CSS and CSS modules support I decided to use Styled Components, because Styled Components offer the same options like in SASS and for me this plugin is more useful than clear CSS or his modules.`,
		descPL: `Projekt został wykonany przy użyciu NextJS, przez wzgląd na możliwość prerenderowania stron internetowych i chęć nauki nowej technologii. Zaprojektowano go w programie Affinity Designer a następnie zamieniono grafikę na kod. Ciekawa jest dla mnie konfiguracja Nexta która przypomina tą z Webpacka, lecz wymaga konfiguracji tylko niektórych bibliotek lub loaderów. Projekt nie sprawił większych problemów, NextJS jest dla mnie w zupełności zrozumiały i chętnie będę go wykorzystywał w przyszłości. W samym projekcie największym wyzwaniem było odpowiednie ustawienie elementów wobec siebie oraz nadanie odpowiednich zapytań media w stylach strony. Pomimo iż Next oferuje bezproblemowe odczytywanie CSS oraz wprowadza ich moduły, wolałem skorzystać ze Styled Components przez wzgląd, iż działają w zasadzie tak samo jednocześnie posiadając funkcjonalność SCSS. Zastosowałem również atomic design, aby umieścić komponenty oraz ich fragmenty w różnych katalogach, ułatwiając sobie w ten sposób pracę oraz umożliwiając wielokrotne wykorzystanie komponentów strony. `,
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
		shortDesc: `Project created as part of my master thesis, most advanced project I've created. I used React framework with various libraries. Part of my project are tiles created with QGIS using QTiles plugin. Most important library in this project is leaflet, because it's most advanced map library with huge number of plugins.`,
		shortDescPL: `Jest to mój projekt magisterski, zacząłem go ponad pół roku temu i starałem rozwijać wraz z tokiem studiów. Największe zmiany nastąpiły stosunkowo niedawno, gdyż udało mi się z powodzeniem zaliczyć wszystkie zajęcia co przełożyło się na więcej wolnego czasu, który mogę w niego zainwestować. Buduję go za pomocą React oraz wielu świetnych bibliotek, które nadają dodatkowe funkcjonalności. Zdecydowałem się utworzyć go na bazie LeafletJS przez wzgląd, iż jest to najbardziej rozwinięta biblioteka mapowa posiadająca ogromną ilość pluginów. Analiza przestrzenna zamieszczona na mapie została przetworzona na kafelki za pomocą QTiles w QGIS.`,
		desc: `I create this project with React framework as a project in my master thesis. It combines many plugins and libraries and my knowledge from geoinformation and programming. I decided to build this project using React because it gives me advanced options. Map is working depending on Leaflet and react components for that library. Styles are created using Styled Components and I wrote them in file under component function. Inside second dimension are base maps available for free or under non-commercial license. I created solar layers using ArcGIS, QGIS and SAGA GIS. It's result of lidar point cloud processing, I convert them to digital surface model using PDAL library then I created solar layers using SAGA GIS. I merged them into one layer using ArcMap and clip to borders of Toruń. Then I converted that layers to Tiles using QTiles and add them to my application. Currently I'm while creating 3D model of city and add it as 3D version in my application.`,
		descPL:
			"Jest to przedsięwzięcie tworzone w React jako mój projekt magisterski, łączy on wiele wtyczek oraz wiedzę z zakresu geoinformacyjnego oraz programistycznego. Zdecydowałem o budowie go właśnie w tym frameworku przez wzgląd na możliwości jakie on daje. Mapa działa w oparciu o bibliotekę Leaflet oraz komponenty tej biblioteki dla Reacta. W celu nadania stylu wykorzystano Styled Components zapisując styl pod komponentem. Aplikacja zawiera mapy bazowe udostępnione za darmo lub na licencji pozwalającej na ich użycie niekomercyjne. Warstwy tematyczne zawierają natomiast potencjał solarny opracowany w ArcGIS, QGIS oraz SAGAGIS. Jest to wynik przetwarzania chmury punktów za pomocą biblioteki PDAL do częściowo pokrywających się ze sobą fragmentów, na bazie których zliczono sumy promieniowania. Obróbkę oraz łączenie w większe warstwy zrobiono w programie ArcMap, następnie przeprowadzono kaflekowanie w QGIS z pomocą wtyczki QTiles. Pozwoliło to na załadowanie danych do aplikacji bez jej zawieszania i problemów z funkcjonalnością. Wersja trójwymiarowa jest aktualnie opracowywana przy pomocy programów QGIS, Blender i SketchUp. Wynik zostanie przetworzony do modelu 3D umieszczonego w aplikacji za pomocą ThreeJS oraz react-threejs/fiber.",
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
		shortDesc: `Funny project created to learn more about automatic tests of code. I used React Resting Library and Cypress to learn two options of code testing. Application is inspired by Ancient Aliens Ipsum.`,
		shortDescPL: `Jest to projekt stworzony w celu napisania pierwszych własnych testów za pomocą React Testing Library oraz Cypress. Aplikacja została zainspirowana Ancient Alien Ipsum którego
		aktualnie nie ma, zatem zdecydowałem się utworzyć mu Polski odpowiednik i przy okazji nauczyć się czegoś nowego.`,
		desc: `FlatEarthIpsum was a project I wanted to create from long time, it’s inspired by Ancient Aliens Ipsum. Firstly I was thinking about copy this project, but finally I decided to create something new so I build ipsum based on flatearthers arguments. While creating this project I learn two application testing libraries, react testing library and cypress. So I created my first automatic tests.`,
		descPL: `FlatEarthIpsum jest projektem, który od dawna chciałem stworzyć, zainspirowało mnie do tego już niestety nieistniejące Ancient Aliens Ipsum. Początkowo postanowiłem je odtworzyć, lecz wolałem zrobić coś bardziej oryginalnego i zwróciłem uwagę na inną popularną teorię spiskową. Wraz z tworzeniem tego projektu postanowiłem nauczyć się dwóch popularnych środowisk do testów automatycznych. React-testing-library która posiada świetne funkcjonalności oraz Cypress przeznaczony do testów end to end. Napisałem zatem w tym projekcie moje pierwsze automatyczne testy aplikacji a następnie przekonałem się o ich znacznej użyteczności w trakcie tworzenia projektów.`,
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
		shortDesc: `PHP based project created to remind my knowledge about that language. Most important part is PHP functionality allows create account and make influence on website. I deployed project on free PHP hosing and connect it to SQL database so everything works.`,
		shortDescPL: `Projekt został oparty na PHP, stworzyłem go, aby przypomnieć i utrwalić wiedzę na temat PHP zdobytą z kursu. Zawiera on podłączenie od bazy danych oraz związane z nią funkcjonalności. Zawiera prostą symulację płatności, gdyż nie widziałem potrzeby po raz kolejny implementować wtyczki Stripe co robiłem w poprzednich projektach. Skupiłem się tutaj przede wszystkim na stworzeniu funkcjonalności w oparciu o PHP oraz realnego wpływu użytkownika na treść strony.`,
		desc: `Project created to refresh my knowledge about PHP, I created this website based on PHP and JavaScript. This project allows create account, create ads, add them to cart and push to home page. You can personalize your account, add and delete comments and some other options. User have real influence for website view. Project is deployed on free PHP host and connected to SQL database, everything works correctly.`,
		descPL: `Strona stworzona w celu odświeżenia mojej wiedzy na temat PHP, została stworzona przede wszystkim w oparciu o właśnie ten język oraz czysty JavaScript. Posiada możliwość zakładania konta, tworzenia reklam, dodawania ich do koszyka oraz symulację płatności. Użytkownik posiada możliwość publikacji reklamy z wybranym standardem. Istnieje również możliwość personalizacji konta, dodawania prostych komentarzy, kasowania ich oraz kilka innych opcji. Użytkownik ma realny wpływ na wygląd strony poprzez zarządzanie ogłoszeniami, dodawanie lub usuwanie komentarzy.`,
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
		shortDesc: `Simple application showing weather fetched from OpenWeatherMap. Similar projects are created by Bootcamps students so I decided to create my own project with other technology and with more options.`,
		shortDescPL: `Mała aplikacja przedstawiająca prognozę pogody pobraną z OpenWeatherMap. Podobne projekty tworzone są na Bootcampach zatem postanowiłem zrobić ją w innej technologii oraz rozszerzyć nieco jej funkcjonalność. Stworzyłem tą aplikację w oparciu o GatsbyJS oraz prognozę co trzy godziny. Pobiera ona prognozę dla danego miejsca a następnie przyciski z widoczną pogodą dominującą danego dnia. Po kliknięciu jednego z nich można sprawdzić prognozę pogody co trzy godziny oraz zobaczyć wykres opisujący dany czynnik pogodowy w danym dniu.`,
		desc: `This is small app using asynchronous functions, fetching data and returning weather for any place. This is simple project similar to projects from Bootcamps so I decided to make it more creative and advanced. Firstly, I chosen other technology, GatsbyJS and I chosen other data format. Data describe weather in 3-hour interval and background of application depends on weather. I used also great Gatsby image plugin to create placeholders for images while loading.`,
		descPL: `Jest to aplikacja pobierająca dane asynchronicznie i wyświetlająca prognozę pogody dla dowolnego miejsca. Jest to projekt tworzony zazwyczaj na bootcampach, lecz ja postanowiłem go zrobić osobiście w innej technologii i z innymi funkcjami niż studenci bootcampów. Stworzyłem go za pomocą GatsbyJS oraz pobieram dane nie dobowe, lecz co 3 godziny. Użytkownik dzięki temu posiada możliwość sprawdzenia prognozy dla danego dnia w danym interwale godzinowym. Każdy czynnik pogodowy można wyświetlić za pomocą wykresów, natomiast tło aplikacji zależy od rodzaju pogody, która wystąpi danego dnia. Zastosowałem również świetny dodatek, czyli Gatsby Image Plugin który umożliwia stworzenie rozmycia zdjęcia lub wykorzystania innej opcji zanim to główne w pełni się załaduje.`,
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
		shortDesc: `My second React based application, this is my own project created while learning React when I don't fully understand some hooks and options. I created this project to make another step while learning React and make first steps in express. This is also my second project with working stripe implementation.`,
		shortDescPL: `Moja druga aplikacja opracowana w React, mój własny projekt tworzony jeszcze w czasie Nauki tego frameworka, kiedy to nie rozumiałem do końca niektórych koncepcji i hooków. Opracowałem go w celu postawienia kolejnych kroków w trakcie nauki oraz poznania nieco bardziej Reacta i podstaw Expressa. Jest to ecommerce sprzedające kawę w internecie gdzie po raz drugi zaimplementowałem Stripe, lecz w innej technologii niż dotychczas.`,
		desc: `Caffe is my second application created in React. I created this app on my own while course when I doesn’t fully understand all hooks and concepts. This project allow me to make another step while learning this framework. It’s simple e-commerce with express backend. It allows user to make fake shopping and fake payment with testing stripe implementation.`,
		descPL: `Caffe jest moją drugą aplikacją opracowaną w React. Stworzyłem ją jeszcze w trakcie kursu, lecz nie była ona jego częścią, jest to strona ecommerce mojego własnego pomysłu. Nie rozumiałem jeszcze wtedy do końca wszystkich hooków oraz funkcjonalności Reacta, lecz ten projekt pozwolił mi na postawienie dużego kroku na przód w nauce tego frameworka. Jest to moja druga aplikacja zawierająca implementację systemu płatności za pomocą Stripe oraz pierwsza z prostym Back-Endem napisanym za pomocą express. Pozwala użytkownikowi zrobić proste zakupy oraz zapłacić online przez system Stripe, oczywiście jest to płatność symulowana. Najważniejszym elementem strony jest koszyk użytkownika oparty o pamięć lokalną i posiada możliwość podania adresu dostawy, metody dostawy i oczywiście symulację płatności.`,
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
		shortDesc: `My project in VanillaJS, created to better understand this language and async functions. This project fetch data from TMDB and describe movies as slides. User can save movie as liked and add this to list of movies to watch.`,
		shortDescPL: `Jest to projekt stworzony w czystym JavaScript, opracowałem go w celu lepszego zrozumienia tego języka oraz asynchroniczności. Pobiera dane z TMDB oraz wyświetla w stworzonym przeze mnie sliderze. Użytkownik ma opcję dodania filmów do ulubionych oraz do listy do obejrzenia. Zapisuje je wtedy w przeglądarce za pomocą pamięci lokalnej.`,
		desc: `This project is created with VanillaJS, and my first project with asynchronous functions. It allows search movies with selected title or part of title (ex. Superman). It describes movies as slider of posters, after choose movie application describes information about it. User can add movie as liked or add to watchlist. App allow also watch trailer.`,
		descPL: `Jest to projekt stworzony z pomocą TMDB, jest to również pierwszy mój projekt, który stworzyłem w celu poćwiczenia asynchroniczności. Oparty jest o VanillaJS i ma za zadanie wyświetlać szukane przez użytkownika filmy w formie zaprojektowanego przeze mnie slidera. Po wybraniu filmu wyświetla on o nim informacje pod spodem. Umożliwia dodanie tytułu do ulubionych, listy do obejrzenia oraz obejrzenia zwiastuna bezpośrednio w aplikacji. Dzięki temu projektowi dobrze zrozumiałem czysty JavaScript oraz manipulacje obiektowym modelem dokumentu. Projekt ten również wykorzystuje pamięć lokalną do zapisu filmów użytkownika. `,
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
			{
				ico: <SiBootstrap />,
				name: "Bootstrap",
			},
		],
		github: "",
		demo: "http://corpio.pl/corpio/",
		id: 5,
		shortDesc: `Bigger project created for one from tailoring companies from my city. Website have admin panel and he can add groups or under groups of products. Admin have full possibilities to change all content of website. For security reasons code of this project isn't available for inspection.`,
		shortDescPL: `Większy projekt stworzony na bazie PHP dla jednej z miejscowych szwalni, ma opcję tworzenia grup i podgrup w katalogu z produktami oraz włączania lub wyłączania ich widoczności dla użytkownika. Administrator strony ma również pełną swobodę w dostosowywaniu jej do własnych potrzeb. Z powodów bezpieczeństwa nie udostępniono kodu strony do wglądu.`,
		desc: `Bigger project created for one from tailoring companies from my city. Website have admin panel and he can add groups or under groups of products. Admin have full possibilities to change all content of website. For security reasons code of this project isn't available for inspection.`,
		descPL: `Jest to projekt strony internetowej która ma za zadanie pełnić funkcję internetowego katalogu. Projekt jest oparty o PHP i pozwolił mi się nauczyć wielu pożytecznych rzeczy związanych właśnie z tym językiem. Wykorzystałem w nim również Bootstrapa który czyni tworzenie stron szybkim i przyjemnym oraz powoduje, że do ich budowy nie są wymagane większe umiejętności techniczne. Strona posiada panel logowania administratora oraz funkcjonalności pozwalające na nią wpływać. Administrator może tworzyć grupy oraz podgrupy produktów oraz zmieniać ich widoczność dla użytkownika. Posiada on niemal pełną kontrolę nad stroną i może modyfikować każdą treść na stronie.`,
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
		shortDesc: `My first own project with stripe integration, created to learn more about PHP and website deployment. Website have products saved in database and allows to create account. But creating account and options inside isn't most important part of this project.`,
		shortDescPL: `Jest to mój pierwszy projekt z integracją wtyczki Stripe stworzony w celu lepszego zapoznania się z językiem PHP oraz publikacją na stronach z hostingiem. Posiada katalog produktów oparty na bazach danych oraz możliwość założenia konta która jest funkcjonalnością poboczną.`,
		desc: "EN description",
		descPL: `Mój pierwszy projekt z integracją Stripe, posiada on bazę danych produktów oraz prostą symulację płatności. Strona jest oparta o PHP oraz VanillaJS, daje możliwość założenia konta oraz zapisu symulowanych transakcji. Posiada działający koszyk, możliwość dodania produktów do ulubionych oraz kilka innych opcji.`,
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
		shortDesc: `One form my first projects created with jQuery. It's simple calculator created to develop my knowledge about programming.`,
		shortDescPL: `Jeden z moich pierwszych projektów stworzonych przy pomocy jQuery. Jest to prosty przeglądarkowy kalkulator stworzony w celu rozwoju moich umiejętności
		programowania w JavaScript z wykorzystaniem biblioteki jQuery.`,
		desc: "EN description",
		descPL:
			"Jest to mój pierwszy projekt w oparciu o bibliotekę jQuery, prosty kalkulator umożliwiający również wykonywanie prostych równań. Stworzyłem go w celu rozwoju moich umiejętności programistycznych w JavaScript, tworzy on dwie wersje list, wersję graficzną równania wyświetlaną użytkownikowi oraz wersję produkcyjną która daje ostateczny wynik",
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
		shortDesc: `My first web app, simple shopping list allows to add or remove product.`,
		shortDescPL: `Moja pierwsza aplikacja internetowa stworzona za pomocą czystego JavaScript. Prosta lista zakupowa do której dodaje lub kasuje się produkty.`,
		desc: "EN description",
		descPL:
			"Jest to moja pierwsza aplikacja internetowa, stworzona w oparciu o pamięć lokalną przeglądarki. Posiada ona możliwość dodawania przedmiotów do listy oraz usuwania ich. Aplikacja została napisana w VanillaJS.",
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
		shortDesc: `My first website inspired not actual version of my uncle's company website.`,
		shortDescPL: `Jest to pierwsza stworzona przeze mnie strona internetowa dla której inspiracją była przestarzała strona jednej z lokalnych firm. Posiada podstawowe funkcjonalności w
		JavaScript.`,
		desc: "EN description",
		descPL:
			"Moja pierwsza strona internetowa stworzona z wykorzstaniem SASS, została zainspirowana starą stroną firmy mojego wujka. Posiada podstawowe funkcjonalności napisane za pomocą VanillaJS.",
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
	shortDesc: `I'm Oskar Dąbrowki, second degree student of Geoinformation. I have been interested in programming from second year of my first stage studies. Firstly, I was learning Python, but I decided to try other various languages and choose the best for me. At last, I decided to learn JavaScript because it's very interesting language and have much interesting libraries, frameworks and supersets. Today I learn about TypeScript, next I'll learn Angular because in my opinion it's good to know that framework. At now I use React for my projects, and I know React based static sites generators NextJS and GatsbyJS. I prefer first option because I feel it's more right for me, but I don't have any problems with second option. I will learn also React Native and Electron to create cross-platform applications. While learning about programming it's easy to get an impression the farther you go then less you know. But I thing every single part of new knowledge create awesome opportunities for you.`,
	shortDescPL: `Jestem Oskar Dąbrowski, obecnie kończę studia na kierunku Geoinformacja II stopnia. Programowaniem interesuję się od końca drugiego roku studiów licencjackich. Początkowo uczyłem się Pythona, postanowiłem, jednakże rozejrzeć się wśród innych języków programowania, aby poszukać coś najbardziej odpowiedniego dla mnie. Ostatecznie zdecydowałem się wybrać JavaScript, gdyż posiada on wiele ciekawych bibliotek, frameworków i supersetów. Aktualnie uczę się TypeScript, wraz z nim chcę poznać również Angulara, gdyż jest frameworkiem który w mojej ocenie warto poznać. Aktualnie programuję aplikacje w React, znam również zbudowane na jego bazie generatory stron statycznych NextJS i Gatsby JS. Preferuję jednakże pierwszy z nich, lecz nie mam problemu w pracy z drugim. Dalej mam zamiar poznać React Native i Electron, aby również umieć tworzyć aplikacje crossplatformowe. Ucząc się programowania łatwo odnieść wrażenie, iż im dalej w las tym więcej drzew, dla mnie, jednakże nie jest to problemem, gdyż każde z nich jest ciekawe i niesie nowe świetne możliwości.`,
	longDesc: [
		`I'm Oskar Dąbrowski, I started programming in college about two years ago. At this time, I learn programming in college and on my own. I was Geoinformation student, which is why I learnt most about Python. It was also Front-End Programming courses, but I have been learning about it before, so I had no problem to pass this exam. I've been interested more about this kind of programming so I've been developing my knowledge on my own. Firstly, I've learned from freeCodeCamp and books, but I decided to learn from other courses and platforms.`,
		`I live in Golub-Dobrzyń, it's small town near Toruń in Kujawsko-Pomorskie. I'm interested in books, movies and shooting. I like trips and explore new places. I'm interested also in computer graphic in second and third dimensions.`,
		`I took part in military training for student's, I made student practise in geodesy and cartography department of my town city hall. I also did an internship as surveyor's assistant in one from companies in Toruń.`,
	],
	longDescPL: [
		`Jestem Oskar Dąbrowski, programować zacząłem podczas studiów około dwa lata temu. Przez ten czas wraz uczyłem się programowania na studiach jak i na własną rękę. Jako iż byłem studentem Geoinformacji najwięcej uczyłem się języka Python, lecz miałem również zajęcia dotyczące budowy aplikacji internetowych. Interesowałem się Front-Endem jeszcze przed formalnymi kursami ze studiów, przez co łatwiej przez wszystko przeszedłem. Zainteresowałem się tymi zagadnieniami bardziej, co poskutkowało moim osobistym rozwojem w tym kierunku. Początkowo przechodziłem kursy na freeCodeCamp i czytałem książki. Lecz z czasem zacząłem czerpać wiedzę z różnych źródeł co znacznie poszerzyło moje horyzonty. Aktualnie porządkuję wiedzę za pomocą strony roadmap.sh udostępniającą świetną drogę, którą powinien przejść każdy Front-End Developer. Sam również poznaje inne zagadnienia, takie jak biblioteka Leaflet lub TURF będące Front-Endowymi bibliotekami geoinformacyjnymi.`,
		`Mieszkam w Golubiu-Dobrzyniu, małym mieście niedaleko Torunia w województwie Kujawsko-Pomorskim. Interesuje się książkami, filmami i sportem strzeleckim. Lubię również wyjeżdżać i poznawać nowe miejsca. Interesuję się również grafiką komputerową w różnych wariantach. Aktualnie jestem posiadaczem Affinity Suite, czyli zestawu narzędzi stworzonych przez firmę Serif które zakupiłem w połowie poprzedniego roku. Wykorzystałem je, żeby zaprojektować moją stronę portfolio, oraz korzystam z nich do innych projektów.`,
		`Brałem udział w szkoleniach dla studentów w programie Legii Akademickiej, odbywałem praktyki w ośrodku geodezji i kartografii Urzędu Miasta Golubia-Dobrzynia. Oraz staż absolwencki jako asystent Geodety w jednej z Toruńskich firm.`,
	],
};
