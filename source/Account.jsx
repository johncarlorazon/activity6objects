import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import {User} from './User';
import { View } from 'react-native';

const Account = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.columnHeader}>ID</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>USERNAME</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>PASSWORD</DataTable.Title>
        <DataTable.Title style={styles.columnHeader}>USERTYPE</DataTable.Title>
      </DataTable.Header>

      {User.map((Users) => (
        <DataTable.Row key={Users.id}>
          <DataTable.Cell>{Users.id}</DataTable.Cell>
          <DataTable.Cell>{Users.username}</DataTable.Cell>
          <DataTable.Cell>{Users.password}</DataTable.Cell>
          <DataTable.Cell>{Users.usertype}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: 'blue',
  },
  columnHeader: {
    color: "black",
    fontWeight: 'bold', 
  }
});