import './Header.css'

function Header({ storeName, cartCount }) {
	return (
		<header className="site-header">
			<a className="store-brand" href="#top" aria-label={`${storeName} home`}>
				<span className="brand-mark" aria-hidden="true">F</span>
				<span>{storeName}</span>
			</a>
			<nav className="site-nav" aria-label="Main navigation">
				<a href="#shop">Shop scents</a>
				<a href="#approach">Our approach</a>
				<a href="#contact">Contact</a>
				<a className="cart-container" href="#cart" aria-label={`Cart, ${cartCount} items`}>
					<span className="cart-icon">🛒</span>
					<span className="cart-count">{cartCount}</span>
				</a>
			</nav>
		</header>
	)
}

export default Header
