export const EventTypesController = {
  EventTypes: `event-types`,
  Create: `event-types`,
  Update: (id: string) => `event-types/${id}`,
  Delete: (id: string) => `event-types/${id}`,
  Activate: (id: string) => `event-types/${id}/activate`,
  Deactivate: (id: string) => `event-types/${id}/deactivate`,
}