import Image from 'next/image'
import { COLLECTIONS, SHOP_URL, collectionUrl, productUrl } from '@/lib/data/shop'
import { withUtm } from '@/lib/shop-links'
import { COLLECTION_PITCH } from '@/lib/data/shop-map'

/**
 * The store shelf that belongs on this page.
 *
 * Renders nothing when the collection is unknown or empty — the Sexual Health
 * collection currently has 0 products, and an empty shelf is worse than none.
 */
export default function ShopShelf({
  collection,
  heading,
}: {
  collection?: string
  heading?: string
}) {
  if (!collection) return null
  const col = COLLECTIONS[collection]
  if (!col || col.products.length === 0) return null

  const utm = (url: string) => withUtm(url, 'shelf', collection)

  return (
    <section className="bg-[var(--color-light)] py-16 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-3">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-[var(--color-ink)]">
            {heading || col.title}
          </h2>
          <a
            href={utm(collectionUrl(col.handle))}
            target="_blank"
            rel="noopener"
            className="text-sm font-semibold text-[var(--color-accent)] hover:underline whitespace-nowrap"
          >
            Shop all {col.count} &rarr;
          </a>
        </div>
        <p className="text-[var(--color-muted)] mb-10 max-w-2xl">
          {COLLECTION_PITCH[col.handle] ||
            'Pharmaceutical-grade products, dispensed through our online store.'}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {col.products.map((p) => (
            <a
              key={p.handle}
              href={utm(productUrl(p.handle))}
              target="_blank"
              rel="noopener"
              className="group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
            >
              {p.image && (
                <div className="relative h-44 bg-white">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                  {p.title}
                </h3>
                {p.vendor && (
                  <p className="text-xs text-[var(--color-muted)] mt-1">{p.vendor}</p>
                )}
                {p.price && (
                  <p className="text-sm font-semibold text-[var(--color-ink)] mt-auto pt-3">
                    ${Number(p.price).toFixed(2)}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--color-muted)] mt-6">
          Prices and availability are shown by our store at{' '}
          <a
            href={utm(SHOP_URL)}
            target="_blank"
            rel="noopener"
            className="underline hover:text-[var(--color-accent)]"
          >
            store.encompassspa.com
          </a>
          . Supplements are not a substitute for a treatment plan — ask us what is right for you.
        </p>
      </div>
    </section>
  )
}
