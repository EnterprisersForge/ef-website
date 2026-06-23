-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null default '',
  message text not null,
  interests text[] not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

-- No public read/write policies — inserts go through the Next.js API using the service role key.
