-- if when importing data some special characters do not work correctly. You can run these scripts which you need to update categories, subcategories and products.
UPDATE category
SET title = CASE id
    WHEN 3 THEN 'Starbucks Refreshers® Beverages'
    WHEN 4 THEN 'Frappuccino® Blended Beverages'
    WHEN 16 THEN 'VIA® Instant'
    ELSE title 
END
WHERE id IN (3, 4, 16);

UPDATE subcategory
SET title = CASE id
    WHEN 23 THEN 'Coffee Frappuccino®'
    WHEN 24 THEN 'Creme Frappuccino®'
    ELSE title 
END
WHERE id IN (23, 24);

UPDATE product
SET name = CASE id
    WHEN 1 THEN 'Caffè Americano'
    WHEN 2 THEN 'Featured Medium Roast - Pike Place® Roast'
    WHEN 3 THEN 'Decaf Pike Place® Roast'
    WHEN 4 THEN 'Caffè Misto'
    WHEN 11 THEN 'Caramel Brulée Latte'
    WHEN 15 THEN 'Caffè Latte'
    WHEN 17 THEN 'Starbucks® Blonde Vanilla Latte'
    WHEN 22 THEN 'Caffè Mocha'
    WHEN 24 THEN 'Coffee Traveler - Veranda Blend®'
    WHEN 25 THEN 'Coffee Traveler - Pike Place® Roast'
    WHEN 27 THEN 'Coffee Traveler - Decaf Pike Place® Roast'
    WHEN 31 THEN 'Starbucks® Cold Brew Coffee'
    WHEN 39 THEN 'Iced Caffè Americano'
    WHEN 41 THEN 'Iced Coffee Clover Vertica™'
    WHEN 48 THEN 'Iced Caramel Brulée Latte'
    WHEN 51 THEN 'Iced Starbucks® Blonde Vanilla Latte'
    WHEN 52 THEN 'Iced Caffè Latte'
    WHEN 58 THEN 'Iced Caffè Mocha'
    WHEN 63 THEN 'Strawberry Açaí Lemonade Refresher'
    WHEN 66 THEN 'Frozen Strawberry Açaí Lemonade Refresher'
    WHEN 69 THEN 'Dragon Drink®'
    WHEN 73 THEN 'Strawberry Açaí Refresher'
    WHEN 74 THEN 'Caramel Brulée Frappuccino® Blended Beverage'
    WHEN 75 THEN 'Chestnut Praline Frappuccino® Blended Beverage'
    WHEN 76 THEN 'Peppermint Mocha Frappuccino® Blended Beverage'
    WHEN 77 THEN 'Peppermint White Chocolate Mocha Frappuccino® Blended Beverage'
    WHEN 78 THEN 'Sugar Cookie Almondmilk Frappuccino® Blended Beverage'
    WHEN 79 THEN 'Mocha Cookie Crumble Frappuccino®'
    WHEN 80 THEN 'Caramel Ribbon Crunch Frappuccino® Blended Beverage'
    WHEN 81 THEN 'Espresso Frappuccino® Blended Beverage'
    WHEN 82 THEN 'Coffee Frappuccino® Blended Beverage'
    WHEN 83 THEN 'Caffè Vanilla Frappuccino® Blended Beverage'
    WHEN 84 THEN 'Caramel Frappuccino® Blended Beverage'
    WHEN 85 THEN 'Mocha Frappuccino® Blended Beverage'
    WHEN 86 THEN 'Java Chip Frappuccino® Blended Beverage'
    WHEN 87 THEN 'Caramel Brulée Crème Frappuccino® Blended Beverage'
    WHEN 88 THEN 'Chestnut Praline Crème Frappuccino® Blended Beverage'
    WHEN 89 THEN 'Peppermint Mocha Crème Frappuccino® Blended Beverage'
    WHEN 90 THEN 'Peppermint White Chocolate Crème Frappuccino® Blended Beverage'
    WHEN 91 THEN 'Sugar Cookie Almondmilk Crème Frappuccino® Blended Beverage'
    WHEN 92 THEN 'Chocolate Cookie Crumble Crème Frappuccino®'
    WHEN 93 THEN 'Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage'
    WHEN 94 THEN 'Strawberry Crème Frappuccino® Blended Beverage'
    WHEN 95 THEN 'Chai Crème Frappuccino®'
    WHEN 102 THEN 'Iced Passion Tango®'
    WHEN 103 THEN 'Iced Passion Tango® Tea Lemonade'
    WHEN 111 THEN 'Jade Citrus Mint® Brewed Tea'
    WHEN 112 THEN 'Mint Majesty®'
    WHEN 122 THEN 'Pistachio Crème'
    WHEN 123 THEN 'Caramel Brulée Crème'
    WHEN 124 THEN 'Chestnut Praline Crème'
    WHEN 127 THEN 'Vanilla Crème'
    WHEN 128 THEN 'Spindrift® Lemon Sparkling Water'
    WHEN 129 THEN 'Spindrift® Raspberry Lime Sparkling Water'
    WHEN 130 THEN 'Ethos® Bottled Water'
    WHEN 132 THEN 'Hawai‘i Volcanic Water'
    WHEN 133 THEN 'Koia® Cacao Bean Protein Shake'
    WHEN 134 THEN 'Koia® Vanilla Bean Protein Shake'
    WHEN 135 THEN 'Horizon® Chocolate Organic Milk'
    WHEN 136 THEN 'Horizon® Organic Lowfat Milk Box'
    WHEN 137 THEN 'Evolution Fresh™ Defense Up'
    WHEN 138 THEN 'Evolution Fresh® Orange'
    WHEN 139 THEN 'Evolution Fresh® Organic Super Fruit Greens'
    WHEN 141 THEN 'Olipop® Classic Root Beer'
    WHEN 142 THEN 'Olipop® Classic Grape'
    WHEN 145 THEN 'Starbucks Tripleshot™ Energy Rich Vanilla'
    WHEN 151 THEN 'Impossible™ Breakfast Sandwich'
    WHEN 155 THEN 'Bacon & Gruyère Egg Bites'
    WHEN 185 THEN 'Cranberry Bliss® Bar'
    WHEN 186 THEN 'Cranberry Bliss® Bar Tray'
    WHEN 197 THEN 'Perfect Bar® - Dark Chocolate Chip Peanut Butter'
    WHEN 198 THEN 'Perfect Bar® Peanut Butter'
    WHEN 201 THEN 'KIND® Salted Caramel & Dark Chocolate Nut Bar'
    WHEN 202 THEN 'That's It® - Apple + Mango Bar'
    WHEN 203 THEN 'That's It® - Apple + Blueberry Bar'
    WHEN 213 THEN 'Peter Rabbit™ Organics Strawberry Banana'
    WHEN 215 THEN 'Starbucks® Green Apron Blend™'
    WHEN 216 THEN 'Starbucks® Blonde Espresso Roast'
    WHEN 217 THEN 'Veranda Blend®'
    WHEN 218 THEN 'Starbucks Siren’s Blend™'
    WHEN 220 THEN 'Pike Place® Roast'
    WHEN 221 THEN 'Organic Yukon Blend®'
    WHEN 222 THEN 'Guatemala Casi Cielo®'
    WHEN 224 THEN 'Caffè Verona®'
    WHEN 227 THEN 'Komodo Dragon Blend®'
    WHEN 229 THEN 'VIA® Sweetened Iced Coffee'
    WHEN 230 THEN 'VIA® Veranda Blend™'
    WHEN 231 THEN 'Starbucks VIA® Instant Pike Place® Roast'
    WHEN 232 THEN 'VIA® Italian Roast'
    WHEN 233 THEN 'VIA® Decaf Italian Roast'
    WHEN 234 THEN 'Purple Recycled Glass Cold Cup - 16 fl oz'
    WHEN 235 THEN 'Purple Recycled Stainless-Steel Cold Cup - 24 fl oz'
    WHEN 236 THEN 'White Soft-Touch Stainless-Steel Vacuum Cold Cup - 24 fl oz'
    WHEN 237 THEN 'Black Kaleidoscope Shell Plastic Cold Cup - 24 fl oz'
    WHEN 238 THEN 'Purple Recycled Plastic Tumbler - 16 fl oz'
    WHEN 239 THEN 'Purple Recycled Stainless-Steel Tumbler - 12 fl oz'
    WHEN 240 THEN 'White Recycled Ceramic Double-Wall Tumbler - 12 fl oz'
    WHEN 241 THEN 'Purple Recycled Ceramic Mug - 16 fl oz'
    WHEN 242 THEN 'Black Desktop Ceramic Mug - 14 fl oz'
    ELSE name 
END
WHERE id IN (1, 2, 3, 4, 11, 15, 17, 22, 24, 25, 27, 31, 39, 41, 48, 51, 52, 58, 63, 66, 69, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 102, 103, 111, 112, 122, 123, 124, 127, 128, 129, 130, 132, 133, 134, 135, 136, 137, 138, 139, 141, 142, 145, 151, 155, 185, 186, 197, 198, 201, 202, 203, 213, 215, 216, 217, 218, 220, 221, 224, 227, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242);

-- these products contain "," in the "name", which can be a problem when importing the .csv data directly.
INSERT INTO product(id, idSubcategory, name, imgSmall, img)
VALUES
(146, 43, 'Egg, Pesto & Mozzarella Sandwich', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/kliioyyjdceb7hkl6wgs.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322742/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/tbeu7erlkrorylgnpo5u.avif'),
(147, 43, 'Bacon, Gouda & Egg Sandwich', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/jlnxu05mnad5dymvqjma.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322742/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/hjyqjwba5lovhz13ftog.avif'),
(148, 43, 'Double-Smoked Bacon, Cheddar & Egg Sandwich', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/mfe8f9j91jriugmuwlz5.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322742/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/vekvm6wywutth1ihkgmk.avif'),
(149, 43, 'Sausage, Cheddar & Egg Sandwich', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/hbpyfp5ec1hgn1fuvpxl.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322741/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/ml0dysgsphw7o1vfg4bm.avif'),
(150, 43, 'Turkey Bacon, Cheddar & Egg White Sandwich', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223542/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/tcl4wdmudsadb3nuympm.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322741/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/iq5zdolmez2dushbxuae.avif'),
(153, 44, 'Bacon, Sausage & Egg Wrap', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/q6hdpkjc4gnsdcxpslns.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322742/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/rjdv7ssj9vn9eqcnayud.avif'),
(154, 44, 'Spinach,Feta & Egg White Wrap', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223543/Starbucks-API/Sub%20categories/food/hot%20breakfast/breakfast%20sandwiches%20and%20wraps/uxqpugi09fkmt59fjngn.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322742/Starbucks-API/products/food/hot%20breakfast/breakfast%20sandwich%20and%20wraps/wxr1dirkuwbj4ch5xjan.avif'),
(158, 45, 'Potato, Cheddar & Chive Bakes', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735223542/Starbucks-API/Sub%20categories/food/hot%20breakfast/bakes%20and%20egg%20bites/z0rsc53n9gjknltmhyyi.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322741/Starbucks-API/products/food/hot%20breakfast/bakes%20and%20egg%20bites/kylztmbwxp32z9eo98no.avif'),
(168, 48, 'Banana, Walnut & Pecan Loaf', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735224655/Starbucks-API/Sub%20categories/food/bakery/loaves%2C%20cakes%20and%20buns/svo9uzq91zhc3j8b1h2u.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735322740/Starbucks-API/products/food/bakery/loaves%2C%20cakes%20and%20buns/lobye54gtlhpux7npssn.avif'),
(189, 53, 'Turkey, Provolone & Pesto on Ciabatta', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735225716/Starbucks-API/Sub%20categories/food/lunch/warm%20sandwiches/xdbbh9ubv6hail6vu3q1.avif', 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1735323164/Starbucks-API/products/food/lunch/warm%20sandwiches/wxmzimxkulqrqnzhdpkk.avif');
