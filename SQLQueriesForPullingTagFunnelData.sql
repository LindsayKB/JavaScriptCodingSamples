/*Checkout Sessions*/

SELECT `checkout_funnel_tags`.`id`,`checkout_funnel_tags`.`tag` as Tag, COUNT(`analytics_merchant_visit`.`id`)
FROM `checkout_funnel_tags`
JOIN `analytics_merchant_visit` ON `checkout_funnel_tags`.`id` = `analytics_merchant_visit`.`tag_id`
WHERE `checkout_funnel_tags`.`merchant_id` = "mid_cusSXvBM"
AND `checkout_funnel_tags`.`funnel_id` = "30094"
GROUP BY `checkout_funnel_tags`.`tag`

/*Completed Orders*/
SELECT `checkout_funnel_tags`.`id`,`checkout_funnel_tags`.`tag` as Tag, COUNT(`orders`.`id`)
FROM `checkout_funnel_tags`
JOIN `orders` ON `checkout_funnel_tags`.`id` = `orders`.`checkout_funnel_tag_id`
WHERE `checkout_funnel_tags`.`merchant_id` = "mid_cusSXvBM"
AND `checkout_funnel_tags`.`funnel_id` = "30094"
GROUP BY `checkout_funnel_tags`.`tag`

/*Gross Checkout Revenue*/
/*Get Gross Revenue and Post-Purchase Offers Revenue first, then calculate with a SUM function in Excel*/

/*Post Purchase Offers Shown*/
SELECT `tag_id`, COUNT(`type`)
FROM `analytics_merchant_visit_oto`
WHERE `merchant_id` = "mid_cusSXvBM"
AND `funnel_id` = "30094"
AND (`type` = "upsell_page"
  OR `type` = "downsell_page")
GROUP BY `tag_id`

/*Post Purchase Offers Accepted*/
SELECT `tag_id`, COUNT(`type`)
FROM `analytics_merchant_visit_oto`
WHERE `merchant_id` = "mid_cusSXvBM"
AND `funnel_id` = "30094"
AND (`type` = "upsell_page"
  OR `type` = "downsell_page")
AND `action` = "ACCEPT"
GROUP BY `tag_id`

/*Post Purchase Revenue Total*/
SELECT `checkout_funnel_tags`.`id`,`checkout_funnel_tags`.`tag` as Tag, SUM(`orders`.`order_post_purchase_total`)
FROM `checkout_funnel_tags`
JOIN `orders` ON `checkout_funnel_tags`.`id` = `orders`.`checkout_funnel_tag_id`
WHERE `checkout_funnel_tags`.`merchant_id` = "mid_cusSXvBM"
AND `checkout_funnel_tags`.`funnel_id` = "30094"
GROUP BY `checkout_funnel_tags`.`tag`

/*Gross Revenue*/
SELECT `checkout_funnel_tags`.`id`,`checkout_funnel_tags`.`tag` as Tag, SUM(`orders`.`total_price`)
FROM `checkout_funnel_tags`
JOIN `orders` ON `checkout_funnel_tags`.`id` = `orders`.`checkout_funnel_tag_id`
WHERE `checkout_funnel_tags`.`merchant_id` = "mid_cusSXvBM"
AND `checkout_funnel_tags`.`funnel_id` = "30094"
GROUP BY `checkout_funnel_tags`.`tag`

/*Best Selling Product*/
SELECT `order_line_items`.`title`, COUNT(`checkout_funnel_tags`.`id`)
FROM `order_line_items`
JOIN `orders`
ON `order_line_items`.`order_id` = `orders`.`id`
JOIN `checkout_funnel_tags`
ON `orders`.`checkout_funnel_tag_id` = `checkout_funnel_tags`.`id`
AND `checkout_funnel_tags`.`id` = "TAGFUNNELHERE"
ORDER BY COUNT(`checkout_funnel_tags`.`id`) DESC
LIMIT 1
