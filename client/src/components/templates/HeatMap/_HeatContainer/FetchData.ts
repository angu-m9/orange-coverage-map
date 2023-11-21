export async function fetchJson(url: string): Promise<any[]> {
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then((data) => data.record);
  }
  