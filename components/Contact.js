import styles from "../styles/StyleBundle";

const { ContactOptions } = styles;

const Contact = () => {
	return (
		<ContactOptions data-scroll-section>
			<div className="ContactHeader">
				<div
					className="ContactHeader-title"
					data-scroll
					data-scroll-class="TitleVisible"
					data-scroll-offset="10%"
				>
					Contact options<span>.</span>
				</div>
				<div
					className="ContactHeader-el1"
					data-scroll
					data-scroll-class="El1Visible"
					data-scroll-offset="15%"
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div
					className="ContactHeader-el2"
					data-scroll
					data-scroll-class="El2Visible"
					data-scroll-offset="17.5%"
				>
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
					<p
						className="ContactOptions-form-header"
						data-scroll
						data-scroll-class="HeaderVisible"
						data-scroll-offset="10%"
					>
						Contact form<span>.</span>
					</p>
					<span
						className="ContactOptions-form-span"
						data-scroll
						data-scroll-class="SpanLeftVisible"
						data-scroll-offset="10%"
					>
						<input type="text" placeholder="name / company" required />
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
						<textarea placeholder="Your message" rows="7"></textarea>
					</span>
					<span
						className="ContactOptions-form-button"
						data-scroll
						data-scroll-class="LastSpanLeftVisible"
						data-scroll-offset="20%"
					>
						<button>Send message</button>
					</span>
				</form>
				<div className="ContactOptions-other">
					<span
						className="ContactOptions-other-el"
						data-scroll
						data-scroll-class="OtherVisible"
						data-scroll-offset="10%"
					>
						email@email.pl
					</span>
					<span
						className="ContactOptions-other-el"
						data-scroll
						data-scroll-class="OtherVisible"
						data-scroll-offset="15%"
					>
						linkedin@linekdin.pl
					</span>
				</div>
			</div>
		</ContactOptions>
	);
};

export default Contact;
