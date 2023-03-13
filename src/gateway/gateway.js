const baseUrl = 'https://63f7434e833c7c9c60802c38.mockapi.io/api/v1/events';

export const fetchEventData = () =>
  fetch(baseUrl).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events");
    }
    return response.json();
  });

export const fetchDeleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events");
    }
  });
};

export const fetchCreateEvent = (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Can't display events");
    }
  });
};
