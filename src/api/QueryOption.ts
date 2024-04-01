import UIService from "@/api/Ui";

const queryOptions = {
  getUI: (area: string) => ({
    queryKey: [area],
    queryFn: () => UIService.getUIData(area),
  }),

  updateUI: (area: string, data: Record<string, any>) => ({
    queryKey: [area],
    queryFn: () => UIService.updateUIData(area, data),
  }),
};

export default queryOptions;
