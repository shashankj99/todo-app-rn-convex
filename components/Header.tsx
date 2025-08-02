import { createHomeStyles } from "@/assets/styles/index.style";
import { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const Header = ({
  totalTodos,
  completedTodos,
  styles,
  colors,
}: {
  totalTodos: number;
  completedTodos: number;
  styles: ReturnType<typeof createHomeStyles>;
  colors: ColorScheme;
}) => {
  const percentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={styles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color={"#fff"} />
        </LinearGradient>
        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={styles.subtitle}>
            {completedTodos} of {totalTodos} completed
          </Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[styles.progressFill, { width: `${percentage}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{Math.round(percentage)}%</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
