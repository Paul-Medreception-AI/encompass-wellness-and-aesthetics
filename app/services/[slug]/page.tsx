import { notFound } from 'next/navigation'
import ShopShelf from '@/components/ShopShelf'
import { SERVICE_COLLECTION } from '@/lib/data/shop-map'
import type { Metadata } from 'next'
import { SERVICES } from '@/lib/data/services'
import { ServicePageTemplate, buildServiceMetadata } from '@/components/templates/ServicePageTemplate'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return SERVICES.map((x) => ({ slug: x.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const x = SERVICES.find((x) => x.slug === slug)
  if (!x) return { title: 'Not Found' }
  return buildServiceMetadata(x)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const x = SERVICES.find((x) => x.slug === slug)
  if (!x) notFound()
  return (
    <>
      <ServicePageTemplate c={x} />
      <ShopShelf collection={SERVICE_COLLECTION[x.slug]} heading="Recommended by our providers" />
    </>
  )
}
