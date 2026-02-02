import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { FormItemsProps } from "../dto/FormItems";

const FormItems = ({
  textLabel,
  onChange,
  style,
  value,
  placeholder,
  icon,
  secureTextEntry,
}: FormItemsProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[style]}>
      <Text
        style={{
          fontWeight: "600",
          marginVertical: 8,
          textAlign: "left",
          color: "#1C1C4A",
          fontSize: 14,
        }}
      >
        {textLabel}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F3F3F7",
          borderRadius: 8,
          height: 50,
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
        <TextInput
          style={{
            flex: 1,
            height: "100%",
            color: "#333",
          }}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#666"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormItems;
