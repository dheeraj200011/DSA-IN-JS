// All paths from source to target
// dfs + backtrack
// paths ke question me dfs use hoga

let graph = [[1, 2], [3], [3], []];

const allpathssourcetarget = (graph) => {
  let target = graph.length - 1;
  let result = [];

  let dfs = (curr, path) => {
    path.push(curr);
    
    if (curr === target) {
      result.push([...path]);
    } else {
      // traverse to neighbours
      for (nei of graph[curr]) {
        dfs(nei, path);
      }
    }
    path.pop();
  };
  dfs(0, []);
  return result;
};

console.log(allpathssourcetarget(graph));
