import { Subjects, Publisher, PaymentCreatedEvent } from '@ajdroitickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
