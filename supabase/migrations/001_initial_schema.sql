create extension if not exists "uuid-ossp";

create table if not exists farms (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  location text,
  area_hectares numeric(10,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists fields (
  id uuid primary key default uuid_generate_v4(),
  farm_id uuid not null references farms(id) on delete cascade,
  name text not null,
  area_hectares numeric(10,2) not null default 0,
  soil_type text,
  created_at timestamptz not null default now()
);

create table if not exists crops (
  id uuid primary key default uuid_generate_v4(),
  field_id uuid not null references fields(id) on delete cascade,
  name text not null,
  variety text,
  season text,
  planted_on date,
  expected_harvest date,
  status text not null default 'planned',
  created_at timestamptz not null default now()
);

create table if not exists tasks (
  id uuid primary key default uuid_generate_v4(),
  farm_id uuid not null references farms(id) on delete cascade,
  crop_id uuid references crops(id) on delete set null,
  title text not null,
  due_date date not null,
  status text not null default 'pending',
  priority text not null default 'medium',
  created_at timestamptz not null default now()
);

create table if not exists inventory_items (
  id uuid primary key default uuid_generate_v4(),
  farm_id uuid not null references farms(id) on delete cascade,
  name text not null,
  quantity numeric(12,2) not null default 0,
  unit text not null,
  reorder_level numeric(12,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists expenses (
  id uuid primary key default uuid_generate_v4(),
  farm_id uuid not null references farms(id) on delete cascade,
  category text not null,
  amount numeric(12,2) not null check (amount >= 0),
  spent_on date not null default current_date,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists fields_farm_id_idx on fields(farm_id);
create index if not exists tasks_farm_due_date_idx on tasks(farm_id, due_date);
create index if not exists inventory_farm_id_idx on inventory_items(farm_id);
create index if not exists expenses_farm_date_idx on expenses(farm_id, spent_on);
