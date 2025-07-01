import { Home } from "lucide-react";

const CheckoutPage = ({ cartItems, onNavigate, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => {
    const angka = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + angka;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#002F6C]">Checkout</h2>
          <button
            onClick={() => onNavigate("catalog")}
            className="flex items-center text-[#00966C] hover:text-[#007A59]"
          >
            <Home className="w-4 h-4 mr-1" />
            Back to Catalog
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-700">Keranjang Anda kosong.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item, index) => (
                <li key={index} className="py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-[#002F6C]">
                        {item.name}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                      <span className="text-[#00966C] font-bold">
                        {item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(index)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xl font-bold text-[#002F6C]">Total:</span>
              <span className="text-xl font-bold text-[#00966C]">
                Rp {total.toLocaleString()}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
