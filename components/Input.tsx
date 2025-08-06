import { createHomeStyles } from "@/assets/styles/index.style";
import { api } from "@/convex/_generated/api";
import { ColorScheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const Input = ({
  styles,
  colors,
}: {
  styles: ReturnType<typeof createHomeStyles>;
  colors: ColorScheme;
}) => {
  const [todo, setTodo] = useState("");
  const addTodo = useMutation(api.todos.createTodo);

  const handleAddTodo = () => {
    if (!todo.trim()) return;

    try {
      addTodo({ title: todo });
      setTodo("");
    } catch (error) {
      Alert.alert("Error", "Failed to add todo");
    }
  };

  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="What needs to be done?"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
          value={todo}
          onChangeText={setTodo}
          onSubmitEditing={handleAddTodo}
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          disabled={!todo.trim()}
        >
          <LinearGradient
            colors={
              !todo.trim() ? colors.gradients.muted : colors.gradients.primary
            }
            style={[styles.addButton, !todo.trim() && styles.addButtonDisabled]}
          >
            <Ionicons name="add" size={24} color={"#fff"} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
