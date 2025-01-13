export const getDateFormat = (dateStr) => {
   return new Date(dateStr).toLocaleDateString().replace(/\//g, "-");
}

export const getDateFormatForDisplay = (dateStr) => {
   const date = new Date(dateStr);
   const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad it to 2 digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed) and pad it
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export const getDateFormatForPayment = (dateStr) => {
   const date = new Date(dateStr);
   const options = { month: 'short', day : 'numeric', year : "numeric" };
   return date.toLocaleDateString('en-US', options);
}

export const getDateFormatForComment = (dateStr) => {
   const date = new Date();
   return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

}