// Tabelas da camada raw, carregadas pela função de ingestão
const tabelas = [
  "orders", "order_items", "order_payments", "order_reviews",
  "customers", "sellers", "products", "geolocation",
  "product_category_name_translation"
];

tabelas.forEach(tabela => declare({ schema: "raw_olist", name: tabela }));