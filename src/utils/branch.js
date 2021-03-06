function createBranch(nodes, branchName) {
    const finalBranch = [];


    const findParents = (child) => {
        for (const key in nodes) {
            if(nodes[key].adjList.filter(c => c === child).length > 0) {
                findParents(key);
                finalBranch.push(nodes[key]);
            }
        }
    }

    findParents(branchName);

    branchName &&finalBranch.push(nodes[branchName]);
    return finalBranch;
}

function findBranchesInNodes(nodes) {
    const branches = [];

    for (const key in nodes) {
        if(key.toLowerCase().indexOf("branch") > 0) {
            branches.push({
                key: key,
                label: nodes[key].label
            });
        }
    }

    return branches;
}

export { createBranch, findBranchesInNodes };