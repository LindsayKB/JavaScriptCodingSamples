SELECT 
	DATE_FORMAT(`analytics_merchant_visit_oto`.`created_at`, '%Y-%m-%d') as the_date, 
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as UpsellsShown,
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as UpsellsAccepted,
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as DownsellsShown,
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as DownsellsAccepted,
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as PostPurchaseOffersShown,
	(SELECT COUNT(`id`) FROM `analytics_merchant_visit_oto` WHERE `merchant_id` = "mid_jiDptMxT" AND `type` = "upsell_page") as PostPurchaseOffersAccepted,
FROM `checkout_funnel_tags`
JOIN `analytics_merchant_visit` ON `checkout_funnel_tags`.`id` = `analytics_merchant_visit`.`tag_id`
WHERE `analytics_merchant_visit`.`merchant_id` = "mid_jiDptMxT"
AND `checkout_funnel_tags`.`funnel_id` = 22977
AND `funnel_partial_id` = 130411
GROUP BY the_date