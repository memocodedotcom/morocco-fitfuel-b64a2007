import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Outer section classes (background, borders). */
  sectionClassName?: string;
  containerClassName?: string;
}

/**
 * Shared vertical rhythm for marketing sections: container + default padding.
 */
export function PageSection({
  children,
  className,
  sectionClassName,
  containerClassName,
}: PageSectionProps) {
  return (
    <section className={cn('py-8', sectionClassName)}>
      <div className={cn('container', containerClassName, className)}>{children}</div>
    </section>
  );
}
