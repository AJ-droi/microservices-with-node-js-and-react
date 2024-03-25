import { Publisher, OrderCreatedEvent, Subjects } from '@ajdroitickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
