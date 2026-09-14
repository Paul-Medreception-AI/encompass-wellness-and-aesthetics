import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-9xl font-serif text-[var(--color-primary)] opacity-20 leading-none">
          404
        </div>
        <h1 className="font-serif text-4xl text-[var(--color-ink)] mt-4">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-full hover:bg-[var(--color-accent-dark)] transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-[var(--color-border)] text-[var(--color-ink)] px-8 py-3 rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}