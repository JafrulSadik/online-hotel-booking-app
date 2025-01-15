import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: "15px",
    fontWeight: "extrabold",
    gap: "10px",
  },

  title: {
    fontSize: "16px",
    color: "#0D9488",
  },
  subtitle: {
    color: "gray",
    fontSize: "10px",
    fontFamily: "Helvetica",
  },
  guestTitle: {
    color: "gray",
    fontSize: "12px",
    color: "#0D9488",
  },
  guestInfo: {
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
    color: "gray",
    gap: "5px",
    fontFamily: "Helvetica",
  },
});
const CardHeader = ({ booking }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{booking?.hotelId?.name}</Text>
      <Text style={styles.subtitle}>{booking?.hotelId?.location}</Text>

      <Text style={styles.guestTitle}>Guest Information</Text>

      <View style={styles.guestInfo}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 0.2 }}>
            <Text>Name :</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Text> : </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>{booking?.userId?.name}</Text>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ flex: 0.2 }}>
            <Text>Email</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Text> : </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>{booking?.userId?.email}</Text>
          </View>
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

export default CardHeader;
