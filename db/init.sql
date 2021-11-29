ALTER USER postgres WITH PASSWORD 'Heslo123456';

CREATE TABLE products
    (
        "name" character varying NOT NULL,
        "image" character varying NOT NULL,
        id serial,
        "cost" bigint NOT NULL,
        "count" bigint NOT NULL,
        PRIMARY KEY (id)
    );
    
ALTER TABLE products OWNER to postgres;



INSERT INTO products("name", "count", "cost", "image")
VALUES	('Klince 20cm', 5000, 5, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffotkyzadarmo.sk%2Fwp-content%2Fuploads%2F2017%2F01%2Fklince.jpg&f=1&nofb=1'),
		('Kladivo 3kg', 15, 7500, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.torriacars.sk%2Fdata%2Fimgauto%2F1%2F0%2F2020A.jpg&f=1&nofb=1'),
		('Doska 80x10cm', 300, 3100, 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1918%2F4305%2Fproducts%2FIMG_2250_1024x1024.jpg%3Fv%3D1578336768&f=1&nofb=1');