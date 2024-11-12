import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="p-8 ml-16 mr-48 mt-24">
      <div className="grid grid-cols-2 rounded-lg min-h-[60vh] bg-[#f4f8f9] mt-10 w-[110%] shadow-lg">
        <div className="flex flex-col justify-center p-16 gap-4">
          <span className="inline-block rounded-full px-2 py-1 text-xs bg-[#febc26] w-fit mb-4">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-[3.5rem] font-semibold leading-none text-black text-left mb-7">
            Premium Product Online Shop
          </h1>
          <p className="text-black text-left -mt-4 mb-4">
            Discover top-quality products that fit your lifestyle. Enjoy
            unbeatable prices and exclusive deals just for you!
          </p>

          <Button asChild className="w-fit">
            <a href="/shop">Shop Now</a>
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
