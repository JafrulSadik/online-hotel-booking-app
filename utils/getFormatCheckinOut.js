export const getFormatCheckInOut = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
  
    const optionsMonth = { month: 'short' };
    const optionsDay = { day: 'numeric' };
    const optionsYear = { year: 'numeric' };
  
    const checkinMonth = checkinDate.toLocaleDateString('en-US', optionsMonth);
    const checkoutMonth = checkoutDate.toLocaleDateString('en-US', optionsMonth);
    const checkinDay = checkinDate.toLocaleDateString('en-US', optionsDay);
    const checkoutDay = checkoutDate.toLocaleDateString('en-US', optionsDay);
    const checkinYear = checkinDate.toLocaleDateString('en-US', optionsYear);
    const checkoutYear = checkoutDate.toLocaleDateString('en-US', optionsYear);
  
    if (checkinMonth === checkoutMonth && checkinYear === checkoutYear) {
      return `${checkinMonth} ${checkinDay} - ${checkoutDay}, ${checkinYear}`;
    } else if (checkinYear === checkoutYear) {
      return `${checkinMonth} ${checkinDay} - ${checkoutMonth} ${checkoutDay}, ${checkinYear}`;
    } else {
      return `${checkinMonth} ${checkinDay}, ${checkinYear} - ${checkoutMonth} ${checkoutDay}, ${checkoutYear}`;
    }
  };
  