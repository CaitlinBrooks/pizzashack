-- CREATE TABLE pizzas (
--   id int NOT NULL AUTO_INCREMENT, 
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR(255) NOT NULL,
--   price DECIMAL() NOT NULL,
--   PRIMARY KEY(id)
-- );

-- INSERT INTO pizzas (name, description, price)
-- VALUES ("The Plain Jane", "Burger on a bun", "7.99");

-- SELECT * FROM pizzashack24.pizzas LIMIT 1;

-- ALTER TABLE pizzas MODIFY COLUMN price DECIMAL(10,2);

-- UPDATE pizzas SET price = 7.99 WHERE id = 1;

-- UPDATE pizzas SET
-- price = 7.99,
-- name = "The Plane Jane with cheese",
-- description = "Burger on a bun with cheese"
-- WHERE id = 1;

-- DELETE FROM pizzas WHERE id = 3;