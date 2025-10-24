import Link from "next/link"
import { Instagram, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-light tracking-wide">ISSAC</div>

          <div className="flex items-center gap-6">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-muted-foreground transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-muted-foreground transition-colors" />
            </Link>
            <Link href="mailto:hello@issac.com">
              <Mail className="w-5 h-5 hover:text-muted-foreground transition-colors" />
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Issac Photography. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
