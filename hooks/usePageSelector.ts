import { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setSelectedPage,
  setAvailablePages,
  setLoading,
  setError,
} from '@/store/slices/pageSelectorSlice';
import { getPages, getAllPages, type Page } from '@/services/pages';

export const usePageSelector = () => {
  const dispatch = useAppDispatch();
  const { selectedPage, availablePages, loading, error } = useAppSelector(
    (state) => state.pageSelector
  );

  // Cargar todas las páginas disponibles
  const loadAvailablePages = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      const pages = await getAllPages();
      dispatch(setAvailablePages(pages));
      
      // Si no hay página seleccionada y hay páginas disponibles, seleccionar la primera
      if (!selectedPage && pages.length > 0) {
        dispatch(setSelectedPage(pages[0]));
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error cargando páginas';
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, selectedPage]);

  // Seleccionar una página específica
  const selectPage = useCallback((page: Page) => {
    dispatch(setSelectedPage(page));
  }, [dispatch]);

  // Cargar páginas con paginación (para listar)
  const loadPages = useCallback(async (params?: {
    page?: number;
    limit?: number;
    status?: boolean;
  }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      // No enviar pageId si no hay página seleccionada
      const response = await getPages(params);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error cargando páginas';
      dispatch(setError(errorMessage));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  // Cargar páginas al montar el hook
  useEffect(() => {
    if (availablePages.length === 0) {
      loadAvailablePages();
    }
  }, [loadAvailablePages, availablePages.length]);

  return {
    // Estado
    selectedPage,
    availablePages,
    loading,
    error,
    
    // Acciones
    selectPage,
    loadAvailablePages,
    loadPages,
    
    // Utilidades
    hasSelectedPage: !!selectedPage,
    hasAvailablePages: availablePages.length > 0,
  };
}; 