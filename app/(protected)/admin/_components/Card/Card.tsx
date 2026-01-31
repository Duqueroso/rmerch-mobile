import { Pressable, Text, View } from "react-native";
import { CardProps } from "../../_dto/CardProps";
import { styles } from "../../_styles/Card.styles";

const Card = ({ text, image, value, style, onPress }: CardProps) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.leftContent}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.iconContainer}>{image}</View>
    </Pressable>
  );
};

export default Card;
