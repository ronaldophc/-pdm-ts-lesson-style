import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalStyles";

type CardProps = {
  children: ReactNode;
};

export default function FooterCard({ children }: CardProps) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ccc",
    padding: DEFAULT_PADDING / 2,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
