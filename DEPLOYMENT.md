# CShang V2 部署顺序

## A. 免费前端上线
推荐 Cloudflare Pages。

项目根目录就是本文件夹。

Build command: 留空
Output directory: .

部署完成后会得到一个 `*.pages.dev` 地址。

## B. 绑定域名
在 Cloudflare Pages 项目中添加 custom domain。
建议品牌正式域名使用 CShang 相关域名。

## C. Supabase
创建 project -> SQL Editor -> 运行：

supabase/schema.sql
supabase/seed.sql

## D. 生产级下单
不要从浏览器直接写订单金额和库存。
创建 Supabase Edge Function：

create-order

流程：

浏览器 -> create-order
create-order -> 查询商品/SKU/库存
create-order -> 服务端计算总价
create-order -> 创建订单
返回 order_number + payment payload

支付成功：

支付平台 webhook
-> verify payment
-> 更新 orders.payment_status
-> 扣减 product_variants.stock
-> 更新 shipping_status

## E. 管理员
admin.html 当前是演示后台。
生产环境应该改成：

管理员登录
-> Supabase Auth
-> RLS
-> admin role
-> 查询订单
-> 更新订单状态
