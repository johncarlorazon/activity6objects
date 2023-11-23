import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { User } from "./User";
import { View } from "react-native";
import { Text, ScrollView } from "react-native";


const Userdata = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title style={styles.columnHeader}>ID</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>FIRSTNAME</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>LASTNAME</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>COURSE</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>YEAR & SECTION</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {User.map((Users) => (
          <DataTable.Row key={Users.id}>
            <DataTable.Cell>{Users.id}</DataTable.Cell>
            <DataTable.Cell>{Users.name.firstname}</DataTable.Cell>
            <DataTable.Cell>{Users.name.lastname}</DataTable.Cell>
            <DataTable.Cell>{Users.course}</DataTable.Cell>
            <DataTable.Cell>{Users.yearsection}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  );
};

export default Userdata;

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
},
});
