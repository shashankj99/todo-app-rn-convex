import { createHomeStyles } from "@/assets/styles/index.style";
import EmptyState from "@/components/EmptyState";
import FlatListItem from "@/components/FlatListItem";
import Header from "@/components/Header";
import Input from "@/components/Input";
import LoadingSpinner from "@/components/LoadingSpinner";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  FlatList,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">;

export default function Index() {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  if (todos === undefined) {
    return <LoadingSpinner colors={colors} styles={styles} />;
  }

  const handleToggleTodo = (id: Todo["_id"]) => {
    toggleTodo({ id }).catch((err) =>
      Alert.alert("Error", err.message || "Failed to toggle todo")
    );
  };

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
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <FlatListItem
                todo={item}
                onToggle={handleToggleTodo}
                colors={colors}
                styles={styles}
              />
            )}
            keyExtractor={(item) => item._id}
            style={styles.todoList}
            contentContainerStyle={styles.todoListContent}
            ListEmptyComponent={<EmptyState colors={colors} styles={styles} />}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
}
