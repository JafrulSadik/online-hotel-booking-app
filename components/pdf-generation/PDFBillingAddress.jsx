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

      <View
        style={{
          fontFamily: "Helvetica",
          gap: "5px",
          fontSize: "10px",
          color: "gray",
        }}
      >
        {booking?.streetAddress && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}>
              <Text>Street</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text> : </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text>{booking?.streetAddress}</Text>
            </View>
          </View>
        )}

        {booking?.aptOrSuite && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}>
              <Text>Apt or suite</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text> : </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text>{booking?.aptOrSuite}</Text>
            </View>
          </View>
        )}

        {booking?.city && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}>
              <Text>City</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text> : </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text>{booking?.city}</Text>
            </View>
          </View>
        )}

        {booking?.state && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}>
              <Text>State</Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text> : </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text>{booking?.state}</Text>
            </View>
          </View>
        )}

        {booking?.zipCode && (
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}>
              <Text>Zip Code </Text>
            </View>
            <View style={{ flex: 0.1 }}>
              <Text> : </Text>
            </View>
            <View style={{ flex: 0.7 }}>
              <Text>{booking?.zipCode}</Text>
            </View>
          </View>
        )}
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
