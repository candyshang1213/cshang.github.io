insert into public.products (id,slug,name,description,category,gender,price)
values
(1,'air-move-01-men','AIR-MOVE 01 男款比赛服','轻量、快干、适合高强度羽毛球比赛的专项运动上衣。','competition','men',199),
(2,'air-move-01-women','AIR-MOVE 01 女款比赛服','针对女性运动体态设计，兼顾肩背活动空间与腰身稳定性。','competition','women',199),
(3,'court-02-men','COURT 02 男款训练T恤','适合日常训练和多球练习的耐穿型训练 T 恤。','training','men',159),
(4,'court-02-women','COURT 02 女款训练T恤','柔软弹力面料，适合高频训练与日常运动。','training','women',159),
(5,'cshang-club','CShang CLUB 队服','适合高校、俱乐部与球队使用，可进行号码和姓名定制。','team','unisex',219),
(6,'air-lite-01-shorts','AIR-LITE 01 轻量短裤','轻量运动短裤，适合训练、比赛和日常穿着。','training','men',129),
(7,'match-01-skirt','MATCH 01 女款运动短裙','羽毛球专项运动裙裤，兼顾活动自由度与比赛观感。','competition','women',149),
(8,'cshang-basic','CShang BASIC 训练短袖','简洁基础款，适合热身、训练和俱乐部活动。','training','unisex',99)
on conflict (id) do nothing;

insert into public.product_variants (product_id,sku,color,size,stock)
values
(1,'CS-AM01-M-GRN-S','深绿','S',12),(1,'CS-AM01-M-GRN-M','深绿','M',24),(1,'CS-AM01-M-GRN-L','深绿','L',18),(1,'CS-AM01-M-GRN-XL','深绿','XL',8),
(2,'CS-AM01-W-NAV-XS','藏蓝','XS',10),(2,'CS-AM01-W-NAV-S','藏蓝','S',16),(2,'CS-AM01-W-NAV-M','藏蓝','M',18),(2,'CS-AM01-W-NAV-L','藏蓝','L',8),
(3,'CS-CT02-M-BLK-S','炭黑','S',12),(3,'CS-CT02-M-BLK-M','炭黑','M',20),(3,'CS-CT02-M-BLK-L','炭黑','L',18),(3,'CS-CT02-M-BLK-XL','炭黑','XL',10),(3,'CS-CT02-M-BLK-XXL','炭黑','XXL',5),
(4,'CS-CT02-W-WIN-XS','酒红','XS',8),(4,'CS-CT02-W-WIN-S','酒红','S',15),(4,'CS-CT02-W-WIN-M','酒红','M',15),(4,'CS-CT02-W-WIN-L','酒红','L',7),
(5,'CS-CLUB-UNI-GRN-S','深绿','S',20),(5,'CS-CLUB-UNI-GRN-M','深绿','M',30),(5,'CS-CLUB-UNI-GRN-L','深绿','L',30),(5,'CS-CLUB-UNI-GRN-XL','深绿','XL',20),(5,'CS-CLUB-UNI-GRN-XXL','深绿','XXL',10),
(6,'CS-AL01-SH-BLU-S','藏蓝','S',10),(6,'CS-AL01-SH-BLU-M','藏蓝','M',20),(6,'CS-AL01-SH-BLU-L','藏蓝','L',15),(6,'CS-AL01-SH-BLU-XL','藏蓝','XL',8),
(7,'CS-MT01-W-GRN-XS','深绿','XS',8),(7,'CS-MT01-W-GRN-S','深绿','S',15),(7,'CS-MT01-W-GRN-M','深绿','M',12),(7,'CS-MT01-W-GRN-L','深绿','L',6),
(8,'CS-BSC-UNI-GRY-S','浅灰','S',20),(8,'CS-BSC-UNI-GRY-M','浅灰','M',30),(8,'CS-BSC-UNI-GRY-L','浅灰','L',30),(8,'CS-BSC-UNI-GRY-XL','浅灰','XL',20),(8,'CS-BSC-UNI-GRY-XXL','浅灰','XXL',10)
on conflict (sku) do nothing;
