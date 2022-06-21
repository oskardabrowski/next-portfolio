import HomeHeader from "../components/organisms/Home/Header";
import HomeAbout from "../components/organisms/Home/About";
import HomeSelectedProjects from "../components/organisms/Home/Projects";
import HomeSkills from "../components/organisms/Home/Skills";

export default function Home() {
	return (
		<>
			<HomeHeader />
			<HomeAbout />
			<HomeSelectedProjects />
			<HomeSkills />
		</>
	);
}
