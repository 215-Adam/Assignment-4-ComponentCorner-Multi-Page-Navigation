import './Footer.css'

function Footer({ storeName, email, location }) {
	return (
		<footer id="contact" className="site-footer">
			<div className="footer-content">
				<div className="footer-brand-block">
					<p className="footer-brand">{storeName}</p>
					<p>{location}</p>
				</div>
				<div className="footer-links">
					<h2>Explore</h2>
					<a href="#shop">Shop all scents</a>
					<a href="#approach">Our approach</a>
				</div>
				<div className="footer-contact">
					<h2>Get in touch</h2>
					<a href={`mailto:${email}`}>{email}</a>
					<p>Good miles start with a good morning.</p>
				</div>
			</div>
			<div className="footer-bottom">
				<span>&copy; {new Date().getFullYear()} {storeName}</span>
				<span>Made for the road ahead.</span>
			</div>
		</footer>
	)
}

export default Footer
