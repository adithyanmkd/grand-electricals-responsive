import IntroContent from "./components/homePageComponents/IntroContent";
import ProductCategories from "./components/homePageComponents/ProductCategories";
import WhyChoose from "./components/homePageComponents/WhyChoose";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <IntroContent />
      <ProductCategories />
      <WhyChoose />
    </div>
  );
}
