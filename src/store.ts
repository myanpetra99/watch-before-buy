export interface Store {
    storeName: string;
    targetQuery: string;
    mode: string;
  }
  
  let listStore: Store[] = [];
  
  // Function to fetch data from the API
  export async function fetchStores() {
    try {
      const response = await fetch('https://cdn.contentful.com/spaces/bjnn0z2qr6yd/environments/master/entries?access_token=dYlCiwJFDMUfB7XyFDm4A6s1n64MR3_CGGU6M9Dd7Sc');
      const data = await response.json();
  
      listStore = data.items.map((item: any) => ({
        storeName: item.fields.storeName,
        targetQuery: item.fields.targetElement,
        mode: item.fields.mode,
      }));
    } catch (error) {
      console.error('Failed to fetch stores:', error);
    }
  }
  
  export function matchStore(url: string): [boolean, string, string] {
    
    let boolean: boolean = false;
    let query: string = '';
    let mode: string = '';
  
    const matchedStore = listStore.find((store) => {
      boolean = url.includes(store.storeName);
      
      return boolean; // Return a boolean value indicating if a match is found
    });
  
    if (matchedStore) {
      query = matchedStore.targetQuery;
      mode = matchedStore.mode;
    }
  
    return matchedStore ? [boolean, query, mode] : [false, '', ''];
  }
  