import Field from "./Field";

const Payment = ({ register, errors }) => {
  const setExpireation = (data) => {
    setValue("expiration", data, { shouldValidate: true });
  };

  const expirationPattern = /^(0[1-9]|1[0-2])\/\d{4}$/;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Pay with American Express</h2>
      <div className="space-y-4">
        <Field error={errors.cardNumber}>
          <input
            type="number"
            placeholder="Card number"
            className="w-full p-3 border rounded-lg"
            {...register("cardNumber", {
              required: "Card number is required",
            })}
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field error={errors.expiration}>
            <input
              type="text"
              placeholder="Expiration"
              className="p-3 border rounded-lg"
              {...register("expiration", {
                required: "Expiration Date is required",
                pattern: {
                  value: expirationPattern,
                  message: "Please enter a valid expiration date (MM/YYYY)",
                },
              })}
            />
          </Field>

          <Field error={errors.cvv}>
            <input
              type="number"
              placeholder="CVV"
              className="p-3 border rounded-lg"
              {...register("cvv", {
                required: "CVV is required",
              })}
            />
          </Field>
        </div>
      </div>
    </section>
  );
};

export default Payment;
