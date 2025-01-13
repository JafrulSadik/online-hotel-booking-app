import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "10px",
    fontFamily: "Helvetica",
    color: "gray",
    marginVertical: "10px",
  },
});

const PDFFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ textAlign: "center" }}>Tel: +1 234 567 8900</Text>
      <Text style={{ textAlign: "center" }}>
        Email: contact@hotel_sunshine.com
      </Text>
    </View>
  );
};

export default PDFFooter;
