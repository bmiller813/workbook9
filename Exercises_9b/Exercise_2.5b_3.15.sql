SELECT ProductName, UnitPrice FROM Products WHERE UnitPrice = (
	SELECT max(UnitPrice) as MostExpensiveItem
	FROM products
)