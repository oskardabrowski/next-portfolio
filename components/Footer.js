import styles from "../styles/StyleBundle";

const { FooterStyle } = styles;

const Footer = () => {
	return (
		<FooterStyle>
			<div className="FooterCopy">
				Copyright &copy; Oskar Dąbrowski {new Date().getFullYear()}
			</div>
			<div className="FooterImage">
				<img src="FooterSVG.svg" alt="footerImage" />
			</div>
		</FooterStyle>
	);
};

export default Footer;
