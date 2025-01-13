import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import PDFBodyContent from "./PDFBodyContent";
import PDFFooter from "./PDFFooter";
import PDFHeader from "./PDFHeader";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff8f8",
    fontFamily: "Helvetica-Bold",
  },
  heading: {
    fontSize: "18px",
    textAlign: "center",
    color: "#0D9488",
    marginTop: "25px",
  },
});

const PaymentReciptPDF = ({ booking }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <PDFHeader booking={booking} />
          <Text style={styles.heading}>Booking Confirmation</Text>
          <PDFBodyContent booking={booking} />
        </View>
        <PDFFooter />
      </Page>
    </Document>
  );
};

export default PaymentReciptPDF;
