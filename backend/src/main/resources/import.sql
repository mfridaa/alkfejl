INSERT INTO USER VALUES (0, '$2a$10$Mw8uqBOcbUbAFmJQ9V/pYuLSMEkanCAvyupvvyFw7k.cNWx8HBRxi', 'ADMIN', 'bla');
INSERT INTO USER VALUES (1, '$2a$10$Mw8uqBOcbUbAFmJQ9V/pYuLSMEkanCAvyupvvyFw7k.cNWx8HBRxi', 'ADMIN', 'asd');
INSERT INTO CATEGORY VALUES (0, 'ART');
INSERT INTO CATEGORY VALUES (1, 'HOME');
INSERT INTO CATEGORY VALUES (2, 'TECH');
INSERT INTO CATEGORY VALUES (3, 'WOMEN');
INSERT INTO CATEGORY VALUES (4, 'MEN');
INSERT INTO PRODUCT VALUES (0, 'Phone Case', 'https://ctl.s6img.com/society6/img/36y8uYhFJx_tN2E4tsl4y5zCnLE/w_700/cases/iphone7plus/slim/back/~artwork,fw_1300,fh_2000,iw_1300,ih_2000/s6-0040/a/18565759_7912630/~~/you-asleep-yet-cases.jpg', 1000);
INSERT INTO PRODUCT VALUES (1, 'T-shirt', 'https://ctl.s6img.com/society6/img/EjOu-HptCsxdEVr6YAWJJfiXFmE/w_700/all-over-print-shirts/women/medium/front/~artwork,fw_6000,fh_6000,iw_6000,ih_6000/s6-0048/a/21020532_13511311/~~/gravity-abe-all-over-print-shirts.jpg', 200);
INSERT INTO PRODUCT VALUES (2, 'T-shirt', 'https://ctl.s6img.com/society6/img/BYYhT5Sqok2CecOGHWrMLYVol6Q/w_700/tshirts/men/greybg/black/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,iw_3300,ih_5100/s6-0093/a/36010713_1861484/~~/jellyspace-x3x-tshirts.jpg', 500);
INSERT INTO PRODUCT VALUES (3, 'Sweatshirt', 'https://ctl.s6img.com/society6/img/bKEAZUHTGbPR-Rh7rZTronEmSGk/w_700/long-sleeve-tshirts/women/greybg/black/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,iw_3300,ih_5100/s6-0053/a/22692004_1889465/~~/jurassic-bloom-long-sleeve-tshirts.jpg', 300);
INSERT INTO PRODUCT VALUES (4, 'Pillow', 'https://ctl.s6img.com/society6/img/5ypE6CyGcHM9mQmII6i_w0zvjnc/w_700/floor-pillows/round/angle/~artwork,fw_4500,fh_4500,iw_4500,ih_4500/s6-original-art-uploads/society6/uploads/misc/4cfd02c773ff4b74ac2ec5d5857202ad/~~/pink-and-grey-gradient-cubes-floor-pillows.jpg', 300);
INSERT INTO PRODUCT VALUES (5, 'Art print', 'https://ctl.s6img.com/society6/img/VaXUVhUUxVRCdQxeVD0pZYXROHs/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/cbb73efbc1b14a6097f599baa3bf6d51/~~/woman-with-flowers-10390758-prints.jpg', 500);
INSERT INTO ORDERS VALUES (0, 1, '2017-08-09', FALSE, 0, 0);
INSERT INTO ORDERS VALUES (2, 6, '2017-11-09', TRUE, 1, 0);
INSERT INTO ORDERS VALUES (7, 6, '2017-11-09', TRUE, 1, 0);
INSERT INTO ORDERS VALUES (3, 6, '2017-11-09', TRUE, 1, 0);
INSERT INTO ORDERS VALUES (4, 6, '2017-11-09', FALSE, 1, 0);
INSERT INTO ORDERS VALUES (5, 6, '2017-11-09', TRUE, 1, 0);
INSERT INTO ORDERS VALUES (6, 6, '2017-11-09', FALSE, 1, 0);
INSERT INTO ORDERS (ID, AMOUNT, ORDER_DATE, STATUS, PRODUCT_ID, USER_ID) VALUES (1, 5, '2017-10-09', TRUE, 1, 1);
INSERT INTO CATEGORY_PRODUCT VALUES (0, 2);
INSERT INTO CATEGORY_PRODUCT VALUES (1, 3);
INSERT INTO CATEGORY_PRODUCT VALUES (2, 4);
INSERT INTO CATEGORY_PRODUCT VALUES (3, 3);
INSERT INTO CATEGORY_PRODUCT VALUES (4, 1);
INSERT INTO CATEGORY_PRODUCT VALUES (5, 0);