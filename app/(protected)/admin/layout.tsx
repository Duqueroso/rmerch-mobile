// /admin/layout.ts

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AdminLayout = async ({ children }: any) => {
  //   if (!user || user.role !== "admin") {
  //     redirect("/dashboard");
  //   }

  return (
    <SafeAreaView>
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default AdminLayout;
