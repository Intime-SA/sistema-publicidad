import axios from 'axios';

// Tipos para la respuesta del API
export interface Page {
  _id: string;
  name: string;
  access_token: string;
  pixel_id: string;
  url: string;
  status: boolean;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface PagesResponse {
  success: boolean;
  pages: Page[];
  pagination: PaginationInfo;
}

export interface PagesError {
  error: string;
  details: string;
}

// Parámetros para la consulta
export interface PagesQueryParams {
  limit?: number;
  page?: number;
  status?: boolean;
}

// Configuración base de axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Obtiene la lista de páginas con paginación y filtros
 */
export const getPages = async (params: PagesQueryParams = {}): Promise<PagesResponse> => {
  try {
    const { limit = 10, page = 1, status } = params;
    
    const queryParams: any = {
      limit,
      page,
    };
    
    if (status !== undefined) {
      queryParams.status = status;
    }

    const response = await api.get('/api/pages', { params: queryParams });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo páginas:', error);
    throw error;
  }
};

/**
 * Obtiene una página específica por ID
 */
export const getPageById = async (id: string): Promise<Page> => {
  try {
    const response = await api.get(`/api/pages/${id}`);
    return response.data.page;
  } catch (error) {
    console.error(`Error obteniendo página con ID ${id}:`, error);
    throw error;
  }
};

/**
 * Crea una nueva página
 */
export const createPage = async (pageData: Partial<Page>): Promise<Page> => {
  try {
    const response = await api.post('/api/pages', pageData);
    return response.data.page;
  } catch (error) {
    console.error('Error creando página:', error);
    throw error;
  }
};

/**
 * Actualiza una página existente
 */
export const updatePage = async (id: string, pageData: Partial<Page>): Promise<Page> => {
  try {
    const response = await api.put(`/api/pages/${id}`, pageData);
    return response.data.page;
  } catch (error) {
    console.error(`Error actualizando página con ID ${id}:`, error);
    throw error;
  }
};

/**
 * Elimina una página
 */
export const deletePage = async (id: string): Promise<void> => {
  try {
    await api.delete(`/api/pages/${id}`);
  } catch (error) {
    console.error(`Error eliminando página con ID ${id}:`, error);
    throw error;
  }
};

/**
 * Obtiene páginas por estado
 */
export const getPagesByStatus = async (status: boolean, params: Omit<PagesQueryParams, 'status'> = {}): Promise<PagesResponse> => {
  return getPages({ ...params, status });
};

/**
 * Obtiene todas las páginas (sin paginación)
 */
export const getAllPages = async (): Promise<Page[]> => {
  try {
    const response = await getPages({ limit: 1000, page: 1 });
    return response.pages;
  } catch (error) {
    console.error('Error obteniendo todas las páginas:', error);
    throw error;
  }
};

/**
 * Obtiene páginas activas
 */
export const getActivePages = async (params: Omit<PagesQueryParams, 'status'> = {}): Promise<PagesResponse> => {
  return getPagesByStatus(true, params);
};

/**
 * Obtiene páginas inactivas
 */
export const getInactivePages = async (params: Omit<PagesQueryParams, 'status'> = {}): Promise<PagesResponse> => {
  return getPagesByStatus(false, params);
};
