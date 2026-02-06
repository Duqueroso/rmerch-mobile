// Reworked Icon component using @expo/vector-icons for reliable display across platforms.

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconSet = "material" | "ion" | "feather";

// Mapping from semantic / SF Symbol names to a specific icon set and name.
const ICON_MAP: Record<string, { set: IconSet; name: string }> = {
  // Home / navigation
  "house.fill": { set: "material", name: "home" },
  // Messaging / send
  "paperplane.fill": { set: "material", name: "send" },
  // Profile
  person: { set: "material", name: "person" },
  "person.fill": { set: "material", name: "person" },
  // Shopping / products
  bag: { set: "material", name: "shopping_bag" },
  "bag.fill": { set: "material", name: "shopping_bag" },
  "cube.box": { set: "material", name: "inventory" },
  // Actions
  plus: { set: "material", name: "add" },
  "plus.rectangle": { set: "material", name: "add_box" },
  heart: { set: "material", name: "favorite" },
  "heart.fill": { set: "material", name: "favorite" },
  eye: { set: "material", name: "visibility" },

  // Additional convenient aliases used in the app
  home: { set: "material", name: "home" },
  settings: { set: "ion", name: "settings-outline" },
  cart: { set: "material", name: "shopping_cart" },
  search: { set: "material", name: "search" },
  add: { set: "material", name: "add" },
  person_circle: { set: "ion", name: "person-circle" },
};

export function Icon({
  name,
  size = 24,
  color = "black",
  style,
}: {
  name: string; // either a key in ICON_MAP, or a prefixed name like "ion:settings" or a raw MaterialIcon name
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  // If user passed a prefixed name like "ion:settings-outline", use that
  if (typeof name === "string" && name.includes(":")) {
    const [prefix, actual] = name.split(":");
    const set = prefix as IconSet;
    switch (set) {
      case "ion":
        return (
          <Ionicons
            name={actual as any}
            size={size}
            color={color as any}
            style={style}
          />
        );
      case "feather":
        return (
          <Feather
            name={actual as any}
            size={size}
            color={color as any}
            style={style}
          />
        );
      case "material":
      default:
        return (
          <MaterialIcons
            name={actual as any}
            size={size}
            color={color as any}
            style={style}
          />
        );
    }
  }

  const mapping = ICON_MAP[name];

  if (!mapping) {
    // Try to render the provided name as a MaterialIcons name as last resort
    console.warn(
      `Icon: no mapping for "${name}" — falling back to MaterialIcons with the same name.`,
    );
    return (
      <MaterialIcons
        name={name as any}
        size={size}
        color={color as any}
        style={style}
      />
    );
  }

  switch (mapping.set) {
    case "ion":
      return (
        <Ionicons
          name={mapping.name as any}
          size={size}
          color={color as any}
          style={style}
        />
      );
    case "feather":
      return (
        <Feather
          name={mapping.name as any}
          size={size}
          color={color as any}
          style={style}
        />
      );
    case "material":
    default:
      return (
        <MaterialIcons
          name={mapping.name as any}
          size={size}
          color={color as any}
          style={style}
        />
      );
  }
}

// Backwards compatibility: some files import { IconSymbol } so export alias
export const IconSymbol = Icon;
