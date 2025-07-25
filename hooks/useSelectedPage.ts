import { useAppSelector } from '@/store/hooks';

export const useSelectedPage = () => {
  const { selectedPage, loading, error } = useAppSelector(
    (state) => state.pageSelector
  );

  return {
    selectedPage,
    loading,
    error,
    hasSelectedPage: !!selectedPage,
  };
}; 