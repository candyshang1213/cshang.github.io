# CShang V2 — 真正商城架构（可部署前端 + Supabase-ready）

这是 CShang V1 的 V2 升级版。它已经从单页 Demo 拆成真正的商城页面结构：

- 首页 `index.html`
- 商品列表 `shop.html`
- 商品详情 `product.html?slug=...`
- 购物车（localStorage）
- 结算页 `checkout.html`
- 订单确认页 `order.html`
- 订单后台 `admin.html`
- 关于 CShang `about.html`
- 球队 / 俱乐部定制 `team.html`

## 当前可以直接使用的功能

无需服务器，双击 `index.html` 即可运行：

1. 浏览商品
2. 商品筛选
3. 商品排序
4. 商品详情
5. 颜色 / 尺码选择
6. 数量选择
7. 加入购物袋
8. 购物袋数量修改
9. 填写收货信息
10. 创建订单
11. 订单号生成
12. 本地订单后台查看

购物车和演示订单使用浏览器 localStorage，所以这是“可运行的真实前端商城流程”，但还没有真正的云端数据库和支付。

## 接入 Supabase

1. 创建 Supabase Project。
2. 打开 SQL Editor。
3. 执行 `supabase/schema.sql`。
4. 再执行 `supabase/seed.sql`。
5. 复制 `supabase/config.example.js` 为 `supabase/config.js`。
6. 填入 Supabase Project URL 和 public anon key。
7. 前端需要进一步把 `localStorage` 数据流切换为 Supabase API。

### 非常重要的安全原则

不要把 Supabase `service_role` key 放进浏览器。

真正的下单、库存扣减、支付确认应该放在 Supabase Edge Function 或其他服务器端环境执行，并且服务端必须重新校验：

- SKU
- 当前库存
- 商品价格
- 优惠
- 订单总价

浏览器传来的价格不能直接信任。

## 支付

当前 checkout 页面已经预留支付入口，但没有伪造真实支付。

正式上线时再根据你的经营主体和主要客户市场选择：

- Stripe
- 微信支付
- 支付宝
- 其他合规支付服务

支付 webhook 应在服务端验证成功后更新 `orders.payment_status`，再扣库存/触发发货流程。

## Cloudflare Pages 部署

整个项目可以作为静态网站部署到 Cloudflare Pages。

上传/连接 Git 仓库后：

Build command：留空  
Build output directory：`.`

因为本项目不需要构建。

## 下一步建议

1. 把示意服装替换成真实 CShang 商品照片。
2. 给每个商品增加 5–8 张图片。
3. 增加尺码表。
4. 接 Supabase。
5. 用 Edge Function 实现安全下单。
6. 接支付。
7. 接物流。
8. 增加管理员登录和真实订单后台。
