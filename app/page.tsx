import IntroContent from "./components/homePageComponents/IntroContent";
import ProductCategories from "./components/homePageComponents/ProductCategories";

export default function Home() {
  return (
    <div className="pb-40">
      <IntroContent />
      <ProductCategories />
    </div>
  );
}
