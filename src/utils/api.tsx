// const URL = "http://192.168.100.9:8080";

interface Cell {
  pos: [number, number];
}

interface initData {
  steps_count: number;
  show_every: number;
  cells: Cell[];
}

export const initRequest = (data: initData) =>
  fetch("http://192.168.100.9:8080/calculation/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const fetchStatus = async (simulationId: string) => {
  try {
    const response = await fetch(
      `http://192.168.100.9:8080/calculation/status?simulation_id=${simulationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};
