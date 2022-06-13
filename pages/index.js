import HomeHeader from "../components/Header";
import HomeAbout from "../components/HomeAbout";
import HomeSelectedProjects from "../components/HomeSelectedProjects";

export default function Home() {
	return (
		<>
			<HomeHeader />
			<HomeAbout />
			<HomeSelectedProjects />
		</>
	);
}
