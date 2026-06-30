'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mic2, Code2, Users, MapPin, Calendar, Layers, Users2,
  CheckCircle, Loader2, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

/* ─────────────────────────── static data ─────────────────────────── */

const FEATURES = [
  {
    Icon: Mic2,
    title: 'Talks on AI Agents',
    desc: 'Hear from leaders and builders on AI Agents, LLMs, automation, and the future of intelligent systems',
  },
  {
    Icon: Code2,
    title: 'Hands-on Workshops',
    desc: 'Interactive sessions on designing, building, and deploying real-world AI agents',
  },
  {
    Icon: Users,
    title: 'Network & Connect',
    desc: 'Meet founders, developers, engineers, students, and enterprises from across the region',
  },
]

const EVENT_DETAILS = [
  { Icon: MapPin,   label: 'Location', value: 'Rourkela, Odisha, India' },
  { Icon: Calendar, label: 'Timeline', value: 'Q4 2026 — date finalised by community feedback' },
  { Icon: Layers,   label: 'Format',   value: 'Keynotes · Panels · Workshops · Live Demos' },
  { Icon: Users2,   label: 'Audience', value: 'Companies, Developers, Students & AI Enthusiasts' },
]

const ATTEND_OPTIONS = ['Yes', 'No']
const MONTH_OPTIONS  = ['November', 'December', 'January']

const TOPICS = [
  'AI Agents',
  'Agentic AI',
  'Large Language Models (LLMs)',
  'Generative AI',
  'AI Automation',
  'Multi-Agent Systems',
  'Retrieval-Augmented Generation (RAG)',
  'AI for Enterprises',
  'AI Startups',
  'AI Product Development',
  'AI Career & Learning',
  'Hands-on Workshops',
]

/* ─────────────────────────── multi-select ─────────────────────────── */

function TopicsSelect({
  selected,
  onToggle,
}: {
  selected: string[]
  onToggle: (t: string) => void
}) {
  const [open, setOpen] = useState(false)

  const label =
    selected.length === 0 ? 'Select topics…'
    : selected.length === 1 ? selected[0]
    : `${selected.length} topics selected`

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          className={cn(
            'flex h-9 w-full items-center justify-between rounded-md border border-input',
            'bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow]',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          )}
        >
          <span className={selected.length === 0 ? 'text-muted-foreground' : 'text-foreground truncate pr-2'}>
            {label}
          </span>
          <ChevronDown className={cn('size-4 shrink-0 text-muted-foreground transition-transform duration-200', open && 'rotate-180')} />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={4}
        className="p-0 shadow-md"
        style={{ width: 'var(--radix-popover-trigger-width)' }}
      >
        <div className="max-h-56 overflow-y-auto py-1" role="listbox" aria-multiselectable="true">
          {TOPICS.map(topic => {
            const checked = selected.includes(topic)
            return (
              <div
                key={topic}
                role="option"
                aria-selected={checked}
                className="flex items-center gap-2.5 px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
                onClick={() => onToggle(topic)}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => onToggle(topic)}
                  onClick={e => e.stopPropagation()}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm leading-snug select-none">{topic}</span>
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

/* ─────────────────────────── helpers ─────────────────────────── */

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
}

/* ─────────────────────────── page component ─────────────────────────── */

export function SymposiumClient() {
  const [attending,      setAttending]      = useState('')
  const [preferredMonth, setPreferredMonth] = useState('')
  const [topicInterests, setTopicInterests] = useState<string[]>([])
  const [showOther,      setShowOther]      = useState(false)
  const [otherTopic,     setOtherTopic]     = useState('')
  const [name,           setName]           = useState('')
  const [email,          setEmail]          = useState('')
  const [errors,         setErrors]         = useState<Record<string, string>>({})
  const [isSubmitting,   setIsSubmitting]   = useState(false)
  const [isSubmitted,    setIsSubmitted]    = useState(false)

  function clearError(key: string) {
    setErrors(prev => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  function toggleTopic(topic: string) {
    setTopicInterests(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic],
    )
    clearError('topicInterests')
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {}
    if (!attending)                  e.attending      = 'Please select an option.'
    if (!preferredMonth)             e.preferredMonth = 'Please select a month.'
    if (topicInterests.length === 0) e.topicInterests = 'Please select at least one topic.'
    if (!email)                      e.email          = 'Email address is required.'
    else if (!isValidEmail(email))   e.email          = 'Please enter a valid email address.'
    return e
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setIsSubmitting(true)
    const payload = {
      name:           name.trim() || null,
      email:          email.trim(),
      attending,
      preferredMonth,
      topicInterests,
      otherTopic:     showOther ? otherTopic.trim() || null : null,
    }
    try {
      await fetch('/api/symposium-poll', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
    } catch { /* proceed to success */ }
    finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50/50 pt-28 sm:pt-32 pb-12">

      {/* ── container: same max-width + padding as the navbar ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white rounded-2xl border border-border shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[45%_55%]"
        >

          {/* ════════════════════════════════════════
              LEFT — Event information
          ════════════════════════════════════════ */}
          <div className="relative overflow-hidden bg-linear-to-br from-slate-50/80 via-white to-sky-50/30 px-8 sm:px-10 lg:px-12 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r border-border">

            {/* Ambient blob */}
            <div
              className="absolute -top-12 -right-12 w-52 h-52 bg-linear-to-bl from-sky-100/60 to-transparent rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative space-y-7">

              {/* Label chip */}
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-secondary rounded-sm shrink-0" />
                <span className="text-secondary font-semibold text-xs tracking-[0.16em] uppercase">
                  AI Symposium · Rourkela, Odisha
                </span>
              </div>

              {/* ── Main heading ── */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-3">
                  AI Agents{' '}
                  <span className="text-secondary">Symposium</span>
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
                  A full-day community event in Rourkela bringing together AI builders,
                  developers, and enthusiasts to explore agentic AI systems.
                </p>
              </div>

              <div className="h-px bg-border" />

              {/* Feature highlights */}
              <div className="space-y-5">
                {FEATURES.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-3.5">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-foreground leading-tight mb-1">
                        {title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-border" />

              {/* Event details */}
              <div className="space-y-4">
                {EVENT_DETAILS.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-secondary shrink-0 mt-[0.2rem]" />
                    <div className="min-w-0">
                      <span className="block text-xs font-bold text-secondary tracking-[0.14em] uppercase mb-0.5">
                        {label}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-foreground leading-snug">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Poll nudge */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Help us choose the best month — complete the 30-second poll →
              </p>

            </div>
          </div>

          {/* ════════════════════════════════════════
              RIGHT — Poll form
          ════════════════════════════════════════ */}
          <div className="px-8 sm:px-10 lg:px-12 py-10 lg:py-12">

            {/* ── Poll heading ── */}
            <div className="mb-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                AI Symposium Interest Poll
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Help us plan the event by answering a few quick questions.
              </p>
            </div>

            <AnimatePresence mode="wait">

              {/* ── Success state ── */}
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.05, type: 'spring', stiffness: 150 }}
                  >
                    <CheckCircle className="w-14 h-14 text-secondary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Thank you!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xs leading-relaxed">
                    Your response has been recorded. We'll notify you when registrations open.
                  </p>
                </motion.div>

              ) : (

                /* ── Poll form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="AI Symposium interest poll"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >

                  {/* Q1 — Yes / No */}
                  <div>
                    <Label className="text-sm sm:text-base font-semibold text-foreground mb-2.5 block">
                      1. Would you be interested in attending the AI Agents Symposium in Rourkela?
                      <span className="text-destructive ml-1" aria-label="required">*</span>
                    </Label>
                    <div className="flex gap-3">
                      {ATTEND_OPTIONS.map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setAttending(opt); clearError('attending') }}
                          className={cn(
                            'flex-1 h-10 rounded-md border text-sm font-medium transition-all duration-150 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
                            attending === opt
                              ? 'border-secondary bg-secondary/10 text-secondary shadow-xs'
                              : 'border-border bg-background text-muted-foreground hover:border-secondary/50 hover:text-foreground',
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {errors.attending && (
                      <p className="text-destructive text-sm mt-1.5" role="alert">{errors.attending}</p>
                    )}
                  </div>

                  {/* Q2 — Preferred month */}
                  <div>
                    <Label htmlFor="month-select" className="text-sm sm:text-base font-semibold text-foreground mb-2.5 block">
                      2. Which month would you prefer?
                      <span className="text-destructive ml-1" aria-label="required">*</span>
                    </Label>
                    <Select
                      value={preferredMonth}
                      onValueChange={v => { setPreferredMonth(v); clearError('preferredMonth') }}
                    >
                      <SelectTrigger id="month-select" className="h-10 text-sm" aria-required="true">
                        <SelectValue placeholder="Select a month…" />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTH_OPTIONS.map(month => (
                          <SelectItem key={month} value={month} className="text-sm">{month}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredMonth && (
                      <p className="text-destructive text-sm mt-1.5" role="alert">{errors.preferredMonth}</p>
                    )}
                  </div>

                  {/* Q3 — Topics multi-select */}
                  <div>
                    <Label className="text-sm sm:text-base font-semibold text-foreground mb-2.5 block">
                      3. Which AI topics interest you most?
                      <span className="text-destructive ml-1" aria-label="required">*</span>
                    </Label>
                    <TopicsSelect
                      selected={topicInterests}
                      onToggle={topic => { toggleTopic(topic); clearError('topicInterests') }}
                    />

                    {/* Other */}
                    <div className="flex items-center gap-2 mt-2.5">
                      <Checkbox
                        id="topic-other"
                        checked={showOther}
                        onCheckedChange={checked => setShowOther(!!checked)}
                      />
                      <Label htmlFor="topic-other" className="text-sm font-normal cursor-pointer">
                        Other — please specify
                      </Label>
                    </div>

                    <AnimatePresence>
                      {showOther && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <Input
                            type="text"
                            placeholder="Specify your topic…"
                            value={otherTopic}
                            onChange={e => setOtherTopic(e.target.value)}
                            aria-label="Specify other topic interest"
                            className="mt-2 h-10 text-sm"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {errors.topicInterests && (
                      <p className="text-destructive text-sm mt-1.5" role="alert">{errors.topicInterests}</p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Name + Email — two-column grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Name
                        <span className="text-muted-foreground font-normal ml-1">(Optional)</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="name"
                        className="h-10 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address
                        <span className="text-destructive ml-1" aria-label="required">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={e => { setEmail(e.target.value); clearError('email') }}
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className="h-10 text-sm"
                      />
                      {errors.email && (
                        <p id="email-error" className="text-destructive text-sm" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit + hint */}
                  <div className="space-y-3">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-11 text-sm font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        'Submit Interest'
                      )}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      We'll notify you when registrations open. No spam.
                    </p>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>

          </div>
          {/* end right panel */}

        </motion.div>
      </div>
    </main>
  )
}
