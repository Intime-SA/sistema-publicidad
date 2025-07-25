import axios from 'axios';

// Tipos para la respuesta del API
export interface KpiMetric {
  valor: number;
  variacion: number;
}

export interface Periodo {
  from: string;
  to: string;
}

export interface KpisResponse {
  visitantesTotales: KpiMetric;
  tiempoPromedio: KpiMetric;
  tasaConversion: KpiMetric;
  registrosCasino: KpiMetric;
  periodo: {
    actual: Periodo;
    anterior: Periodo;
  };
}

export interface KpisQueryParams {
  from: string;
  to: string;
  pageId: string;
}

// Configuración base de axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Obtiene los KPIs generales
 */
export const getKpis = async (params: KpisQueryParams): Promise<KpisResponse> => {
  try {
    const response = await api.get('/api/kpis', { params });
    return response.data;
  } catch (error) {
    console.error('Error obteniendo KPIs:', error);
    throw error;
  }
};

/**
 * Función helper para formatear el tiempo promedio en formato legible


/**
 * Función helper para formatear la variación con signo
 */
export const formatVariacion = (variacion: number): string => {
  const signo = variacion >= 0 ? '+' : '';
  return `${signo}${variacion.toFixed(1)}%`;
};

/**
 * Función helper para obtener el color de la variación
 */
export const getVariacionColor = (variacion: number): string => {
  if (variacion > 0) return 'text-green-600';
  if (variacion < 0) return 'text-red-600';
  return 'text-gray-600';
}; 