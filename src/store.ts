const listStore = [{
    storeName: 'tokopedia',
    targetQuery: '#pdp_comp-product_detail',
    mode: 'landscape',
},
{
    storeName: 'shopee',
    targetQuery: '.product-detail.page-product__detail',
    mode : 'landscape'
},
{
    storeName: 'bukalapak',
    targetQuery: '.c-main-product__scan.c-main-product__separator',
    mode : 'potrait'
},
{
    storeName: 'lazada',
    targetQuery: '.pdp-block.pdp-block__main-information',
    mode : 'landscape'
},
{
    storeName: 'blibli',
    targetQuery: '#product-info',
    mode : 'potrait'
},
{
    storeName: 'amazon',
    targetQuery: '#apex_desktop',
    mode: 'potrait'
},
{
    storeName: 'ebay',
    targetQuery: '.vim.x-buybox',
    mode: 'potrait'
},
{
    storeName: 'alibaba',
    targetQuery: '.right-bottom',
    mode: 'landscape'
},
{
    storeName: 'walmart',
    targetQuery: '[data-testid="price-wrap"]',
    mode: 'potrait'
}
]
export function matchStore(url: string): [boolean, string, string] {
    console.log('matching store ', url);
    let boolean: boolean = false;
    let query: string = '';
    let mode: string = '';
  
    const matchedStore = listStore.find((store) => {
      boolean = url.includes(store.storeName);
      console.log('matching', url, 'with', store, 'result');
      return boolean; // Return a boolean value indicating if a match is found
    });
  
    if (matchedStore) {
      query = matchedStore.targetQuery;
      mode = matchedStore.mode;
    }
  
    return matchedStore ? [boolean, query, mode] : [false, '', ''];
  }
