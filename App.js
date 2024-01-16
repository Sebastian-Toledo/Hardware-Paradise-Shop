import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { useFonts } from "expo-font";
import ProductsByCategoryScreen from "./src/screens/ProductsByCategoryScreen";
import { useState } from "react";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productIdSelected, setProductIdSelected] = useState(null);

  const [fontLoaded] = useFonts({
    "LibreFranklin-Italic": require("./assets/fonts/LibreFranklin-Italic.ttf"),
    "LibreFranklin-Bold": require("./assets/fonts/LibreFranklin-Bold.ttf"),
  });
  if (!fontLoaded) return <ActivityIndicator />;

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId);
  };

  return (
    <>
      {productIdSelected ? (
        <ProductDetailScreen productId={productIdSelected} />
      ) : categorySelected ? (
        <ProductsByCategoryScreen
          category={categorySelected}
          onSelectProductIdEvent={onSelectProductId}
        />
      ) : (
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      )}
    </>
  );
}
