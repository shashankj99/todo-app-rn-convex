import { createHomeStyles } from "@/assets/styles/index.style";
import { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const EmptyState = ({
  colors,
  styles,
}: {
  colors: ColorScheme;
  styles: ReturnType<typeof createHomeStyles>;
}) => {
  return (
    <View style={styles.emptyContainer}>
      <LinearGradient
        colors={colors.gradients.empty}
        style={styles.emptyIconContainer}
      >
        <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
      </LinearGradient>
      <Text style={styles.emptyText}>No todos yet!</Text>
      <Text style={styles.emptySubtext}>
        Add your first todo above to get started
      </Text>
    </View>
  );
};

export default EmptyState;
