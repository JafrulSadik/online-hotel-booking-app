import { getDateFormatForDisplay } from "@/utils/getDateFormat";
import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D9488",
    padding: 10,
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "500px",
    fontSize: "12px",
    gap: "5px",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
  },
  logoText: {
    color: "#0D9488",
    fontSize: "20px",
  },
  logoBox: {
    width: "35px",
    height: "35px",
    backgroundColor: "white",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWhite: {
    color: "white",
  },

  booingId: {
    color: "#C6FBF1",
    fontSize: "8px",
  },
});

const PDFHeader = ({ booking }) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>B</Text>
          </View>
          <View style={styles.logoWhite}>
            <Text>Hotel</Text>
            <Text>Booking</Text>
          </View>
        </View>

        <View style={{ gap: "3px" }}>
          <Text style={styles.booingId}>
            Booking ID: #{booking._id.toString()}
          </Text>
          <Text style={styles.booingId}>
            Date: {getDateFormatForDisplay(booking?.createdAt)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PDFHeader;
