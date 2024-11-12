import ProductCards from "./ProductCards";

function Products() {
  const products = [
    {
      categoryId: "1",
      image: "/assets/products/airpodmax.png",
      _id: "1",
      name: "Air Pods Max",
      price: "$500.00",
      desc: "AirPods Max delivers immersive sound with active noise cancellation, spatial audio, and a premium over-ear design for an exceptional listening experience.",
    },
    {
      categoryId: "2",
      image: "/assets/products/applewatch.png",
      _id: "2",
      name: "Apple Watch",
      price: "$400.00",
      desc: "Apple Watch offers seamless connectivity, health tracking, and fitness features in a sleek design, helping you stay connected and active throughout the day.",
    },
    {
      categoryId: "3",
      image: "/assets/products/iphone15.png",
      _id: "3",
      name: "iphone 15",
      price: "$300.00",
      desc: "iPhone 15 delivers powerful performance, a stunning display, and advanced camera features for an exceptional smartphone experience.",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel8.png",
      _id: "4",
      name: "Pixel-8",
      price: "$200.00",
      desc: "Google Pixel 8 offers a powerful camera, vibrant display, and AI features for an exceptional Android experience with fast performance.",
    },
    {
      categoryId: "5",
      image: "/assets/products/echodot.png",
      _id: "5",
      name: "Echo Dot",
      price: "$99.00",
      desc: "A compact smart speaker with Alexa, offering voice control for music, smart home devices, and hands-free assistance.",
    },
    {
      categoryId: "6",
      image: "/assets/products/googlepixelbuds.png",
      _id: "6",
      name: "Galaxy Pixel Buds",
      price: "$99.00",
      desc: "True wireless earbuds with high-quality sound, seamless Android integration, and built-in Google Assistant.",
    },
    {
      categoryId: "7",
      image: "/assets/products/maccbookpro.png",
      _id: "7",
      name: "Apple MaccBook Pro 16",
      price: "$100.00",
      desc: "A high-performance laptop with the M3 chip, stunning display, and long battery life, perfect for professionals.",
    },
    {
      categoryId: "8",
      image: "/assets/products/googlenesthub.png",
      _id: "8",
      name: "Google Nest Hub (2nd gen)",
      price: "$400.00",
      desc: "A smart display with voice control, improved sound, and sleep tracking, ideal for managing your smart home.",
    },
  ];
  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold mb-7">Our Top Products</h2>
      <ProductCards products={products} />
    </section>
  );
}

export default Products;
