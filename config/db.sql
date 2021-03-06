CREATE TABLE cakes (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) UNIQUE NOT NULL,
    "price" NUMERIC NOT NULL,
    "image" VARCHAR(255) UNIQUE NOT NULL, 
    "description" TEXT,
    "flavourId" INTEGER NOT NULL REFERENCES "flavours"("id")
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
    "totalPrice" NUMERIC NOT NULL,
    "isDeliveryed" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE flavours (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);