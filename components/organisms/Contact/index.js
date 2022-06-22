import ContactOptions from "./styles";
import ContactTitle from "../../molecules/Title4";
import { useContext } from "react";
import { AppContext } from "../Context";
import { aboutMe } from "../database";

const Contact = () => {
	const { appLang } = useContext(AppContext);
	return (
		<ContactOptions data-scroll-section>
			<ContactTitle title={appLang === "EN" ? "Contact options" : "Kontakt"} />
			<div className="ContactOptions">
				<form className="ContactOptions-form">
					<p
						className="ContactOptions-form-header"
						data-scroll
						data-scroll-class="HeaderVisible"
						data-scroll-offset="10%"
					>
						{appLang === "EN" ? "Contact form" : "Formularz kontaktowy"}
						<span>.</span>
					</p>
					<span
						className="ContactOptions-form-span"
						data-scroll
						data-scroll-class="SpanLeftVisible"
						data-scroll-offset="10%"
					>
						<input
							type="text"
							placeholder={appLang === "EN" ? "name / company" : "imię / firma"}
							required
						/>
					</span>
					<span
						className="ContactOptions-form-span"
						data-scroll
						data-scroll-class="SpanLeftVisible"
						data-scroll-offset="15%"
					>
						<input type="email" placeholder="email@mail.com" />
					</span>
					<span
						className="ContactOptions-form-span"
						data-scroll
						data-scroll-class="SpanLeftVisible"
						data-scroll-offset="20%"
					>
						<textarea
							placeholder={
								appLang === "EN" ? "Your message" : "Twoja wiadomość"
							}
							rows="7"
						></textarea>
					</span>
					<span
						className="ContactOptions-form-button"
						data-scroll
						data-scroll-class="LastSpanLeftVisible"
						data-scroll-offset="10%"
					>
						<button>
							{appLang === "EN" ? "Send message" : "Wyślij wiadomość"}
						</button>
					</span>
				</form>
				<div className="ContactOptions-other">
					{aboutMe.contactOptions.map((el, index) => {
						return (
							<span
								key={index}
								className="ContactOptions-other-el"
								data-scroll
								data-scroll-class="OtherVisible"
								data-scroll-offset="10%"
							>
								{el}
							</span>
						);
					})}
				</div>
			</div>
		</ContactOptions>
	);
};

export default Contact;
