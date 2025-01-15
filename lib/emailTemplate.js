import { countDays } from "@/utils/countDaysDifference";
import { getDateFormatForPayment } from "@/utils/getDateFormat";

export const emailTEmplate = ({booking, user}) => {

    const totalStayNights = +countDays(
      booking?.checkInDate,
      booking?.checkOutDate
    );
  
    const totalAmount =
      +totalStayNights * +booking?.hotelId?.price + 17.5 + 51.31;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #009688;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header p {
      margin: 5px 0 0;
      font-size: 14px;
    }
    .content {
      padding: 20px;
    }
    .content p {
      margin: 10px 0;
      color: #333;
      font-size: 14px;
      line-height: 1.6;
    }
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .content table td {
      padding: 10px;
      border: 1px solid #dddddd;
      font-size: 14px;
      color: #333;
    }
    .content table tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .button-container {
      text-align: center;
      margin: 20px 0;
    }
    .button {
      display: inline-block;
      padding: 12px 20px;
      font-size: 14px;
      color: white;
      background-color: #009688;
      text-decoration: none;
      border-radius: 5px;
      margin: 5px;
    }
    .button.green {
      background-color: #009688;
      color : white;
    }
    .button:hover {
      opacity: 0.9;
    }
    .footer {
      background-color: #f9f9f9;
      color: #666;
      text-align: center;
      padding: 10px 20px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Booking Confirmation</h1>
      <p>Your stay at <strong>${booking?.hotelId?.name}</strong> is confirmed!</p>
    </div>
    
    <div class="content">
      <p>Dear <strong>${user?.name}</strong>,</p>
      <p>Thank you for booking with us! Below are the details of your reservation:</p>
      
      <table>
        <tr>
          <td><strong>Guest Name:</strong></td>
          <td>${user?.name}</td>
        </tr>
        <tr>
          <td><strong>Booking Number:</strong></td>
          <td>#${booking?._id}</td>
        </tr>
        <tr>
          <td><strong>Check-in Date:</strong></td>
          <td>${getDateFormatForPayment(booking?.checkInDate)}</td>
        </tr>
        <tr>
          <td><strong>Check-out Date:</strong></td>
          <td>${getDateFormatForPayment(booking?.checkOutDate)}</td>
        </tr>
        <tr>
          <td><strong>Guests:</strong></td>
          <td>${booking?.guests}</td>
        </tr>
        <tr>
          <td><strong>Total Amount Paid:</strong></td>
          <td>${totalAmount}</td>
        </tr>
      </table>

      <p><strong>Hotel Address:</strong> <br>
      ${booking?.hotelId?.location}</p>

      <div class="button-container">
        <a href=${`${process.env.PUBLIC_DOMAIN}/api/booking/${booking?._id}/recipt`} target="_blank" class="button green">Download Receipt</a>
      </div>
    </div>

    <div class="footer">
      <p>&copy; 2025 ${booking?.hotelId?.name}. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`
    
}