import React, { useState } from "react";
import { Instagram, Linkedin, MessageSquare, Lock } from "lucide-react";

const LoginPage = ({ onNavigate, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      onLogin();
      onNavigate("catalog");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-gray-50 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00966C] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#002F6C]">Selamat Datang</h2>
          <p className="text-gray-700">Masuk ke TemuDataku</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00966C] focus:border-transparent"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00966C] focus:border-transparent"
              placeholder="Masukkan password"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#00966C] text-white py-3 rounded-lg font-semibold hover:bg-[#007A59] transition-colors"
          >
            Login
          </button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate("home")}
            className="text-[#00966C] hover:text-[#007A59] font-medium"
          >
            ← Kembali ke Beranda
          </button>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Connect with us:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/temudataku/"
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Instagram className="w-5 h-5 text-[#002F6C]" />
            </a>
            <a
              href="https://www.linkedin.com/company/temudataku/?originalSubdomain=id"
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[#002F6C]" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6285156750480&text&type=phone_number&app_absent=0"
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-[#002F6C]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
