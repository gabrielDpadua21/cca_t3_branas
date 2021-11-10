create table coupon (
	code text,
	percentage numeric,
	expire_date timestamp,
	primary key (code)
);

insert into coupon (code, percentage, expire_date) values ('VALE20', 20, '2021-10-10T10:00:00');
insert into coupon (code, percentage, expire_date) values ('VALE20_EXPIRED', 20, '2020-10-10T10:00:00');