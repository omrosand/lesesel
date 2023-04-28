// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'vxj7c587',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export const writeClient = createClient({
  projectId: 'vxj7c587',
  dataset: 'production',
  token: 'skJ1g3oe5jCQ9lrLm5V5YW7w50ZvYGAFnVmu7lavuyEXb3H8tYGcvvaZcx4u0TUcp4jAEO9Wnlbj5Pq6YA93k0F5bxFGA4rIaYt2L4a3HXo7KzyQutWMZ20thf23oLywKjFuosSkZotzf0whoashMh233nn6KcWI1JsSZ7dhy26WtVsQw0Ww', 
  apiVersion: '2022-01-12',
})

// skJ1g3oe5jCQ9lrLm5V5YW7w50ZvYGAFnVmu7lavuyEXb3H8tYGcvvaZcx4u0TUcp4jAEO9Wnlbj5Pq6YA93k0F5bxFGA4rIaYt2L4a3HXo7KzyQutWMZ20thf23oLywKjFuosSkZotzf0whoashMh233nn6KcWI1JsSZ7dhy26WtVsQw0Ww