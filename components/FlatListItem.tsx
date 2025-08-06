import { createHomeStyles } from "@/assets/styles/index.style";
import { Doc } from "@/convex/_generated/dataModel";
import { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

type Todo = Doc<"todos">;

const FlatListItem = ({
  todo,
  onToggle,
  colors,
  styles,
}: {
  todo: Todo;
  onToggle: (id: Todo["_id"]) => void;
  colors: ColorScheme;
  styles: ReturnType<typeof createHomeStyles>;
}) => {
  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={styles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          style={styles.checkbox}
          activeOpacity={0.7}
          onPress={() => onToggle(todo._id)}
        >
          <LinearGradient
            colors={
              todo.completed ? colors.gradients.success : colors.gradients.muted
            }
            style={[
              styles.checkboxInner,
              { borderColor: todo.completed ? "transparent" : colors.border },
            ]}
          >
            {todo.completed && (
              <Ionicons name="checkmark" size={18} color="#fff" />
            )}
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.todoTextContainer}>
          <Text
            style={[
              styles.todoText,
              todo.completed && {
                textDecorationLine: "line-through",
                color: colors.textMuted,
                opacity: 0.6,
              },
            ]}
          >
            {todo.title}
          </Text>

          {/* <View style={styles.todoActions}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <LinearGradient
                colors={colors.gradients.warning}
                style={styles.actionButton}
              >
                <Ionicons name="pencil" size={14} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <LinearGradient
                colors={colors.gradients.danger}
                style={styles.actionButton}
              >
                <Ionicons name="trash" size={14} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
          </View> */}
        </View>
      </LinearGradient>
    </View>
  );
};

export default FlatListItem;
