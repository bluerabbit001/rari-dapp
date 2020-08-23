import { useQuery } from "react-query";

export function useContractMethod<DataType>(
  methodKey: string,
  callMethod: () => Promise<DataType>
) {
  return useQuery<DataType, any>(methodKey, callMethod);
}
