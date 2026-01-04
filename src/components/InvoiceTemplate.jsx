import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, borderBottom: 2, borderBottomColor: '#0033A1', paddingBottom: 10 },
  companyInfo: { color: '#0033A1' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0033A1' },
  section: { marginVertical: 10 },
  label: { fontWeight: 'bold', marginBottom: 2 },
  table: { display: 'table', width: 'auto', marginVertical: 15 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EEE', paddingVertical: 5 },
  tableHeader: { backgroundColor: '#0033A1', color: '#FFF', fontWeight: 'bold' },
  col1: { width: '70%' },
  col2: { width: '30%', textAlign: 'right' },
  totalSection: { marginTop: 20, alignItems: 'flex-end' },
  totalBox: { width: 150, borderTop: 2, borderTopColor: '#0033A1', paddingTop: 5 },
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, borderTop: 1, borderTopColor: '#EEE', paddingTop: 10, fontSize: 9, color: '#666', textAlign: 'center' }
});

const InvoiceTemplate = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>MKH DEBTORS & SOLUTIONS</Text>
          <Text>info@mkhdebtors.co.za</Text>
          <Text>www.mkhdebtors.co.za</Text>
        </View>
        <Text style={styles.title}>INVOICE</Text>
      </View>

      {/* Client Info */}
      <View style={styles.section}>
        <Text style={styles.label}>Bill To:</Text>
        <Text>{data.clientName}</Text>
        <Text>{data.clientEmail}</Text>
        <Text>Reference: {data.caseRef}</Text>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.col1, { paddingLeft: 5 }]}>Service Description</Text>
          <Text style={[styles.col2, { paddingRight: 5 }]}>Amount</Text>
        </View>
        {data.items.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.col1}>{item.description}</Text>
            <Text style={styles.col2}>R {parseFloat(item.amount).toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Total */}
      <View style={styles.totalSection}>
        <View style={styles.totalBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>Total Due:</Text>
            <Text style={{ fontWeight: 'bold' }}>R {data.total.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {/* Banking Details */}
      <View style={{ marginTop: 40, padding: 10, backgroundColor: '#F8F9FA' }}>
        <Text style={[styles.label, { color: '#0033A1' }]}>Banking Details:</Text>
        <Text>Bank: First National Bank (FNB)</Text>
        <Text>Account Holder: MKH Debtors</Text>
        <Text>Account No: 1234567890</Text>
        <Text>Branch Code: 250655</Text>
      </View>

      <Text style={styles.footer}>
        Thank you for choosing MKH Debtors & Solutions. This is a computer-generated document.
      </Text>
    </Page>
  </Document>
);

export default InvoiceTemplate;