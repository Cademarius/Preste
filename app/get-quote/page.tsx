/**
 * Dedicated page for project quotes - separate from contact
 * Focused on project details and requirements
 */
import { GetQuoteHero } from "@/components/sections/get-quote-hero"
import { GetQuoteForm } from "@/components/sections/get-quote-form"
import { GetQuoteProcess } from "@/components/sections/get-quote-process"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen pt-16">
      <GetQuoteHero />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-2">
          <GetQuoteForm />
        </div>
        <div className="lg:col-span-1">
          <GetQuoteProcess />
        </div>
      </div>
    </div>
  )
}
