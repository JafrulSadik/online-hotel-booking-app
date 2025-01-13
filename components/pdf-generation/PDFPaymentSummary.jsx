import { countDays } from "@/utils/countDaysDifference";
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
const PDFPaymentSummary = ({ booking }) => {
  const totalStayNights = +countDays(
    booking?.checkInDate,
    booking?.checkOutDate
  );

  const totalRoomAmount = +totalStayNights * +booking?.hotelId?.price;
  const totalAmount =
    +totalStayNights * +booking?.hotelId?.price + 17.5 + 51.31;
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Payment Summary</Text>

      <View style={{ gap: "5px", fontFamily: "Helvetica", fontSize: "10px" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            color: "gray",
          }}
        >
          <Text>Room Rate (1 night × ${booking?.hotelId?.price})</Text>
          <Text>${totalRoomAmount.toFixed(2)}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            color: "gray",
          }}
        >
          <Text>Cleaning Fee</Text>
          <Text>$17.50</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            color: "gray",
          }}
        >
          <Text>Service Fee</Text>
          <Text>$51.31</Text>
        </View>
      </View>

      <View
        style={{
          height: "1px",
          backgroundColor: "#e4e4e4",
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          color: "gray",
          fontSize: "12px",
          color: "#0D9488",
        }}
      >
        <Text>Total</Text>
        <Text>${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default PDFPaymentSummary;
