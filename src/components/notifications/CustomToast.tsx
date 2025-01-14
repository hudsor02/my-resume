// src/components/notifications/CustomToast.tsx
'use client';

import { Button } from '@/components/ui/Buttons/Button';
import { X } from 'lucide-react';
import { toast } from 'sonner';

import type { CustomToastProps } from './types';

const iconMap = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
} as const;

type ToastType = keyof typeof iconMap;

export function CustomToast({
  title,
  description,
  type = 'info',
  toastId,
}: CustomToastProps & { type: ToastType }) {
  const handleDismiss = () => {
    if (toastId) {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-800">
      <div className="text-lg">{iconMap[type]}</div>
      <div className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {description && (
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleDismiss}
        className="h-6 w-6 p-0"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
