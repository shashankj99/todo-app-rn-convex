import { createHomeStyles } from "@/assets/styles/index.style";
import { ColorScheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingSpinner = ({
  colors,
  styles,
}: {
  colors: ColorScheme;
  styles: ReturnType<typeof createHomeStyles>;
}) => {
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading todos...</Text>
      </View>
    </LinearGradient>
  );
};

export default LoadingSpinner;
