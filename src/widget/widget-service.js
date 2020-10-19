const FetchingData = () => fetch('http://localhost:3000/api/v1/widgets', {
    method: 'GET'
  }).then((res) => res.json());

export const WidgetService = () => Promise.resolve(FetchingData());