-- Active: 1669826890727@@127.0.0.1@3306@northwind
SELECT SupplierID, count(*) as QTY
FROM products
GROUP BY SupplierID
having QTY >= 5