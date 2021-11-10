create table item (
	item_id serial primary key,
	category text,
	description text,
	price numeric,
	width integer,
	height integer,
	length integer,
	weight integer
);

insert into item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Guitarra', 1000, 100, 50, 15, 3);
insert into item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Amplificador', 5000, 50, 50, 50, 22);
insert into item (category, description, price, width, height, length, weight) values ('Acessórios', 'Cabo', 30, 10, 10, 10, 1);