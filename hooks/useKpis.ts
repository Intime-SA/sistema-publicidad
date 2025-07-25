import { useQuery } from 'react-query';
import { useDateRange } from '@/contexts/DateContext';
import { useAppSelector } from '@/store/hooks';
import { getKpis, type KpisResponse } from '@/services/kpis';

export const useKpis = () => {
  const { dateRange } = useDateRange();
  const { selectedPage } = useAppSelector((state) => state.pageSelector);

  const queryParams = {
    from: dateRange.from,
    to: dateRange.to,
    pageId: selectedPage?._id || '',
  };

  const {
    data: kpis,
    isLoading,
    error,
    refetch,
  } = useQuery<KpisResponse>(
    ['kpis', queryParams],
    () => getKpis(queryParams),
    {
      enabled: !!selectedPage?._id && !!dateRange.from && !!dateRange.to,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
      cacheTime: 10 * 60 * 1000, // 10 minutos
    }
  );

  return {
    kpis,
    isLoading,
    error,
    refetch,
    hasData: !!kpis,
    hasSelectedPage: !!selectedPage,
    selectedPage,
    dateRange,
  };
}; 