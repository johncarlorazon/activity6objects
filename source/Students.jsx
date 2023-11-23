import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { DataTable } from "react-native-paper";
import { User } from "./User";
import { View } from "react-native";
import { ScrollView } from "react-native";

const Studentdata = () => {
    const studentUsers = User.filter((user) => user.usertype === "STUDENT");
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.columnHeader}>ID</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>NAME</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>COURSE</DataTable.Title>
      </DataTable.Header>

      <FlatList
      data={studentUsers}
      renderItem={({ item }) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.id}</DataTable.Cell>
          <DataTable.Cell>{`${item.name.firstname} ${item.name.lastname}`}</DataTable.Cell>
          <DataTable.Cell>{item.course}</DataTable.Cell>
        </DataTable.Row>
      )}
      keyExtractor={(item) => item.id.toString()}
    />

    </DataTable>
  );
};

export default Studentdata;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "blue",
  },
  columnHeader: {
    color: "black",
    fontWeight: 'bold', 
  }
});