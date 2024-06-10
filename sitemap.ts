import { MetadataRoute } from 'next'

import { MovieType } from '@/entities/movie/model/movie'

export default function sitemap(): MetadataRoute.Sitemap {
  const types: MovieType[] = ['popular', 'upcoming', 'top-rated']

  const typeRoutes: MetadataRoute.Sitemap = types.map(type => ({
    url: `https://client-two-hazel.vercel.app/list/${type}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://client-two-hazel.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://client-two-hazel.vercel.app/home',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://client-two-hazel.vercel.app/profile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://client-two-hazel.vercel.app/search',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...typeRoutes,
  ]
}
