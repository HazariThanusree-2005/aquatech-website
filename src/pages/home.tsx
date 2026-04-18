import React from "react";
import { motion } from "framer-motion";
import { Phone, Droplets, CheckCircle2, PhoneCall, Shield, Zap, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import imgRO from "@assets/image_1776187443205.png";
import imgUV from "@assets/WhatsApp_Image_2026-04-14_at_10.34.23_PM_1776187463662.png";
import imgFilter1 from "@assets/image_1776231360833.png";
import imgFilter2 from "@assets/image_1776231394512.png";
import imgGeyserJuno from "@assets/image_1776231403965.png";
import imgGeyserArno from "@assets/image_1776231412976.png";
import imgGeyserSolarium from "@assets/image_1776231424379.png";
import imgGeyserInstant from "@assets/Screenshot_2025-12-03_214938_1776187500087.png";
import imgGeyserStorage from "@assets/Screenshot_2025-12-03_215022_1776187483290.png";
import imgSvcInstall from "@assets/image_1776232893893.png";
import imgSvcRepair from "@assets/Screenshot_2026-04-15_113207_1776232948688.png";
import imgSvcEmergency from "@assets/image_1776233016856.png";
import imgSvcAMC from "@assets/image_1776233034504.png";

const NAV_LINKS = [
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const WATER_FILTERS = [
  {
    name: "RO Water Purifier",
    price: "8,999",
    desc: "Advanced 7-stage RO purification. Removes bacteria, viruses, and dissolved salts. 10L tank capacity.",
    img: imgFilter1,
    badge: "Bestseller",
  },
  {
    name: "UV Water Filter",
    price: "11,499",
    desc: "Powerful UV technology kills 99.9% of bacteria and viruses. Ideal for areas with good municipal supply.",
    img: imgUV,
    badge: "Compact",
  },
  {
    name: "RO+UV Advanced Filter",
    price: "15,999",
    desc: "Best of both worlds. Multi-stage purification with RO + UV + TDS controller. Premium quality water.",
    img: imgFilter2,
    badge: "Premium",
  },
  {
    name: "Aqua Mineral RO System",
    price: "12,499",
    desc: "Mineral-enriched purified water. 8-stage filtration with TDS controller and auto shut-off float valve.",
    img: imgRO,
    badge: "Mineral Boost",
  },
];

const GEYSERS = [
  {
    name: "Instant Geyser 3L",
    price: "5,999",
    desc: "Instant hot water in seconds. Wall-mounted, compact design. Perfect for small families.",
    img: imgGeyserJuno,
    badge: "Fast Heating",
  },
  {
    name: "Arno Neo 10L Geyser",
    price: "7,499",
    desc: "Energy-saving 10L storage geyser with BEE 5-star rating and a durable glass-lined tank.",
    img: imgGeyserArno,
    badge: "5-Star BEE",
  },
  {
    name: "Solarium DLX 15L",
    price: "9,499",
    desc: "15L high-pressure resistant geyser. Superior insulation for longer heat retention. 8-bar pressure rating.",
    img: imgGeyserSolarium,
    badge: "High Pressure",
  },
  {
    name: "Solarium Care 10L",
    price: "8,299",
    desc: "10L storage geyser with anti-bacterial inner tank coating. Ideal for daily family use.",
    img: imgGeyserStorage,
    badge: "Anti-Bacterial",
  },
  {
    name: "25L Smart Geyser",
    price: "18,999",
    desc: "Large family solution. Smart temperature control, anti-corrosion heating element, safety protection.",
    img: imgGeyserInstant,
    badge: "Large Capacity",
  },
];

const GALLERY_IMAGES = [
  { src: imgFilter1, alt: "RO Water Purifier" },
  { src: imgFilter2, alt: "Aqua Innovica Filter" },
  { src: imgUV, alt: "UV Water Filter" },
  { src: imgGeyserJuno, alt: "Crompton Juno Instant Geyser" },
  { src: imgGeyserArno, alt: "Crompton Arno Neo Geyser" },
  { src: imgGeyserSolarium, alt: "Crompton Solarium Geyser" },
  { src: imgRO, alt: "Water Filter Unit" },
  { src: imgGeyserInstant, alt: "Storage Geyser" },
];

const SERVICES = [
  {
    img: imgSvcInstall,
    title: "Installation Services",
    desc: "Professional installation by certified technicians. Done right the first time.",
  },
  {
    img: imgSvcRepair,
    title: "Repair & Maintenance",
    desc: "Fast diagnosis and repair for all brands. Genuine spare parts used.",
  },
  {
    img: imgSvcEmergency,
    title: "Emergency Repairs",
    desc: "24-hour emergency service available. We come to you when you need us most.",
  },
  {
    img: imgSvcAMC,
    title: "Annual Service Contract",
    desc: "Keep your purifier running perfectly all year. Regular filter changes included.",
  },
];

const WHY_US = [
  "10+ Years Experience",
  "5000+ Happy Customers",
  "Same Day Service",
  "Genuine Products Only",
  "Affordable Pricing",
  "1 Year Service Warranty",
];

export default function Home() {
  const handleCall = () => (window.location.href = "tel:+918328048915");
  const handleWhatsApp = () =>
    (window.location.href = "whatsapp://send?phone=918328048915");

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-x-hidden font-sans">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Droplets className="text-primary w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-primary">AquaTech Services</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-primary font-semibold text-sm">
              <Phone className="w-4 h-4" />
              +91 83280 48915
            </div>
            <Button
              onClick={handleCall}
              className="rounded-full shadow-md font-semibold px-5 text-sm h-9"
            >
              <Phone className="w-4 h-4 mr-1.5" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-gradient-to-b from-white/60 via-white/30 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e930_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e930_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6 border border-blue-200 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              Free Installation on Selected Products
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Pure Water &{" "}
              <br className="hidden md:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-400">
                Reliable Heating
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed px-2"
            >
              We provide high-quality water filters and geysers along with
              expert installation and repair services for your home and
              business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0"
            >
              <Button
                onClick={handleCall}
                size="lg"
                className="w-full sm:w-auto text-base h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call +91 83280 48915
              </Button>
              <a
                href="#products"
                className="w-full sm:w-auto flex items-center justify-center h-12 px-8 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-colors bg-white/50 backdrop-blur-sm text-base"
              >
                View Products
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-10 bg-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top-tier solutions for your daily water and heating needs.
            </p>
          </div>

          {/* Water Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-extrabold text-gray-900">Water Filters</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WATER_FILTERS.map((product, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden border border-gray-100 hover:border-primary/40 transition-colors shadow-sm hover:shadow-md">
                    <div className="relative bg-gray-50 flex items-center justify-center" style={{ height: "220px" }}>
                      <Badge className="absolute top-3 left-3 bg-white text-primary hover:bg-white/90 shadow-sm border border-primary/20 text-xs">
                        {product.badge}
                      </Badge>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                        style={{ maxHeight: "200px" }}
                      />
                    </div>
                    <CardContent className="pt-5 pb-2 flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-2xl font-black text-primary mb-3">
                        ₹{product.price}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2 pb-5">
                      <Button
                        onClick={handleCall}
                        className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold h-11 transition-all hover:shadow-md hover:shadow-primary/20"
                      >
                        <PhoneCall className="w-4 h-4 mr-2" />
                        Call to Order
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Geysers */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-extrabold text-gray-900">Geysers</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GEYSERS.map((product, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden border border-gray-100 hover:border-orange-300 transition-colors shadow-sm hover:shadow-md">
                    <div className="relative bg-gray-50 flex items-center justify-center" style={{ height: "220px" }}>
                      <Badge className="absolute top-3 left-3 bg-white text-orange-600 hover:bg-white/90 shadow-sm border border-orange-200 text-xs">
                        {product.badge}
                      </Badge>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                        style={{ maxHeight: "200px" }}
                      />
                    </div>
                    <CardContent className="pt-5 pb-2 flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {product.name}
                      </h4>
                      <p className="text-2xl font-black text-orange-500 mb-3">
                        ₹{product.price}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.desc}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2 pb-5">
                      <Button
                        onClick={handleCall}
                        className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold h-11 transition-all hover:shadow-md hover:shadow-orange-500/20 border-0"
                      >
                        <PhoneCall className="w-4 h-4 mr-2" />
                        Call to Order
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-transparent border-y border-sky-300/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Expert Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional care for your appliances, available when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, idx) => (
              <Card
                key={idx}
                className="border-none shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden"
              >
                <div className="w-full overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-5 pb-6 text-center">
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-100 to-blue-50 rounded-[2rem] transform -rotate-3 z-0" />
                <img
                  src={imgFilter2}
                  alt="Reliable Service"
                  className="relative z-10 w-full rounded-2xl shadow-xl object-contain bg-white p-8"
                  style={{ maxHeight: "400px" }}
                />
                <div className="absolute -bottom-5 -right-4 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xl">100%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose AquaTech?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're not just selling products; we're providing peace of mind.
                As your local experts, we stand by the quality of our products
                and the reliability of our service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_US.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-gray-800">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="rounded-full w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Speak to an Expert{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products in Focus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality appliances built for Indian homes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center aspect-square hover:shadow-md transition-shadow"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-12 text-gray-900 text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <PhoneCall className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Ready for Pure Water?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Call us directly to get service or product details — no waiting,
              no forms.
            </p>

            <button
              onClick={handleCall}
              className="group flex flex-wrap items-center justify-center gap-3 text-2xl sm:text-4xl md:text-5xl font-black text-primary hover:text-sky-600 transition-colors mb-10 mx-auto break-all sm:break-normal"
            >
              +91 83280 48915
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleCall}
                size="lg"
                className="w-full sm:w-auto rounded-full h-12 px-8 text-base font-semibold shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full h-12 px-8 text-base font-semibold shadow-lg shadow-green-500/20 border-0"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="fixed bottom-5 right-4 z-50 bg-primary text-white rounded-full shadow-2xl flex items-center gap-2 px-4 py-3 sm:p-4"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 rounded-full border-[3px] border-primary animate-ping opacity-60 pointer-events-none" />
        <Phone className="w-5 h-5 shrink-0" />
        <span className="text-sm font-semibold sm:hidden">Call Now</span>
      </motion.button>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-14 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-sky-400" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                AquaTech Services
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-lg font-bold text-sky-400">
              +91 83280 48915
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800/50 text-gray-500 text-sm">
            © 2024 AquaTech Services. All Rights Reserved. Built for superior
            water solutions.
          </div>
        </div>
      </footer>
    </div>
  );
}
