// app/lib/analytics.ts

type EventName =
  | 'sell_started'
  | 'images_added'
  | 'price_accepted'
  | 'published'
  | 'auction_opened'
  | 'trade_opened'
  | 'home_viewed'
  | 'time_to_publish';

type Event = {
  name: EventName;
  timestamp: number;
  data?: Record<string, any>;
};

let events: Event[] = [];
let sellStartTime: number | null = null;

export function track(
  name: EventName,
  data?: Record<string, any>
) {
  const now = Date.now();

  events.push({
    name,
    timestamp: now,
    data,
  });

  if (name === 'sell_started') {
    sellStartTime = now;
  }

  if (name === 'published' && sellStartTime) {
    const seconds = Math.round((now - sellStartTime) / 1000);

    events.push({
      name: 'time_to_publish',
      timestamp: now,
      data: { seconds },
    });

    sellStartTime = null;
  }
}

export function getEvents() {
  return events;
}

export function resetAnalytics() {
  events = [];
  sellStartTime = null;
}