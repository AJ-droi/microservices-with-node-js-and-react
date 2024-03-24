import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ajdroitickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
