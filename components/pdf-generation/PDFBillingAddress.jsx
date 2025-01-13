import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: "15px",
    fontWeight: "extrabold",
    gap: "10px",
  },
  title: {
    color: "gray",
    fontSize: "12px",
    color: "#0D9488",
  },
  subtitle: {
    color: "gray",
    fontSize: "10px",
  },
});
const PDFBillingAddress = ({ booking }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Billing Address</Text>

      <View style={{ fontFamily: "Helvetica", gap: "5px", fontSize: "10px" }}>
        <Text>{booking?.state}</Text>
        <Text>{booking?.aptOrSuite}</Text>
        <Text>
          {booking?.city} - {booking?.zipCode}
        </Text>
      </View>

      <View
        style={{
          height: "1px",
          marginVertical: "5px",
          backgroundColor: "#e4e4e4",
        }}
      />
    </View>
  );
};

export default PDFBillingAddress;
