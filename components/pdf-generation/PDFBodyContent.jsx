import { StyleSheet, View } from "@react-pdf/renderer";
import CardHeader from "./CardHeader";
import PDFBillingAddress from "./PDFBillingAddress";
import PDFPaymentSummary from "./PDFPaymentSummary";
import ReservationDetails from "./ReservationDetails";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: "10px",
  },
  container: {
    width: "500px",
    fontSize: "12px",
    gap: "5px",
    paddingVertical: "15px",
    marginTop: "10px",
    border: "0.5px solid #e4e4e4",
    borderRadius: "5px",
    backgroundColor: "white",
  },
});

const PDFBodyContent = ({ booking }) => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <CardHeader booking={booking} />
        <ReservationDetails booking={booking} />
        <PDFBillingAddress booking={booking} />
        <PDFPaymentSummary booking={booking} />
      </View>
    </View>
  );
};

export default PDFBodyContent;
