// reconstruct-itinerary
// isme heirhoizer algo ka use hoga

const tickets = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
];

const findItinerary = (tickets) => {
  // careate adjacency list
  let graph = {};

  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  // sort the tickets
  for (let node in graph) {
    // object me in lagega
    graph[node].sort((a, b) => a - b);
  }

  // remove edges from the adj list ye important hai
  let path = [];

  let dfs = (curr) => {
    let destinations = graph[curr] || [];
    while (destinations.length) {
      let neighbour = graph[curr].shift();
      dfs(neighbour);
    }
    path.push(curr);
  };
  dfs("JFK");
  // isme ans reverse karne se hi aayega
  return path.reverse();
};

console.log(findItinerary(tickets));
