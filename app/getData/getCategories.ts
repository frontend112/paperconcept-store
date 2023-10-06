import categoriesJson from "@/app/databases/categories.json"
export const getCategories = categoriesJson[2].data || [];
