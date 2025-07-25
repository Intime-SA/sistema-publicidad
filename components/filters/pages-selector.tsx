'use client';

import { useState } from 'react';
import { usePageSelector } from '@/hooks/usePageSelector';
import { ChevronDown, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export const PageSelector = () => {
  const {
    selectedPage,
    availablePages,
    loading,
    error,
    selectPage,
    hasSelectedPage,
    hasAvailablePages,
  } = usePageSelector();

  const [isOpen, setIsOpen] = useState(false);

  if (loading && !hasAvailablePages) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm text-muted-foreground">Cargando páginas...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 border rounded-md border-red-200 bg-red-50">
        <span className="text-sm text-red-600">Error: {error}</span>
      </div>
    );
  }

  if (!hasAvailablePages) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
        <span className="text-sm text-muted-foreground">No hay páginas disponibles</span>
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between"
          disabled={loading}
        >
          <div className="flex items-center gap-2">
            {selectedPage ? (
              <>
                <span className="font-medium">{selectedPage.name}</span>
                <Badge variant={selectedPage.status ? "default" : "secondary"}>
                  {selectedPage.status ? 'Activo' : 'Inactivo'}
                </Badge>
              </>
            ) : (
              <span className="text-muted-foreground">Seleccionar página</span>
            )}
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-[200px]" align="start">
        {availablePages.map((page) => (
          <DropdownMenuItem
            key={page._id}
            onClick={() => {
              selectPage(page);
              setIsOpen(false);
            }}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <span className="font-medium">{page.name}</span>
              <span className="text-xs text-muted-foreground">{page.url}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={page.status ? "default" : "secondary"} className="text-xs">
                {page.status ? 'Activo' : 'Inactivo'}
              </Badge>
              {selectedPage?._id === page._id && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}; 