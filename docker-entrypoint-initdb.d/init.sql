
CREATE TABLE public.bleeds (
    id SERIAL NOT NULL,
    name text NOT NULL
);

CREATE TABLE public.dogs (
    id SERIAL NOT NULL,
    name text NOT NULL,
    bleed_id integer
);