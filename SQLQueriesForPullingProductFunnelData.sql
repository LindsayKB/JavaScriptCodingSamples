/*Checkout Sessions*/
SELECT `merchant_funnels`.`id`,`merchant_funnels`.`title` as ProductFunnel, COUNT(`analytics_merchant_visit`.`id`) as CheckoutSessions
FROM `merchant_funnels`
JOIN `funnel_partials`
ON `merchant_funnels`.`id` = `funnel_partials`.`funnel_id`
JOIN `analytics_merchant_visit`
ON `funnel_partials`.`id` = `analytics_merchant_visit`.`funnel_partial_id`
WHERE `merchant_funnels`.`merchant_id` = "mid_qNasBBDp"
AND `funnel_partials`.`type` = "checkout_page"
GROUP BY `merchant_funnels`.`title`
 
/*Completed Orders*/
SELECT `merchant_funnels`.`id`,`merchant_funnels`.`title` as ProductFunnel, COUNT(`orders`.`id`) as CompletedOrders
FROM `merchant_funnels`
JOIN `orders`
ON `merchant_funnels`.`id` = `orders`.`funnel_id`
WHERE `merchant_funnels`.`merchant_id` = "mid_qNasBBDp"
GROUP BY `merchant_funnels`.`title`
 
/*Gross Checkout Revenue*/
/*Get Gross Revenue and Post-Purchase Offers Revenue first, then calculate with a SUM function in Excel*/
 
/*Post Purchase Offers Shown*/
SELECT `funnel_id`, COUNT(`type`)
FROM `analytics_merchant_visit_oto`
WHERE `merchant_id` = "mid_cusSXvBM"
AND (`type` = "upsell_page"
  OR `type` = "downsell_page")
GROUP BY `funnel_id`
 
/*Post Purchase Offers Accepted*/
SELECT `funnel_id`, COUNT(`type`)
FROM `analytics_merchant_visit_oto`
WHERE `merchant_id` = "mid_cusSXvBM"
AND (`type` = "upsell_page"
  OR `type` = "downsell_page")
AND `action` = "ACCEPT"
GROUP BY `funnel_id`
 
/*Post Purchase Revenue Total*/
SELECT `merchant_funnels`.`id`,`merchant_funnels`.`title` as ProductFunnel, SUM(`orders`.`order_post_purchase_total`)
FROM `merchant_funnels`
JOIN `orders`
ON `merchant_funnels`.`id` = `orders`.`funnel_id`
WHERE `merchant_funnels`.`merchant_id` = "mid_qNasBBDp"
GROUP BY `merchant_funnels`.`title`
 
/*Gross Revenue*/
SELECT `merchant_funnels`.`id`,`merchant_funnels`.`title` as ProductFunnel, SUM(`orders`.`total_price`)
FROM `merchant_funnels`
JOIN `orders`
ON `merchant_funnels`.`id` = `orders`.`funnel_id`
WHERE `merchant_funnels`.`merchant_id` = "mid_qNasBBDp"
GROUP BY `merchant_funnels`.`title`
 
/*Best Selling Product*/
SELECT `order_line_items`.`title`, COUNT(`merchant_funnels`.`id`)
FROM `order_line_items`
JOIN `orders`
ON `order_line_items`.`order_id` = `orders`.`id`
JOIN `merchant_funnels`
ON `orders`.`funnel_id` = `merchant_funnels`.`id`
AND `merchant_funnels`.`id` = "FUNNEL ID HERE"
ORDER BY COUNT(`merchant_funnels`.`id`) DESC
LIMIT 1

/*Get shipping total sorted by day by funnel*/
SELECT `merchant_funnels`.`id`, SUM(`order_selected_shipping_rate`.`price`)
FROM `merchant_funnels`
JOIN `orders`
ON `merchant_funnels`.`id` = `orders`.`funnel_id`
JOIN `order_selected_shipping_rate`
ON `orders`.`id` = `order_selected_shipping_rate`.`order_id`
WHERE `orders`.`merchant_id` = "mid_e7GGGQwp"
AND `orders`.`created_at` LIKE "%2021-09-16%"
GROUP BY `merchant_funnels`.`id`
ORDER BY `merchant_funnels`.`id` ASC

/*Get discount and total revenue sorted by day by funnel*/
SELECT `funnel_id`, SUM(`total_coupons_amount`), SUM(`amount_refunded`), SUM(`total_price`) FROM `orders`
WHERE `merchant_id` = "mid_e7GGGQwp"
AND `created_at` LIKE "%2021-09-16%"
GROUP BY `funnel_id`
ORDER BY `funnel_id` ASC
