import { StyleSheet, View } from "@react-pdf/renderer";

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
  return <View style={styles.footer}></View>;
};

export default PDFFooter;
