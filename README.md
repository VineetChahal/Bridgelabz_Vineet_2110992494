### Date:- 10 December 2024
### Topics covered: RAISING PULL REQUEST, DETACHED HEADS, GIT DIFF, GIT BRANCH, GIT CONFLICT, GIT STASH, DELETE BRANCHES

#### **Git Branch**
- **Branch Management Commands**:
  - `git branch`: Lists all local branches.
  - `git branch -r`: Lists all remote branches.
  - `git branch <branch_name>`: Creates a new branch.
  - `git branch -d <branch_name>`: Deletes a branch (if merged).
  - `git branch -D <branch_name>`: Force-deletes a branch.

#### **Git Diff**
- **What is Git Diff?**
  - Shows changes between commits, branches, or the working directory and index.
- **Common Commands**:
  - `git diff`: Shows changes in the working directory compared to the index.
  - `git diff <branch1> <branch2>`: Compares two branches.
  - `git diff --staged`: Displays changes staged for commit.
  - `git diff <commit_hash1> <commit_hash2>`: Compares two commits.

#### **Detached Heads**
- **What is a Detached HEAD?**
  - A detached HEAD occurs when you checkout a specific commit or tag instead of a branch.
- **Commands**:
  - `git checkout <commit_hash>`: Checks out a specific commit in a detached HEAD state.
  - `git switch --detach <branch_or_commit>`: Enters a detached HEAD state explicitly.
  - `git checkout <branch_name>`: Reattaches the HEAD to a branch.

#### **Git Conflict**
- **Resolving Merge Conflicts**:
  - Occurs when two branches modify the same part of a file.
- **Steps to Resolve**:
  1. Open conflicting files and resolve conflicts manually.
  2. Mark resolved files with `git add <file>`.
  3. Continue the merge or rebase:
     - `git merge --continue`
     - `git rebase --continue`
- **Commands**:
  - `git status`: Lists conflicting files.
  - `git mergetool`: Opens the configured merge tool.
  - `git log --merge`: Shows commits that caused conflicts.

#### **Git Stash**
- **What is Git Stash?**
  - Temporarily saves changes in the working directory.
- **Commands**:
  - `git stash`: Stashes changes.
  - `git stash list`: Lists all stashed changes.
  - `git stash pop`: Applies the last stash and removes it from the stash list.
  - `git stash apply`: Applies the last stash without removing it.
  - `git stash drop`: Deletes a specific stash.
  - `git stash clear`: Removes all stashes.

#### **Raising Pull Request**
- **Steps to Raise a Pull Request**:
  1. Push your branch to the remote repository using `git push origin <branch_name>`.
  2. Navigate to your repository on the hosting service (e.g., GitHub, GitLab).
  3. Click on "New Pull Request" and select the branch to merge into.
  4. Review changes and submit the pull request with a title and description.

#### **Delete Branches (Both Local and Remote)**
- **Deleting a Local Branch**:
  - `git branch -d <branch_name>`: Deletes a branch (if merged).
  - `git branch -D <branch_name>`: Force-deletes a branch.
- **Deleting a Remote Branch**:
  - `git push <remote_name> --delete <branch_name>`: Deletes a branch from the remote repository.
- **Clean Up References**:
  - `git fetch --prune`: Removes stale remote-tracking branches.


