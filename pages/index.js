import HomeHeader from "../components/organisms/Home/Header";
import HomeAbout from "../components/organisms/Home/About";
import HomeSelectedProjects from "../components/organisms/Home/Projects";
import HomeSkills from "../components/organisms/Home/Skills";
import Contact from "../components/organisms/Contact";
import Footer from "../components/organisms/Footer";

export default function Home() {
	return (
		<>
			<HomeHeader />
			<HomeAbout />
			<HomeSelectedProjects />
			<HomeSkills />
			<Contact />
			<Footer />
		</>
	);
}
