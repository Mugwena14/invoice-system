import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 50, fontSize: 11, fontFamily: 'Helvetica', color: '#333', lineHeight: 1.6 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, borderBottom: 2, borderBottomColor: '#0033A1', paddingBottom: 15 },
  logo: { width: 60, height: 60 }, // Replace with your actual icon/logo URL
  companyName: { fontSize: 12, fontWeight: 'bold', color: '#0033A1', textAlign: 'right' },
  
  title: { fontSize: 16, fontWeight: 'bold', color: '#0033A1', marginBottom: 20, textAlign: 'center', textDecoration: 'underline' },
  
  section: { marginBottom: 15 },
  sectionTitle: { fontWeight: 'bold', fontSize: 12, marginBottom: 5, color: '#0033A1' },
  bodyText: { textAlign: 'justify', fontSize: 10, color: '#444' },
  
  footer: { position: 'absolute', bottom: 30, left: 50, right: 50, borderTop: 1, borderTopColor: '#EEE', paddingTop: 10, fontSize: 9, color: '#999', textAlign: 'center' }
});

const TermsDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header with Icon on Top Left */}
      <View style={styles.header}>
        <Image 
          style={styles.logo} 
          src="https://res.cloudinary.com/dkmzveqce/image/upload/v1767567262/ChatGPT_Image_Jan_5_2026_12_41_05_AM_j80cdb.png" 
        />
        <View>
          <Text style={styles.companyName}>MKH DEBTORS & SOLUTIONS</Text>
          <Text style={{ fontSize: 9, textAlign: 'right', color: '#666' }}>Terms of Service Policy</Text>
        </View>
      </View>

      <Text style={styles.title}>
        Terms and Conditions for Prescription Letters, Debt Review Removals, Judgment Removals, Paid-Up Letters, and Settlement Letters
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. No Refunds</Text>
        <Text style={styles.bodyText}>
          Our company strictly adheres to a no-refund policy for all services rendered. Once payment is made for prescription letters, debt review removals, judgment removals, paid-up letters, or settlement letters, it is non-refundable.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Service Timelines</Text>
        <Text style={styles.bodyText}>
          We will make every effort to process requests within the stated timelines. However, delays may occur due to factors beyond our control, such as credit provider response times or bureaucratic processes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Client Responsibility</Text>
        <Text style={styles.bodyText}>
          Clients are responsible for providing accurate and complete information required for the services. Any inaccuracies or omissions may delay or affect the outcome of the request.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Third-Party Dependencies</Text>
        <Text style={styles.bodyText}>
          For services like debt review removals, judgment removals, or prescription letters, our company relies on third-party credit providers, credit bureaus, or courts to process and update records. We are not liable for delays or failures caused by these third parties.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Communication</Text>
        <Text style={styles.bodyText}>
          All communication regarding the status of your request will be done via email or phone, as provided during the onboarding process. It is the client's responsibility to ensure their contact details are up-to-date.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>6. Service Delivery</Text>
        <Text style={styles.bodyText}>
          Our company will deliver the requested documents or updates electronically or by post, depending on the client's preference and the nature of the service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>7. Acceptance</Text>
        <Text style={styles.bodyText}>
          By engaging our services, clients acknowledge that they have read, understood, and accepted these terms and conditions.
        </Text>
      </View>

      <Text style={styles.footer}>
        © 2026 MKH Debtors & Solutions. All Rights Reserved.
      </Text>
    </Page>
  </Document>
);

export default TermsDocument;