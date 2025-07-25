'use client';

import { Users, Clock, TrendingUp, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useKpis } from '@/hooks/useKpis';
import { formatVariacion, getVariacionColor } from '@/services/kpis';
import { Skeleton } from '@/components/ui/skeleton';

export const KpisGenerales = () => {
  const { kpis, isLoading, error, hasData, hasSelectedPage } = useKpis();

  if (!hasSelectedPage) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-24" />
              </CardTitle>
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-24" />
              </CardTitle>
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="border-red-200 bg-red-50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-red-600">
                Error
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">--</div>
              <p className="text-xs text-red-500">
                Error cargando datos
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!hasData || !kpis) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Sin datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">--</div>
              <p className="text-xs text-muted-foreground">
                No hay datos disponibles
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const kpiCards = [
    {
      title: 'Visitantes Totales',
      value: kpis.visitantesTotales.valor.toLocaleString(),
      variation: kpis.visitantesTotales.variacion,
      icon: Users,
      description: 'respecto al período anterior',
    },
    {
      title: 'Tiempo Promedio',
      value: `${kpis.tiempoPromedio.valor} ms`,
      variation: kpis.tiempoPromedio.variacion,
      icon: Clock,
      description: 'respecto al período anterior',
    },
    {
      title: 'Tasa de Conversión',
      value: `${kpis.tasaConversion.valor.toFixed(1)}%`,
      variation: kpis.tasaConversion.variacion,
      icon: TrendingUp,
      description: 'respecto al período anterior',
    },
    {
      title: 'Registros Casino',
      value: kpis.registrosCasino.valor.toLocaleString(),
      variation: kpis.registrosCasino.variacion,
      icon: UserPlus,
      description: 'respecto al período anterior',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiCards.map((kpi, index) => {
        const IconComponent = kpi.icon;
        const variationColor = getVariacionColor(kpi.variation);
        
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {kpi.title}
              </CardTitle>
              <IconComponent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${variationColor}`}>
                {formatVariacion(kpi.variation)} {kpi.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}; 