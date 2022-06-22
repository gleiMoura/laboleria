CREATE TABLE cakes (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) UNIQUE NOT NULL,
    "price" NUMERIC NOT NULL,
    "image" VARCHAR(255) UNIQUE NOT NULL, 
    "description" TEXT 
);

CREATE TABLE clients (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    "id" SERIAL PRIMARY KEY,
    "clientId" INTEGER NOT NULL REFERENCES "clients"("id"),
    "cakeId" INTEGER NOT NULL REFERENCES "cakes"("id"),
    "quantity" INTEGER NOT NULL,
    "createAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW(),
    "totalPrice" NUMERIC NOT NULL 
);