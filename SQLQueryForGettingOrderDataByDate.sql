SELECT DATE_FORMAT(`created_at`, '%Y-%m-%d') as the_date, COUNT(*), SUM(`order_post_purchase_total`), SUM(`total_coupons_amount`), SUM(`amount_refunded`), SUM(`subtotal_price`), SUM(`tax_rate`), SUM(`total_price`)
FROM `orders`
WHERE `merchant_id` = "mid_jiDptMxT"
GROUP BY the_date