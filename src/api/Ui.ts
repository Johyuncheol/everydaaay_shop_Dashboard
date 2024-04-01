import { BASE_URL } from "./const";

export const getMainUIAPI = async (area: string) => {
  try {
    const response = await fetch(`${BASE_URL}/main/dashboard/?area=${area}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 추가적인 헤더가 필요하다면 여기에 추가할 수 있습니다.
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data.data;
    } else {
      throw new Error("Failed to fetch main data");
    }
  } catch (error) {
    console.error("Error fetching main data:", error);
    throw error;
  }
};

export const updateMainUIAPI = async (
  area: string,
  data: Record<string, any>
) => {
  try {
    const response = await fetch(`${BASE_URL}/main/dashboard/?area=${area}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      return data.data;
    } else {
      throw new Error(`Failed to updata ${area} data`);
    }
  } catch (error) {
    console.error(`Error update ${area} data:`, error);
    throw error;
  }
};

export const deleteMainUIAPI = async (
  area: string,
  data: Record<number, string>
) => {
  try {
    const response = await fetch(`${BASE_URL}/main/dashboard/?area=${area}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      return data.data;
    } else {
      throw new Error(`Failed to updata ${area} data`);
    }
  } catch (error) {
    console.error(`Error update ${area} data:`, error);
    throw error;
  }
};
