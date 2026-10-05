import { useState } from 'react'
import './App.css'
import CartItem from './components/CartItem'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'

function App() {
  const products = [
    {
      id: 1,
      name: 'Coastal Cedar',
      price: 12.99,
      image: 'https://placehold.co/600x400/dce9df/193c30?text=Coastal+Cedar',
      description: 'Warm cedarwood meets a clean ocean breeze. A calm start to every drive.',
    },
    {
      id: 2,
      name: 'Citrus Run',
      price: 14.99,
      image: 'https://placehold.co/600x400/f4dfc8/533a20?text=Citrus+Run',
      description: 'Bright bergamot and sweet orange bring a little lift to the daily commute.',
    },
    {
      id: 3,
      name: 'After Rain',
      price: 12.99,
      image: 'https://placehold.co/600x400/dde5ed/283d50?text=After+Rain',
      description: 'Fresh green leaves, cool air, and the quiet feeling of a road after rain.',
    },
    {
      id: 4,
      name: 'Vanilla Cruise',
      price: 13.99,
      image: 'https://placehold.co/600x400/f3ead8/5a4526?text=Vanilla+Cruise',
      description: 'Soft vanilla bean and a touch of amber for slow, easy weekend drives.',
    },
    {
      id: 5,
      name: 'Midnight Pine',
      price: 15.99,
      image: 'https://placehold.co/600x400/d3ded6/14392e?text=Midnight+Pine',
      description: 'Deep pine needles and cool mountain air for late-night highway miles.',
    },
    {
      id: 6,
      name: 'Lavender Lane',
      price: 13.99,
      image: 'https://placehold.co/600x400/e6e0ef/3f3456?text=Lavender+Lane',
      description: 'Calming lavender and light eucalyptus to take the edge off rush hour.',
    },
  ]

  const [cart, setCart] = useState([])

  function addToCart(product) {
    // Each cart entry gets its own cartId so the same scent can be added more
    // than once and still be removed one at a time.
    const cartItem = { ...product, cartId: crypto.randomUUID() }
    setCart([...cart, cartItem])
    console.log('Added to cart:', cartItem)
  }

  function removeFromCart(cartId) {
    setCart(cart.filter((item) => item.cartId !== cartId))
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <div id="top" className="app">
      <Header storeName="freshride" cartCount={cart.length} />
      <Hero
        title="Make every drive feel like a getaway."
        subtitle="Thoughtful scents for the miles you make every day."
        ctaText="Find your fresh"
      />
      <main id="shop" className="shop-section">
        <div className="section-heading">
          <p className="eyebrow">Small-batch car fragrance</p>
          <h2>Pick your next favorite</h2>
          <p>Six considered scents. A better-feeling ride.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        <section id="cart" className="cart-section">
          <div className="section-heading">
            <p className="eyebrow">Ready for the road</p>
            <h2>Your cart</h2>
          </div>
          {cart.length === 0 ? (
            <p className="cart-empty">
              Your cart is empty. Pick a scent above to get started.
            </p>
          ) : (
            <div className="cart-panel">
              <ul className="cart-list">
                {cart.map((item) => (
                  <CartItem key={item.cartId} item={item} onRemove={removeFromCart} />
                ))}
              </ul>
              <div className="cart-total">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer
        storeName="freshride"
        email="hello@freshride.com"
        location="Made for the open road."
      />
    </div>
  )
}

export default App
