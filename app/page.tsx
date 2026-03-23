'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const json = {
  "Business Name": "My Business",
  "Business Email": "mybusiness@example.com",
  "Business Address": "123 Jalan Bukit, Kuala Lumpur",
  "Business Phone": "+6012-3456789",
  "Primary Color": "#3b82f6",
  "Secondary Color": "#1e293b",
  "Accent Color 1": "#10b981",
  "Accent Color 2": "#f59e0b",
  "Logo URL": "/logo.png",
  "Language": "Both",
  "About Us & Vision Mission": {
    "About Us": "We are a team of dedicated professionals.",
    "Vision": "To be the best in our industry.",
    "Mission": "To provide excellent service to our customers."
  },
  "Products/Services": [
    { "Name": "Product 1", "Description": "This is product 1." },
    { "Name": "Product 2", "Description": "This is product 2." },
    { "Name": "Product 3", "Description": "This is product 3." }
  ],
  "Product Images (URLs)": [
    "/product1.png",
    "/product2.png",
    "/product3.png"
  ],
  "About Us Images (URLs)": [
    "/aboutus1.png",
    "/aboutus2.png"
  ],
  "Social Media Links": {
    "Facebook": "https://www.facebook.com/mybusiness",
    "Instagram": "https://www.instagram.com/mybusiness",
    "Twitter": "https://www.twitter.com/mybusiness"
  }
};

const language = json["Language"];
const isBahasaMalaysia = language === "Bahasa Malaysia";
const isEnglish = language === "English";
const isBoth = language === "Both";

const t = (key) => {
  if (isBahasaMalaysia) return translations[key]["Bahasa Malaysia"];
  if (isEnglish) return translations[key]["English"];
  if (isBoth) return `${translations[key]["English"]} / ${translations[key]["Bahasa Malaysia"]}`;
};

const translations = {
  "Hero Title": {
    "English": "Welcome to My Business",
    "Bahasa Malaysia": "Selamat Datang ke My Business"
  },
  "About Us": {
    "English": "About Us",
    "Bahasa Malaysia": "Tentang Kami"
  },
  "Vision": {
    "English": "Vision",
    "Bahasa Malaysia": "Visi"
  },
  "Mission": {
    "English": "Mission",
    "Bahasa Malaysia": "Misi"
  },
  "Products/Services": {
    "English": "Products/Services",
    "Bahasa Malaysia": "Produk/Perkhidmatan"
  },
  "Contact Us": {
    "English": "Contact Us",
    "Bahasa Malaysia": "Hubungi Kami"
  },
  "Name": {
    "English": "Name",
    "Bahasa Malaysia": "Nama"
  },
  "Email": {
    "English": "Email",
    "Bahasa Malaysia": "Emel"
  },
  "Message": {
    "English": "Message",
    "Bahasa Malaysia": "Mesej"
  },
  "Submit": {
    "English": "Submit",
    "Bahasa Malaysia": "Hantar"
  }
};

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div>
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Image src={json["Logo URL"]} width={50} height={50} alt="Logo" />
          <ul className="flex items-center space-x-4">
            <li><a href="#about" className="text-sm text-gray-600 hover:text-gray-900">{t("About Us")}</a></li>
            <li><a href="#products" className="text-sm text-gray-600 hover:text-gray-900">{t("Products/Services")}</a></li>
            <li><a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">{t("Contact Us")}</a></li>
          </ul>
        </div>
      </nav>
      <section id="hero" className="h-screen bg-gradient-to-b from-[#3b82f6] to-[#1e293b] flex items-center justify-center">
        <div className="container mx-auto px-4 py-2 text-center text-white">
          <h1 className="text-5xl font-bold">{t("Hero Title")}</h1>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 py-2">
          <h2 className="text-3xl font-bold mb-4">{t("About Us")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg text-gray-600">{json["About Us & Vision Mission"]["About Us"]}</p>
            </div>
            <div>
              <Image src={json["About Us Images (URLs)"][0]} width={500} height={300} alt="About Us Image" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t("Vision")}</h3>
              <p className="text-lg text-gray-600">{json["About Us & Vision Mission"]["Vision"]}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t("Mission")}</h3>
              <p className="text-lg text-gray-600">{json["About Us & Vision Mission"]["Mission"]}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 py-2">
          <h2 className="text-3xl font-bold mb-4">{t("Products/Services")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {json["Products/Services"].map((product, index) => (
              <div key={index} className="bg-white shadow-md p-4">
                <Image src={json["Product Images (URLs)"][index]} width={300} height={200} alt="Product Image" />
                <h3 className="text-2xl font-bold mb-2">{product.Name}</h3>
                <p className="text-lg text-gray-600">{product.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 py-2">
          <h2 className="text-3xl font-bold mb-4">{t("Contact Us")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">{t("Name")}</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border border-gray-400" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">{t("Email")}</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border border-gray-400" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">{t("Message")}</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border border-gray-400" />
                </div>
                <button type="submit" className="bg-[#3b82f6] text-white py-2 px-4 rounded-md">{t("Submit")}</button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-lg text-gray-600"><MapPin /> {json["Business Address"]}</p>
              <p className="text-lg text-gray-600"><Phone /> {json["Business Phone"]}</p>
              <p className="text-lg text-gray-600"><Mail /> {json["Business Email"]}</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} {json["Business Name"]}</p>
            <ul className="flex items-center space-x-4">
              {json["Social Media Links"]["Facebook"] && <li><a href={json["Social Media Links"]["Facebook"]} target="_blank" rel="noopener noreferrer"><Image src="/facebook.png" width={20} height={20} alt="Facebook" /></a></li>}
              {json["Social Media Links"]["Instagram"] && <li><a href={json["Social Media Links"]["Instagram"]} target="_blank" rel="noopener noreferrer"><Image src="/instagram.png" width={20} height={20} alt="Instagram" /></a></li>}
              {json["Social Media Links"]["Twitter"] && <li><a href={json["Social Media Links"]["Twitter"]} target="_blank" rel="noopener noreferrer"><Image src="/twitter.png" width={20} height={20} alt="Twitter" /></a></li>}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}