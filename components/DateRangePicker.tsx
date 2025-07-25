'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { useDateRangeAsDates } from '@/contexts/DateContext';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { DateRange } from 'react-day-picker';

export const DateRangePicker = () => {
  const { fromDate, toDate, setDateRangeFromDates, isLoading } = useDateRangeAsDates();
  const [date, setDate] = useState<DateRange | undefined>({
    from: fromDate ? new Date(fromDate) : undefined,
    to: toDate ? new Date(toDate) : undefined,
  });

  // Presets de fechas
  const presets = [
    {
      label: 'Últimas 24 horas',
      getDates: () => {
        const now = new Date();
        const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        return { from: yesterday, to: now };
      },
    },
    {
      label: 'Últimos 7 días',
      getDates: () => {
        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        return { from: sevenDaysAgo, to: now };
      },
    },
    {
      label: 'Últimos 30 días',
      getDates: () => {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        return { from: thirtyDaysAgo, to: now };
      },
    },
    {
      label: 'Últimos 90 días',
      getDates: () => {
        const now = new Date();
        const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        return { from: ninetyDaysAgo, to: now };
      },
    },
    {
      label: 'Último año',
      getDates: () => {
        const now = new Date();
        const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        return { from: oneYearAgo, to: now };
      },
    },
  ];

  const handlePresetChange = (presetLabel: string) => {
    const preset = presets.find(p => p.label === presetLabel);
    if (preset) {
      const { from, to } = preset.getDates();
      setDateRangeFromDates(from, to);
    }
  };

  const handleDateSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    if (selectedDate?.from && selectedDate?.to) {
      setDateRangeFromDates(
        new Date(selectedDate.from),
        new Date(selectedDate.to)
      );
    }
  };

  const formatDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy', { locale: es });
  };

  const formatDateRange = () => {
    if (!date?.from || !date?.to) return 'Seleccionar fechas';
    
    if (date.from.toDateString() === date.to.toDateString()) {
      return formatDate(date.from);
    }
    
    return `${formatDate(date.from)} - ${formatDate(date.to)}`;
  };

  const clearDates = () => {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    setDateRangeFromDates(sevenDaysAgo, now);
  };

  if (isLoading) {
    return (
      <div className="w-[300px] h-10 bg-muted animate-pulse rounded-md" />
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* Presets */}
      <Select onValueChange={handlePresetChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Presets" />
        </SelectTrigger>
        <SelectContent>
          {presets.map((preset) => (
            <SelectItem key={preset.label} value={preset.label}>
              {preset.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date?.from && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="p-3 border-b">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Seleccionar rango de fechas</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearDates}
                className="h-6 px-2 text-xs"
              >
                Limpiar
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-medium">Desde:</span>
                <span className={cn(!date?.from && 'text-muted-foreground')}>
                  {date?.from ? formatDate(date.from) : 'No seleccionada'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">Hasta:</span>
                <span className={cn(!date?.to && 'text-muted-foreground')}>
                  {date?.to ? formatDate(date.to) : 'No seleccionada'}
                </span>
              </div>
            </div>
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            locale={es}
            className="rounded-md border-0"
          />
          <div className="p-3 border-t bg-muted/50">
            <div className="text-xs text-muted-foreground">
              Selecciona la fecha inicial y luego la fecha final
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}; 