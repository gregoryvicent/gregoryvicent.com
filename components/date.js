// date-fns imports
import { parseISO, format } from 'date-fns'
// Date component for the blog posts and tutorials
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}