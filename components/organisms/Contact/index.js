import ContactOptions from "./styles";
import ContactTitle from "../../molecules/Title4";

const Contact = () => {
	return (
		<ContactOptions data-scroll-section>
			<ContactTitle title="Contact options" />
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
						data-scroll-offset="10%"
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
