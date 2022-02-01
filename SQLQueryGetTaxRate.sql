SELECT DATE_FORMAT(`orders`.`created_at`, '%Y-%m-%d') as the_date,
SUM(`order_line_items`.`tax_amount`)
FROM `orders`
JOIN `order_line_items`
ON `orders`.`id` = `order_line_items`.`order_id`
WHERE `order_line_items`.`merchant_id` = "mid_jiDptMxT"
GROUP BY the_date
ORDER BY the_date ASC