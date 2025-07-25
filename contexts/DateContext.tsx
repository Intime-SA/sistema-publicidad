'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DateRange {
  from: string; // ISO string
  to: string;   // ISO string
}

interface DateContextType {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  isLoading: boolean;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

// Función para obtener el rango por defecto (últimos 7 días)
const getDefaultDateRange = (): DateRange => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return {
    from: sevenDaysAgo.toISOString(),
    to: now.toISOString(),
  };
};

// Función para cargar fechas desde localStorage
const loadDateRangeFromStorage = (): DateRange => {
  if (typeof window === 'undefined') {
    return getDefaultDateRange();
  }

  try {
    const stored = localStorage.getItem('dateRange');
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validar que las fechas sean válidas
      if (parsed.from && parsed.to && !isNaN(Date.parse(parsed.from)) && !isNaN(Date.parse(parsed.to))) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Error loading date range from storage:', error);
  }

  return getDefaultDateRange();
};

// Función para guardar fechas en localStorage
const saveDateRangeToStorage = (dateRange: DateRange) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem('dateRange', JSON.stringify(dateRange));
  } catch (error) {
    console.error('Error saving date range to storage:', error);
  }
};

interface DateProviderProps {
  children: ReactNode;
}

export const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
  const [dateRange, setDateRangeState] = useState<DateRange>(getDefaultDateRange);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar fechas al montar el componente
  useEffect(() => {
    const storedRange = loadDateRangeFromStorage();
    setDateRangeState(storedRange);
    setIsLoading(false);
  }, []);

  // Función para actualizar fechas
  const setDateRange = (range: DateRange) => {
    setDateRangeState(range);
    saveDateRangeToStorage(range);
  };

  const value: DateContextType = {
    dateRange,
    setDateRange,
    isLoading,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
};

// Hook para usar el contexto
export const useDateRange = (): DateContextType => {
  const context = useContext(DateContext);
  if (context === undefined) {
    throw new Error('useDateRange must be used within a DateProvider');
  }
  return context;
};

// Hook para obtener fechas como objetos Date
export const useDateRangeAsDates = () => {
  const { dateRange, setDateRange, isLoading } = useDateRange();
  
  const fromDate = new Date(dateRange.from);
  const toDate = new Date(dateRange.to);
  
  const setDateRangeFromDates = (from: Date, to: Date) => {
    setDateRange({
      from: from.toISOString(),
      to: to.toISOString(),
    });
  };

  return {
    fromDate,
    toDate,
    setDateRangeFromDates,
    isLoading,
  };
}; 