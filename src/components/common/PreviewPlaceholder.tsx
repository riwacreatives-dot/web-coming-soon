import React from 'react';
import { AssetId } from '../../types';

interface PreviewPlaceholderProps {
  decisionId: string;
  assetId?: AssetId;
  label: string;
  aspectRatio?: string;
  surface?: 'light' | 'orange' | 'dark';
  className?: string;
}

/**
 * AST-P01: Strict Dev/Preview Staging Frame ONLY.
 * Never ships unresolved placeholders into production builds (`import.meta.env.PROD` returns null).
 * Every rendered instance corresponds to an entry in MISSING_CONTENT_REPORT_ENTRIES.
 */
export const PreviewPlaceholder: React.FC<PreviewPlaceholderProps> = ({
  decisionId,
  assetId,
  label,
  aspectRatio = '4 / 3',
  surface = 'light',
  className = '',
}) => {
  if (import.meta.env.PROD) {
    return null;
  }

  const surfaceStyles =
    surface === 'orange'
      ? 'bg-[#FD7D3C] border-[#111116] text-[#111116]'
      : surface === 'dark'
        ? 'bg-[#1B1B22] border-[#8E8E9A] text-[#F5F4F0]'
        : 'bg-[#E7E7E9] border-[#55555F] text-[#111116]';

  return (
    <div
      style={{ aspectRatio }}
      data-preview-placeholder="AST-P01"
      className={`w-full border border-dashed p-5 sm:p-6 flex flex-col justify-between ${surfaceStyles} ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 type-mono-micro uppercase">
        <span className="font-medium">PREVIEW PLACEHOLDER · {decisionId}</span>
        {assetId && <span>{assetId}</span>}
      </div>

      <p className="type-body-sm font-medium max-w-md my-auto py-4">
        [PLACEHOLDER — REQUIRES RIWA INPUT: {label}]
      </p>

      <span className="type-mono-micro uppercase">
        AST-P01 // BLOCKED FOR PUBLIC RELEASE
      </span>
    </div>
  );
};
