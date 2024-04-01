import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import UIService from "./Ui";
import queryOptions from "./QueryOption";

export function useGetUI<T>(area: string): UseQueryResult<T> {
  return useQuery(queryOptions.getUI(area));
}

export function useUpdateData() {
  const queryClient = useQueryClient();
  const updateGroupMutation = useMutation({
    mutationFn: async ({ area, data }: any) => {
      await UIService.updateUIData(area, data);
      return area;
    },
    onSuccess: async (area) => {
      queryClient.invalidateQueries({ queryKey: [area] });
    },
  });

  return updateGroupMutation;
}
