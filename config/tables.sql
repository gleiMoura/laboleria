CREATE TABLE cakes (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "price" NUMERIC NOT NULL,
    "image" VARCHAR(100) NOT NULL, 
    "description" TEXT NOT NULL
)

CREATE TABLE clients (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(100) NOT NULL
)

CREATE TABLE orders (
    "id" SERIAL PRIMARY KEY,
    "clientId" INTEGER NOT NULL,
    "cakeId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createAt" TIMESTAMP NOT NULL,
    "totalPrice" NUMERIC NOT NULL
)