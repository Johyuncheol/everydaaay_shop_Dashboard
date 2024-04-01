import { BASE_URL } from "./const";

class UIService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request(
    endpoint: string,
    method: string,
    data?: Record<string, any>
  ) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        throw new Error(`Failed to ${method.toLowerCase()} ${endpoint}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Error ${method.toLowerCase()} ${endpoint}:`, error);
      throw error;
    }
  }

  async getUIData(area: string) {
    try {
      const response = await this.request(
        `/main/dashboard/?area=${area}`,
        "GET"
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateUIData(area: string, data: Record<string, any>) {
    try {
      const response = await this.request(
        `/main/dashboard/?area=${area}`,
        "POST",
        data
      );
      alert(response.message);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteUIData(area: string, data: Record<number, string>) {
    try {
      const response = await this.request(
        `/main/dashboard/?area=${area}`,
        "DELETE",
        data
      );
      alert(response.message);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UIService(BASE_URL as string);
