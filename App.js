import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { useFonts } from "expo-font";
import ProductsByCategoryScreen from "./src/screens/ProductsByCategoryScreen";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");

  const [fontLoaded] = useFonts({
    "LibreFranklin-Italic": require("./assets/fonts/LibreFranklin-Italic.ttf"),
    "LibreFranklin-Bold": require("./assets/fonts/LibreFranklin-Bold.ttf"),
  });
  if (!fontLoaded) return <ActivityIndicator />;

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };

  return (
    <>
      {categorySelected ? (
        <ProductsByCategoryScreen category={categorySelected} />
      ) : (
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      )}
    </>
  );
}
