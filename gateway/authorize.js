export function authorizePayment(payment) {
  return { approved: true, paymentId: payment.id };
}
