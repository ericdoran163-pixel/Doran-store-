import React, { useState } from "react";
import {
  Search, ShoppingBag, Heart, Menu, X,
  ArrowRight, Star, Tag, User
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Streetwear Jacket",
    price: 45000,
    category: "Men",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700",
    tag: "BEST SELLER",
    sponsored: false
  },
  {
    id: 2,
    name: "Luxury Sneakers",
    price: 65000,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    tag: "NEW",
    sponsored: true
  },
  {
    id: 3,
    name: "Elegant Women's Outfit",
    price: 38000,
    category: "Women",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700",
    tag: "TRENDING",
    sponsored: false
  },
  {
    id: 4,
    name: "Classic Fashion Sneakers",
    price: 55000,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700",
    tag: "POPULAR",
    sponsored: true
  },
  {
    id: 5,
    name: "Modern Fashion Bag",
    price: 32000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",
    tag: "NEW",
    sponsored: false
  },
  {
    id: 6,
    name: "Premium Casual Outfit",
    price: 42000,
    category: "Men",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700",
    tag: "HOT",
    sponsored: false
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);

  const filtered = products.filter(product =>
    (category === "All" || product.category === category) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">

      <div className="announcement">
        FREE DELIVERY ON SELECT ORDERS • WELCOME TO DORAN STORE
      </div>

      <header className="header">
        <button className="icon-btn" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>

        <h1 className="logo">DORAN<span>.</span></h1>

        <div className="header-actions">
          <button className="icon-btn">
            <User />
          </button>
          <button className="icon-btn cart-icon">
            <ShoppingBag />
            <span>{cart.length}</span>
          </button>
        </div>
      </header>

      {menu && (
        <nav className="mobile-menu">
          {["All", "Men", "Women", "Shoes", "Accessories"].map(item => (
            <button key={item} onClick={() => {
              setCategory(item);
              setMenu(false);
            }}>{item}</button>
          ))}
        </nav>
      )}

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">THE NEW FASHION DESTINATION</p>
            <h2>STYLE IS<br />YOUR <i>IDENTITY.</i></h2>
            <p>Discover exceptional fashion. Shop the latest trends in clothing, shoes and accessories.</p>
            <button className="shop-btn" onClick={() =>
              document.getElementById("shop").scrollIntoView({behavior:"smooth"})
            }>
              SHOP COLLECTION <ArrowRight size={18}/>
            </button>
          </div>
        </section>

        <section className="categories">
          <div>
            <span>01</span>
            <h3>MEN</h3>
          </div>
          <div>
            <span>02</span>
            <h3>WOMEN</h3>
          </div>
          <div>
            <span>03</span>
            <h3>SHOES</h3>
          </div>
          <div>
            <span>04</span>
            <h3>ACCESSORIES</h3>
          </div>
        </section>

        <section className="shop" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2>EXPLORE COLLECTION</h2>
            </div>
            <span>{filtered.length} PRODUCTS</span>
          </div>

          <div className="search-box">
            <Search size={19}/>
            <input
              placeholder="Search fashion, shoes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="filters">
            {["All", "Men", "Women", "Shoes", "Accessories"].map(item => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="products">
            {filtered.map(product => (
              <article className="product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name}/>
                  <span className="product-tag">{product.tag}</span>
                  {product.sponsored && (
                    <span className="sponsored">AD · PARTNER</span>
                  )}
                  <button className="wishlist"><Heart size={18}/></button>
                </div>

                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <strong>{product.price.toLocaleString()} RWF</strong>
                  <button className="add-btn" onClick={() => addToCart(product)}>
                    ADD TO BAG +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo">
          <div>
            <p>THE DORAN EXPERIENCE</p>
            <h2>FASHION WITHOUT LIMITS.</h2>
            <span>Discover new brands. Find your own style.</span>
          </div>
          <Tag size={55}/>
        </section>
      </main>

      <footer>
        <h2>DORAN<span>.</span></h2>
        <p>YOUR STYLE. YOUR WORLD.</p>
        <p>© 2026 DORAN STORE. ALL RIGHTS RESERVED.</p>
      </footer>

      {cart.length > 0 && (
        <div className="cart-notice">
          <ShoppingBag size={18}/>
          {cart.length} item(s) in your bag
        </div>
      )}
    </div>
  );
}
