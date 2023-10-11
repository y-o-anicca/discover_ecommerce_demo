-- CREATE TABLE IF NOT EXISTS categories (
--   id bigserial,
--   name varchar(255) NOT NULL UNIQUE,

--   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--   PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS locations (
--   id bigserial,
--   name varchar(255) NOT NULL UNIQUE,

--   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

--   PRIMARY KEY (id)
-- );

CREATE TABLE IF NOT EXISTS brands (
  id bigserial,
  name varchar(255) NOT NULL UNIQUE,
  category varchar(255) NOT NULL,
  location varchar(255) NOT NULL,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS products (
  id bigserial,
  brand_id bigserial NOT NULL REFERENCES brands,
  name varchar(255) NOT NULL UNIQUE,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id)
);

-- INSERT INTO categories (id, name)
-- VALUES
--   (1, 'coffee'),
--   (2, 'food'),
--   (3, 'toys'),
--   (4, 'appliances'),
--   (5, 'furniture');

-- INSERT INTO locations (id, name)
-- VALUES
--   (1, 'Los Angeles'),
--   (2, 'New York'),
--   (3, 'Seattle'),
--   (4, 'Dallas'),
--   (5, 'Miami');

INSERT INTO brands (id, name, category, location)
VALUES
  (1, 'BeanBurst', 'coffee', 'Los Angeles'),
  (2, 'MochaMingle', 'coffee', 'New York'),
  (3, 'RoastRivers', 'coffee', 'Seattle'),
  (4, 'CafeCrafters', 'coffee', 'Dallas'),
  (5, 'CrunchyCove', 'food', 'Miami'),
  (6, 'TasteTwirl', 'food', 'Los Angeles'),
  (7, 'SavorSquare', 'food', 'New York'),
  (8, 'MunchMeadows', 'food', 'Seattle'),
  (9, 'BrickBuddies', 'toys', 'Dallas'),
  (10, 'PlayPioneers', 'toys', 'Miami'),
  (11, 'QuestQuarters', 'toys', 'Los Angeles'),
  (12, 'TinyTinkerers', 'toys', 'New York'),
  (13, 'NexaHome', 'appliances', 'Seattle'),
  (14, 'CulinaTech', 'appliances', 'Dallas'),
  (15, 'TechTerra', 'appliances', 'Miami'),
  (16, 'EcoEngage', 'appliances', 'Los Angeles'),
  (17, 'UrbanNest', 'furniture', 'New York'),
  (18, 'TimberTales', 'furniture', 'Seattle'),
  (19, 'NaturaNook', 'furniture', 'Dallas'),
  (20, 'MetroMoods', 'furniture', 'Miami'),
  (21, 'NaturalFoods', 'food', 'Miami'),
  (22, 'MetroFoods', 'food', 'Miami'),
  (23, 'TinyToy', 'toys', 'New York'),
  (24, 'Toy Toy', 'toys', 'New York');

INSERT INTO products (name, brand_id)
VALUES
  ('Velvet Vanilla Latte', 1),
  ('Cinnamon Cloud Cappuccino', 2),
  ('Mellow Mocha Drip', 3),
  ('Silky Sunrise Espresso', 4),
  ('Zesty Zucchini Chips', 5),
  ('Berry Bliss Bars', 6),
  ('Tangy Tomato Twists', 7),
  ('Cocoa Coconut Clusters', 8),
  ('Galactic Explorer Set', 9),
  ('Dino Discovery Kit', 10),
  ('Pirate Plunder Playset', 11),
  ('Robot Rumble Kit', 12),
  ('AeroSwift Cordless Vacuum', 13),
  ('FusionFlex Stand Mixer', 14),
  ('PureFlow Air Purifier', 15),
  ('SolarSip Coffee Make', 16),
  ('LushLounge Modular Sofa', 17),
  ('PinePeak Bookshelf', 18),
  ('ForestFrost Coffee Table', 19),
  ('UrbanUtopia Desk', 20),
  ('Natural Berry', 21),
  ('Metro Special', 22),
  ('Toy A', 23),
  ('Special Toy', 24);