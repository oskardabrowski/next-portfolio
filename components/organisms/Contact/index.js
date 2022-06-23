import ContactOptions from "./styles";
import ContactTitle from "../../molecules/Title4";
import { useContext, useState } from "react";
import { AppContext } from "../Context";
import { aboutMe } from "../database";
import Swal from "sweetalert2";
import { AiOutlineLoading } from "react-icons/ai";

const Contact = () => {
	const { appLang } = useContext(AppContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sending, setSending] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			name: name,
			email: email,
			message: message,
		};

		const response = await fetch(
			"https://portfolioserver123.herokuapp.com/mail-contact",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const res = await response.json();
		if (res.msg == "Success") {
			setName("");
			setEmail("");
			setMessage("");
			setSending(false);
			let titleVar, textVar;
			if (appLang === "EN") {
				titleVar = "Email send!";
				textVar = "Thank you for contact";
			} else {
				titleVar = "Email wysłany";
				textVar = "Dziękuję za kontakt";
			}
			Swal.fire({
				icon: "success",
				title: titleVar,
				text: textVar,
			});
		} else {
			setSending(false);
			let titleVar, textVar;
			if (appLang === "EN") {
				titleVar = "Something went wrong!";
				textVar = "Please try agin later";
			} else {
				titleVar = "Coś poszło źle!";
				textVar = "Sprubój ponownie później";
			}
			Swal.fire({
				icon: "error",
				title: titleVar,
				text: textVar,
			});
		}
	};

	return (
		<ContactOptions data-scroll-section>
			<ContactTitle title={appLang === "EN" ? "Contact options" : "Kontakt"} />
			<div className="ContactOptions">
				<form className="ContactOptions-form" onSubmit={(e) => handleSubmit(e)}>
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
							onChange={(e) => {
								setName(e.target.value);
							}}
							required
							value={name}
						/>
					</span>
					<span
						className="ContactOptions-form-span"
						data-scroll
						data-scroll-class="SpanLeftVisible"
						data-scroll-offset="15%"
					>
						<input
							type="email"
							placeholder="email@mail.com"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
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
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							value={message}
						></textarea>
					</span>
					<span
						className="ContactOptions-form-button"
						data-scroll
						data-scroll-class="LastSpanLeftVisible"
						data-scroll-offset="10%"
					>
						<button onClick={() => setSending(true)}>
							{!sending && (
								<span>
									{appLang === "EN" ? "Send message" : "Wyślij wiadomość"}
								</span>
							)}
							{sending && <AiOutlineLoading className="SendingMessage" />}
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
