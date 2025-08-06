import { createHomeStyles } from "@/assets/styles/index.style";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Keyboard, StatusBar, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.safeArea}>
          <Header
            totalTodos={todos?.length ?? 0}
            completedTodos={todos?.filter((todo) => todo.completed).length ?? 0}
            styles={styles}
            colors={colors}
          />
          <Input styles={styles} colors={colors} />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
