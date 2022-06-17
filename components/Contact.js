import styles from "../styles/StyleBundle";

const { ContactOptions } = styles;

const Contact = () => {
	return (
		<ContactOptions>
			<div className="ContactHeader">
				<div className="ContactHeader-title">
					Contact options<span>.</span>
				</div>
				<div className="ContactHeader-el1">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="ContactHeader-el2">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="ContactOptions">
				<form className="ContactOptions-form">
					<p className="ContactOptions-form-header">
						Contact form<span>.</span>
					</p>
					<span>
						<input type="text" placeholder="name / company" required />
					</span>
					<span>
						<input type="email" placeholder="email@mail.com" />
					</span>
					<span>
						<textarea placeholder="Your message" rows="7"></textarea>
					</span>
					<span>
						<button type="submit">Send message</button>
					</span>
				</form>
				<div className="ContactOptions-other">
					<span>email@email.pl</span>
					<span>linkedin@linekdin.pl</span>
				</div>
			</div>
		</ContactOptions>
	);
};

export default Contact;
