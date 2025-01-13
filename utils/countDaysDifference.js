export const countDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    const diffInMs = end.getTime() - start.getTime();

    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) + 1;
  };
  