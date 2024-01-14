import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, onSelectCategoryEvent }) => {
  return (
    <TouchableOpacity onPress={() => onSelectCategoryEvent(category)}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    padding: 20,
    margin: 10,
  },
  text: {
    fontFamily: "LibreFranklin-Italic",
    textTransform: "capitalize",
    fontSize: 15,
  },
});
