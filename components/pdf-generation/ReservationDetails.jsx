import { countDays } from "@/utils/countDaysDifference";
import { getDateFormatForDisplay } from "@/utils/getDateFormat";
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
const ReservationDetails = ({ booking }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Reservation Details</Text>

      <View style={{ flexDirection: "row", fontFamily: "Helvetica" }}>
        <View style={{ flex: 1, gap: "5px" }}>
          <Text style={styles.subtitle}>Check-in</Text>
          <Text style={{ fontSize: "10px" }}>
            {getDateFormatForDisplay(booking?.checkInDate)}
          </Text>
        </View>

        <View style={{ flex: 1, gap: "5px" }}>
          <Text style={styles.subtitle}>Check-out</Text>
          <Text style={{ fontSize: "10px" }}>
            {getDateFormatForDisplay(booking?.checkOutDate)}
          </Text>
        </View>
        <View style={{ flex: 1, gap: "5px" }}>
          <Text style={styles.subtitle}>Nights</Text>
          <Text style={{ fontSize: "10px" }}>
            {countDays(booking?.checkInDate, booking?.checkOutDate)}
          </Text>
        </View>
        <View style={{ flex: 1, gap: "5px" }}>
          <Text style={styles.subtitle}>Guests</Text>
          <Text style={{ fontSize: "10px" }}>{booking?.guests}</Text>
        </View>
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

export default ReservationDetails;
