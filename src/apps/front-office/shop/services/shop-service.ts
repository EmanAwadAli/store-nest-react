import endpoint from "shared/endpoint";

import { apiKey, appClientId } from "shared/flags";

/**
 * @route GET /products?wf=true
 * @description Get Shop Data (all in one request)
 * @access Private
 */
export function getShopPageData(query) {
  return endpoint.get(`/products?wf=true&${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "client-id": appClientId,
    },
  });
}

// get the categories

export async function getCategory() {
  const response = await endpoint.get(
    "https://store.mentoor.io/categories?page=1",
  );
  return {
    data: response.data.categories,
  };
}

/**
 * Get Shops list
 */
export function getShopsList(params: any = {}) {
  return endpoint.get("/shop", {
    params,
  });
}

/**
 * Get shop details
 */
export function getShop(id: string | number) {
  return endpoint.get("/shop/" + id);
}
