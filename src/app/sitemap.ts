import type { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { articles } from '@/lib/infohub'
import { absoluteUrl } from '@/lib/site'
import { servicesData } from '@/lib/servicesData'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/projects'), changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/onze-diensten'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/over-ons'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/werkwijze'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.6 },
    { url: absoluteUrl('/offerte-aanvragen'), changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/infohub'), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: absoluteUrl(`/diensten/${s.slug}`),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const projects = await prisma.project
    .findMany({ where: { published: true }, select: { slug: true, updatedAt: true } })
    .catch(() => [])

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: absoluteUrl(`/projects/${p.slug}`),
    lastModified: p.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: absoluteUrl(`/infohub/${a.slug}`),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...articleRoutes]
}
