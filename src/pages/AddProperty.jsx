import { useState } from "react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    propertyName: "",
    price: "",
    priceInUSD:"",
    bedrooms: "",
    bathrooms: "",
    location: "",
    imageURL: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE = import.meta.env.VITE_API_URL;

    const res = await fetch(`${API_BASE}/api/properties`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (res.ok) {
      alert("Property added successfully!");
      setFormData({
        propertyName: "",
        price: "",
        priceInUSD: "",
        bedrooms: "",
        bathrooms: "",
        location: "",
        imageURL: ""
      });
      // 🔁 Redirect to property listing page to see new entry
      window.location.href = "/properties";
    } else {
      alert("Failed to add property: " + result.error);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Property Name", name: "propertyName" },
          { label: "Price (GHS)", name: "price" },
          { label: "Price in USD($)", name: "priceInUSD", type: "number" },
          { label: "Bedrooms", name: "bedrooms", type: "number" },
          { label: "Bathrooms", name: "bathrooms", type: "number" },
          { label: "Location", name: "location" },
          { label: "Image URL", name: "imageURL" }
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
