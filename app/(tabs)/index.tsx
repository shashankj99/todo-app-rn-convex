import { createHomeStyles } from "@/assets/styles/index.style";
import Header from "@/components/Header";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
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
      <SafeAreaView style={styles.safeArea}>
        <Header
          totalTodos={todos?.length ?? 0}
          completedTodos={todos?.filter((todo) => todo.completed).length ?? 0}
          styles={styles}
          colors={colors}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
