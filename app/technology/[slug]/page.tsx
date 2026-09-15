import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { TECHNOLOGY } from '@/lib/data/technology'
import { ServicePageTemplate, buildServiceMetadata } from '@/components/templates/ServicePageTemplate'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return TECHNOLOGY.map((x) => ({ slug: x.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const x = TECHNOLOGY.find((x) => x.slug === slug)
  if (!x) return { title: 'Not Found' }
  return buildServiceMetadata(x)
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const x = TECHNOLOGY.find((x) => x.slug === slug)
  if (!x) notFound()
  return <ServicePageTemplate c={x} />
}
