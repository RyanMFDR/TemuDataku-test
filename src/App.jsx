import React, { useState } from "react";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CatalogPage from "./components/CatalogPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  console.log("Current Page:", currentPage);

  function handleNavigation(page) {
    if (page === "catalog" && !isLoggedIn) {
      setCurrentPage("login");
    } else {
      setCurrentPage(page);
    }
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setCurrentPage("catalog");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setCartItems([]); // Kosongkan keranjang saat logout
    setCurrentPage("home");
  }

  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  }

  function renderPage() {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigation} />;
      case "login":
        return (
          <LoginPage onNavigate={handleNavigation} onLogin={handleLogin} />
        );
      case "catalog":
        return (
          <CatalogPage
            onNavigate={handleNavigation}
            onLogout={handleLogout}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        );
      case "checkout":
        return (
          <CheckoutPage
            cartItems={cartItems}
            onNavigate={handleNavigation}
            onRemoveFromCart={handleRemoveFromCart}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  }

  return <div className="App">{renderPage()}</div>;
}

export default App;
