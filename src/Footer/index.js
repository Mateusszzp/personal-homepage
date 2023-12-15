
import { Span, Wrraper, Email, Article, Github, Facebook, Linkedin, Instagram, Icon } from "./styled";



const Footer = () => {
	return (
		<Wrraper>
			<Span href="https://github.com/Mateusszzp">
				Let’s talk!
			</Span>
			<Email href="mailto:mateusz.pasko.r@gmail.com">mateusz.pasko.r@gmail.com</Email>
			<Article>
				I am always open to new projects and I like to overcome difficulties. I can do impossible things right away, but miracles take a few days. I'm constantly learning and taking steps, but I need support in my development and you can help me with that
			</Article>
			<Icon>
				<a href='https://github.com/Mateusszzp' target="_blank"><Github /></a>
				<a href='https://www.facebook.com/profile.php?id=100009270154614' target="_blank"><Facebook /></a>
				<a href='https://www.linkedin.com/in/mateusz-pa%C5%9Bko-70911a245/' target="_blank"><Linkedin /></a>
				<Instagram />
			</Icon>
		</Wrraper>

	)
};

export default Footer; 