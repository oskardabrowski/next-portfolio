import HomeHeader from "../components/Header";
import HomeAbout from "../components/HomeAbout";
import HomeSelectedProjects from "../components/HomeSelectedProjects";
import HomeSkills from "../components/HomeSkills";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<>
			<HomeHeader />
			<HomeAbout />
			<HomeSelectedProjects />
			<HomeSkills />
			<Contact />
		</>
	);
}
