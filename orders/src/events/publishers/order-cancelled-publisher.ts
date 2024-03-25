import { Subjects, Publisher, OrderCancelledEvent } from '@ajdroitickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
