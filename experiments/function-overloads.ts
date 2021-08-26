// Using `unknown` to distinguish

// First oveload type:
function logSearch(term: string, options?: string): void;

// Second overload type:
function logSearch(term: string, options?: number): void;

// Implementation:
function logSearch(term: string, p2?: unknown) {
  let query = `https://searchdatabase/${term}`;
  if (typeof p2 === 'string') {
    query = `${query}/tag=${p2}`;
    console.log(query);
  } else {
    query = `${query}/page=${p2}`;
    console.log(query);
  }
}

logSearch('apples', 'braeburn');
logSearch('bananas', 3);

// Using union types to distinguish

// First overload type:
function logSearchUnion(term: string, options?: string): void;

// Second overload type:
function logSearchUnion(term: string, options?: number): void;

// Implementation:
function logSearchUnion(term: string, p2?: string | number) {
  let query = `https://searchdatabase/${term}`;
  if (typeof p2 === 'string') {
    query = `${query}/tag=${p2}`;
    console.log(query);
  } else {
    query = `${query}/page=${p2}`;
    console.log(query);
  }
}

logSearchUnion('melon', 'honey-dew');
logSearchUnion('oranges', 4);
