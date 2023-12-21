import { View, Text, Stylesheet } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category }) => {
  return (
    <Card style={styles.CardContainer}>
      <Text style={styles.text}>{category}</Text>
    </Card>
  );
};

export default CategoryItem;

const styles = Stylesheet.create({
  CardContainer: {
    backgraund: "#999",
    padding: 20,
    margin: 20,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 15,
  },
});
