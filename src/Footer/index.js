import { Span, Wrraper, Email, Article, Github, Facebook, Linkedin, Instagram, Icon } from "./styled";


const Footer = () => {
	return (
		<Wrraper>
			<Span>
				Let’s talk!
			</Span>
			<Email>mateusz.pasko.r@gmail.com</Email>
			<Article>
				I am always open to new projects and I like to overcome difficulties. I can do impossible things right away, but miracles take a few days. I'm constantly learning and taking steps, but I need support in my development and you can help me with that
			</Article>
			<Icon>
				<Github />
				<Facebook />
				<Linkedin />
				<Instagram />
			</Icon>
			</Wrraper>

	)
};

export default Footer; 