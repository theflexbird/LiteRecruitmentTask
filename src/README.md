In our ecommerce system nearly all of the operations are event-based.

The source of event could be an event bus, webhook or similar.

Assumptions:

For simplicity events are already saved in logs.

Task:

Parse the historical events and build the database of orders.

Each order is built from series of events.

Each event consists of <timestamp> <order_id> <state>.

Make sure that incoming data is valid. Discard all invalid events.

There can be only 1 event per milisecond.

Events should arrive in chronological order, if not discard the event.

Possible states: created > in_progress > completed.

Expect output of database object:
{
'order_1': {state: 'completed', ts: 1234567890}
'order_2': {state: 'completed', ts: 1234567891},
}
