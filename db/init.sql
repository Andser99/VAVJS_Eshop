ALTER USER postgres WITH PASSWORD 'Heslo123456';

CREATE TABLE advertisements
(
    id serial NOT NULL,
    url character varying NOT NULL,
    image character varying NOT NULL,
    clicks bigint NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products
(
    id serial NOT NULL,
    name character varying NOT NULL,
    image character varying NOT NULL,
    cost bigint NOT NULL,
    count bigint NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE products OWNER to postgres;

CREATE TABLE public.customers
(
    id serial NOT NULL,
    name character varying,
    email character varying UNIQUE,
    street character varying,
    street_number character varying,
    postal_code character varying,
    city character varying,
    PRIMARY KEY (id)
);

ALTER TABLE public.customers OWNER to postgres;

CREATE TABLE public.orders
(
    id serial NOT NULL,
    customer_id bigint NOT NULL,
    product_id bigint NOT NULL,
    count bigint NOT NULL,
    state bigint NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customer_foreign FOREIGN KEY (customer_id)
        REFERENCES public.customers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT product_foreign FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE public.orders OWNER to postgres;


INSERT INTO products(name, count, cost, image)
VALUES	('Klince 20cm', 5000, 5, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffotkyzadarmo.sk%2Fwp-content%2Fuploads%2F2017%2F01%2Fklince.jpg&f=1&nofb=1'),
		('Kladivo 3kg', 15, 7500, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.torriacars.sk%2Fdata%2Fimgauto%2F1%2F0%2F2020A.jpg&f=1&nofb=1'),
		('Doska 80x10cm', 300, 3100, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1918%2F4305%2Fproducts%2FIMG_2250_1024x1024.jpg%3Fv%3D1578336768&f=1&nofb=1');

        
INSERT INTO advertisements(url, image, clicks)
VALUES	('https://mykysuce.sme.sk/g/100513/vyliaty-potok-v-zakopci-napachal-velke-skody?gref=https%253A%252F%252Fmykysuce.sme.sk%252Fc%252F20885747%252Fvyliaty-potok-v-zakopci-napachal-velke-skody.html&photo=p3492344', 'https://m.smedata.sk/api-media/media/image/sme/8/34/3492348/3492348_1000x.jpeg?rev=2', 0);