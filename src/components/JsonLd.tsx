// Renders a JSON-LD <script> for structured data.
// Search engines use this to understand pages as typed entities
// (episodes, sources, breadcrumbs) rather than just text.
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; it contains only our own data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
