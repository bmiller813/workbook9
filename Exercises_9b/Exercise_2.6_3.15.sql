SELECT SupplierID, Count(*) as NumberOfProduct 
FROM Products
GROUP BY SupplierID