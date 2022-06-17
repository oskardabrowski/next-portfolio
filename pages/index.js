import HomeHeader from "../components/HomeHeader";
import HomeAbout from "../components/HomeAbout";
import HomeSelectedProjects from "../components/HomeSelectedProjects";
import HomeSkills from "../components/HomeSkills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
