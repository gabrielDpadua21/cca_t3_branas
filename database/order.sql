create table order (
	id serial,
	coupon text,
	code text,
	cpf text,
	issue_date timestamp,
	freight numeric,
	sequence integer,
	primary key (id)
);