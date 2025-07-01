import React, { useState } from "react";
import {
  Instagram,
  Linkedin,
  MessageSquare,
  Home,
  ShoppingCart,
} from "lucide-react";

import { products } from "../data/product";

const CatalogPage = ({ onNavigate, onLogout, onAddToCart, cartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("Mentoring");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex justify-between items-center h-20 px-4">
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.webp"
            alt="Logo"
            style={{ width: "200px", height: "200px" }}
            className="object-contain"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("checkout")}
            className="relative bg-[#00966C] text-white px-4 py-2 rounded-lg hover:bg-[#007A59] transition-colors"
          >
            Checkout
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-1 text-[#00966C] hover:text-[#007A59]"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Konten utama diberi padding top untuk menghindari tertutup header */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#002F6C] mb-2">
            Product Catalog
          </h2>
          <p className="text-gray-700">Pilih jalur belajar Anda</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            {Object.keys(products).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#00966C] text-white"
                    : "text-gray-600 hover:text-[#002F6C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products[selectedCategory].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-semibold px-2.5 py-0.5 rounded">
                    {selectedCategory}
                  </span>
                  <ShoppingCart className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold text-[#002F6C] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#00966C]">
                    {product.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#00966C] text-white px-4 py-2 rounded-lg hover:bg-[#007A59] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-[#002F6C] mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/temudataku/"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Instagram className="w-6 h-6 text-[#002F6C]" />
            </a>
            <a
              href="https://www.linkedin.com/company/temudataku/?originalSubdomain=id"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-[#002F6C]" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6285156750480&text&type=phone_number&app_absent=0"
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-[#002F6C]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
