import { View, Text, Stylesheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = Stylesheet.create({
  headerContainer: {
    heigth: 100,
    backgroundColor: "#fe5e41",
    justifyContent: "center",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  headerTitle: {
    color: "#fff",
  },
});
